import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Produto from '../screens/produto';
import apiNode from '../services/apiNode';


export default class listaProdutos extends Component {
  state = {
    produtos: [],

  };
  onClickProduto = async (id) => {
    this.props.navigation.navigate('ProdutoDetalhado',{ id: { id } });
  }
  async componentDidMount() {
    try {
      const produto = await apiNode.get('/produto');
      this.setState({ produtos: produto.data });
    } catch (response) {
      this.setState({ errorMessage: response.data.error });
    this.props.navigation.navigate('Login');

    }
  }
  render() {
    return (
      <ScrollView style={styles.background} behavior="padding" enabled>
        {
          this.state.produtos.map(produto => (
            <TouchableOpacity onPress={() => this.onClickProduto(produto._id)} key={produto._id}>
              < Produto img="IMdAGEM"
                nome={produto.descricaoCurta}
                preco={produto.preco}
                descricao={produto.descricaoCurta}

              />
            </TouchableOpacity>))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 5
    }
});

