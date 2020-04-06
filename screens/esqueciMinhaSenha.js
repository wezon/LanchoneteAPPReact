import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native';

export default class esqueciMinhaSenha extends Component {
    state = {
        errorMessage: null,
        login: null,
        email: null,
        senha: null,

    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Login"
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(value) => this.setState({ login: value })}
                        value={this.state.login}
                    />
                    <TextInput
                        placeholder="Email"
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder="Senha"
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(value) => this.setState({ senha: value })}
                        secureTextEntry={true}
                        value={this.state.senha}
                    />
                    <TouchableOpacity style={styles.botao} onPress={this.codigoDeConfirmacao}>
                        <Text style={styles.text}> Enviar email de confirmação</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    };
    codigoDeConfirmacao = () => {
        this.props.navigation.navigate('CodigoDeConfirmacao',{senha: this.state.senha });
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