import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#002152', flex: 1}}>
        <View>
          <Image
            source={require('../Images/pemandangan.jpg')}
            style={{width: 360, height: 210}}
          />
          <Image
            source={require('../Images/progad.png')}
            style={{
              width: 150,
              height: 150,
              // top: -100,
              marginLeft: 100,
              borderRadius: 100,
              position: 'absolute',
              bottom: -60,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 60,
            color: '#ffff',
            marginTop: 100,
          }}>
          Muhammad Faiz Ansharullah
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 120,
            color: '#ffff',
            marginTop: 10,
          }}>
          Mobile Development
        </Text>
       
      </View>
    );
  }
}
