import { type Acao } from './poses.js';
import { type IdPersonagem } from './catalogo.js';
/**
 * Relógio em segundos para animar no navegador. Para quando a aba fica em
 * segundo plano e fica em 0 para quem pediu menos movimento no sistema.
 */
export declare function useTempo(ativo?: boolean): number;
export interface PersonagemAnimadoProps {
    quem: IdPersonagem;
    acao?: Acao;
    /** Altura em px. */
    altura?: number;
    bpm?: number;
    /** Só o Dogia: olhos de contente. */
    feliz?: boolean;
    /** Só a Dona Fatura: de 0 a 1, o quanto já foi pega. */
    pega?: number;
    /** false congela no primeiro quadro. */
    animar?: boolean;
    className?: string;
}
/** O personagem já se mexendo — é o que o app usa na maioria das telas. */
export declare function PersonagemAnimado({ quem, acao, altura, bpm, feliz, pega, animar, className }: PersonagemAnimadoProps): import("react").JSX.Element;
