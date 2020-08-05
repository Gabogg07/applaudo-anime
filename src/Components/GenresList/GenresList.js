import React, {Component} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchShowGenres, fetchGenreById} from '../../Store/APICalls';
import {cleanShowData} from '../../Store/actions';

const {width} = Dimensions.get('screen');

class CharacterCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genresList: [],
      requestGenres: false,
    };
  }

  componentDidMount() {
    const {showId} = this.props;
    this.props.fetchShowGenres(showId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.genres.list.length !== prevState.genresList.length) {
      return {
        genresList: nextProps.genres.list,
        requestGenres: true,
      };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.cleanShowData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.requestGenres && this.state.requestGenres) {
      this.fillGenresData(this.state.genresList);
    }
  }

  fillGenresData = (genresList) => {
    const {state, props} = this;
    (state.requestGenres = false), this.setState(state);
    genresList.forEach((genre) => {
      props.fetchGenreById(genre.links.self, genre.id);
    });
  };

  render() {
    const {props, state} = this;

    if (state.genresList.length === 0) {
      return (
        <View style={{justifyContent: 'center', alignSelf: 'center', width}}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }

    return <View>{props.genres.loading}</View>;
  }
}

const mapStateToProps = (state) => ({
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowGenres: (showId) => dispatch(fetchShowGenres(showId)),
  fetchGenreById: (url, genreId) => dispatch(fetchGenreById(url, genreId)),
  cleanShowData: () => dispatch(cleanShowData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardList);
