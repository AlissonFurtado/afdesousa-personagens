import type { Pose } from './tipos.js';
/** Quantas batidas da música já passaram em `t` segundos. */
export declare const batida: (t: number, bpm?: number) => number;
/** Mistura duas poses: k = 0 devolve `a`, k = 1 devolve `b`. */
export declare function misturar(a: Pose, b: Pose, k: number): Pose;
export interface OpcoesRitmo {
    bpm?: number;
    /** Atraso em batidas, para dois personagens não dançarem idênticos. */
    defasagem?: number;
}
/** Em pé, respirando. */
export declare function parado(t: number): Pose;
/** Dá tchau com a mão direita. */
export declare function acenando(t: number): Pose;
/** As duas mãos na cabeça, boca aberta, tremendo. */
export declare function gritando(t: number, { bpm }?: OpcoesRitmo): Pose;
/** Três passos dos anos 80, quatro batidas cada, emendados sem tranco. */
export declare function dancando(t: number, { bpm, defasagem }?: OpcoesRitmo): Pose;
/** Braços para o alto, pulando na batida. */
export declare function comemorando(t: number, { bpm }?: OpcoesRitmo): Pose;
/** As ações prontas, pelo nome — é o que o app escolhe por string. */
export type Acao = 'parado' | 'acenando' | 'gritando' | 'dancando' | 'comemorando';
export declare const ACOES: Record<Acao, (t: number, opcoes?: OpcoesRitmo) => Pose>;
