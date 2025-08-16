//Splash Screen.js

import React, {useState, useEffect, useRef} from 'react';

import { View,Text,StyleSheet,TouchableOpacity,Animated } from 'react-native';

const emotions=[{label:'Joy',color:'#FFD93D'},{label:'Calm',color:'#eef6fb'},
{label:'Anger',color:'#eef6fb'},{label:'Sadness',color:'#eef6fb'},{label:'Fear',color:'#eef6fb'}];

//declaracion functional component each button screen on react-native are components
//arrow function returns JSX Component
const SplashScreen= ()=> {
            //position in list      function that change that position in the list
    const [currentEmotionIndex, setCurrentEmotionIndex]=useState(0);//declarando variable de estado valor del estado, forma de actualizar estado
    const fadeAnim=useRef(new Animated.Value(1)).current;// UseRef creates a unique reference between renders

    useEffect(()=> {
        const interval =setInterval(()=> { //setInterval es una funcion nativa de JavaScript
            //FADE OUT
            Animated.timing(fadeAnim, {
                toValue:0,
                duration:500,
                useNativeDriver: true,
            }).start(()=> {
                setCurrentEmotionIndex((prevIndex) => (prevIndex +1) % emotions.length);
                Animated.timing(fadeAnim, {
                    toValue:1,
                    duration:500,
                    useNativeDriver:true,

                }).start();
            });
       // })
    },2000)

    return ()=> clearInterval(interval);
},[fadeAnim]);

return (
    <View style={styles.container}>
        <Text style={styles.title}>FeeLink</Text>
        <Text style={styles.subtitle}>Descubre tu campo emocional</Text>

        <Animated.Text style={[styles.emotion,{opacity:fadeAnim,color:emotions[currentEmotionIndex].color,},]}>
            {emotions[currentEmotionIndex]}
        </Animated.Text>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Comencemos</Text>
            
        </TouchableOpacity>
    </View>
);
};

export default SplashScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'#000000'
    },
    subtitle:{
        fontSize:16,
        color:'#555555',
        marginBottom:20,
    },

    emotion:{
        fontSize:28,
        color: '600',
        marginVertical:30,

    },
    button:{
        backgroundColor:'#57C5B6',
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:8,
    },

    buttonText:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'bold',
    },
});

