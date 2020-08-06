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
    this.state={
      showId: this.props.route.params.showId,
      showType: this.props.route.params.showType
    }
  }

  componentDidMount() {
    this.props.fetchShowDetail(this.state.showId, this.state.showType);
    this.props.fetchShowGenres(this.state.showId, this.state.showType);
  }

  renderTitleValuePair = (title, value) => (
    <View style={styles.titlesContainer} key={title}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );

  formatDate = (date) => {
    console.log(date)
    if(!date) return 'Today'
    return date.slice(8, 11) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);
  };

  getTitleValuePairs = () => {
    const {attributes} = this.props.show;
    return {
      'Main Title': attributes.titles.en || attributes.titles.en_jp,
      'Canonical Title': attributes.canonicalTitle,
      Type: `${attributes.showType}, ${attributes.episodeCount} ${
        attributes.episodeCount === 1 ? 'episode' : 'episodes'
      }`,
      Year: `${this.formatDate(attributes.startDate)} till ${this.formatDate(
        attributes.endDate,
      )}`,
      'Average Rating': attributes.averageRating,
      'Episode Duration': `${attributes.episodeLength} mins`,
      'Age Rating': attributes.ageRating,
      'Airing Status': attributes.status,
      Synopsis: attributes.synopsis,
    };
  };

  listGenres = () => {
    if (this.props.genres.error) {
      return 'Error loading genres';
    }

    console.log('INTENTANDO CON ', this.props.genres.data)
    let genresArray = this.props.genres.data.map(
      (genre) => genre.attributes.name,
    );
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
            {this.renderTitleValuePair(titlesList[4], this.listGenres())}

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

          {/** Episodes segment */}
          {show.attributes.episodeCount > 2 && (
            <View style={styles.chapterList}>
              <Text style={styles.title}>Episodes</Text>
              <ChapterCardList showId={this.props.show.id} showType={this.state.showType}/>
            </View>
          )}

          {/** Characters segment */}
          <View style={styles.chapterList}>
            <Text style={styles.title}>Characters</Text>
            <CharacterList showId={this.props.show.id} showType={this.state.showType}/>
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
  fetchShowDetail: (showId, showType) => dispatch(fetchShowDetail(showId, showType)),
  fetchShowGenres: (showId, showType) => dispatch(fetchShowGenres(showId, showType)),
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
