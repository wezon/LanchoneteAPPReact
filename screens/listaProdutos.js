import React from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity , Image} from 'react-native';

export default function listaProdutos() {
  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
      

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    paddingBottom: 10,
  },
  containerLogo: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,

  },
  text: {
    color: "white",
    fontSize: 17,
  },
  botao:{
    width: "90%",
    backgroundColor: "#35AAFF",
    borderRadius: 7,
    justifyContent:'center',
    height: 45,
    alignItems:'center',
    marginBottom:5,
  }

});
