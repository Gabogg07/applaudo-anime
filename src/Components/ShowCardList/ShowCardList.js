import React, {Component} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import ShowCard from '../ShowCard/ShowCard';
import {connect} from 'react-redux';
import {showListType} from '../../constants';
import {fixUrl} from '../../utilities'
import {fetchShowsList, searchShow} from '../../Store/APICalls';
const {width} = Dimensions.get('window');

class ShowCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listType: props.listType || showListType.ANIME,
    };
  }

  componentDidMount() {
    if (!this.props.isSearchResult) {
      this.props.fetchShowsList(this.state.listType);
    }
  }

  onSearchEndReached = () => {
    const {props, state} = this;
    let results = props.searchResults[state.listType];
    console.log('RESULT', props.searchResults[state.listType])
    if (!results.loading && results.links.next) {
      console.log('PAGINADO')
      this.props.searchShow(
        props.searchResults.query,
        state.listType,
        fixUrl(results.links.next),
      );
    }
  };

  onDefaultEndReached = () => {
    // const {props, state} = this;
    // if (
    //   !props.chapters.loading &&
    //   props.chapters.links.next &&
    // ) {
    //   this.props.fetchShowChapter(
    //     props.showId,
    //     this.fixUrl(props.chapters.links.next),
    //     props.showType,
    //   );
    // }
  };

  onEndReached = () => {
    console.log('ENDREACHED', this.props.isSearchResult)
    if (this.props.isSearchResult) {
      this.onSearchEndReached();
    } else {
      this.onDefaultEndReached();
    }
  };

  render() {
    const {props} = this;
    let showList;
    if (!props.isSearchResult) {
      showList = this.props.allShowsList[this.state.listType];
    } else {
      showList = this.props.searchResults[this.state.listType];
    }

    return (
      <View>
        <Text style={styles.title}>Query {this.props.searchResults.query}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={showList ? showList.data : []}
          onEndReachedThreshold={1}
          renderItem={({item: show}) => {
            return <ShowCard styles={{width: width / 4}} data={show} />;
          }}
          ListEmptyComponent={() => {
            if(showList && showList.error){
              return (
                <View>
                  <Text> There was an problem loading the data</Text>
                </View>
              )
            }
            return (
              <View style={[styles.outerSpinnerContainer, {width}]}>
                <View style={styles.innerSpinnerContainer}>
                  <ActivityIndicator size="large" color="white" />
                </View>
              </View>
            );
          }}
          ListFooterComponent={() => {
            if(showList && showList.loading){
              return (
                <View style={styles.footerSpinnerContainer}>
                  <ActivityIndicator size="large" color="white" />
                </View>
              );
            }
            return null

          }}
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  allShowsList: state.allShowsList,
  searchResults: state.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowsList: (showType) => dispatch(fetchShowsList(showType)),
  searchShow: (query, showType, url) => dispatch(searchShow(query, showType, url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowCardList);

const styles = StyleSheet.create({
  outerSpinnerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerSpinnerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width / 4,
    aspectRatio: 3 / 4,
    marginVertical: 5
  },
  footerSpinnerContainer:{
    justifyContent: 'center',
    alignSelf: 'center',
    height:'50%',
    paddingHorizontal:10
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
