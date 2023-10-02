const fs = require("fs");
const dados = require("./desafio.json");
const SHA1 = require("./criptoSHA1");

const abcedario = "abcdefghijklmnopqrstuvwxyz";
let descriptografado = "";

const Descriptografar = () => {
  for (let letra of dados.cifrado) {
    let posicao = abcedario.indexOf(letra);
    if (posicao != -1) {
      posicao < dados.numero_casas
        ? (posicao = posicao + (26 - dados.numero_casas))
        : (posicao = posicao - dados.numero_casas);
      descriptografado = descriptografado + abcedario[posicao];
    } else {
      descriptografado = descriptografado + letra;
    }
  }
  dados.decifrado = descriptografado;
  dados.resumo_criptografico = SHA1(descriptografado);
  fs.writeFile("./answer.json", JSON.stringify(dados), function (err) {
    if (err) throw err;
    console.log("Arquivo answer salvo com sucesso!");
  });
};

Descriptografar();
