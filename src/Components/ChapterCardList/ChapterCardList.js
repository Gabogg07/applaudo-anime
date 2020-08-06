import React, {Component} from 'react';
import {View, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import ChapterCard from '../ChapterCard/ChapterCard';
import {connect} from 'react-redux';
import {fetchShowChapter} from '../../Store/APICalls';
import {cleanShowData} from '../../Store/actions';
import {fixUrl} from '../../utilities'

const {width} = Dimensions.get('screen');

class ChapterCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapters: [],
      listLength: 0,
      enabledLoadMore: false,
    };
  }

  componentDidMount() {
    const {showId} = this.props;
    this.props.fetchShowChapter(showId, null, this.props.showType);
  }

  onEndReached = () => {
    const {props, state} = this;
    if (
      !props.chapters.loading &&
      props.chapters.links.next &&
      state.enabledLoadMore
    ) {
      this.props.fetchShowChapter(
        props.showId,
        fixUrl(props.chapters.links.next),
        props.showType,
      );
    }
  };


  componentWillUnmount() {
    this.props.cleanShowData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.chapters.data &&
      nextProps.chapters.data.length !== prevState.listLength
    ) {
      return {
        chapters: nextProps.chapters.data,
        listLength: nextProps.chapters.data.length,
        enabledLoadMore: true,
      };
    }

    return null;
  }

  render() {
    const {state} = this;

    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state.chapters}
          renderItem={({item: data}) => {
            return <ChapterCard styles={{width: width / 4}} data={data} />;
          }}
          ListEmptyComponent={() => {
            return (
              <View
                style={{justifyContent: 'center', alignSelf: 'center', width}}>
                <ActivityIndicator size="large" color="white" />
              </View>
            );
          }}
          renderFooter={() => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 50,
                }}>
                <ActivityIndicator size="large" color="white" />
              </View>
            );
          }}
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  chapters: state.chapters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowChapter: (showId, url, showType) =>
    dispatch(fetchShowChapter(showId, url, showType)),
  cleanShowData: () => dispatch(cleanShowData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterCardList);
