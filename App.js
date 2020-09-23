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
    <Text style ={style.txt3}>{`You have quick, easy access to our growth
    loans so that you can seize the opportunity of 
    a lifetime`}</Text>
      <TouchableOpacity style ={style.btn1}>
        <Text style={style.btntxt}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btn2}>
        <Text style={style.btntxt}>Log in</Text>
      </TouchableOpacity>
      <View style = {style.btnview}>
      <TouchableOpacity style={style.btn}/>
      <TouchableOpacity style={style.btn}/>
      <TouchableOpacity style={style.btn}/>
      <TouchableOpacity style={style.btn}/>
      </View>
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
   fontSize: 15,
   fontWeight: "normal",
   display: "flex",
   justifyContent: "space-around",
   textAlign: "center"
   
 },

 btn1: {
  borderColor: "purple",
  borderWidth: 1,
  backgroundColor: "purple",
   padding: 15,
   borderRadius: 70,
   marginHorizontal: 25,
   marginTop: 40
 },

 btn2: {
   //backgroundColor: "purple",
   borderColor: "purple",
   borderWidth: 1,
   padding: 15,
   borderRadius: 70,
   marginHorizontal: 25,
   marginTop: 5
 },

 btntxt: {
  textAlign: "center",
  color: "black",
  fontSize: 15
 },
 btn: {
   borderColor: "purple",
   borderWidth: 1,
   borderRadius: 300,
   width: 10,
   height: 10,
   margin: 1
   
  
 },
 btnview: {
   display: "flex", 
   flexDirection: "row",
   position: "absolute", 
   bottom: 25,
   alignSelf: "center"
   
 }
})
export default App;
