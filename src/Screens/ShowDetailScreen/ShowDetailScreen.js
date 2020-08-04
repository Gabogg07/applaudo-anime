import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet} from 'react-native';

const titlesList = [
  'Main Title',
  'Canonical Title',
  'Type',
  'Year',
  'Genres',
  'Average Rating',
  'Age Rating',
  'Episode Duration',
  'Airing Status',
  'Synopsis',
];

class ShowDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderTitleValuePair = (title, value) => (
    <View style={styles.titlesContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );

  formatDate = (date) => {
    return date.slice(8, 11) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);
  };

  getTitleValuePairs = () => {
    const {attributes} = this.props.route.params.show;
    return {
      'Main Title': (attributes.titles.en || attributes.titles.en_jp),
      'Canonical Title': attributes.canonicalTitle,
      'Type': `${attributes.showType}, ${attributes.episodeCount} ${attributes.episodeCount == 1 ? 'episode' : 'episodes'}`,
      'Year': `${this.formatDate(attributes.startDate)} till ${this.formatDate(attributes.endDate)}`,
      'Genres': 'Lista generos',
      'Average Rating': attributes.averageRating,
      'Episode Duration': `${attributes.episodeLength} mins`,
      'Age Rating': attributes.ageRating,
      'Airing Status': attributes.status,
      'Synopsis': attributes.synopsis
    };
  };

  render() {
    const {show} = this.props.route.params;
    const titles = this.getTitleValuePairs();

    if (!show) {
      return (
        <View style={styles.titlesContainer}>
          <Text> No show was provided</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          {/**  Upper segment for titles and show image*/}
          <View style={styles.upperContainer}>
            <Image
              style={styles.showImage}
              source={{uri: show.attributes.posterImage.medium}}
            />
            <View style={styles.textHeaderContainer}>
              {/** render first 4 titles that go beside the show image */}
              {titlesList
                .slice(0, 4)
                .map((title) =>
                  this.renderTitleValuePair(title, titles[title]),
                )}
            </View>
          </View>
          <View style={styles.middleContainer}>
            {this.renderTitleValuePair(titlesList[4], titles[titlesList[4]])}
            <View style={styles.gridContainer}>
              <View style={styles.gridItem}>
                {this.renderTitleValuePair(titlesList[5], titles[titlesList[5]])}
                {this.renderTitleValuePair(titlesList[6], titles[titlesList[6]])}
              </View>
              <View style={styles.gridItem}>
                {this.renderTitleValuePair(titlesList[7], titles[titlesList[7]])}
                {this.renderTitleValuePair(titlesList[8], titles[titlesList[8]])}
              </View>
            </View>
          </View>
          {this.renderTitleValuePair(titlesList[9], titles[titlesList[9]])}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ShowDetail;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
  },
  scrollView: {
    margin: 15,
  },
  showImage: {
    aspectRatio: 3 / 4,
    flex: 3,
  },
  upperContainer: {
    flexDirection: 'row',
  },
  textHeaderContainer: {
    flex: 4,
    paddingLeft: 20,
    justifyContent: 'space-around',
  },
  titlesContainer: {
    marginVertical: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    textTransform: 'capitalize',
  },
  middleContainer: {
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
  },
  gridItem: {
    flex: 1,
  },
});
