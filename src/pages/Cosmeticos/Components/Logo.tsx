import React from "react";
import{Image, Text,StyleSheet,Dimensions} from "react-native";
import logo from "../../../../assets/logo.png";


const width = Dimensions.get("screen").width;

 type Props={
titulo: string;
 }

export default function Logo({titulo}:Props){
return (
    <>
     <Image source={logo} style={estilos.logo} />
      <Text style={estilos.titulo}>{titulo}</Text>
    </>
);

}

const estilos = StyleSheet.create({
  logo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "#db7093",
    position: "absolute",
    padding: 16,
  },



});
