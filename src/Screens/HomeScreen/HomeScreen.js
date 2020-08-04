import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HorizontalList from '../../Components/HorizontalList/HorizontalList'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <Text> Anime </Text>
        <HorizontalList/>
        <Text> Anime </Text>

        <HorizontalList/>
        <Text> Anime </Text>

        <HorizontalList/>
      </ScrollView>
    );
  }
}

export default Home;
