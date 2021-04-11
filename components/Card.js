import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


class Card extends Component {
//constructor passes in info into Card
//create cards from app.js with new keyword
    
    Constructor(props){
        super(props)
    }
    
    state = {
        text: 'Click Refresh for a New Idea!'
    }
    
    onClickButton1 = () => {
        this.setState({
          text: 'johann is a fat boy'
        });
    }

    render(){ 
        return (
            <View style={styles.placeholder}>
                <View style={styles.content}>
                    <Text>{this.state.text}</Text>
                </View>
                <Button buttonstyle={styles.button} onPress={this.onClickButton1} title="Refresh" color="#841584"/>
            </View>
    )}
}

const styles = StyleSheet.create({

    placeholder: {
        backgroundColor: 'white',
        width: '95%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '90%',
        height: '80%',
        marginTop: '10%',
        marginBottom: '5%',
      },
      
    button: {
        marginBottom: '5%',
    }, 
});

export default Card; 