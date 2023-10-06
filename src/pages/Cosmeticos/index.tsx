import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Logo from "./Components/Logo";

import Detalhe from "./Components/Detalhe";
import cosmeticos from '../../mocks/cosmeticos';

export default function Cosmeticos() {
  return (
    <>
      <Logo titulo={cosmeticos.logo.titulo} />
      <View>
        <Detalhe nome={cosmeticos.detalhes.nome}
                 nomecereja={cosmeticos.detalhes.nomecereja}
  

        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({});
