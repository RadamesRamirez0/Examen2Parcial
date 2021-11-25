import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
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
        <View>
            <Text>What is the official store of Android OS called?</Text>
            <Button
                title="Play Store"
                onPress={() => nextQA(1)} />
            <Button
                title="App Store"
                onPress={() => nextQA(0)} />
            <Button
                title="Aptoide"
                onPress={() => nextQA(0)} />


        </View>
    )
}}
module.exports = trivia1;

