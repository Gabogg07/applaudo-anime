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
import {useFetchShowsList, searchShow} from '../../Store/APICalls';
import {ShowsContext} from '../../Store/ShowProvider';

const {width} = Dimensions.get('window');

function ShowCardList(props) {
  const [context, dispatch] = useContext(ShowsContext);
  const [listType, setListType] = useState(
    props.listType || showListType.ANIME,
  );

  // console.log(context.allShowsList[])

  if (!props.isSearchResult) {
    useFetchShowsList(listType);
  }

  // console.log(context.allShowsList)
  const {allShowsList, searchResults} = context;

    let showList;
    if (!props.isSearchResult) {
      showList = allShowsList[listType];
      console.log(showList)
    } else {
      showList = searchResults[listType];
    }

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={showList ? showList.data : []}
        // onEndReachedThreshold={1}
        renderItem={({item: show}) => {
          return <ShowCard styles={{width: width / 4}} data={show} />;
        }}
        // ListEmptyComponent={() => this.renderEmptyListComponent(showList)}
        // ListFooterComponent={() => {
        //   if (showList && showList.loading && showList.data.length > 0) {
        //     return (
        //       <View style={styles.footerSpinnerContainer}>
        //         <ActivityIndicator size="large" color="white" />
        //       </View>
        //     );
        //   }
        //   return null;
        // }}
        // onEndReached={this.onEndReached}
      />
    </View>
  );
}

export default ShowCardList;

// /**
//  * Component for horizontal listing showCards, it can be used to display search results using the isSearchResult props or to display list of shows
//  * by only giving the type of list (must be one of the listen on showListType)
//  */
// class ShowCardList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listType: props.listType || showListType.ANIME, //If no type provided, it defaults to anime
//     };
//   }

//   componentDidMount() {
//     const {state, props} = this;
//     if (!props.isSearchResult) {
//       props.fetchShowsList(state.listType);
//     }
//   }

//   /**
//    * EndReached function used for pagination on displaying search results
//    */
//   onSearchEndReached = () => {
//     const {props, state} = this;
//     let results = props.searchResults[state.listType];
//     if (!results.loading && results.links.next) {
//       props.searchShow(
//         props.searchResults.query,
//         state.listType,
//         fixUrl(results.links.next),
//       );
//     }
//   };

//   /**
//    * EndReached function used for pagination on normal show list
//    */
//   onDefaultEndReached = () => {
//     const {props, state} = this;
//     let results = props.allShowsList[state.listType];
//     if (!results.loading && results.links.next) {
//       props.fetchShowsList(state.listType, fixUrl(results.links.next));
//     }
//   };

//   /**
//    * Wrapper function for endReached
//    */
//   onEndReached = () => {
//     if (this.props.isSearchResult) {
//       this.onSearchEndReached();
//     } else {
//       if (
//         this.state.listType === showListType.TRENDING_ANIME ||
//         this.state.listType === showListType.TRENDING_MANGA
//       ) {
//         return;
//       }
//       this.onDefaultEndReached();
//     }
//   };

//   renderEmptyListComponent = (showList) => {
//     if (!showList || (showList && showList.loading)) {
//       return (
//         <View style={[styles.outerSpinnerContainer, {width}]}>
//           <View style={styles.innerSpinnerContainer}>
//             <ActivityIndicator size="large" color="white" />
//           </View>
//         </View>
//       );
//     }
//     if (showList && showList.error) {
//       return (
//         <View style={styles.errorContainer}>
//           <Text style={styles.title}>
//             There was an problem loading the data
//           </Text>
//         </View>
//       );
//     }

//     if (showList && !showList.loading) {
//       return (
//         <View style={styles.errorContainer}>
//           <Text style={styles.title}> No shows were found for your search</Text>
//         </View>
//       );
//     }

//     return null;
//   };

//   render() {
//     const {props} = this;
//     let showList;
//     if (!props.isSearchResult) {
//       showList = this.props.allShowsList[this.state.listType];
//     } else {
//       showList = this.props.searchResults[this.state.listType];
//     }

//     return (
//       <View>
//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={showList ? showList.data : []}
//           onEndReachedThreshold={1}
//           renderItem={({item: show}) => {
//             return <ShowCard styles={{width: width / 4}} data={show} />;
//           }}
//           ListEmptyComponent={() => this.renderEmptyListComponent(showList)}
//           ListFooterComponent={() => {
//             if (showList && showList.loading && showList.data.length > 0) {
//               return (
//                 <View style={styles.footerSpinnerContainer}>
//                   <ActivityIndicator size="large" color="white" />
//                 </View>
//               );
//             }
//             return null;
//           }}
//           onEndReached={this.onEndReached}
//         />
//       </View>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   allShowsList: state.allShowsList,
//   searchResults: state.searchResults,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchShowsList: (showType, url) => dispatch(fetchShowsList(showType, url)),
//   searchShow: (query, showType, url) =>
//     dispatch(searchShow(query, showType, url)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ShowCardList);

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
