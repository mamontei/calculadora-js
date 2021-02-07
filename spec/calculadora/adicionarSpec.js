describe("cobertura de testes para funcao de adicao", function (){

var Calculadora = require ("../../src/js/calculadora.js");

it('deve retornar 5 para teste de soma entre 3 e 2 ', function() {
	expect(Calculadora.adicionar(3,2)).toEqual(5);
});

it('Deve retornar 6 para soma entre 9 e -3  no formato de texto para parmetros', function() {
  expect(Calculadora.adicionar('9','-3')).toEqual(6);
});

it('Deve retornar 4.5 para soma entre 1.5 e 3 ', function() {
  expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
});

it('Deve retornar 0 para quando o primeira parametro nao for numerico', function() {
  expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
});

it('Deve retornar 0 para quando o segundo parametro nao for numerico', function() {
  expect(Calculadora.adicionar(10, undefined)).toEqual(0);
});

});