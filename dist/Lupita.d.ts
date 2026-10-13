import type { PersonagemProps, Ponto } from './tipos.js';
export declare const CORES_LUPITA: {
    readonly pena: "#1FB57A";
    readonly penaEscura: "#128A5B";
    readonly contorno: "#0C6B45";
    readonly barriga: "#EAFBF0";
    readonly disco: "#BDF3D6";
    readonly tinta: "#16302A";
    readonly bico: "#FF8A3D";
    readonly bicoEscuro: "#E06A1B";
    readonly lupaAro: "#8A5CFF";
    readonly lupaCabo: "#5B36C9";
    readonly lupaVidro: "rgba(190,240,255,0.45)";
};
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
export declare function Lupita({ pose: p, t, x, y, escala, opacidade, espelho, feliz, lupa, olhar }: LupitaProps): import("react").JSX.Element;
