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
            <Image 
                style={[styles.cardContainer, this.props.styles]}
                source={{uri:this.props.show.attributes.posterImage.medium}}
            />
       
        );
  }
}

export default ShowCard;

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        borderColor:'black',
        borderWidth:2,
        margin:5,
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
