import { useLinkProps } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Keyboard, Platform, Settings, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { KeyboardAvoidingView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const wwidth= Dimensions.get("screen").width
function Todo(){
   const[input,setinput]=useState("")
    const[tasks,settask]=useState(["life","night"])
    useEffect(()=>{
       getdata(); 
    },[])
        const set = async()=>{
            try{
                const jsonValue= JSON.stringify(tasks)
                await AsyncStorage.setItem("mykey",jsonValue)
                
            }catch(e){
             
            }
        }
        useEffect(()=>{
            set()
        },[tasks])
   
    
    const getdata = async()=>{
        try{
            
            const jsonValue = await AsyncStorage.getItem("mykey")
            settask(JSON.parse(jsonValue))
        
       
    }
        catch(e){

        }
    }
    

    
    const ts=["life","like,"]
    function List(props){
        return <View style={style.list} ><View style={{backgroundColor:"orange",position:"absolute",color:"orange",marginLeft:13,marginTop:17,borderRadius:5,height:22,width:22}}></View><Text style={{color:"orange",textAlign:"right",marginRight:20,marginVertical:19}}>{props.text}</Text></View>
        
        }
        function deletetask(i){
        let newtask=[...tasks]
        newtask.splice(i,1)
        settask(newtask)
            
        }
    function taskAdd(){
        settask([...tasks,input])
        setinput(null)
        Keyboard.dismiss()
    }
    return <><View style={style.container}><ScrollView>{tasks.map((p,i)=><TouchableOpacity key={i} onPress={()=>deletetask(i)}><List text={p}  /></TouchableOpacity>    )}</ScrollView></View><KeyboardAvoidingView style={{flex:1,backgroundColor:"black"}} behavior='position' enabled="true" ><TextInput style={style.input} value={input} onChangeText={(text)=> setinput(text)} /><TouchableOpacity onPress={taskAdd} style={style.button}><Text style={{textAlign:"center",fontSize:65,marginTop:-13}}>+</Text></TouchableOpacity></KeyboardAvoidingView></>


}






const style=StyleSheet.create({
container:{
    backgroundColor:"black",flex:6

},
list:{
    borderWidth:1,borderColor:"orange",
    backgroundColor:"black",marginLeft:15,
    width:wwidth-30,height:62,borderRadius:10,marginTop:15  
},
input:{
    borderWidth:1,borderColor:"orange",
    backgroundColor:"black",marginLeft:15,
    width:wwidth-150,height:55,borderRadius:10,color:"orange",paddingHorizontal:5,fontSize:17  
},
button:{
borderWidth:1,borderColor:"orange",
    backgroundColor:"orange",marginLeft:15,
    width:63,height:63,borderRadius:63,marginLeft:300,color:"orange" ,position:"absolute",marginTop:-3 
},





})



export default Todo