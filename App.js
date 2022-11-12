
import Calculator from './calculator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Timer from "./Timer"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Timering from './Timer';
import Todo from "./todo"
import Calicon from "react-native-vector-icons/Entypo";
import Timeicon from "react-native-vector-icons/Entypo"
import { AsyncStorageStatic } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const App=()=> {
   
   return <SafeAreaProvider>
 <StatusBar hidden  />     
 <Tabb />
 </SafeAreaProvider>
 }



 function Tabb(){
   const Tab = createMaterialTopTabNavigator();
 const insets= useSafeAreaInsets();
  
return <SafeAreaProvider>
  <NavigationContainer><Tab.Navigator   screenOptions={{tabBarActiveTintColor:"orange",tabBarShowLabel:false, tabBarStyle:{backgroundColor:"black"},tabBarIndicatorStyle:{backgroundColor:"orange"}}}  style={{color:"black",marginTop: insets.top,}} >  
     <Tab.Screen name='Home'  component={Calculator} options={{  tabBarIcon: ({color,size}) => (<Calicon name="calculator" color={color} size={23}   />)}}/>
     <Tab.Screen name='timer' component={Timering} options={{  tabBarIcon: ({color,size}) => (<Calicon name="clock" color={color} size={23}   />)}}/>
     <Tab.Screen name="todo"  component={Todo} options={{  tabBarIcon: ({color,size}) => (<Calicon name="check" color={color} size={23}   />)}}/>  

  </Tab.Navigator></NavigationContainer>
  </SafeAreaProvider> 
 }
export default App;

