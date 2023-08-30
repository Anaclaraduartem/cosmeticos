import React from "react";
import{ StyleSheet, Image, Dimensions, Text, View} from 'react-native';
import logo from '../../../assets/logo.png';
import cereja from '../../../assets/cereja.jpg';

const width = Dimensions.get('screen').width;

export default function Cosmeticos(){

    return <>
     <Image source={logo} style={estilos.logo}/>
     <Text style={estilos.titulo}>Cremes Natura</Text>

<View>

<Text style={estilos.titulocremes}>Coleção: Todo Dia</Text>
       
      
<View style={estilos.creme1}>
</View>
        <View>
        <Text style={estilos.nomecereja}> Creme Cereja e Avelã</Text>
        </View>
       
       <View>
        <Image style={estilos.imagemcereja} source={cereja}/>
     
        </View>
        </View> 
      
     </>

}

const estilos = StyleSheet.create({
    logo:{
     width:'100%',
     height: 578/768 * width
    },

    titulo:{
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 26,
        width: "100%",
        textAlign: "center",
        color: "#ff69b4",
        position: "absolute",
        padding: 16
    },

    titulocremes:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 26,
        color: "#000000",
        marginTop: 25,
    },

    creme1:{
        flexDirection:"row",
        paddingVertical:12,
    
    },

    imagemcereja:{
        width:110,
        height:110
    },

    nomecereja:{
        fontSize:16,
        lineHeight:26,
        marginLeft:4,
        fontWeight:"bold",
      
    },
 
    
})