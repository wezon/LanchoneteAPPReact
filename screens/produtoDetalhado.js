import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class produtoDetalhado extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const id = params.id.id;
        console.log(id);
        return (
            <View style={styles.background} behavior="padding" enabled>
                <View style={styles.container}>
                    <Text style={styles.text}>Nome: {id}</Text>
                </View>
            </View>
        );
    }
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
