import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

class ShowCard extends Component {
    constructor(props) {
        super(props);
            this.state = {
        };
    }

    render() {  
        const { props } = this
        return (
            <View style={{margin:5, borderColor:'black',
            borderWidth:2,}}>
                <Image 
                    style={[styles.cardContainer, this.props.styles]}
                    source={{uri:this.props.show.attributes.posterImage.medium}}
                />
                <View style={[this.props.styles, {backgroundColor:'gray', flex:1, justifyContent:'center', alignItems:'center'}]}>
                    <Text style={{ellipsizeMode:'tail'}}>{this.props.show.attributes.titles.en || this.props.show.attributes.titles.en_jp}</Text>
                </View>
            </View>

       
        );
  }
}

export default ShowCard;

const styles = StyleSheet.create({
    cardContainer:{

        aspectRatio:3/4
    }
})

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image} from 'react-native';

// class ShowCard extends Component {
//     constructor(props) {
//         super(props);
//             this.state = {
//         };
//     }

//     render() {  
//         const { props } = this
//         return (
//             <Image 
//                 style={[styles.cardContainer, this.props.styles]}
//                 source={uri:this.props.show.attributes.posterImage.medium}
//             >
//                 <Text> ShowCard </Text>
//             </View>
//         );
//   }
// }

// export default ShowCard;

// const styles = StyleSheet.create({
//     cardContainer:{
//         flex:1,
//         borderColor:'black',
//         borderWidth:2,
//         margin:5,
//         aspectRatio:3/4
//     }
// })
