import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import cereja from "../../../../assets/cereja.jpg";

type Props ={
nome: string,
nomecereja:string;

}


export default function Detalhe({nome, nomecereja}:Props) {
  return (
    <>
      <Text style={estilos.titulocremes}>{nome}</Text>
      <View>
        <Text style={estilos.nomecereja}>{nomecereja}</Text>

        <Text style={estilos.preco}>R$ 50,00</Text>
        <Text style={estilos.descricao}>
          Uma combinação balanceada de ingredientes naturais com nutrição
          prebiótica, que se adapta ao que sua pele precisa. Indicado para todos
          os tipos de pele. Oferece pele macia, 4x mais hidratada e 2x mais
          firme.
        </Text>
      </View>

      <View style={estilos.card2}>
        <Image style={estilos.imagemcereja} source={cereja} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  titulocremes: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 26,
    color: "#000000",
    marginTop: 20,
  },

  card2: {
    height: 155,
    width: "40%",
    backgroundColor: "#dc143c",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },

  imagemcereja: {
    width: 110,
    height: 110,
  },

  nomecereja: {
    fontSize: 18,
    lineHeight: 42,
    marginLeft: 5,
    fontWeight: "bold",
    marginTop: 10,
  },

  preco: {
    fontSize: 20,
    lineHeight: 42,
    marginLeft: 5,
    color: "#dc143c",
    marginTop: 1,
  },

  descricao: {
    color: "#000000",
    fontSize: 15,
    marginLeft: 5,
  },
});
