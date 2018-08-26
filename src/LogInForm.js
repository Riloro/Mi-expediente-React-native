import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, CardSection, MyButton, Sppiner } from './common';
import { Actions } from 'react-native-router-flux';
import TextField from "./TextField";
import firebase from "firebase";
require('firebase/firestore');
import { Button } from 'native-base';

class LogInForm extends Component {

    state = { email: '', pass: '', error: '', spinner: false }
    user = null;
   

    showSppiner() {
        
        if (this.state.spinner) {
            return <Sppiner color='#00b0ff' />
        } else {
            return <MyButton text='Log in' onPressed={this.onButtonPressed.bind(this)} />
        }

    }

    uploadFireStore(){
        firebase.firestore().collection('patients').doc(this.user.uid).set({
            basicInfo: {
                name: "Ricardo Lopez",
                uid: this.user.uid,
            }
        })
        console.log("Actualizado");
    }

    onButtonPressed() {
        const { email, pass, error } = this.state;
        this.setState({ error: '' });
        this.setState({ spinner: true });

        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(this.singInSucces.bind(this))
            .catch((error) =>  this.singInFailed(error.message));
    }

    singInFailed(error) {
        this.setState({
            error,
            spinner: false
        });
    }
    singInSucces() {
        this.setState({
            error: '',
            spinner: false,
            email: '',
            pass: ''
        });
        this.user = firebase.auth().currentUser
        Actions.landingPage();
    }
    render() {
        return (
            <View>

                <Card>
                    <CardSection>
                        <TextField
                            placeholder='user@gmail.com'
                            text='User'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email: email })}
                        />
                    </CardSection>
                    <CardSection>
                        <TextField
                            placeholder='*******'
                            text='Password'
                            value={this.state.pass}
                            onChangeText={pass => this.setState({ pass })}
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        <View style={styles.viewStyle}>
                            {this.showSppiner()}
                        </View>
                    </CardSection>

                </Card>
                <Text style={styles.textStyle}> {this.state.error}</Text>
                <View style = {{alignItems: 'center', flexDirection:'row', 
                alignContent:'center', flex:1}}>
                <View style = {{marginLeft: 150} }>
                    <Button transparent onPress = {() => {Actions.registrationForm()}}>
                        <Text style = {styles.textStyle}>Create account</Text>
                    </Button>
                </View>
                </View>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 15,
        color: "#0081cb",
        alignSelf: 'center',
        // backgroundColor: '#fff'

    },
    viewStyle: {
        //backgroundColor:'#fff',
        flexDirection: 'row',
        flex: 1,
        // height: 65
    }
}



export default LogInForm;