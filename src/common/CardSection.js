import React from 'react';
import { View,Text } from "react-native";

const CardSection = (props) => {
    return (
        <View style = {styles.cardStyles}>
            {props.children}
        </View>
    );
};

const styles = {
    cardStyles: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection:  'row',
        borderColor: '#ddd',
        position: 'relative'
    } 
}

export {CardSection};