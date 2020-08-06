import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import {loadShowsSuccess} from '../../Store/actions'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ShowCardList from '../../Components/ShowCardList/ShowCardList';
import {showListType} from '../../constants'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getTypeBasedTitles = (listType) => {
    const modified = {
      [showListType.TRENDING_ANIME]: 'Top 10 Trending Anime',
      [showListType.TRENDING_MANGA]: 'Top 10 Trending Manga'
    }

    return modified[listType] || listType
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}>
          <Text style={styles.title}>{this.getTypeBasedTitles(showListType.ANIME)} </Text>
          <ShowCardList listType={showListType.TRENDING_MANGA}/>
          

          {/* <Text> Anime </Text>
          <HorizontalList/>

          <Text> Anime </Text>
          <HorizontalList/>
          
          <Text> Anime </Text>
          <HorizontalList/>
          
          <Text> Anime </Text>
          <HorizontalList/>

          <Text> Anime </Text>
          <HorizontalList/> */}
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const mapStateToProps = (state) => ({
  shows: state.shows,
});

const mapDispatchToProps = (dispatch) => ({
  loadShows: () => dispatch(loadShowsSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    flex:1,
  },
  scrollView: {
    margin: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform:'capitalize'
  },

});