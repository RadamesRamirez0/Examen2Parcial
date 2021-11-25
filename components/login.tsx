import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

const login = () => {

    const [playername, setPlayername] = useState('');
    
    return (
        <View>
            <Text>Let's play, give me your name:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={value => setPlayername(value)}
                placeholder="Please, enter your name here"/>


            <Button
                onPress={() => {Actions.trivia1({Player: playername})}}
                title="Start the game"
                color="silver" 
            />
        </View>
    )
    
}
const styles = StyleSheet.create({
    textInput:{
        backgroundColor:"silver",
    }
});
export default login;
