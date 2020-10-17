import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  view1: {
    backgroundColor: '#00c8d6',
    flex: 1,
  },
  view2: {
    height: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#927',
    height: 50,
    alignItems: 'center',
    margin: 24,
    borderRadius: 15,
  },
  textview2: {
    color: '#00c8d6',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textinput: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#24ffbd',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
});
