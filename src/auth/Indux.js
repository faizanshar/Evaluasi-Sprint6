import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Import screen auth
import Intro from './Intro';
import Login from './Login';
import Register from './Register';
import Resetpassword from './Resetpassword';
import Skin from './Skin';
// import Splash from './Splash';

// import screen dashboard
import Home from '../Dashbord/Home';
import Todo1 from '../Dashbord/Todo1';
import Todo2 from '../Dashbord/Todo2';
import Todo3 from '../Dashbord/Todo3';
import Profile from '../Dashbord/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Todo1" component={Todo1} />
      <Tab.Screen name="Todo2" component={Todo2} />
      <Tab.Screen name="Todo3" component={Todo3} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const RootDrawer = () => {
  return (
    <Drawer.Navigator  drawerContent={(props) => <Skin {...props}/> }>
      <Drawer.Screen
        name="Home"
        component={MyTabs}
       
      />
    </Drawer.Navigator>
  );
};

const Indux = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={RootDrawer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Resetpassword" component={Resetpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Indux;
