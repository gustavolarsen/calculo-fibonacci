/* Sequencia de Fibonacci
 * i = 0 = 0
 * i = 1 = 1
 * i = 2 = 1
 * i = 3 = 2
 * i = 4 = 3
 * i = 5 = 5
 * i = 6 = 8
 */

function calculaFibonacciRecursiva(valor) {
  console.time('fibonacciRecursiva');

  let sequencia = [];

  function fibonacci(index) {
    return index === 0 || index === 1
      ? index
      : fibonacci(index - 1) + fibonacci(index - 2);
  }

  for (let index = 0; index <= valor; index++) {
    sequencia.push(fibonacci(index));
  }

  console.timeEnd('fibonacciRecursiva');
  return sequencia.join(', ');
}
