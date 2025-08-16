import React, {useState} from 'react';

import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Image} from 'react-native';

//main component
export default function AppLoginScreen (){
        // variable estado, funciones para actualizar estos valores
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');


    const LoginControl=()=>{
        if(email==='' || password===''){
            Alert.alert('Error','Porfavor completa todos los campos');
        }
        else{
            Alert.alert('Bienvenido','Correo:${email}');
        }

    };
    return(
        <View style={styles.container}>

            <Image></Image>
            <Text style={styles.title}>Iniciar sesion</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo electronico"//el cuadro 
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                value={password}
                onChangeText={setPassword}
                /*keyboardType='Contraseña'*/
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={LoginControl}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
}


    //Definicion de estilos

            const styles=StyleSheet.create({
                container:{
                    flex: 1,
                    backgroundColor:'#eef6fb',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingHorizontal:20,
                },
                title:{
                    fontSize:28,
                    fontWeight:'bold',
                    marginBottom:40,
                    color:'#333',
                },
                input:{
                    width:'100%',
                    height:50,
                    borderColor:'#aaa',
                    borderWidth:1,
                    borderRadius:8,
                    paddingHorizontal:15,
                    marginBottom:20,
                    backgroundColor:'#fff',
                },
                button:{
                    width:'100%',
                    height:50,
                    backgroundColor: '#3478f6',
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                },

                buttonText:{
                    color:'#ffff',
                    fontSize:18,
                    fontWeight:'bold',
                },
    });

