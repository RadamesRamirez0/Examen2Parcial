import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class trivia2 extends React.Component <any,any>{
    render(){
        
        const nextQA = (n: number) =>{
            if(n==1)
                Actions.trivia3({Player:this.props.Player,Score:this.props.Score+1})
            else
                Actions.trivia3({Player:this.props.Player,Score:this.props.Score})
        }
    return (
        <View style= {styles.container}>
            <Text style={styles.question}>They are applications that are builded to run directly on an Operative System?</Text>
            <TouchableHighlight 
                style ={styles.touchablelight}>
                    
            <Button
                title="Web Apps"
                onPress={() => nextQA(0)} />
                </TouchableHighlight>
                 <TouchableHighlight 
                style ={styles.touchablelight}>
            <Button
                title="Hybrid Apps"
                onPress={() => nextQA(0)} />
                </TouchableHighlight>
                 <TouchableHighlight 
                style ={styles.touchablelight}>
            <Button
                title="Native Apps"
                onPress={() => nextQA(1)} />
                </TouchableHighlight>
        </View>
    )
    
}}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#282c34',
        display:'flex',
        flex:1,
        height: '100%',
        justifyContent:'center',
        margin:10,
    },
    touchablelight:{
        height: 40,
        width:160,
        borderRadius:10,
        backgroundColor : "black",
        marginLeft :50,
        marginRight:50,
        marginTop :20
    },
    question:{
        fontSize: 25,
        color: 'white',
        fontWeight:'bold'
    },
});
module.exports = trivia2;

