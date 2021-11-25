import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import {Actions} from 'react-native-router-flux';

const login = () => {

    const img = require('../src/Trivia.png',)
    const [playername, setPlayername] = useState('');
    
    return (
        <View style ={styles.Container}>

            <ImageBackground
                source={img}
                resizeMode="center"
                style={styles.Image}
            />  
            
            <Text style= {styles.title}>Let's play, give me your name:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={value => setPlayername(value)}
                placeholder="Please, enter your name here"/>

            
            <Button 
                onPress={() => {Actions.trivia1({Player: playername})}}
                title="Start the game"
                color="silver"
            />
            <Text style= {styles.integrantes}> Integrantes:</Text>
            <Text style= {styles.name}> Ramirez Diaz Radames Osvaldo</Text>
            <Text style= {styles.name}> Peralta Arciniega Rigoberto Missael</Text>
            <Text style= {styles.name}> Vargas Rangel Cesar Adrian</Text>
        </View>
    )
    
}
const styles = StyleSheet.create({

    Image:{
        margin: 50,
        width: 350,
        borderRadius: 20,
        flex:1

    },
    Container:{
        alignItems: 'center',
        backgroundColor: '#282c34',
        display:'flex',
        height: '100%',
        justifyContent:'center',
        },
    title:{
        fontSize: 25,
        color: 'white',
        fontWeight:'bold'
    },
    name:{
        fontSize: 15,
        color: 'white',
        fontWeight:'bold',
        margin: 10,
        
    },
    integrantes:{
        fontSize: 15,
        color: 'white',
        fontWeight:'bold',
        marginTop: 50,
    }
    ,
        textInput:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#777',
        color: "black",
        padding: 10, 
        margin: 30,
        width: 320,
        
    }
});
export default login;
