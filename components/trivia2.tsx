import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
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
        <View>
            <Text>They are applications that are builded to run directly on an Operative System?</Text>
            <Button
                title="Web Apps"
                onPress={() => nextQA(0)} />
            <Button
                title="Hybrid Apps"
                onPress={() => nextQA(0)} />
            <Button
                title="Native Apps"
                onPress={() => nextQA(1)} />

        </View>
    )
}}
module.exports = trivia2;

