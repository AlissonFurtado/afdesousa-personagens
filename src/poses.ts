import type { Ponto, Pose } from './tipos.js';

/**
 * Poses em função do tempo (segundos). Nada aqui depende de navegador nem de
 * Remotion: o app passa o relógio do requestAnimationFrame e o vídeo passa
 * frame / fps, e o movimento é o mesmo nos dois.
 */

const limitar = (v: number) => Math.min(1, Math.max(0, v));

/** Quantas batidas da música já passaram em `t` segundos. */
export const batida = (t: number, bpm = 120) => t * (bpm / 60);

/** Mistura duas poses: k = 0 devolve `a`, k = 1 devolve `b`. */
export function misturar(a: Pose, b: Pose, k: number): Pose {
  const m = (x: number, y: number) => x + (y - x) * k;
  const mp = (p: Ponto, q: Ponto): Ponto => [m(p[0], q[0]), m(p[1], q[1])];
  return {
    maoEsq: mp(a.maoEsq, b.maoEsq),
    maoDir: mp(a.maoDir, b.maoDir),
    peEsq: mp(a.peEsq, b.peEsq),
    peDir: mp(a.peDir, b.peDir),
    pulo: m(a.pulo, b.pulo),
    balanco: m(a.balanco, b.balanco),
    inclinacao: m(a.inclinacao, b.inclinacao),
    boca: m(a.boca, b.boca),
    cabeca: m(a.cabeca, b.cabeca),
  };
}

export interface OpcoesRitmo {
  bpm?: number;
  /** Atraso em batidas, para dois personagens não dançarem idênticos. */
  defasagem?: number;
}

/** Em pé, respirando. */
export function parado(t: number): Pose {
  const r = Math.sin(t * 2.2);
  return {
    maoEsq: [-40, -62 + 2 * r],
    maoDir: [40, -62 + 2 * r],
    peEsq: [-18, 0],
    peDir: [18, 0],
    pulo: -2 * (0.5 + 0.5 * r),
    balanco: 0,
    inclinacao: 0,
    boca: 0.08,
    cabeca: 2 * Math.sin(t * 1.1),
  };
}

/** Dá tchau com a mão direita. */
export function acenando(t: number): Pose {
  const base = parado(t);
  const vai = Math.sin(t * 9);
  return {
    ...base,
    maoDir: [58 + 16 * vai, -196 - 4 * Math.abs(vai)],
    inclinacao: -3 + 1.5 * vai,
    boca: 0.3,
    cabeca: -5 + 2 * vai,
  };
}

/** As duas mãos na cabeça, boca aberta, tremendo. */
export function gritando(t: number, { bpm = 120 }: OpcoesRitmo = {}): Pose {
  const b = batida(t, bpm);
  const tremor = Math.sin(t * 47.5) * 1.6;
  return {
    maoEsq: [-44 + tremor, -176],
    maoDir: [44 + tremor, -176],
    peEsq: [-20, 0],
    peDir: [20, 0],
    pulo: -4 * Math.abs(Math.sin(Math.PI * b)),
    balanco: tremor,
    inclinacao: 3 * Math.sin(Math.PI * b),
    boca: 0.82 + 0.18 * Math.abs(Math.sin(Math.PI * b * 2)),
    cabeca: 5 * Math.sin(Math.PI * b),
  };
}

/** Três passos dos anos 80, quatro batidas cada, emendados sem tranco. */
export function dancando(t: number, { bpm = 120, defasagem = 0 }: OpcoesRitmo = {}): Pose {
  const b = batida(t, bpm) + defasagem;
  const s = Math.sin(Math.PI * b);
  const c = Math.cos(Math.PI * b);
  const pulo = -9 * Math.abs(s);
  const balanco = 9 * Math.sin(Math.PI * b * 0.5);
  const passos: Pose[] = [
    // apontar da discoteca: um braço sobe e cruza, o outro na cintura
    {
      maoEsq: [-34, -84],
      maoDir: [c > 0 ? 54 : -22, c > 0 ? -208 - 8 * Math.abs(s) : -70],
      peEsq: [-18 + (c > 0 ? -8 : 0), 0],
      peDir: [18 + (c > 0 ? 0 : 8), c > 0 ? 0 : -8],
      pulo, balanco, inclinacao: 5 * c, boca: 0.25, cabeca: 6 * c,
    },
    // soco no ar: os braços sobem em turnos, joelhos levantam
    {
      maoEsq: [-44, -150 - 46 * Math.max(0, s)],
      maoDir: [44, -150 - 46 * Math.max(0, -s)],
      peEsq: [-18, -12 * Math.max(0, -s)],
      peDir: [18, -12 * Math.max(0, s)],
      pulo, balanco: 0, inclinacao: 4 * s, boca: 0.4, cabeca: -5 * s,
    },
    // corridinha: braços vão e voltam, pés deslizam
    {
      maoEsq: [-40 - 16 * s, -96 + 10 * c],
      maoDir: [40 - 16 * s, -96 - 10 * c],
      peEsq: [-18 + 14 * s, -10 * Math.max(0, c)],
      peDir: [18 + 14 * s, -10 * Math.max(0, -c)],
      pulo, balanco, inclinacao: -6 * s, boca: 0.2, cabeca: 4 * s,
    },
  ];
  const k = Math.floor(b / 4);
  const u = limitar((b / 4 - k) * 6);
  const de = passos[(((k - 1) % 3) + 3) % 3];
  const para = passos[((k % 3) + 3) % 3];
  return misturar(de, para, u);
}

/** Braços para o alto, pulando na batida. */
export function comemorando(t: number, { bpm = 120 }: OpcoesRitmo = {}): Pose {
  const b = batida(t, bpm);
  const sobe = 12 * Math.sin(Math.PI * b * 2);
  return {
    maoEsq: [-56, -190 - sobe],
    maoDir: [56, -190 + sobe],
    peEsq: [-18, 0],
    peDir: [18, 0],
    pulo: -34 * Math.abs(Math.sin(Math.PI * b)),
    balanco: 0,
    inclinacao: 4 * Math.sin(Math.PI * b),
    boca: 0.7,
    cabeca: 0,
  };
}

/** Aponta com a asa direita (a da lupa) para o lado e para cima. */
export function apontando(t: number): Pose {
  const base = parado(t);
  const vai = Math.sin(t * 5);
  return { ...base, maoDir: [82 + 4 * vai, -150 - 3 * vai], inclinacao: 4, boca: 0.3, cabeca: 6 };
}

/** Traz a mão direita para a frente do rosto e se inclina: é olhar de perto. */
export function espiando(t: number): Pose {
  const base = parado(t);
  const vai = Math.sin(t * 3);
  return { ...base, maoDir: [-12 + 2 * vai, -118], maoEsq: [-46, -70], inclinacao: 6 + vai, boca: 0.15, cabeca: 4 };
}

/** As ações prontas, pelo nome — é o que o app escolhe por string. */
export type Acao = 'parado' | 'acenando' | 'apontando' | 'espiando' | 'gritando' | 'dancando' | 'comemorando';
export const ACOES: Record<Acao, (t: number, opcoes?: OpcoesRitmo) => Pose> = { parado, acenando, apontando, espiando, gritando, dancando, comemorando };
