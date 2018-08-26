import {View, Text } from "react-native";
import React, { Component } from 'react';
import { FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import { Button, Container } from "native-base";
import firebase from "firebase";
require('firebase/firestore');

class RegistrationForm extends Component {

    user = null;
    state = {
        name: null,
        birthDate: null,
        emai: null,
        password: null,
        alert: null,
        error: null
    }

    uploadFireStore() {
        firebase.firestore().collection('patients').doc(this.user.uid).set({
            basicInfo: {
                name: this.state.name,
                uid: this.user.uid,
                birthDate: this.state.birthDate
            }
        })
        console.log("Actualizado FireStore");
    }

    pressed(){
        
        const { name, birthDate, email, password } = this.state;
        if (name != null && birthDate != null && email != null && password !=null ){
            this.setState({ alert: "" })
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.registrationSucces.bind(this))
                .catch((error) => this.registrationFailed(error.message));
        }else{
            this.setState({alert: "Faltan campos por llenar"})
        }

    }

    registrationSucces(){
        this.user = firebase.auth().currentUser;
        this.uploadFireStore();
        this.setState({
            alert: 'Registro exitoso',
            email: '',
            password: '',
            name: '',
            birthDate: ''

        });
    }

    registrationFailed(error){
        this.setState({
            error,
        });
    }

    
    render() {
        return (
            <View>
                <FormLabel>Nombre</FormLabel>
                <FormInput
                 placeholder = "Ingresa tu nombre.."
                 value = {this.state.name}
                 onChangeText={(name) => {this.setState({name})}} />

                <FormLabel>Fecha de nacimiento</FormLabel>
                <FormInput
                    placeholder="dd/mm/aa"
                    value={this.state.birthDate}
                    onChangeText={(birthDate) => { this.setState({ birthDate }) }} />

                <FormLabel>Correo</FormLabel>
                <FormInput
                    placeholder="ejemplo@gmail.com"
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email }) }} />

                <FormLabel>Contraseña</FormLabel>
                <FormInput
                    placeholder="******"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={(password) => { this.setState({ password }) }} />
                <FormValidationMessage>{this.state.alert}</FormValidationMessage>
                <FormValidationMessage>{this.state.error}</FormValidationMessage>
                
                    <Button full info style={{ backgroundColor:"#0081cb", marginTop: 30,}} 
                    onPress = {() => {this.pressed()}}
                    >
                        <Text style = {{color: 'white', fontWeight: 'bold'}}> Registrar </Text>
                    </Button>
                
                
            </View>
            
        );
    }
}

export default RegistrationForm;