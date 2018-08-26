import React from 'react';
import { View,Text, TextInput } from 'react-native';

const TextField = (props) => {

    return(
    <View style = {styles.containerStyle}>
    <Text style = {styles.textStyle}>{props.text}</Text>
    <TextInput
        autoCorrect = {false}
        value = {props.value}
        onChangeText = {props.onChangeText}
        style = {styles.inputStyle}
        placeholder = {props.placeholder}
        autoCapitalize = {'none'}
        secureTextEntry = {props.secureTextEntry}
    />
    </View>
    );
};

const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    textStyle:{
        fontSize: 18,
        paddingLeft: 10,
        flex: 1,
        
    },
    containerStyle:{
        height: 45,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',

    }
}

export default TextField;