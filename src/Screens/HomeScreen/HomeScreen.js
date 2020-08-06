import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {loadShowsSuccess} from '../../Store/actions';
import ShowCardList from '../../Components/ShowCardList/ShowCardList';
import {showListType} from '../../constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTypeBasedTitles = (listType) => {
    const modified = {
      [showListType.TRENDING_ANIME]: 'Top 10 Trending Anime',
      [showListType.TRENDING_MANGA]: 'Top 10 Trending Manga',
    };

    return modified[listType] || listType;
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          {Object.values(showListType).map((listType) => {
            return (
              <View>
                <Text style={styles.title}>
                  {this.getTypeBasedTitles(listType)}
                </Text>
                <ShowCardList listType={listType} />
              </View>
            );
          })}
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
