import React from "react";
import{ StyleSheet, Image, Dimensions} from 'react-native';
import foto from '../../../assets/foto.jpg';

const width = Dimensions.get('screen').width;

export default function Cosmeticos(){

    return <>
     <Image source={foto} style={estilos.foto}/>
     
     </>
}

const estilos = StyleSheet.create({
    foto:{
     width:'100%',
     height: 578/768 * width
    }
})