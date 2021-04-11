import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppRegistry, ScrollView, Image, text} from 'react-native';
import Card  from './components/Card';

const customData = require('./quotes.json');
var quoteArray = [];
for (var i = 0; i < customData.Quotes.length; i++)
{
  quoteArray.push(customData.Quotes[i]);
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Card />
    </View>
  );
} 

// <Button style={styles.button} onPress={<Card />} title="Refresh" color="#841584"/>
//<Button style={styles.button} onPress={<onClickButton1/>} title="Refresh" color="#841584"/>
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%', 
  } 
});
