import { membro } from './membro.js';
import type { PersonagemProps, Ponto } from './tipos.js';

export const CORES_DONA_FATURA = {
  papel: '#FFFDF2',
  tinta: '#222',
  alerta: '#FF5A4F',
  anotado: '#19c36b',
  luva: '#fff',
  boca: '#7a1f2b',
  lingua: '#F2748C',
} as const;

export interface DonaFaturaProps extends PersonagemProps {
  /**
   * De 0 a 1: o quanto o Dogia já a pegou. Acima de 0 o carimbo "OK ✓" vai
   * batendo; acima de 0,5 a faixa fica verde com "ANOTADO" e a cara brava some.
   */
  pega?: number;
  /** Fonte da faixa e do carimbo. */
  fonte?: string;
}

/**
 * A Dona Fatura: uma folha de papel com cara, código de barras, luvas e tênis.
 * É a vilã — a conta que aparece sem ninguém saber de onde veio.
 * Devolve um <g>: ponha dentro de um <svg> seu ou de um <Quadro>.
 */
export function DonaFatura({ pose: p, t = 0, x = 0, y = 0, escala = 1, opacidade = 1, espelho = 1, pega = 0, fonte = 'Montserrat, sans-serif' }: DonaFaturaProps) {
  const C = CORES_DONA_FATURA;
  const ombros: Ponto[] = [[-44, -122], [44, -122]];
  const quadril: Ponto[] = [[-18, -48], [18, -48]];
  const rendida = pega > 0.5;
  const olhar = Math.sin(t * 22.5);
  return (
    <g transform={`translate(${x + p.balanco * escala} ${y + p.pulo * escala}) scale(${escala * espelho} ${escala}) rotate(${p.inclinacao} 0 -60)`} opacity={opacidade}>
      <ellipse cx={0} cy={4} rx={56} ry={9} fill="rgba(0,0,0,0.35)" transform={`translate(${-p.balanco} ${-p.pulo})`} />
      <path d={membro(quadril[0], p.peEsq, -8)} stroke={C.tinta} strokeWidth={8} strokeLinecap="round" fill="none" />
      <path d={membro(quadril[1], p.peDir, 8)} stroke={C.tinta} strokeWidth={8} strokeLinecap="round" fill="none" />
      <ellipse cx={p.peEsq[0] - 5} cy={p.peEsq[1]} rx={17} ry={9} fill={C.alerta} stroke={C.tinta} strokeWidth={2} />
      <ellipse cx={p.peDir[0] + 5} cy={p.peDir[1]} rx={17} ry={9} fill={C.alerta} stroke={C.tinta} strokeWidth={2} />
      <g transform={`rotate(${p.cabeca * 0.6} 0 -110)`}>
        <path d="M -46 -196 H 46 V -50 l -11.5 8 -11.5 -8 -11.5 8 -11.5 -8 -11.5 8 -11.5 -8 -11.5 8 -11.5 -8 Z" fill={C.papel} stroke={C.tinta} strokeWidth={3} strokeLinejoin="round" />
        <rect x={-46} y={-196} width={92} height={22} fill={rendida ? C.anotado : C.alerta} stroke={C.tinta} strokeWidth={3} />
        <text x={0} y={-180} textAnchor="middle" fontFamily={fonte} fontWeight={800} fontSize={14} fill="#fff">{rendida ? 'ANOTADO' : 'FATURA'}</text>
        {/* rosto */}
        {rendida ? (
          <g stroke={C.tinta} strokeWidth={4} strokeLinecap="round" fill="none">
            <path d="M -24 -146 q 7 -9 14 0" />
            <path d="M 10 -146 q 7 -9 14 0" />
          </g>
        ) : (
          <g>
            <circle cx={-17} cy={-146} r={9} fill="#fff" stroke={C.tinta} strokeWidth={3} />
            <circle cx={17} cy={-146} r={9} fill="#fff" stroke={C.tinta} strokeWidth={3} />
            <circle cx={-17 + olhar} cy={-146} r={3.5} fill={C.tinta} />
            <circle cx={17 + olhar} cy={-146} r={3.5} fill={C.tinta} />
            <path d="M -30 -164 l 20 8 M 30 -164 l -20 8" stroke={C.tinta} strokeWidth={4} strokeLinecap="round" />
          </g>
        )}
        <ellipse cx={0} cy={-120} rx={6 + 9 * p.boca} ry={2.5 + 13 * p.boca} fill={C.boca} stroke={C.tinta} strokeWidth={3} />
        {p.boca > 0.45 && <ellipse cx={0} cy={-114 + 4 * p.boca} rx={6 * p.boca} ry={5 * p.boca} fill={C.lingua} />}
        {/* código de barras */}
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={i} x={-36 + i * 5.6} y={-88} width={i % 3 === 0 ? 3.6 : 1.8} height={26} fill={C.tinta} />
        ))}
        {pega > 0 && (
          <g transform={`translate(18 -96) rotate(-14) scale(${2.2 - 1.2 * pega})`} opacity={pega}>
            <rect x={-30} y={-13} width={60} height={26} rx={5} fill="none" stroke={C.anotado} strokeWidth={4} />
            <text x={0} y={6} textAnchor="middle" fontFamily={fonte} fontWeight={800} fontSize={15} fill={C.anotado}>OK ✓</text>
          </g>
        )}
      </g>
      <path d={membro(ombros[0], p.maoEsq, -12)} stroke={C.tinta} strokeWidth={7} strokeLinecap="round" fill="none" />
      <path d={membro(ombros[1], p.maoDir, 12)} stroke={C.tinta} strokeWidth={7} strokeLinecap="round" fill="none" />
      <circle cx={p.maoEsq[0]} cy={p.maoEsq[1]} r={11} fill={C.luva} stroke={C.tinta} strokeWidth={3} />
      <circle cx={p.maoDir[0]} cy={p.maoDir[1]} r={11} fill={C.luva} stroke={C.tinta} strokeWidth={3} />
    </g>
  );
}
