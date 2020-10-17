import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
  },
  view2: {
    backgroundColor: 'white',
    width: 280,
    height: 500,
    opacity: 0.5,
    marginTop: 30,
    borderRadius:10
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 20,
    borderRadius:20,
    
  },
  view4: {
    flexDirection:'row',
    marginTop:20
  },
  textregister: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
  },
  inputname: {
    width: 200,
  },
  image1: {
      width:40,
      height:40,
      marginTop:5
  },
  imagearrow:{
      width:30,
      height:30,
      marginRight:300
  },
  inputemail: {
      width:200,
      
  },
  inputpassword: {
      width:200
  },
  textsignin: {
      fontWeight:'bold',
      fontSize:15
  },
  signup: {
    backgroundColor:'white',
      marginTop:40,
      width:200,
      height:50,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:40
  }
});
