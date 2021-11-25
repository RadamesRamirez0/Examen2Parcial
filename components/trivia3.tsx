import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
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
        <View>
            <Text>What is the IDE for develop native Android apps called?</Text>
            <Button
                title="Visual Studio"
                onPress={() => nextQA(0)} />
            <Button
                title="Android Studio"
                onPress={() => nextQA(1)} />
            <Button
                title="NotePad"
                onPress={() => nextQA(0)} />

        </View>
    )
}}
module.exports = trivia3;

