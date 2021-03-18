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

  for (let index = 0; index <= totalSequencia; index++) {
    ultimoResultado = fibonacci(index, ultimoResultado);
    sequencia.push(ultimoResultado);
  }

  function fibonacci(index, ultimoResultado) {
    let soma = penultimoResultado + ultimoResultado;
    penultimoResultado = ultimoResultado;
    return index === 0 || index === 1 ? index : soma;
  }

  console.timeEnd('fibonacci');
  return sequencia.join(', ');
}
