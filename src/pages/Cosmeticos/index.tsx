import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Logo from "./Components/Logo";

import Detalhe from "./Components/Detalhe";

export default function Cosmeticos() {
  return (
    <>
      <Logo />
      <View>
        <Detalhe />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({});
