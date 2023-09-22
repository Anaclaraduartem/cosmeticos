import React from "react";
import{Image, Text,StyleSheet,Dimensions} from "react-native";
import logo from "../../../../assets/logo.png";


const width = Dimensions.get("screen").width;

export default function Logo(){
return (
    <>
     <Image source={logo} style={estilos.logo} />
      <Text style={estilos.titulo}>Cremes Natura</Text>
      <Text style={estilos.titulocremes}>Cremes: Todo Dia</Text>
      <Text style={estilos.titulocremes}>Body Splash: Todo Dia</Text>
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
titulocremes: {
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
  lineHeight: 26,
  color: "#000000",
  marginTop: 25,
},


});
