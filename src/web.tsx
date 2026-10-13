'use client';

import { useEffect, useState } from 'react';
import { Dogia } from './Dogia.js';
import { CORES_DONA_FATURA, DonaFatura } from './DonaFatura.js';
import { Lupita } from './Lupita.js';
import { ACOES, type Acao } from './poses.js';
import { Quadro } from './Quadro.js';
import { PERSONAGENS, type IdPersonagem } from './catalogo.js';

/**
 * Relógio em segundos para animar no navegador. Para quando a aba fica em
 * segundo plano e fica em 0 para quem pediu menos movimento no sistema.
 */
export function useTempo(ativo = true): number {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!ativo || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const inicio = performance.now();
    let quadro = requestAnimationFrame(function passo(agora) {
      setT((agora - inicio) / 1000);
      quadro = requestAnimationFrame(passo);
    });
    return () => cancelAnimationFrame(quadro);
  }, [ativo]);
  return t;
}

export interface PersonagemAnimadoProps {
  quem: IdPersonagem;
  acao?: Acao;
  /** Altura em px. */
  altura?: number;
  bpm?: number;
  /** Dogia e Lupita: olhos de contente. */
  feliz?: boolean;
  /** Só a Dona Fatura: de 0 a 1, o quanto já foi pega. */
  pega?: number;
  /** false congela no primeiro quadro. */
  animar?: boolean;
  className?: string;
}

/** O personagem já se mexendo — é o que o app usa na maioria das telas. */
export function PersonagemAnimado({ quem, acao = 'parado', altura, bpm, feliz, pega, animar = true, className }: PersonagemAnimadoProps) {
  const t = useTempo(animar);
  const pose = ACOES[acao](t, { bpm });
  const nome = PERSONAGENS.find((p) => p.id === quem)?.nome ?? quem;
  return (
    <Quadro altura={altura} rotulo={nome} className={className}>
      {quem === 'dogia' ? <Dogia pose={pose} t={t} feliz={feliz} /> : quem === 'lupita' ? <Lupita pose={pose} t={t} feliz={feliz} /> : <DonaFatura pose={pose} t={t} pega={pega} contorno={CORES_DONA_FATURA.papel} />}
    </Quadro>
  );
}
