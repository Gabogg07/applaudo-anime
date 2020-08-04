import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';

class ShowCard extends Component {
    constructor(props) {
        super(props);
            this.state = {
        };
    }

    render() {  
        const {props} = this;
        const { show, navigation } = props;
        return (
            <TouchableWithoutFeedback
                onPress={()=>navigation.navigate('ShowDetail')}
            >

                <View style={{margin:5, borderColor:'black',
                borderWidth:2,}}>
                    <Image 
                        style={[styles.cardContainer, props.styles]}
                        source={{uri:show.attributes.posterImage.medium}}
                    />
                    <View style={[props.styles, {backgroundColor:'gray', flex:1, justifyContent:'center', alignItems:'center'}]}>
                        <Text style={{ellipsizeMode:'tail'}}>{show.attributes.titles.en || show.attributes.titles.en_jp}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>


       
        );
  }
}

export default function(props) {
    const navigation = useNavigation();
  
    return <ShowCard {...props} navigation={navigation} />;
  }

const styles = StyleSheet.create({
    cardContainer:{
        aspectRatio:3/4
    }
})

