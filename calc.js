function adicao(x, y) {
  if (isNaN(x + y)) {
    return "Resultado inválido.";
  }
  return `${x} + ${y} = ${x + y}`;
}

function subtracao(x, y) {
  if (isNaN(x - y)) {
    return "Resultado inválido.";
  }
  return `${x} - ${y} = ${x - y}`;
}

function multiplicacao(x, y) {
  if (isNaN(x * y)) {
    return "Resultado inválido.";
  }
  return `${x} * ${y} = ${x * y}`;
}

function divisao(x, y) {
  if (isNaN(x / y)) {
    return "Resultado inválido.";
  }
  if (y === 0) {
    return "Não é possível dividir um número por zero";
  }
  return `${x} / ${y} = ${x / y}`;
}

module.exports = {
  add: adicao,
  sub: subtracao,
  mult: multiplicacao,
  div: divisao,
};
