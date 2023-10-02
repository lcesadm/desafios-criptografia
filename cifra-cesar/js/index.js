const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const titulo = `
===============
CIFRA DE CESAR
===============

`;
const opcoes = `
1 - Criptografar
2 - Descriptografar
3 - Sair
`;
const inserirMudanca = "Primeiro, insira o número da mudança";
const inserirCripto = "Insira o texto que quer criptografar";
const inserirDescripto = "Insira o código que quer descriptografar";
const valorInvalido = "Insira um valor válido!\n";
const finalizado = "Conversão finalizada! ==>";
const abcedario = "abcdefghijklmnopkrstuvwxyz";

const iniciar = () => {
  readline.question("> ", (opcao) => {
    switch (opcao) {
      case "1":
      case "2":
        console.clear();
        console.log(titulo + inserirMudanca);
        mudanca(opcao);
        break;
      case "3":
        readline.close();
        break;
      default:
        console.log(valorInvalido);
        iniciar();
        break;
    }
  });
};

const conversor = (opcao, valor) => {
  readline.question("> ", (texto) => {
    let index;
    let conversao;
    let charFinal;
    let resultado = "";
    if (texto == 0) {
      console.log(valorInvalido);
      conversor(opcao, valor);
    } else {
      for (let char of texto) {
        if (abcedario.indexOf(char) >= 0)
          index = [abcedario.indexOf(char), false];
        else if (abcedario.toUpperCase().indexOf(char) >= 0)
          index = [abcedario.toUpperCase().indexOf(char), true];
        else index = false;
        if (index) {
          opcao == "1"
            ? (conversao = index[0] + (Number(valor) % abcedario.length))
            : (conversao = index[0] - (Number(valor) % abcedario.length));
          if (conversao >= abcedario.length)
            charFinal = abcedario[conversao - abcedario.length];
          else if (conversao < 0)
            charFinal = abcedario[conversao + abcedario.length];
          else charFinal = abcedario[conversao];
          index[1]
            ? (resultado = resultado + charFinal.toUpperCase())
            : (resultado = resultado + charFinal);
        } else resultado = resultado + char;
      }
      console.log(finalizado, resultado, `\n(Mudança: ${Number(valor)})`);
      readline.close();
    }
  });
};

const mudanca = (opcao) => {
  readline.question("> ", (valor) => {
    if (isNaN(valor) || valor == 0) {
      console.log(valorInvalido);
      mudanca(opcao);
    } else {
      console.clear();
      opcao == "1"
        ? console.log(titulo + inserirCripto)
        : console.log(titulo + inserirDescripto);
      conversor(opcao, valor);
    }
  });
};

console.clear();
console.log(titulo + opcoes);
iniciar();
