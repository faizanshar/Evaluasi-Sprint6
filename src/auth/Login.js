import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Styles} from './Stylelogin';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bebas: true,
      email: '',
      password: '',
    };
   AsyncStorage.getItem('token').then((value) => {
      if (value !== null) {
        this.props.navigation.navigate('Home');
      } else {
        this.props.navigation.navigate('Login');
      }
    })
    .catch((err) => console.log(err));
  }
  Login = () => {
    const {email, password} = this.state;
    var dataToSend = {email: email, password: password, mobile: true};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://restful-api-laravel-7.herokuapp.com/api/login', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
        const {token, error} = responseJson;
        if (token) {
          AsyncStorage.setItem('token',token)
          this.props.navigation.navigate('Home');
        } else {
          alert('Pastikan Email dan Password BENAR!');
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Email dan Password BENAR!');
      });
  };

  render() {
    return (
      <LinearGradient style={Styles.view1} colors={['#00c8d6', '#d600b6']}>
        <Text style={Styles.text1}>LOG IN</Text>
        <Image source={require('../Images/Login.png')} style={Styles.image1} />
        <View style={Styles.view2}>
          <View style={Styles.view3}>
            <View style={Styles.view4}>
              <TextInput
                style={Styles.inputusername}
                placeholder={'             email'}
                keyboardType="email-address"
                onChangeText={(email) => this.setState({email})}
              />
              <Image
                source={require('../Images/profil.png')}
                style={Styles.image2}
              />
            </View>
            <View style={Styles.view4}>
              <TextInput
                style={Styles.inputpassword}
                placeholder={'     password'}
                secureTextEntry={this.state.bebas}
                onChangeText={(password) => this.setState({password})}
              />
              <TouchableOpacity
                onPress={() => this.setState({bebas: !this.state.bebas})}>
                <Image
                  source={require('../Images/key.png')}
                  style={Styles.image2}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={Styles.login}
                onPress={() => this.Login()}>
                <Text style={Styles.textlogin}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.textforgot}
                onPress={() => this.props.navigation.navigate('Resetpassword')}>
                <Text>Forgot password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.view5}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={Styles.textsignup}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
