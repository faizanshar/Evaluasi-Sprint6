import React, {Component} from 'react';
import {Text, View, Image, Ac, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Indux from './Indux';
import AsyncStorage from '@react-native-community/async-storage';

// import Login from './Login';
// import Login from './Login'

export default class Splash extends Component {
  constructor() {
    super();
    (this.componentDidMount = function () {
      console.log(' Console Log Ini Dari componentDidMount');
      setTimeout(() => {
        this.setState({
          role: false,
        });
      }, 2000);
     
    }),
      (this.componentDidUpdate = function () {
        console.log(' Console Log Ini Dari componentDidUpdate');
      });
  }

  state = {
    role: true,
  };

  splash = () => {
    // if (this.state.role) {
    return (
      <LinearGradient
        colors={['#00c8d6', '#d600b6']}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Images/computer.png')}
          style={{height: 300, width: 300}}
        />

        <ActivityIndicator size="large" color="blue" style={{marginTop: 50}} />
      </LinearGradient>
    );
    // }\
  };

  render() {
    if (this.state.role) {
      return <View style={{flex: 1}}>{this.splash()}</View>;
    } else {
      return <Indux />;
    }
  }
}
