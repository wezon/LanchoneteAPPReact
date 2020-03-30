import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Produto from '../screens/produto';
import apiNode from '../services/apiNode';


export default class listaProdutos extends Component {
  state = {
    produtos: []
  };
  async componentDidMount() {
    try {
      const produto = await apiNode.get('/produto');
      this.setState({ produtos: produto.data });

    } catch (response) {
      this.setState({ errorMessage: response.data.error });
    }
  }
  render() {
    return (
      <ScrollView style={styles.background} behavior="padding" enabled>

        {
          this.state.produtos.map((produto) => 
            < Produto img="IMdAGEM"
              nome={produto.descricaoCurta}
              preco={produto.preco}
              descricao={produto.descricaoCurta}
              key={produto._id}
            />)
        }
        

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 23,
  }
});

