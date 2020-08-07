import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {searchShow} from '../../Store/APICalls';
import {connect} from 'react-redux';
import {showListType} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {cleanSearch, fillSearchQuery} from '../../Store/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  onChangeText = (text) => {
    this.setState({
      searchValue: text,
    });
  };

  onCancelSearch = (text) => {
    this.setState({
      searchValue: '',
    });
  };

  onSubmit = ({nativeEvent: {text, eventCount, target}}) => {
    this.props.cleanSearch();
    this.props.fillSearchQuery(text);
    this.setState({
      searchValue: text,
    });
    this.props.navigation.navigate('SearchResults');
    this.props.searchShow(text, showListType.ANIME);
    this.props.searchShow(text, showListType.MANGA);
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.iconContainer}>
          <Icon name="search-outline" size={28} color="white" />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
            value={this.state.searchValue}
            placeholder={this.props.searchResults.query || "Search"}
            placeholderTextColor="white"
            returnKeyType="search"
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableWithoutFeedback onPress={this.onCancelSearch}>
            <Icon name="close-outline" size={28} color="white" />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  searchShow: (query, showType) => dispatch(searchShow(query, showType)),
  fillSearchQuery: (query) => dispatch(fillSearchQuery(query)),
  cleanSearch: () => dispatch(cleanSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(function (props) {
  const navigation = useNavigation();

  return <SearchBar {...props} navigation={navigation} />;
});

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
