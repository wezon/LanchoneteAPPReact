import React from 'react';
import { StyleSheet, Text,View ,TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import Produto from '../screens/produto';

export default function listaProdutos() {
  return (
    <ScrollView style={styles.background} behavior="padding" enabled>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      < Produto img="IMAGEM"
        nome="x baccon"
        preco='14.75'
        descricao='lanche com salda e queirjo e pao'
      />
      <View style={styles.linha}/>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 23,
  },
  linha: {
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 10,
  }
});
