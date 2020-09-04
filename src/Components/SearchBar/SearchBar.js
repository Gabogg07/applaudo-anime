import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {searchShow} from '../../Store/APICalls';
import {showListType} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {
  cleanSearch,
  fillSearchQuery,
  changeSearchLoadingState,
  loadSearchSuccess,
  loadSearchError,
} from '../../Store/actions';
import {ShowsContext} from '../../Store/ShowProvider';

/**
 * SearchBar component for anime and manga by receving input through textInput
 */

function SearchBar(props) {
  const [context, dispatch] = useContext(ShowsContext);
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = (text) => {
    setSearchValue(text);
  };

  const onCancelSearch = (text) => {
    setSearchValue('');
  };

  async function fetchSearch(text, showType) {
    dispatch(changeSearchLoadingState(showType));
    let {response, error} = await searchShow(text, showType);
    if (response) {
      dispatch(loadSearchSuccess(response, showType));
    } else {
      dispatch(loadSearchError(showType, error));
    }
  }

  const onSubmit = ({nativeEvent: {text, eventCount, target}}) => {
    dispatch(cleanSearch());
    dispatch(fillSearchQuery(text));
    setSearchValue(text);
    navigation.navigate('SearchResults');
    fetchSearch(text, showListType.ANIME);
    fetchSearch(text, showListType.MANGA);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.iconContainer}>
        <Icon name="search-outline" size={28} color="white" />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          value={searchValue}
          placeholder={context.searchResults.query || 'Search'}
          placeholderTextColor="white"
          returnKeyType="search"
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback onPress={onCancelSearch}>
          <Icon name="close-outline" size={28} color="white" />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  safeAreaView: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'black',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
    color: 'white',
  },
});
