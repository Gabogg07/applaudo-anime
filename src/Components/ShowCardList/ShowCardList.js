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
import {fixUrl} from '../../utilities';
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
    const {state, props} = this;
    if (!props.isSearchResult) {
      props.fetchShowsList(state.listType);
    }
  }

  onSearchEndReached = () => {
    const {props, state} = this;
    let results = props.searchResults[state.listType];
    if (!results.loading && results.links.next) {
      props.searchShow(
        props.searchResults.query,
        state.listType,
        fixUrl(results.links.next),
      );
    }
  };

  onDefaultEndReached = () => {
    const {props, state} = this;
    let results = props.allShowsList[state.listType];
    if (!results.loading && results.links.next) {
      props.fetchShowsList(state.listType, fixUrl(results.links.next));
    }
  };

  onEndReached = () => {
    if (this.props.isSearchResult) {
      this.onSearchEndReached();
    } else {
      if (
        this.state.listType === showListType.TRENDING_ANIME ||
        this.state.listType === showListType.TRENDING_MANGA
      ) {
        return;
      }
      this.onDefaultEndReached();
    }
  };

  renderEmptyListComponent = (showList) => {
    if (!showList || (showList && showList.loading)) {
      return (
        <View style={[styles.outerSpinnerContainer, {width}]}>
          <View style={styles.innerSpinnerContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        </View>
      );
    }
    if (showList && showList.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.title}>
            There was an problem loading the data
          </Text>
        </View>
      );
    }

    if (showList && !showList.loading) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.title}> No shows were found for your search</Text>
        </View>
      );
    }

    return null;
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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={showList ? showList.data : []}
          onEndReachedThreshold={1}
          renderItem={({item: show}) => {
            return <ShowCard styles={{width: width / 4}} data={show} />;
          }}
          ListEmptyComponent={() => this.renderEmptyListComponent(showList)}
          ListFooterComponent={() => {
            if (showList && showList.loading && showList.data.length > 0) {
              return (
                <View style={styles.footerSpinnerContainer}>
                  <ActivityIndicator size="large" color="white" />
                </View>
              );
            }
            return null;
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
  fetchShowsList: (showType, url) => dispatch(fetchShowsList(showType, url)),
  searchShow: (query, showType, url) =>
    dispatch(searchShow(query, showType, url)),
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
  },
  footerSpinnerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    width: width / 4,
    aspectRatio: 3 / 4,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  errorContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    flex: 1,
  },
});
