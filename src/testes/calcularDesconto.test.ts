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


   ]

describe('Calcular desconto com sucesso',()=>{
    test('Desconto de 10% em um valor positivo',()=>{
        //Código
    });
    test('Percentual 0 preserva o valor positivo',()=>{
        //Código
    });
    test('Percentual 100 aplicado a um valor positivo resulta em zero',()=>{
        //Código
    });
    test('Valor 0 resulta em 0',()=>{
        //Código
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

  
    test.each(valoresMocks)('Verificar se o valor negativo lança o error',(percorre)=>{
      expect(()=> calcularDesconto(percorre.valor,percorre.percentual)).toThrow
    })

    }
);
