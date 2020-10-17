import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Styles} from './Styleskin';
import AsyncStorage from '@react-native-community/async-storage';

export default class Skin extends Component {
  logout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View>
        <View style={Styles.view1}>
          <Image
            source={require('../Images/logo1.png')}
            style={Styles.image1}
          />
          <Text style={Styles.text1}>Muhammad Faiz Ansharullah</Text>
          <Text style={Styles.text2}>Mobile Development</Text>
        </View>

        <TouchableOpacity>
          <View style={Styles.view2}>
            <Image
              source={require('../Images/home(1).png')}
              style={Styles.imagehome}
            />

            <Text style={Styles.texthome}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.view2}>
            <Image
              source={require('../Images/profile(1).png')}
              style={Styles.imagehome}
            />

            <Text style={Styles.texthome}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.view2}>
            <Image
              source={require('../Images/settings.png')}
              style={Styles.imagehome}
            />

            <Text style={Styles.texthome}>Setting</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.view2}>
            <Image
              source={require('../Images/about.png')}
              style={Styles.imagehome}
            />

            <Text style={Styles.texthome}>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.logout} onPress={() => this.logout()}>
          <Text style={Styles.textlogout}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
