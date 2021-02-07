describe("cobertura de testes para funcao de subtracao", function (){

var Calculadora = require ("../../src/js/calculadora.js");

it('deve retornar 5 para teste de subtracao entre 13 e 8 ', function() {
	expect(Calculadora.subtrair(13,8)).toEqual(5);
});

it('deve retornar 5 para teste de subtracao entre 13 e 8 formato texto', function() {
	expect(Calculadora.subtrair('13','8')).toEqual(5);
});

it('Deve retornar 1.5 para soma entre 3 e 1.5  ', function() {
  expect(Calculadora.subtrair(3 , 1.5)).toEqual(1.5);
});

it('Deve retornar 0 para quando o primeira parametro nao for numerico', function() {
  expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
});

it('Deve retornar 0 para quando o segundo parametro nao for numerico', function() {
  expect(Calculadora.subtrair(10, undefined)).toEqual(0);
});

});