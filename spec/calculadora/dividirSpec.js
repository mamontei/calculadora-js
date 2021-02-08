describe("cobertura de testes para funcao de divisao", function (){

var Calculadora = require ("../../src/js/calculadora.js");

it('deve retornar 2 para teste de divisao entre 6 e 3 ', function() {
	expect(Calculadora.dividir(6 , 3)).toEqual(2);
});

it('deve retornar 2 para teste de divisao entre 6 e 3 formato texto', function() {
	expect(Calculadora.dividir('6','3')).toEqual(2);
});

it('Deve retornar 1.5 para divisao entre 4.5 e 3  ', function() {
  expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
});

it('Deve retornar Erro para divisao por 0 ', function() {
  expect(Calculadora.dividir(4.5, 0)).toEqual('Erro');
});

it('Deve retornar 0 para quando o primeira parametro nao for numerico', function() {
  expect(Calculadora.dividir(undefined, 10)).toEqual(0);
});

it('Deve retornar 0 para quando o segundo parametro nao for numerico', function() {
  expect(Calculadora.dividir(10, undefined)).toEqual(0);
});

});