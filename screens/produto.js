import React from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image } from 'react-native';
import NumberFormat from 'react-number-format';

export default produto = ({ img, nome, preco, descricao }) => {
    return (
        <View>
            <View style={styles.background} behavior="padding" enabled>
                <View style={styles.containerIMG}>
                    <Text style={styles.text}>{img}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Nome: {nome}</Text>
                    <NumberFormat
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={preco}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'R$'}
                        renderText={
                            value => <Text style={styles.text}>Preço: {value}</Text>
                        } />
                    <Text style={styles.text}>Desc: {descricao}</Text>
                </View>
            </View>
            <View style={styles.linha} />
        </View>

    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        color: "white",
        fontSize: 17,
    },
    container: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    containerIMG: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    linha: {
        borderWidth: 0.5,
        borderColor: 'white',
        margin: 10,
    }

});
