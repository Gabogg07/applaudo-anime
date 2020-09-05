import React, {Component, useEffect, useContext} from 'react';
import {View, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import ChapterCard from '../ChapterCard/ChapterCard';
import {connect} from 'react-redux';
import {fetchShowChapter} from '../../Store/APICalls';
import {changeShowChaptersLoadingState, loadShowChaptersSuccess, loadShowChaptersError} from '../../Store/actions';
import {fixUrl} from '../../utilities';
import {ShowsContext} from '../../Store/ShowProvider';

const {width} = Dimensions.get('screen');

/**
 * Component for horizontal listing chapterCards taken from calling the chapters fetching api with the corresponding show id
 */
function ChapterCardList(props) {
  const [context, dispatch] = useContext(ShowsContext);

  async function fetchChapters(showId, url, showType) {
    dispatch(changeShowChaptersLoadingState());
    let {response, error} = await fetchShowChapter(showId, url, showType);
    if (response) {
      dispatch(loadShowChaptersSuccess(response));
    } else {
      dispatch(loadShowChaptersError(error));
    }
  }

  useEffect(() => {
    fetchChapters(props.showId, null, props.showType);
  },[]);

  const onEndReached = () => {
    const {chapters} = context;
    if (!chapters.loading && chapters.links.next) {
      fetchChapters(props.showId, fixUrl(chapters.links.next), props.showType);
    }
  };

  const {chapters} = context;
  console.log('CHAPTERS', chapters)

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={chapters.data}
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
        // onEndReached={onEndReached}
      />
    </View>
  );
}

export default ChapterCardList;

// const mapStateToProps = (state) => ({
//   chapters: state.chapters,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchShowChapter: (showId, url, showType) =>
//     dispatch(fetchShowChapter(showId, url, showType)),
//   cleanShowData: () => dispatch(cleanShowData()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ChapterCardList);
