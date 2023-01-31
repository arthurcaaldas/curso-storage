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
  }
}