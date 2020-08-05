import React, {Component} from 'react';
import {View, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import ChapterCard from '../ChapterCard/ChapterCard';
import {connect} from 'react-redux';
import {fetchShowChapter} from '../../Store/APICalls';

const {width} = Dimensions.get('screen');

class ChapterCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {showId} = this.props;
    this.props.fetchShowChapter(showId);
  }

  // onEndReached = () => {
  //   const {props} = this;
  //   if (!props.chapters.loading && !props.chapters.endReached) {
  //     this.props.fetchShowChapter(props.showId, this.getNextOffset(props.chapters.links.next));
  //   }
  // };

  // getNextOffset = (url) => {
  //   return url.split('offset%5D=')[1]
  // }

  // componentDidUpdate() {
  //   console.log('UPDATE', Object.keys(this.props.chapters.links.next));
  // }

  render() {
    const {props} = this;
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={props.chapters.data}
          renderItem={({item: data}) => {
            return <ChapterCard styles={{width: width / 4}} data={data} />;
          }}
          // ListEmptyComponent={() => {
          //   return (
          //     <View
          //       style={{justifyContent: 'center', alignSelf: 'center', width}}>
          //       <ActivityIndicator size="large" color="white" />
          //     </View>
          //   );
          // }}
          // onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  chapters: state.chapters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowChapter: (showId, skip) => dispatch(fetchShowChapter(showId, skip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterCardList);
