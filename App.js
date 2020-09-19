/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import pics from './images/img2.jpeg';

const App = () => {
  return (
  <View style = {style.container}> 
    <Text style = {style.txt1}>Skip</Text>
    <Image style = {style.image} source = {pics}/>
    <Text style ={style.txt2}>Loan</Text>
    <Text style ={style.txt3}>You have quick, easy access to our growth loans 
      so that you can seize the opportunity of a lifetime</Text>
      <TouchableOpacity style ={style.btn1}>
        <Text style={style.btntxt}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btn2}>
        <Text style={style.btntxt}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btn}/>
  </View> 
  );
};

const style = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "white"
 },
 image: {
   height: 300,
   width: 300,
   borderRadius: 150,
   alignSelf: "center"
 },
 txt1: {
  //paddingVertical: 10,
   fontSize: 20,
   fontWeight: "normal",
   display: "flex",
   textAlign: "right",
   marginRight: 20,
   paddingTop: 20
 },
 txt2: {
   alignSelf: "center",
   fontWeight: "bold",
   fontSize: 30,
   paddingTop: 10
   
 },
 txt3: {
   paddingHorizontal: 25,
   fontSize: 18,
   fontWeight: "normal",
   alignSelf: "center"
   
 },

 btn1: {
   backgroundColor: "orange",
   padding: 15,
   borderRadius: 70,
   marginHorizontal: 25,
   marginTop: 50
 },

 btn2: {
   backgroundColor: "purple",
   padding: 15,
   borderRadius: 70,
   marginHorizontal: 25,
   marginTop: 5
 },

 btntxt: {
  textAlign: "center",
  color: "white",
  fontSize: 15
 },
 btn: {
   borderColor: "orange",
   borderWidth: 5,
   borderRadius: 300,
  alignSelf: "center",
   width: 10,
   height: 10,
   position: "absolute", 
   bottom: 25,
  
 }
})
export default App;
