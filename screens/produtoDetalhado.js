import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import ApiNode from '../services/apiNode';
import NumberFormat from 'react-number-format';


export default class produtoDetalhado extends Component {
    state = {
        produtos: null
    }
    async componentDidMount() {
        try {
            const { params } = this.props.navigation.state;
            const id = params.id.id;
            const produto = await ApiNode.get('/Produto/' + id);

            this.setState({ produtos: produto.data });
        } catch (response) {
            this.setState({ errorMessage: response.data.error });
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
                <View style={styles.containerIMG}>
                    <Text style={styles.text}>{123}</Text>
                </View>
                <View style={styles.container}>
                    {!!this.state.produtos && <Text style={styles.text}>Nome: {this.state.produtos.descricaoCurta}</Text>}
                    {!!this.state.produtos && <NumberFormat
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={this.state.produtos.preco}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'R$'}
                        renderText={
                            value => <Text style={styles.text}>Preço: {value}</Text>
                        } />}
                   {!!this.state.produtos && <Text style={styles.text}>Desc: {this.state.produtos.descricao}</Text>}
                </View>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        color: "white",
        fontSize: 17,
        textAlign: 'center'
    },
    container: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        
    },
    containerIMG: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }

});
