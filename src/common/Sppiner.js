import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Sppiner = (props) => {
    return(
    <View style = {styles.indicatorStyles}>
        <ActivityIndicator size={props.size || 'large'} style={{ borderColor: props.color}}/>
    </View>
    );
};

const styles = {
    indicatorStyles:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
}

export {Sppiner}
