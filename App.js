import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firebase from "firebase"; //firebase@5.0.3
require('firebase/firestore');
import LandingPage from "./src/landingPage";
import LogInForm from './src/LogInForm';
import { Header } from "native-base";
import RegistrationForm from "./src/RegistrationForm";
import RouterComponent from './src/router';
import Profile from "./src/profile";
import { Router } from 'react-native-router-flux';
//import { Header } from 'react-native-elements';


export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBG-8LQPWVwv398d1FrIxrgNqzqBHc4Sdo",
      authDomain: "mi-expediente.firebaseapp.com",
      databaseURL: "https://mi-expediente.firebaseio.com",
      projectId: "mi-expediente",
      storageBucket: "mi-expediente.appspot.com",
      messagingSenderId: "1031466900468"
    };
    firebase.initializeApp(config);

    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RouterComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    alignItems: 'center',
    flex: 1, 
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});