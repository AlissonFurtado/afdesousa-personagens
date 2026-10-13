import { CORES_DOGIA } from './Dogia.js';
import { CORES_DONA_FATURA } from './DonaFatura.js';
import { CORES_LUPITA } from './Lupita.js';

/** Cada produto tem o seu mundo. Personagens de mundos diferentes não contracenam. */
export type Mundo = 'dogia' | 'verificado-agora';

export interface FichaPersonagem {
  id: string;
  nome: string;
  mundo: Mundo;
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
    mundo: 'dogia',
    papel: 'heroi',
    quemE: 'Cachorrão amigo e brincalhão que fareja para onde foi o dinheiro da casa.',
    cores: CORES_DOGIA,
  },
  {
    id: 'dona-fatura',
    nome: 'Dona Fatura',
    mundo: 'dogia',
    papel: 'vila',
    quemE: 'A conta que chega sem ninguém saber de onde veio. Grita, assusta e só sossega quando o Dogia a pega e anota.',
    cores: CORES_DONA_FATURA,
  },
  {
    id: 'lupita',
    nome: 'Lupita',
    mundo: 'verificado-agora',
    papel: 'heroi',
    quemE: 'Coruja de olhões e lupa na asa que fica de olho no preço e conta, empolgada, quando ele cai.',
    cores: CORES_LUPITA,
  },
];

export type IdPersonagem = 'dogia' | 'dona-fatura' | 'lupita';
