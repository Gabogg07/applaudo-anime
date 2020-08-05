import React, {Component} from 'react';
import {View, FlatList, Dimensions, ActivityIndicator, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchShowCharacters, fetchCharacterById} from '../../Store/APICalls';
import {cleanShowData} from '../../Store/actions';
import CharacterCard from '../CharacterCard/CharacterCard';

const {width} = Dimensions.get('screen');

class CharacterCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [],
      listLength: 0,
      enabledLoadMore: false,
    };
  }

  componentDidMount() {
    const {showId} = this.props;
    this.props.fetchShowCharacters(showId);
  }

  onEndReached = () => {
    const {props, state} = this;
    if (
      !props.characters.loading &&
      props.characters.links.next &&
      state.enabledLoadMore
    ) {
      this.props.fetchShowCharacters(
        props.showId,
        this.fixUrl(props.characters.links.next),
      );
    }
  };

  fixUrl = (url) => {
    let url2 = url.split('%5D').join(']');
    let url3 = url2.split('%5B').join('[');
    return url3;
  };

  componentWillUnmount() {
    this.props.cleanShowData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.characters.list &&
      nextProps.characters.list.length !== prevState.listLength
    ) {
      return {
        charactersList: nextProps.characters.list,
        listLength: nextProps.characters.list.length,
        enabledLoadMore: true,
      };
    }

    return null;
  }

  render() {
    const {props, state} = this;

    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state.charactersList}
          renderItem={({item: data}) => {
            return <CharacterCard styles={{width: width / 4}} data={this.props.characters.data[data.id]} getCharacter={()=>this.props.fetchCharacterById(data.links.self, data.id)}/>;
          }}
          ListEmptyComponent={() => {
            return (
              <View
                style={{justifyContent: 'center', alignSelf: 'center', width}}>
                <ActivityIndicator size="large" color="white" />
              </View>
            );
          }}
          renderFooter={() => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 50,
                }}>
                <ActivityIndicator size="large" color="white" />
              </View>
            );
          }}
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowCharacters: (showId, url) => dispatch(fetchShowCharacters(showId, url)),
  fetchCharacterById: (url, characterId) => dispatch(fetchCharacterById(url, characterId)),
  cleanShowData: () => dispatch(cleanShowData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardList);
