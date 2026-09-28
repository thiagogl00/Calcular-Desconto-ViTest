import { test, describe, expect } from 'vitest';
import { calcularDesconto } from '../calcularDesconto.js';

describe('Calcular desconto com sucesso',()=>{
    test('Desconto de 10%',()=>{
        //Código
    });
    test('Percentual 0 preserva o valor',()=>{
        //Código
    });
    test('Percentual 100 resulta em zero',()=>{
        //Código
    });
    test('Valor 0 resulta em 0',()=>{
        //Código
    });
    test('Valor decimal',()=>{
        //Código
    });
});

describe('Erro ao calcular descontos',()=>{
  test('Percentual abaixo de 0 lança erro',()=>{
    //Código
  });
  test('Percentual acima de 100 lança erro',()=>{
    //Código
  });
});
