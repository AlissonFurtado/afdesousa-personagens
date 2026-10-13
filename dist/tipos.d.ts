/** Ponto no espaço do personagem: origem nos pés, y negativo para cima. */
export type Ponto = [number, number];
/**
 * Uma pose é só onde estão as mãos e os pés e como o corpo se mexe. Braços e
 * pernas são desenhados do ombro/quadril até esses pontos, então todo
 * personagem de corpo inteiro aceita a mesma pose.
 */
export interface Pose {
    maoEsq: Ponto;
    maoDir: Ponto;
    peEsq: Ponto;
    peDir: Ponto;
    /** Deslocamento vertical do corpo (negativo = no ar). */
    pulo: number;
    /** Deslocamento lateral do corpo. */
    balanco: number;
    /** Inclinação do corpo, em graus. */
    inclinacao: number;
    /** Abertura da boca, de 0 (fechada) a 1 (grito). */
    boca: number;
    /** Giro da cabeça, em graus. */
    cabeca: number;
}
/** O que todo personagem de corpo inteiro recebe. */
export interface PersonagemProps {
    pose: Pose;
    /** Tempo em segundos — move rabo, orelhas e olhos. No Remotion: frame / fps. */
    t?: number;
    x?: number;
    y?: number;
    escala?: number;
    opacidade?: number;
    /** 1 = normal, -1 = espelhado; valores entre os dois servem para giro. */
    espelho?: number;
}
