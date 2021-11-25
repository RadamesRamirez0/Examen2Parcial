import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class trivia3 extends React.Component <any,any>{
    render(){
        
        const nextQA = (n: number) =>{
            if(n==1)
                Actions.result({Player:this.props.Player,Score:this.props.Score+1})
            else
                Actions.result({Player:this.props.Player,Score:this.props.Score})
        }
    return (
        <View style= {styles.container}>
            <Text style={styles.question}>What is the IDE for develop native Android apps called?</Text>

            <TouchableHighlight 
                style ={styles.touchablelight}>
            <Button
                title="Visual Studio"
                onPress={() => nextQA(0)} />
                </TouchableHighlight>

                <TouchableHighlight 
                style ={styles.touchablelight}>
            <Button
                title="Android Studio"
                onPress={() => nextQA(1)} />
                </TouchableHighlight>

                <TouchableHighlight 
                style ={styles.touchablelight}>
            <Button
                title="NotePad"
                onPress={() => nextQA(0)} />
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
module.exports = trivia3;

