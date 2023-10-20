function Item(nome, classe) {
    this.Nome = nome;
    this.Classe = classe;
}

function Arma(nome, classe, dano, atkspeed) {
    Item.call(this, nome, classe);
    this.Dano = dano;
    this.Velocidade_de_ataque = atkspeed;
}

function Consumivel(nome, classe, efeito) {
    Item.call(this, nome, classe);
    this.Efeito = efeito;
}

const item01 = new Item("Chave da Masmorra", "Utilizável", "Uma chave velha com aspecto enferrujado.");

const arma01 = new Arma("Espada de Ferro", "Arma", "200", "1.2 ApS");
const arma02 = new Arma("Adaga de Ferro", "Arma", "100", "0.7 ApS");

const consumivel01 = new Consumivel("Pão élfico", "Consumível", "Restaura 15HP quando consumido");

console.log(item01);
console.log(arma01);
console.log(arma02);
console.log(consumivel01);