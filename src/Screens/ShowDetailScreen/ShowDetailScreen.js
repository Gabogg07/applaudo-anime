import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {fetchShowDetail, fetchShowGenres} from '../../Store/APICalls';
import {connect} from 'react-redux';
import ChapterCardList from '../../Components/ChapterCardList/ChapterCardList';
import CharacterList from '../../Components/CharacterCardList/CharacterCardList';
import YoutubeButton from '../../Components/YoutubeButton/YoutubeButton';
import ShareButton from '../../Components/ShareButton/ShareButton'
import {showListType} from '../../constants';

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

/**
 * Screen for displaying the show detail information fetched by an API call with the corresponding showId
 */
class ShowDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: this.props.route.params.showId,
      showType: this.props.route.params.showType,
    };
  }

  componentDidMount() {
    this.props.fetchShowDetail(this.state.showId, this.state.showType);
    this.props.fetchShowGenres(this.state.showId, this.state.showType);
  }

  /**
   * Given a title and a value, returns a view with the first one as a bigger font text and the second one following with smaller fontSize
   * @param {*} title
   * @param {*} value
   */
  renderTitleValuePair = (title, value) => (
    <View style={styles.titlesContainer} key={title}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );

  /**
   * Given a date string in the YYYY-MM-DD format, returns a string with a DD-MM-YYYY format
   * @param {*} date
   */
  formatDate = (date) => {
    if (!date) {
      return 'Today';
    }
    return date.slice(8, 11) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);
  };

  /**
   * Function used to process the show detail information and store each title with the desired value to be shown
   */
  getTitleValuePairs = () => {
    const {attributes} = this.props.show;
    let showDetailType = attributes.showType || attributes.serialization;
    let episodesCount = attributes.episodeCount || attributes.chapterCount || 1;
    let episodeLength = attributes.episodeLength || 'Unkown';
    let date = this.formatDate(attributes.startDate);
    if (attributes.endDate && attributes.endDate !== attributes.startDate) {
      date = date + ' Till ' + this.formatDate(attributes.endDate);
    }
    return {
      'Main Title': attributes.titles.en || attributes.titles.en_jp,
      'Canonical Title': attributes.canonicalTitle,
      Type: `${showDetailType}, ${episodesCount} ${
        episodesCount === 1 ? 'episode' : 'episodes'
      }`,
      Year: `${date}`,
      'Average Rating': attributes.averageRating || 'No rating found',
      'Episode Duration': `${episodeLength} mins`,
      'Age Rating': attributes.ageRating,
      'Airing Status': attributes.status,
      Synopsis: attributes.synopsis,
    };
  };

  /**
   * Uses the genres object to check if there was any error and display it. If no error was found, the genres are displayed joined with a spacing
   */
  listGenres = (genres) => {
    if (genres.error) {
      return 'Error loading genres';
    }

    let genresArray = genres.data.map((genre) => genre.attributes.name);
    return genresArray.join(' ');
  };

  render() {
    const {show} = this.props;

    if (show.loading || !show.id) {
      return (
        <View style={styles.messageView}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.title}>Loading</Text>
        </View>
      );
    }

    if (show.error) {
      return (
        <View style={styles.messageView}>
          <Text style={styles.title}>
            Sorry there was an error loading the data
          </Text>
          <Text style={styles.title}>Please go back and reload</Text>
        </View>
      );
    }

    const titles = this.getTitleValuePairs();
    const episodeCount =
      show.attributes.episodeCount || show.attributes.chapterCount;

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
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
            {/** Genre list display */}
            {this.renderTitleValuePair(
              titlesList[4],
              this.listGenres(this.props.genres),
            )}
            <View style={styles.gridContainer}>
              <View style={styles.gridItem}>
                {this.renderTitleValuePair(
                  titlesList[5],
                  titles[titlesList[5]],
                )}
                {this.renderTitleValuePair(
                  titlesList[6],
                  titles[titlesList[6]],
                )}
              </View>
              <View style={styles.gridItem}>
                {this.renderTitleValuePair(
                  titlesList[7],
                  titles[titlesList[7]],
                )}
                {this.renderTitleValuePair(
                  titlesList[8],
                  titles[titlesList[8]],
                )}
              </View>
            </View>
          </View>
          {this.renderTitleValuePair(titlesList[9], titles[titlesList[9]])}

          {show.attributes.youtubeVideoId !== '' && (
            <YoutubeButton youtubeId={show.attributes.youtubeVideoId} />
          )}
            <ShareButton title={titles[titlesList[0]]} />

          {/** Episodes segment */}
          {episodeCount > 2 && this.state.showType === showListType.ANIME && (
            <View style={styles.chapterList}>
              <Text style={styles.title}>Episodes</Text>
              <ChapterCardList
                showId={this.props.show.id}
                showType={this.state.showType}
              />
            </View>
          )}

          {/** Characters segment */}
          <View style={styles.chapterList}>
            <Text style={styles.title}>Characters</Text>
            <CharacterList
              showId={this.props.show.id}
              showType={this.state.showType}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  show: state.show,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowDetail: (showId, showType) =>
    dispatch(fetchShowDetail(showId, showType)),
  fetchShowGenres: (showId, showType) =>
    dispatch(fetchShowGenres(showId, showType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);

const styles = StyleSheet.create({
  messageView: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  safeArea: {
    backgroundColor: 'black',
  },
  scrollView: {
    margin: 15,
  },
  showImage: {
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
    marginVertical: 15,
  },
  gridContainer: {
    flexDirection: 'row',
  },
  gridItem: {
    flex: 1,
  },
  chapterList: {
    marginVertical: 5,
  },
});
