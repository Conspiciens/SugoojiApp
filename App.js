import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { AppRegistry, ScrollView, Image, text, backgroundImage} from 'react-native';
import Card  from './components/Card';

const customData = require('./quotes.json');
var quoteArray = [];
for (var i = 0; i < customData.Quotes.length; i++)
{
  quoteArray.push(customData.Quotes[i]);
}

var curQuote;
var curAuthor;
var curPicture;

export default function App() {
  const [value, setValue] = useState();

  const onClickButton1 = () => {
    let randIndex = Math.floor(Math.random() * quoteArray.length);
    curAuthor = quoteArray[randIndex].Author;
    curPicture = quoteArray[randIndex].Picture;
    curQuote = quoteArray[randIndex].Quote;
    console.log(curAuthor);
    setValue(curQuote);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card text={curQuote} author={curAuthor} imageUri={curPicture}/>
      <Button buttonstyle={styles.button} onPress={() => onClickButton1()} title="Refresh"/>
    </View>
  );
} 

// <Button style={styles.button} onPress={<Card />} title="Refresh" color="#000000"/>
//<Button style={styles.button} onPress={<onClickButton1/>} title="Refresh" color="#000000"/>
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '96%', 
  },
  button: {
    marginBottom: '5%',
    color: 'white',
    backgroundColor: 'black',
}, 
});
