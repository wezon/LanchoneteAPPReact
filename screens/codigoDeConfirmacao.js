import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native';
import ApiNode from '../services/apiNode';

export default class codigoDeConfirmacao extends Component {
    state = {
        errorMessage: null,
        codigoDeConfirmacao: null,
        senha: null,
        email: null,
        login: null,

    };
    componentDidMount() {
        this.setState({
            senha: this.props.navigation.state.params.senha,
            login: this.props.navigation.state.params.login,
            email: this.props.navigation.state.params.email
        });
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
                <View style={styles.container}>
                    {!!this.state.errorMessage && <Text style={styles.text}> {this.state.errorMessage} </Text>}
                    <TextInput
                        placeholder="Código de Confirmação"
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(value) => this.setState({ codigoDeConfirmacao: value })}
                        value={this.state.codigoDeConfirmacao}
                    />
                    <TouchableOpacity style={styles.botao} onPress={this.confirmar}>
                        <Text style={styles.text}> Confirmar troca de senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={this.reenviar}>
                        <Text style={styles.text}> Reenviar código de confirmação</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    };
    confirmar = async () => {
        try {
            if (!this.state.codigoDeConfirmacao)
                throw response = {
                    data: {
                        error: "Codigo de confirmação não pode estar vazio"
                    }
                };
            await ApiNode.post('/user/validacodigoresetsenha', { login: this.state.login, senha: this.state.senha , token: this.state.codigoDeConfirmacao });

            Alert.alert("", "Senha alterada!!");
            this.props.navigation.navigate('Login');
        } catch (response) {
            this.setState({ errorMessage: response.data.error });
        }
    }
    reenviar = async () => {
        try {
            
            await ApiNode.post('/user/resetasenha', { login: this.state.login, email: this.state.email });

            Alert.alert("", "Código reenviado!!");
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