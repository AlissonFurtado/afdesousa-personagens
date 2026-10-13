import type { Ponto } from './tipos.js';
/** Braço ou perna "macarrão": curva de uma junta até o alvo, dobrando para fora. */
export declare const membro: (de: Ponto, ate: Ponto, dobra: number) => string;
