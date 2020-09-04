import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ShowCardList from '../../Components/ShowCardList/ShowCardList';
import {showListType} from '../../constants';

// /**
//  * Home screen for the applaudo app. Lists all the shows for each type of list inside the showListType constants
//  */
function Home() {
  function getTypeBasedTitles(listType) {
    const modified = {
      [showListType.TRENDING_ANIME]: 'Top 10 Trending Anime',
      [showListType.TRENDING_MANGA]: 'Top 10 Trending Manga',
    };
    return modified[listType] || listType;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {Object.values(showListType).map((listType) => {
          return (
            <View key={listType}>
              <Text style={styles.title}>{getTypeBasedTitles(listType)}</Text>
              <ShowCardList listType={listType} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    flex: 1,
  },
  scrollView: {
    margin: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
