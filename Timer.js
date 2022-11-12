
import { useState } from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import StartIcon from "react-native-vector-icons/Entypo"
import Stopicon from "react-native-vector-icons/Entypo"

import { Stopwatch, Timer } from 'react-native-stopwatch-timer'


export default Timering
function Timering(){ 
  const options ={
    container:{
      color:"orange",size:100,marginLeft:"auto",marginRight:"auto",marginTop:50,
    },text:{
      fontSize:45,color:"orange"
    }
    
 
 
 }
  let [startTime,setStart]=useState(false)
  let [resetTime,setReset]=useState(false)
  let [mili,setmili]=useState(false)
  function starter(){
    setStart(!startTime)
    setReset(false)

  }
  function stopper(){
    setStart(false)
    setReset(true)
  }
  function milisec(){
    setmili(!mili)
  }


  

 return <View style={styles.all}>
  
  <View style={styles.time} onTouchStart={milisec} onTouchEnd={()=> setmili(false)} >
    <Stopwatch  options={options} start={startTime} reset={resetTime} msecs={mili}  />
    </View>
    <View style={{flex:2,flexDirection:"row",justifyContent:"center",marginBottom:100}}>
    <TouchableOpacity  style={styles.buttons} onPress={starter} ><StartIcon name={startTime ? "controller-paus": "controller-play" } size={50} color="black" style={{marginLeft:"auto",marginTop:8,marginRight:"auto" }} /></TouchableOpacity>
    
    <TouchableOpacity style={styles.buttons} onPress={stopper} ><Stopicon name="controller-stop" size={50} color="black" style={{marginLeft:"auto",marginTop:8,marginRight:"auto" }}/></TouchableOpacity>
 </View>
 
 
 
 
 </View>



}
const styles=StyleSheet.create({
all: {
  backgroundColor:"black",flex:5
},
time:{
flex:3
},
buttons:{
  backgroundColor:"orange",height:70,width:70,marginHorizontal:20,borderRadius:70,
},
stopwatch:{
 justifyContent:"center",
}




})