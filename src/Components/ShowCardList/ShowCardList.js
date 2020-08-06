import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import ShowCard from '../ShowCard/ShowCard';
import {connect} from 'react-redux';
import {showListType} from '../../constants';
import {fetchShowsList} from '../../Store/APICalls';
const {width} = Dimensions.get('window');

class ShowCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listType: props.listType || showListType.ANIME,
    };
  }

  componentDidMount() {
    this.props.fetchShowsList(this.state.listType);
  }

  render() {
    const showList = this.props.allShowsList[this.state.listType];

    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={showList ? showList.data : []}
          renderItem={({item: show}) => {
            return <ShowCard styles={{width: width / 4}} data={show}/>;
          }}
          ListEmptyComponent={() => {
            return (
              <View style={[styles.outerSpinnerContainer, {width}]}>
                <View style={styles.innerSpinnerContainer}>
                  <ActivityIndicator size="large" color="white" />
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  allShowsList: state.allShowsList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowsList: (showType) => dispatch(fetchShowsList(showType)),
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
});
