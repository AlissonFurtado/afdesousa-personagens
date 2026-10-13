import { CORES_DOGIA } from './Dogia.js';
import { CORES_DONA_FATURA } from './DonaFatura.js';

export interface FichaPersonagem {
  id: string;
  nome: string;
  papel: 'heroi' | 'vila' | 'coadjuvante';
  /** Uma frase: quem é e o que quer. */
  quemE: string;
  cores: Record<string, string>;
}

/** O elenco. Personagem novo entra aqui e ganha um componente com o mesmo id. */
export const PERSONAGENS: FichaPersonagem[] = [
  {
    id: 'dogia',
    nome: 'Dogia',
    papel: 'heroi',
    quemE: 'Cachorrão amigo e brincalhão que fareja para onde foi o dinheiro da casa.',
    cores: CORES_DOGIA,
  },
  {
    id: 'dona-fatura',
    nome: 'Dona Fatura',
    papel: 'vila',
    quemE: 'A conta que chega sem ninguém saber de onde veio. Grita, assusta e só sossega quando o Dogia a pega e anota.',
    cores: CORES_DONA_FATURA,
  },
];

export type IdPersonagem = 'dogia' | 'dona-fatura';
