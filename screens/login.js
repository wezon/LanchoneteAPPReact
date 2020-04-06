import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native';
import apiNode from '../services/apiNode';

export default class Login extends Component {
  state = {
    errorMessage: null,
    login: null,
    senha: null,
    usuarioLogado: null,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
        <View style={styles.containerLogo}>
          <Image
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.container}>
          {!!this.state.errorMessage && <Text style={styles.text}> {this.state.errorMessage} </Text>}
          <TextInput
            placeholder="Login"
            autoCorrect={false}
            style={styles.input}
            onChangeText={(value) => this.setState({ login: value })}
            value={this.state.login}
          />
          <TextInput
            placeholder="Senha"
            autoCorrect={false}
            style={styles.input}
            onChangeText={(value) => this.setState({ senha: value })}
            secureTextEntry={true}
            value={this.state.senha}
          />
          <TouchableOpacity style={styles.botao} onPress={this.signIn}>
            <Text style={styles.text}> Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress={this.esqueciMinhaSenha} style={styles.text}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    )
  };


  async componentDidMount() {
    const tokenantigo = await AsyncStorage.getItem('@LanchoneteAPPReact:token');
    const user = JSON.parse(await AsyncStorage.getItem('@LanchoneteAPPReact:user'));
    if (user && tokenantigo) {
      try {
        this.setState({ usuarioLogado: user });
        const response = await apiNode.put('/User/Atualizatoken', {
          login: user.login,
        });

        const { token } = response.data;
        await AsyncStorage.setItem('@LanchoneteAPPReact:token', token);
        this.props.navigation.navigate('ListaProdutos');
      } catch (response) {
        console.log(response);
        this.setState({ errorMessage: response.data });
      }
    }
  }
  esqueciMinhaSenha = () => {
    this.props.navigation.navigate('EsqueciMinhaSenha');

  }
  signIn = async () => {
    try {
      const response = await apiNode.post('/User/auth', {
        login: this.state.login,
        senha: this.state.senha
      });
      const { user, token } = response.data;
      await AsyncStorage.multiSet([
        ['@LanchoneteAPPReact:token', token],
        ['@LanchoneteAPPReact:user', JSON.stringify(user)],
      ]);
      this.setState({ usuarioLogado: user });
      this.props.navigation.navigate('ListaProdutos');


    } catch (response) {
      this.setState({ errorMessage: response.data.error });
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
