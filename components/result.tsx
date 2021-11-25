import React from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class result extends React.Component <any,any>{

    render(){
    return (
        <View style= {styles.container}>
            <Text style={styles.Player}>Congrats, {this.props.Player}</Text>
            <Text style={styles.Score}>Your Score: {this.props.Score}</Text>
            <TouchableHighlight 
                style ={styles.touchablelight}>
            <Button 
                title="Play Again"
                onPress={() => Actions.login()} 
                />
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
    Player:{
        fontSize: 25,
        color: 'white',
        fontWeight:'bold'
    },
    Score:{
        fontSize: 25,
        color: 'white',
        fontWeight:'bold'

    },
});
module.exports = result;

