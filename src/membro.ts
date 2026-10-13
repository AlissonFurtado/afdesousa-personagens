import type { Ponto } from './tipos.js';

/** Braço ou perna "macarrão": curva de uma junta até o alvo, dobrando para fora. */
export const membro = (de: Ponto, ate: Ponto, dobra: number) =>
  `M ${de[0]} ${de[1]} Q ${(de[0] + ate[0]) / 2 + dobra} ${(de[1] + ate[1]) / 2 + Math.abs(dobra) * 0.25} ${ate[0]} ${ate[1]}`;
