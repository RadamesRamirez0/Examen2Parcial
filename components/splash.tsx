import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native';

const img = require('../src/reactnative.png',);

const splash = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={img}
                resizeMode="cover"
                style={styles.Image}
            /> 

        </View>
        )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'silver',
        flex:1,
    },
    Image:{
        flex:1,
    }
})
export default splash;
