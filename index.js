let dados = require("./desafio.json");
let fs = require("fs");
let SHA1 = require("./criptoSHA1")
let criptografado = dados.cifrado;
let descriptografado = "";
const abcedario = "abcdefghijklmnopqrstuvwxyz";

const Descriptografar = () => {
for (let letra of criptografado) {
let posicao = abcedario.indexOf(letra);
if (posicao != -1) {
    posicao < dados.numero_casas ?  posicao = posicao + (26 - dados.numero_casas) : posicao = posicao - dados.numero_casas;
    descriptografado = descriptografado + abcedario[posicao];  
} else {
    descriptografado = descriptografado + letra;
};
};
dados.decifrado = descriptografado;
dados.resumo_criptografico = SHA1(descriptografado);
fs.writeFile("./answer.json", JSON.stringify(dados), function (err) {
    if (err) throw err;
    console.log('Arquivo answer salvo com sucesso!');
  });
};

Descriptografar();