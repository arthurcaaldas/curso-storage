const carrinho = new Carrinho();

const produtos = [
  new Produto(123, 'Tração DID xre 300', 129.99, "2010 até 2023."), 
  new Produto(321, 'Pneu traseiro xre 300', 239.99, "2010 até 2023."), 
  new Produto(555, 'Pastilha de freio xre 300', 69.99, "2010 até 2023."), 
  new Produto(654, 'Danilo lindao', 9999999.99, "2010 até 2023."), 
];

const addItemToTemplate = (produto) => {
  const container = document.getElementById("lista-itens");
  const template = document.getElementById("item");

  document.getElementById("item-titulo").innerHTML = produto.nome;
  document.getElementById("item-ano").innerHTML = produto.ano;
  document.getElementById("item-preco").innerHTML = produto.preco;
  
  const item = template.cloneNode(true);
  console.log(item.);
  item.removeAttribute('style');
  item.addEventListener('click', () => carrinho.addProduto(produto))
  item.addEventListener('click', () => carrinho.removeProduto(produto))

  container.appendChild(item);
}

const removeItemToTemplate = (produto) => {
 
}

window.onload = () => {
  produtos.forEach(produto => addItemToTemplate(produto));
}