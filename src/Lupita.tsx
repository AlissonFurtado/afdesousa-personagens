import { membro } from './membro.js';
import type { PersonagemProps, Ponto } from './tipos.js';

export const CORES_LUPITA = {
  pena: '#1FB57A',
  penaEscura: '#128A5B',
  contorno: '#0C6B45',
  barriga: '#EAFBF0',
  disco: '#BDF3D6',
  tinta: '#16302A',
  bico: '#FF8A3D',
  bicoEscuro: '#E06A1B',
  lupaAro: '#8A5CFF',
  lupaCabo: '#5B36C9',
  lupaVidro: 'rgba(190,240,255,0.45)',
} as const;

export interface LupitaProps extends PersonagemProps {
  /** Olhos fechados em arco, de quem está contente. */
  feliz?: boolean;
  /** A lupa na asa direita. É a marca dela; tire só se a cena pedir. */
  lupa?: boolean;
  /**
   * Para onde ela olha: [-1..1, -1..1], sendo [1, 0] a direita dela na tela.
   * Sem isso os olhos passeiam sozinhos.
   */
  olhar?: Ponto;
}

/**
 * A Lupita: coruja verde de olhões, com uma lupa na asa. Fica de olho no preço.
 * É do mundo do Verificado Agora — não aparece junto com os personagens do Dogia.
 * Devolve um <g>: ponha dentro de um <svg> seu ou de um <Quadro>.
 */
export function Lupita({ pose: p, t = 0, x = 0, y = 0, escala = 1, opacidade = 1, espelho = 1, feliz, lupa = true, olhar }: LupitaProps) {
  const C = CORES_LUPITA;
  const ombros: Ponto[] = [[-40, -104], [40, -104]];
  const quadril: Ponto[] = [[-16, -26], [16, -26]];
  const piscando = t % 3.4 > 3.26;
  const ox = olhar ? olhar[0] * 6 : 4 * Math.sin(t * 1.7);
  const oy = olhar ? olhar[1] * 5 : 0;
  const tufo = 6 * Math.sin(t * 9);
  const sorrindo = feliz || p.boca > 0.7;
  return (
    <g transform={`translate(${x + p.balanco * escala} ${y + p.pulo * escala}) scale(${escala * espelho} ${escala}) rotate(${p.inclinacao} 0 -60)`} opacity={opacidade}>
      <ellipse cx={0} cy={4} rx={52} ry={9} fill="rgba(0,0,0,0.35)" transform={`translate(${-p.balanco} ${-p.pulo})`} />
      <path d={membro(quadril[0], p.peEsq, -5)} stroke={C.bico} strokeWidth={7} strokeLinecap="round" fill="none" />
      <path d={membro(quadril[1], p.peDir, 5)} stroke={C.bico} strokeWidth={7} strokeLinecap="round" fill="none" />
      <ellipse cx={p.peEsq[0] - 3} cy={p.peEsq[1]} rx={15} ry={7} fill={C.bico} stroke={C.bicoEscuro} strokeWidth={2} />
      <ellipse cx={p.peDir[0] + 3} cy={p.peDir[1]} rx={15} ry={7} fill={C.bico} stroke={C.bicoEscuro} strokeWidth={2} />
      {/* corpo */}
      <ellipse cx={0} cy={-68} rx={52} ry={60} fill={C.pena} stroke={C.contorno} strokeWidth={2} />
      <ellipse cx={0} cy={-58} rx={33} ry={42} fill={C.barriga} />
      <g stroke={C.penaEscura} strokeWidth={3} strokeLinecap="round" fill="none" opacity={0.7}>
        <path d="M -15 -66 q 5 7 10 0" />
        <path d="M 5 -66 q 5 7 10 0" />
        <path d="M -5 -48 q 5 7 10 0" />
        <path d="M -15 -30 q 5 7 10 0" />
        <path d="M 5 -30 q 5 7 10 0" />
      </g>
      {/* cabeça */}
      <g transform={`translate(0 -146) rotate(${p.cabeca})`}>
        <path d="M -52 -18 L -60 -64 L -20 -40 Z" fill={C.penaEscura} stroke={C.contorno} strokeWidth={2} strokeLinejoin="round" transform={`rotate(${-tufo} -40 -30)`} />
        <path d="M 52 -18 L 60 -64 L 20 -40 Z" fill={C.penaEscura} stroke={C.contorno} strokeWidth={2} strokeLinejoin="round" transform={`rotate(${tufo} 40 -30)`} />
        <ellipse cx={0} cy={0} rx={57} ry={48} fill={C.pena} stroke={C.contorno} strokeWidth={2} />
        <circle cx={-23} cy={-2} r={26} fill={C.disco} />
        <circle cx={23} cy={-2} r={26} fill={C.disco} />
        {sorrindo ? (
          <g stroke={C.tinta} strokeWidth={4.5} strokeLinecap="round" fill="none">
            <path d="M -35 0 q 12 -15 24 0" />
            <path d="M 11 0 q 12 -15 24 0" />
          </g>
        ) : piscando ? (
          <g stroke={C.tinta} strokeWidth={4.5} strokeLinecap="round">
            <path d="M -35 -2 h 24" />
            <path d="M 11 -2 h 24" />
          </g>
        ) : (
          <g>
            <circle cx={-23} cy={-2} r={18} fill="#fff" stroke={C.tinta} strokeWidth={2.5} />
            <circle cx={23} cy={-2} r={18} fill="#fff" stroke={C.tinta} strokeWidth={2.5} />
            <circle cx={-23 + ox} cy={-2 + oy} r={9} fill={C.tinta} />
            <circle cx={23 + ox} cy={-2 + oy} r={9} fill={C.tinta} />
            <circle cx={-20 + ox} cy={-6 + oy} r={3} fill="#fff" />
            <circle cx={26 + ox} cy={-6 + oy} r={3} fill="#fff" />
          </g>
        )}
        {/* bico: a parte de baixo desce quando ela fala */}
        <path d={`M -7 16 L 7 16 L 0 ${22 + 15 * p.boca} Z`} fill={C.bicoEscuro} strokeLinejoin="round" />
        <path d="M -10 12 L 10 12 L 0 27 Z" fill={C.bico} stroke={C.bicoEscuro} strokeWidth={1.5} strokeLinejoin="round" />
      </g>
      {/* asas */}
      <path d={membro(ombros[0], p.maoEsq, -14)} stroke={C.penaEscura} strokeWidth={17} strokeLinecap="round" fill="none" />
      <path d={membro(ombros[1], p.maoDir, 14)} stroke={C.penaEscura} strokeWidth={17} strokeLinecap="round" fill="none" />
      <circle cx={p.maoEsq[0]} cy={p.maoEsq[1]} r={11} fill={C.penaEscura} stroke={C.contorno} strokeWidth={2} />
      {lupa && (
        <g transform={`translate(${p.maoDir[0]} ${p.maoDir[1]}) rotate(20)`}>
          <line x1={0} y1={0} x2={13} y2={-21} stroke={C.lupaCabo} strokeWidth={9} strokeLinecap="round" />
          <circle cx={24} cy={-40} r={21} fill={C.lupaVidro} stroke={C.lupaAro} strokeWidth={6} />
          <path d="M 11 -46 q 5 -11 16 -11" stroke="#fff" strokeWidth={3} strokeLinecap="round" fill="none" opacity={0.85} />
        </g>
      )}
      <circle cx={p.maoDir[0]} cy={p.maoDir[1]} r={11} fill={C.penaEscura} stroke={C.contorno} strokeWidth={2} />
    </g>
  );
}
