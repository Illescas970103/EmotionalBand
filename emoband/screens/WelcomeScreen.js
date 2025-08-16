import React,{useState, useEffect} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Animated,Easing} from 'react-native';

export default function WelcomeScreen({navigation}){

    const[emojiIndex,setEmojiIndex]=useState(0);
    const emojis = ['😀', '😢', '😠', '😍', '😨', '😎'];

    const rotation=useState(new Animated.Value(0))[0];

    useEffect(()=>{
        Animated.loop(
            Animated.timing(rotation,{
                toValue:1,
                duration:4000,
                easing:Easing.linear,
                useNativeDriver:true,

            })
        ).start();

        const interval=setInterval(()=>{
            setEmojiIndex(prev=>(prev+1)%emojis.length);
        },1500);

        return ()=>clearInterval(interval);
    },[]);


    return(
        <View style={styles.container}>

        </View>
    )
}
