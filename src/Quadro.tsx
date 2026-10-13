import type { ReactNode } from 'react';

/** Caixa que cabe um personagem em qualquer pose pronta, com os pés em (0, 0). */
export const CAIXA = { x: -130, y: -280, largura: 260, altura: 300 } as const;

export interface QuadroProps {
  /** Altura em px; a largura acompanha a proporção. */
  altura?: number;
  /** Texto para leitor de tela. Sem ele, o desenho é tratado como enfeite. */
  rotulo?: string;
  className?: string;
  children: ReactNode;
}

/** Um <svg> do tamanho certo para um personagem sozinho — o jeito simples de usar no app. */
export function Quadro({ altura = 160, rotulo, className, children }: QuadroProps) {
  return (
    <svg
      role={rotulo ? 'img' : undefined}
      aria-label={rotulo}
      aria-hidden={rotulo ? undefined : true}
      width={(altura * CAIXA.largura) / CAIXA.altura}
      height={altura}
      viewBox={`${CAIXA.x} ${CAIXA.y} ${CAIXA.largura} ${CAIXA.altura}`}
      className={className}
      style={{ overflow: 'visible' }}
    >
      {children}
    </svg>
  );
}
