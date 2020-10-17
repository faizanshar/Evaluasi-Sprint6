import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from '../auth/Stylereset';
export default class Resetpassword extends Component {
  render() {
    return (
      <LinearGradient style={Styles.view1} colors={['#00c8d6', '#d600b6']}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
          <Image
            source={require('../Images/arrow.png')}
            style={Styles.imagearrow}
          />
        </TouchableOpacity>
        <Text style={Styles.reset}>Reset Password</Text>
        <View style={Styles.view2}>
          <View style={Styles.view3}>
            <TextInput style={Styles.textemail} placeholder={'  email'} />
            <Image
              source={require('../Images/profil.png')}
              style={Styles.imageprofil}
            />
          </View>
          <TouchableOpacity style={Styles.resend}>
            <Text style={Styles.textresend}>Resend Email</Text>
          </TouchableOpacity>

        <TouchableOpacity style={Styles.signin} onPress={()=>this.props.navigation.navigate('Login')}>
            <Text>Sign In</Text>
        </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
