import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
    
  },
  view2: {
    backgroundColor: 'white',
    width: 280,
    height: 300,
    opacity: 0.5,
    margin: 30,
    borderRadius:10
  },
  view3: {
    alignItems: 'center',
  },
  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 50,
    marginTop: 20,
    width: 250,
  },
  view5: {
    flexDirection:'row'
  },
  text1: {
    fontSize: 30,
    marginTop: 60,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image1: {
    width: 75,
    height: 75,
    marginTop: 40,
  },
  inputusername: {
    width: 200,

    fontSize: 20,
  },
  inputpassword: {
    width: 200,
    marginTop: 10,
    fontSize: 20,
  },
  image2: {
    width: 40,
    height: 40,
  },
  login: {
      backgroundColor:'white',
      marginTop:40,
      width:200,
      height:50,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center'
  },
  textlogin: {
      fontSize:17,
      fontWeight:'bold'
  },
  textforgot: {
      marginLeft:60,
      marginTop:20,
      
  },
  textsignup: {
      fontWeight:'bold'
  }
});
