import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import {loadShowsSuccess} from '../../Store/actions'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ShowCardList from '../../Components/ShowCardList/ShowCardList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}>
          <Text style={styles.title}> Anime </Text>
          <ShowCardList />
          <TouchableWithoutFeedback onPress={()=>{ this.props.loadShows()}}>
            <Text style={styles.title}>redux test call</Text>
          </TouchableWithoutFeedback>

          {/* <Text> Anime </Text>
          <HorizontalList/>

          <Text> Anime </Text>
          <HorizontalList/>
          
          <Text> Anime </Text>
          <HorizontalList/>
          
          <Text> Anime </Text>
          <HorizontalList/>

          <Text> Anime </Text>
          <HorizontalList/> */}
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
    flex:1,
  },
  scrollView: {
    margin: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});