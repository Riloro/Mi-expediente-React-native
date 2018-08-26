import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {

const {textStyle, viewStyle} = styles;

  return(
    <View style={viewStyle}>
    <Text style={textStyle}>{props.title}</Text>
    </View>
  );
}

const styles = {
  textStyle:{
    fontSize: 20,
    color: '#1db954',
    fontWeight: 'bold',
  },
  viewStyle:{
    height: 60,
    backgroundColor: '#323232',
    justifyContent: 'center',
    //alignItems: 'center',
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1}, //Shadowwwwwwwwww?????!!!
    shadowOpacity: 1.0,
    elevation: 5,

  }
}
export {Header};
