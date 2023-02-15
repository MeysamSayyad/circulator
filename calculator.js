import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableHighlight } from 'react-native';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Calculator

function Calculator(){
  
const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const numbers=["1","2","3","4","5","6","7","8","9","0",".","="]
  const operations=["+","-","*","/"]
  let [result,setres]=useState("")
  let [calcul,setcal]=useState("")
  let[color,setcolor]=useState(true)
  const get=async()=>{
    try{
      const jsoncolor= await AsyncStorage.getItem("colorkey")
    setcolor(JSON.parse(jsoncolor))
    alert("getset")
    }
    catch{
      alert(JSON.parse(jsoncolor))
      
    }
    

  }
  useEffect(()=>{
    get()
    
  },[])
  function del(){
    setres(result.slice(0,-1))
  }
  function clear(){
    setres("")
    setcal("")
  }
  function Setting(prop){
    if(result.slice(-1)==="."&& prop==="."|| result===""&&prop==="."||operations.includes(result.slice(-1))&&operations.includes(prop)||result===""&& prop==="*"||result===""&& prop==="/"||operations.includes(result.slice(-1))&& prop==="="){
      return
    }
    if(prop==="="){
      setcal(eval(result))
    }
    else(setres(result+prop))
    
    
  }
  function setnum(prop){
    setcal(calcul+prop) 
  }
  return (
<SafeAreaProvider>
    <View style={styles.container}>
      <View  style={{flex:2}} ><Text onLongPress={()=>setres(calcul.toString())} style={styles.text}>{calcul}</Text></View>
      <View style={styles.result}><Text style={{color:"white",textAlign:"right",marginRight:100,marginTop:105,fontSize:18,opacity:0.6}}>{result}</Text>
      <TouchableOpacity onPress={del} onLongPress={clear} style={{height:50,width:50,position:'absolute',marginLeft:320,marginTop:75,borderRadius:50}}><Text style={{height:60,width:60,color:"black",fontSize:20,opacity:0.7,backgroundColor:color ? "white":"orange",textAlign:"center",paddingTop:17,borderRadius:50}}>DEL</Text></TouchableOpacity></View>
      <View style={{flexDirection:"row",flex:3,borderTopWidth:1,borderTopColor:"#ffa60045"}}> 
        <View style={styles.numbers}>
        {numbers.map((p,key)=>{return(
          <TouchableOpacity
          style={styles.mainKeys} onPress={()=>Setting(p) } key={key}  >
              <Text style={{color:"white",fontSize:25,opacity:0.7,}}key={key}>{p}</Text>


          </TouchableOpacity>
          )
          

        })}
        


      
      </View>
      <View>
      {operations.map((p,key)=>{return(
          <TouchableOpacity
          style={styles.operations} onPress={()=>Setting(p) } key={key}  >
              <Text style={{color:"orange",fontSize:25,opacity:0.7,}}>{p}</Text>


          </TouchableOpacity>
          )
          

        })}



      </View>
      </View>
      
     
      
     
      
      <StatusBar style='auto'/>
    </View>
    </SafeAreaProvider>
  );}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      
      
    },
    Button:{
      height:"100px"
  
    },
    mainKeys:{
      height:"26%",width:"33%",backgroundColor:"black",activeOpacity:1,alignItems:"center",paddingTop:25,
      
  
    },
    result:{
      
    flex:1
    },
    numbers:{
      display:"flex",flex:2,alignItems:"flex-start",color:"red",
      flexDirection:"row",flexWrap:"wrap",padding:10,
  
    },
    operations:{
      
       flex:1,
       width:70,height:100,alignItems:"center",paddingTop:35,
    },
    text:{
     fontSize:50,
     color:"orange",textAlign:"right",marginRight:30,marginTop:100
    }
  
  
  });
  