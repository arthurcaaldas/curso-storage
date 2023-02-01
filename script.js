const carrinho = new Carrinho();

const produtos = [
  new Produto(123, 'Tração DID xre 300', 129.99, "2010 até 2023."), 
  new Produto(321, 'Pneu traseiro xre 300', 239.99, "2010 até 2023."), 
  new Produto(555, 'Pastilha de freio xre 300', 69.99, "2010 até 2023."), 
  new Produto(654, 'Danilo lindao', 9999999.99, "2010 até 2023."), 
];

const addItemToTemplate = (produto) => {
  const container = document.getElementById("lista-itens");
  const template = document.getElementsByClassName("item")[0];
  const clone = template.cloneNode(true);

  clone.removeAttribute('style')

  clone.getElementsByClassName('item-titulo')[0].innerHTML = produto.nome;
  clone.getElementsByClassName('item-ano')[0].innerHTML = produto.ano;
  clone.getElementsByClassName("item-preco")[0].innerHTML = produto.preco;

  clone.getElementsByClassName('item-comprar')[0].addEventListener('click', () => carrinho.addProduto(produto))
  clone.getElementsByClassName('item-remover')[0].addEventListener('click', () => carrinho.removeProduto(produto))

  container.appendChild(clone);
}

window.onload = () => {
  produtos.forEach(produto => addItemToTemplate(produto));
}