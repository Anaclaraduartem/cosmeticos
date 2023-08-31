import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import cereja from "../../../assets/cereja.jpg";
import amoraa from "../../../assets/amoraa.png";
import algodao from "../../../assets/algodao.png";
import bodycereja from "../../../assets/bodycereja.png";
import bodyamora from "../../../assets/bodyamora.png";
import bodyalgodao from "../../../assets/bodyalgodao.png";

const width = Dimensions.get("screen").width;

export default function Cosmeticos() {
  return (
    <>
      <Image source={logo} style={estilos.logo} />
      <Text style={estilos.titulo}>Cremes Natura</Text>

      <View>
        <Text style={estilos.titulocremes}>Cremes: Todo Dia</Text>
      </View>

     

      <View>
      <Text style={estilos.nomecereja}>Cereja e Avelã - 400ml</Text>
        <Image style={estilos.imagemcereja} source={cereja} />

        
        <Text style={estilos.preco}>R$ 50,00</Text>
        <Text style={estilos.descricao}>
          Uma combinação balanceada de ingredientes naturais com nutrição
          prebiótica, que se adapta ao que sua pele precisa. Indicado para todos
          os tipos de pele. Oferece pele macia, 4x mais hidratada e 2x mais
          firme.
        </Text>
      </View>

      <View>

       <Text style={estilos.nomeamora}> Amora Vermelha e Jabuticaba - 400ml</Text>
        <Image style={estilos.imagemamora} source={amoraa} />

        
        <Text style={estilos.preco2}>R$ 45,00</Text>
        <Text style={estilos.descricao}>
          Fragrância frutal leve,pele mais firme e ultramacia todos os dias.
          Fórmula com nutrição prebiótica, que se adapta à sua pele com uma
          textura cremosa fácil de espalhar e absorve rapidinho,pele saudável em
          todas as camadas.
        </Text>
      </View>

      <View>

       <Text style={estilos.nomealgodao}> Algodão - 400ml</Text>
        <Image style={estilos.imagemalgodao} source={algodao} />

        
        <Text style={estilos.preco3}>R$ 65,90</Text>
        <Text style={estilos.descricao}>
         Sinta seu corpo com o Creme Desodorante Nutritivo Tododia Algodão.Uma
         combinação balanceada de ingredientes naturais com nutrição prebiótica,
         que se adpata ao que sua pele precisa a cada dia.
         Por isso esse creme é indicado para todos os tipos de pele .
        </Text>
      </View>


      <View>
        <Text style={estilos.titulocremes}>Body Splash: Todo Dia</Text>
      </View>


      <View>
      <Text style={estilos.nomebody}> Cereja e Avelã - 200 ml</Text>
        <Image style={estilos.imagembody} source={bodycereja} />

        
        <Text style={estilos.preco}>R$ 69,00</Text>
        <Text style={estilos.descricao}>
          Uma fragrância frutal que atrai e marca presença.Notas de cereja e
          amora traz a sensação de bem estar,o 
          Body Splash Desodorante Colônia de Tododia é um convite 
          a vestir seu corpo com uma perfumação leve.
        </Text>
      </View>


      <View>
      <Text style={estilos.nomebody}> Amora Vermelha e Jabuticaba - 200 ml</Text>
        <Image style={estilos.imagembody} source={bodyamora} />

        
        <Text style={estilos.preco2}>R$ 41,90</Text>
        <Text style={estilos.descricao}>
       Se delicie aplicando borrifadas abundantes
       nos punhos, pescoço, colo, atrás da orelha
       e onde mais desejar.Vale até fazer
       aquela nuvem de spray e se envolver
       com esse cheirinho gostoso. Reaplique sempre
       que quiser renovar essa sensação.
        </Text>
      </View>




      <View>
      <Text style={estilos.nomebody}> Algodão - 200 ml</Text>
        <Image style={estilos.imagembody} source={bodyalgodao} />

        
        <Text style={estilos.preco3}>R$ 60,90</Text>
        <Text style={estilos.descricao}>
       Inspirada na combinação de notas surpreendentes traduzidas
       em fragrâncias irresistivéis,Tododia é um convite para vestir seu corpo 
       de frescor e leveza.
        </Text>
      </View>
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

 

  imagemcereja: {
    width: 110,
    height: 110,
   
  },

  nomecereja: {
    fontSize: 16,
    lineHeight: 42,
    marginLeft: 0,
    fontWeight: "bold",  
  },

  preco: {
    fontSize: 20,
    lineHeight: 42,
    color: "#dc143c",
    marginTop: 2,
  },

  
  descricao: {
    color: "#000000",
     fontSize:15
  },

  imagemamora: {
    width: 110,
    height: 110,
  },

  nomeamora: {
    fontSize: 16,
    lineHeight: 42,
    marginLeft: 0,
    fontWeight: "bold",
  },

  preco2: {
    fontSize: 20,
    lineHeight: 42,
    color: "#ffc0cb",
    marginTop: 2,
  },



  imagemalgodao: {
    width: 110,
    height: 110,
   
  },

  nomealgodao: {
    fontSize: 16,
    lineHeight: 42,
    marginLeft: 0,
    fontWeight: "bold",
  },

  preco3: {
    fontSize: 20,
    lineHeight: 42,
    color: "#dda0dd",
    marginTop: 2,
  },

  nomebody: {
    fontSize: 16,
    lineHeight: 42,
    marginLeft: 0,
    fontWeight: "bold",  
  },


  imagembody: {
    width: 110,
    height: 110,
  },



});
