import type { PersonagemProps } from './tipos.js';
export declare const CORES_DOGIA: {
    readonly pelo: "#FFC107";
    readonly contorno: "#E0A800";
    readonly orelha: "#C8862A";
    readonly creme: "#FFF8DC";
    readonly tinta: "#1F1F1F";
    readonly coleira: "#FF5A4F";
    readonly medalha: "#FFD700";
    readonly medalhaBorda: "#B8860B";
    readonly boca: "#7a1f2b";
    readonly lingua: "#F2748C";
};
export interface DogiaProps extends PersonagemProps {
    /** Olhos fechados em arco, de quem está contente. */
    feliz?: boolean;
}
/**
 * O Dogia de corpo inteiro. A cabeça é o mesmo desenho do mascote do app
 * (viewBox 120×120), então os dois são reconhecidos como o mesmo cachorro.
 * Devolve um <g>: ponha dentro de um <svg> seu ou de um <Quadro>.
 */
export declare function Dogia({ pose: p, t, x, y, escala, opacidade, espelho, feliz }: DogiaProps): import("react").JSX.Element;
