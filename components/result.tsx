import React from 'react'
import { Button, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class result extends React.Component <any,any>{

    render(){
    return (
        <View>
            <Text>Congrats, {this.props.Player}</Text>
            <Text>Your Score: {this.props.Score}</Text>
            <Button 
                title="Play Again"
                onPress={() => Actions.login()} />
        </View>
    )
}}
module.exports = result;

