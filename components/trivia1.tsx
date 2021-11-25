import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class trivia1 extends React.Component <any,any>{
    render(){
        
        const nextQA = (n: number) =>{
            if(n==1)
                Actions.trivia2({Player:this.props.Player,Score:1})
            else
                Actions.trivia2({Player:this.props.Player,Score:0})
        }
    
    return (
        <View style= {styles.container}>
            <Text style={styles.question}>What is the official store of Android OS called?</Text>
            <TouchableHighlight 
                style ={styles.touchablelight}>
            <Button
                title="Play Store"
                onPress={() => nextQA(1)} />
                </TouchableHighlight>
                <TouchableHighlight 
                style ={styles.touchablelight}>

            <Button
                title="App Store"
                onPress={() => nextQA(0)} />
                </TouchableHighlight>
                <TouchableHighlight 
                style ={styles.touchablelight}>
                <Button
                title="Aptoide"
                onPress={() => nextQA(0)} />
                </TouchableHighlight>
            
        </View>
    )
}
}

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
module.exports = trivia1;

