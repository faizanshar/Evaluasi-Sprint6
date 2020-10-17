import React, {Component} from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './Styleregister';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bebas: true,
      name: '',
      email: '',
      password: '',
      confirmpasswod: '',
    };
  }
  register = () => {
    const {name, email, password, ulangiPassword} = this.state;

    //POST json
    var dataToSend = {
      name: name,
      email: email,
      password: password,
      password_confirmation: ulangiPassword,
    };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://restful-api-laravel-7.herokuapp.com/api/register', {
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
        const {token} = responseJson;
        if (token) {
          alert('register sukses');
          this.props.navigation.goBack();
        } else {
          alert('Pastikan Form Sudah Terisi dengan benar');
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Form Sudah Terisi dengan benar');
      });
  };

  render() {
    return (
      <LinearGradient style={Styles.view1} colors={['#00c8d6', '#d600b6']}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Image
            source={require('../Images/arrow.png')}
            style={Styles.imagearrow}
          />
        </TouchableOpacity>
        <Text style={Styles.textregister}>REGISTER</Text>
        <View style={Styles.view2}>
          <View style={Styles.view3}>
            <TextInput
              style={Styles.inputname}
              placeholder={'name'}
              onChangeText={(name) => this.setState({name})}
            />
            <Image
              source={require('../Images/profil.png')}
              style={Styles.image1}
            />
          </View>
          <View style={Styles.view3}>
            <TextInput
              style={Styles.inputemail}
              placeholder={'email'}
              onChangeText={(email) => this.setState({email})}
            />
            <Image
              source={require('../Images/profil.png')}
              style={Styles.image1}
            />
          </View>
          <View style={Styles.view3}>
            <TextInput
              style={Styles.inputpassword}
              placeholder={'password'}
              secureTextEntry={this.state.bebas}
              onChangeText={password => this.setState ({password})}
            />
            <TouchableOpacity
              onPress={() => this.setState({bebas: !this.state.bebas})}>
              <Image
                source={require('../Images/key.png')}
                style={Styles.image1}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.view3}>
            <TextInput
              style={Styles.inputpassword}
              placeholder={'confirm password'}
              secureTextEntry={this.state.bebas}
              onChangeText={ulangiPassword => this.setState ({ulangiPassword})}
            />
            <TouchableOpacity
              onPress={() => this.setState({bebas: !this.state.bebas})}>
              <Image
                source={require('../Images/key.png')}
                style={Styles.image1}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={Styles.signup}
            onPress={() => this.register()}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.view4}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={Styles.textsignin}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
