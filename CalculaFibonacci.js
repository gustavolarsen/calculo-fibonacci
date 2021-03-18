/* Sequencia de Fibonacci
 * i = 0 = 0
 * i = 1 = 1
 * i = 2 = 1
 * i = 3 = 2
 * i = 4 = 3
 * i = 5 = 5
 * i = 6 = 8
 */

function calculaFibonacci(totalSequencia) {
  console.time('fibonacci');
  let sequencia = [];
  let penultimoResultado = 0;
  let ultimoResultado = 0;

  for (let index = 0; index < totalSequencia; index++) {
    ultimoResultado = aplicaFormula(index, ultimoResultado);
    sequencia.push(ultimoResultado);
  }

  function aplicaFormula(indexAtual, ultimoResultado) {
    if (indexAtual === 0 || indexAtual === 1) {
      penultimoResultado = ultimoResultado;
      return indexAtual;
    } else {
      let soma = penultimoResultado + ultimoResultado;
      penultimoResultado = ultimoResultado;
      return soma;
    }
  }
  console.timeEnd('fibonacci');
  return sequencia.join(', ');
}

function calculaFibonacciRecursiva(totalSequencia) {
  console.time('fibonacciRecursiva');
  let sequencia = [];

  for (let index = 0; index < totalSequencia; index++) {
    let resultado = aplicaFormula(index);
    sequencia.push(resultado);
  }

  function aplicaFormula(indexAtual) {
    if (indexAtual === 0 || indexAtual === 1) {
      return indexAtual;
    } else {
      return aplicaFormula(indexAtual - 1) + aplicaFormula(indexAtual - 2);
    }
  }
  console.timeEnd('fibonacciRecursiva');
  return sequencia.join(', ');
}
