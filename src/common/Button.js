import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MyButton = (props) => {

    const {buttonStyle,clickMeStyle} = styles;
    return (
        <TouchableOpacity onPress={props.onPressed} style = {buttonStyle}>
            <Text style= {clickMeStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};


const styles = {
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#00b0ff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00b0ff',  //Spotify #191414
        marginLeft: 5,
        marginRight: 5,

    },
    clickMeStyle:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
    }
}

export {MyButton};