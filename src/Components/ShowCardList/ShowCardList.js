import React, {useContext, useEffect, useState} from 'react';
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
import {searchShow, fetchShowsList} from '../../Store/APICalls';
import {ShowsContext} from '../../Store/ShowProvider';
import {
  changeShowsLoadingState,
  loadShowsSuccess,
  loadShowsError,
  loadSearchSuccess,
  loadSearchError,
  changeSearchLoadingState,
} from '../../Store/actions';

const {width} = Dimensions.get('window');

// /**
//  * Component for horizontal listing showCards, it can be used to display search results using the isSearchResult props or to display list of shows
//  * by only giving the type of list (must be one of the listen on showListType)
//  */
function ShowCardList(props) {
  const [context, dispatch] = useContext(ShowsContext);
  const [listType, setListType] = useState(
    props.listType || showListType.ANIME,
  );

  async function fetchData(url) {
    if (!props.isSearchResult) {
      dispatch(changeShowsLoadingState(listType));
      let {response, error} = await fetchShowsList(listType, url);
      if (response) {
        dispatch(loadShowsSuccess(response, listType));
      } else {
        dispatch(loadShowsError(error));
      }
    }
  }

  async function fetchSearch(results) {
    dispatch(changeSearchLoadingState(listType));
    let {response, error} = await searchShow(
      searchResults.query,
      listType,
      fixUrl(results.links.next),
    );
    if (response) {
      dispatch(loadSearchSuccess(response, listType));
    } else {
      dispatch(loadSearchError(listType, error));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const {allShowsList, searchResults} = context;

  /**
   * EndReached function used for pagination on displaying search results
   */
  const onSearchEndReached = () => {
    let results = searchResults[listType];
    if (!results.loading && results.links.next) {
      fetchSearch(results);
    }
  };

  /**
   * EndReached function used for pagination on normal show list
   */
  const onDefaultEndReached = () => {
    let results = allShowsList[listType];
    if (!results.loading && results.links.next) {
      fetchData(fixUrl(results.links.next));
    }
  };

  /**
   * Wrapper function for endReached
   */
  const onEndReached = () => {
    if (props.isSearchResult) {
      onSearchEndReached();
    } else {
      if (
        listType === showListType.TRENDING_ANIME ||
        listType === showListType.TRENDING_MANGA
      ) {
        return;
      }
      onDefaultEndReached();
    }
  };

  const renderEmptyListComponent = (showList) => {
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

  let showList;
  if (!props.isSearchResult) {
    showList = allShowsList[listType];
  } else {
    showList = searchResults[listType];
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
        ListEmptyComponent={() => renderEmptyListComponent(showList)}
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
        onEndReached={onEndReached}
      />
    </View>
  );
}

export default ShowCardList;

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
