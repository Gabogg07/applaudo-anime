import React, {Component} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {searchShow} from '../../Store/APICalls'
import {connect} from 'react-redux';
import {showListType} from '../../constants';


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
    this.setState({
      searchValue: text,
    });
    this.props.searchShow(text, showListType.ANIME)
    this.props.searchShow(text, showListType.MANGA)
  };

  render() {
    return (
      <SafeAreaView
        style={{flexDirection: 'row', height: 70, backgroundColor: 'black'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="search-outline" size={28} color="white" />
        </View>
        <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={{width: '100%', height: '100%', color: 'white'}}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
            value={this.state.searchValue}
            placeholder="Search"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={this.onCancelSearch}>
            <Icon name="close-outline" size={28} color="white" />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => ({
  searchResult: state.searchResult,
});

const mapDispatchToProps = (dispatch) => ({
  searchShow: (query, showType) => dispatch(searchShow(query, showType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);