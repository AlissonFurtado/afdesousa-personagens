import type { PersonagemProps } from './tipos.js';
export declare const CORES_DONA_FATURA: {
    readonly papel: "#FFFDF2";
    readonly tinta: "#222";
    readonly alerta: "#FF5A4F";
    readonly anotado: "#19c36b";
    readonly luva: "#fff";
    readonly boca: "#7a1f2b";
    readonly lingua: "#F2748C";
};
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
export declare function DonaFatura({ pose: p, t, x, y, escala, opacidade, espelho, pega, fonte }: DonaFaturaProps): import("react").JSX.Element;
