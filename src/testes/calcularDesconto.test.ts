import { test, describe, expect } from 'vitest';
import { calcularDesconto } from '../calcularDesconto.js';


  const valoresMocks =  [

    {valor: 2500, percentual: -1},
    {valor: 1500, percentual: -10},
    {valor: 15000, percentual: -5},
    {valor: 20000, percentual: 30},
    {valor: 12000, percentual: 20},
    {valor: 12000, percentual: 200},
    {valor: 12000, percentual: 150},
    {valor: 1000, percentual: 0},
    {valor: 500.10, percentual: 0},
    {valor: 0, percentual: 0},
    {valor: 1000, percentual: 100},
    {valor: 2000.10, percentual: 100},
    {valor: 0, percentual: 100},
    {valor: -0, percentual: 100},
    {valor: -15, percentual: 100},

   ]

describe('Calcular desconto com sucesso',()=>{
    test('Desconto de 10% em um valor positivo',()=>{
    const list = valoresMocks.filter((obj)=> obj.valor > 0);
    for(const executar of list) {
      const calculoDezPorcento= executar.valor - (executar.valor * 10 / 100)
        expect(calcularDesconto(executar.valor,10)).toBe(calculoDezPorcento);
      }
    
});
  
    test('Percentual 0 preserva o valor positivo',()=>{
      const list = valoresMocks.filter((obj)=> obj.percentual === 0 && obj.valor >= 0);
      for(const executar of list) {
        expect(calcularDesconto(executar.valor, executar.percentual)).toBe(executar.valor);
      }
    });
    test('Percentual 100 aplicado a um valor positivo resulta em zero',()=>{
      const list = valoresMocks.filter((obj)=> obj.percentual === 100 && obj.valor >= 0);
      for(const executar of list) {
        expect(calcularDesconto(executar.valor, executar.percentual)).toBeCloseTo(0,5);
      }
    });
});

describe('Calcular desconto com valor zero', () => {
    test('Valor 0 resulta em 0', () => {
        const list = valoresMocks.filter((obj) => obj.valor === 0);
        for (const executar of list) {
          expect(calcularDesconto(executar.valor, executar.percentual)).toBe(0);
        }
    });
});
    

describe('Erro ao calcular descontos',()=>{
  
  test('Verficar se quando o Percentual está abaixo de 0 lança erro',()=>{
      for(const executar of valoresMocks) {
        if(executar.percentual < 0){
          expect(() => calcularDesconto(executar.valor, executar.percentual)).toThrow("Valores inválidos");
        }
    }
  });

  test('Percentual acima de 100 lança erro',()=>{
      valoresMocks.forEach((percorre)=>{
        if(percorre.percentual > 100){
          expect(()=> calcularDesconto(percorre.valor,percorre.percentual)).toThrow("Valores inválidos");
        }
      })
  });

    test('Verificar se o valor negativo lança o error',()=>{
      const listaValorNegativo = valoresMocks.filter((obj)=> obj.valor < 0);
       for(const executar of listaValorNegativo) {
          expect(() => calcularDesconto(executar.valor, executar.percentual)).toThrow("Valores inválidos");
        
    }
    })
    

});
