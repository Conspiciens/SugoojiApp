import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';


const Card = (props) => {
//constructor passes in info into Card
//create cards from app.js with new keyword
    return (
        <View style={styles.content}>
            <Text style={styles.text_bold}>"{props.text}"</Text>
            <Text style={styles.authorText}>-{props.author}</Text>
            <Image style = {{width: 150, height: 150}} 
            source = {{uri:props.imageUri}}
            resizeMode={'cover'}/>
        </View>
    )
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
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '90%',
        height: '70%',
        marginTop: '10%',
        marginBottom: '5%',
        padding: '10%',
        overflow: 'hidden',
        borderRadius: 40,
      },
    
      text_bold: {
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 15,
      },

      authorText: {
          fontSize: 15,
          marginBottom: 15,
      },
});

export default Card; 