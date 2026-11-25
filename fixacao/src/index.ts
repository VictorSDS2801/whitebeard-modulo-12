function saudar(nome: string, idade: number): string {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

console.log(saudar("Alice", 30));

interface Produto {
    nome: string,
    preco: number,
    emEstoque: boolean
}

const meuProduto: Produto  = {
    nome: "mouse gamer",
    preco: 100,
    emEstoque: true
}

console.log(meuProduto);