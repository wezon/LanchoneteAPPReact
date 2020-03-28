import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import apiNode from '../services/apiNode';

export default class App extends Component {

  state = {
    errorMessage: null,
    login: null,
    senha: null
  };
  render() {
    return(
    <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
      
      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text} > {this.state.errorMessage} </Text>
        <TextInput
          placeholder="Login"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(value) => this.setState({login: value})}
            value={this.state.login}
        />
        <TextInput
          placeholder="Senha"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(value) => this.setState({senha: value})}
            value={this.state.senha}
        />
        <TouchableOpacity style={styles.botao} onPress={this.signIn}>
          <Text style={styles.text}> Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
    )};

  signIn = async () => {
    try {
      console.log("responswwe");

      const response = await apiNode.post('/User/auth', {
        login: this.state.login,
        senha: this.state.senha
      });
      console.log(response);


      const { user, token } = response.data;

      await AsyncStorage.multiSet([
        ['@LanchoneteAPPReact:token', token],
        ['@LanchoneteAPPReact:user', JSON.stringify(user)],
      ]);
    } catch (response) {
      this.setState({ errorMessage: response.problem });
    }
  };
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
      color: "black",
      fontSize: 17,
      borderRadius: 7,
      padding: 10,

    },
    text: {
      color: "white",
      fontSize: 17,
    },
    botao: {
      width: "90%",
      backgroundColor: "#35AAFF",
      borderRadius: 7,
      justifyContent: 'center',
      height: 45,
      alignItems: 'center',
      marginBottom: 5,
    }

  });
