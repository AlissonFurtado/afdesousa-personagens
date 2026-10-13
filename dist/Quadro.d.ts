import type { ReactNode } from 'react';
/** Caixa que cabe um personagem em qualquer pose pronta, com os pés em (0, 0). */
export declare const CAIXA: {
    readonly x: -130;
    readonly y: -280;
    readonly largura: 260;
    readonly altura: 300;
};
export interface QuadroProps {
    /** Altura em px; a largura acompanha a proporção. */
    altura?: number;
    /** Texto para leitor de tela. Sem ele, o desenho é tratado como enfeite. */
    rotulo?: string;
    className?: string;
    children: ReactNode;
}
/** Um <svg> do tamanho certo para um personagem sozinho — o jeito simples de usar no app. */
export declare function Quadro({ altura, rotulo, className, children }: QuadroProps): import("react").JSX.Element;
