import React, {Component} from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './Styleintro';


export default class Intro extends Component {
  render() {
    return (
      <LinearGradient style={{flex: 1}} colors={['#00c8d6', '#d600b6']}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Images/system.png')}
            style={{height: 300, width: 300, marginLeft: 40, marginTop: 50}}
          />
          <TouchableOpacity style={Styles.get} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
