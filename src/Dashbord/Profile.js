import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';

export default class Profile extends Component {
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
        <View style={{flexDirection:'row'}}>
        <View style={{marginTop:20,justifyContent:'center',width:200}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 80,
              color: '#ffff',
              
            }}>
            900k
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 55,
              color: '#ffff',
              marginTop: 10,
            }}>
            Followers
          </Text>
        </View>
        <View style={{marginTop:20,justifyContent:'center',width:200,}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 60,
              color: '#ffff',
              
            }}>
            200
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 35,
              color: '#ffff',
              marginTop: 10,
            }}>
            Following
          </Text>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image 
            source={require('../Images/work.png')}
            style={{width:25,height:25,marginTop:20,marginLeft:10}}
          />
          <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginTop:27,marginLeft:10}}>Freelancer</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image 
            source={require('../Images/world.png')}
            style={{width:25,height:25,marginTop:20,marginLeft:10}}
          />
          <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginTop:27,marginLeft:10}}>Mobile Development</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image 
            source={require('../Images/pone.png')}
            style={{width:25,height:25,marginTop:20,marginLeft:10}}
          />
          <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginTop:27,marginLeft:10}}>+62-8211-2819-685</Text>
        </View>
      </View>
    );
  }
}
