import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native';

export default class codigoDeConfirmacao extends Component {
    state = {
        errorMessage: null,
        codigoDeConfirmacao: null,
        senha: null,

    };
    componentDidMount(){
        this.setState({senha: this.props.navigation.state.params.senha});
    }
    render() {
        console.log(this.state.senha);
        return(
        <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
            <View style={styles.container}>
                <TextInput
                    placeholder="Código de Confirmação"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={(value) => this.setState({ codigoDeConfirmacao: value })}
                    value={this.state.codigoDeConfirmacao}
                />
                <TouchableOpacity style={styles.botao} onPress={this.signIn}>
                    <Text style={styles.text}> Confirmar troca de senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        )};
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