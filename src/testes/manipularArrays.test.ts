// TIPOS E DADOS

export interface ExecucaoTeste {
  id: number;
  nome: string;
  status: 'sucesso' | 'falha';
  duracaoMs: number;
}

// Array tipado com 5 execuções de teste
export const execucoes: ExecucaoTeste[] = [
  { id: 1, nome: 'Login do Usuário', status: 'sucesso', duracaoMs: 120 },
  { id: 2, nome: 'Cadastro de Produto', status: 'falha', duracaoMs: 350 },
  { id: 3, nome: 'Checkout de Compra', status: 'sucesso', duracaoMs: 450 },
  { id: 4, nome: 'Envio de Email', status: 'sucesso', duracaoMs: 200 },
  { id: 5, nome: 'Exclusão de Conta', status: 'falha', duracaoMs: 180 },
];

// Manipulações com map, filter e reduce
export const nomesExecucoes = execucoes.map((e) => e.nome);

export const execucoesComSucesso = execucoes.filter((e) => e.status === 'sucesso');

export const duracaoTotalMs = execucoes.reduce((acc, e) => acc + e.duracaoMs, 0);

// Função assíncrona com simulação de latência de rede
export async function buscarExecucaoPorId(id: number): Promise<ExecucaoTeste> {
  // Simula atraso de rede (50ms)
  await new Promise((resolve) => setTimeout(resolve, 50));

  const execucao = execucoes.find((e) => e.id === id);

  if (!execucao) {
    throw new Error(`Execução de teste com ID ${id} não encontrada.`);
  }

  return execucao;
}

// TESTES COM VITEST

import { describe, it, expect } from 'vitest';
import {
  buscarExecucaoPorId,
  execucoes,
  nomesExecucoes,
  execucoesComSucesso,
  duracaoTotalMs,
} from './execucoes';

describe('Manipulação de Arrays de Execução', () => {
  it('deve mapear corretamente os nomes das execuções (map)', () => {
    expect(nomesExecucoes).toHaveLength(5);
    expect(nomesExecucoes).toContain('Login do Usuário');
  });

  it('deve filtrar apenas execuções com sucesso (filter)', () => {
    expect(execucoesComSucesso).toHaveLength(3);
    expect(execucoesComSucesso.every((e) => e.status === 'sucesso')).toBe(true);
  });

  it('deve calcular a duração total das execuções (reduce)', () => {
    expect(duracaoTotalMs).toBe(1300);
  });
});

describe('buscarExecucaoPorId (Async)', () => {
  it('deve retornar a execução correta quando o id existir (caminho de sucesso)', async () => {
    const resultado = await buscarExecucaoPorId(1);

    expect(resultado).toEqual({
      id: 1,
      nome: 'Login do Usuário',
      status: 'sucesso',
      duracaoMs: 120,
    });
  });

  it('deve lançar erro quando o id não existir (caminho de erro)', async () => {
    await expect(buscarExecucaoPorId(999)).rejects.toThrow(
      'Execução de teste com ID 999 não encontrada.'
    );
  });
});