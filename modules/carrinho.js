class Carrinho {
  constructor() {
    this.produtos = []
    this.addProduto = (produto) => {
      if (!!this.produtos.find(element => element.codigo === produto.codigo)) {
        const item = this.produtos.find(element => element.codigo === produto.codigo)
        item.qtd += 1;
        console.log(this.produtos)
        return
      }
      this.produtos.push({ ...produto, qtd: 1 })
      console.log(this.produtos)
    }
    this.removeProduto = (produto) => {
      //verifica se existe item no carrinho pelo codigo
      const existeNoCarrinho = !!this.produtos.find(item => item.codigo === produto.codigo)

      // se existir produto no carrinho vai verificar se existe mais de 1
      if (existeNoCarrinho) {
        const item = this.produtos.find(item => item.codigo === produto.codigo)
        const possuiMaisDeUmItem = item.qtd > 1;

        // se existir mais de um, remove um item da qtd
        if (possuiMaisDeUmItem) {
          item.qtd -= 1;
          console.log(this.produtos);
          return
        }

        // se tiver apenas 1, remove item do carrinho
        const index = this.produtos.findIndex(item => item.codigo === produto.codigo)
        this.produtos.splice(index, 1)
        console.log(this.produtos);
      }
    }
  }

}