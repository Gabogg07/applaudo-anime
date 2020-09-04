import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ShowCardList from '../../Components/ShowCardList/ShowCardList';
import {showListType} from '../../constants';

/**
 * Screen for showing search results for manga and anime types.
 */
function SearchResults(props){
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}> Search Results</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.title}>{showListType.ANIME}</Text>
          <ShowCardList listType={showListType.ANIME} isSearchResult />
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.title}>{showListType.MANGA}</Text>
          <ShowCardList listType={showListType.MANGA} isSearchResult />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchResults;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    flex: 1,
  },
  scrollView: {},
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  resultContainer: {
    marginVertical: 10,
  },
});
