import { CORES_DOGIA } from './Dogia.js';
import { CORES_DONA_FATURA } from './DonaFatura.js';
/** O elenco. Personagem novo entra aqui e ganha um componente com o mesmo id. */
export const PERSONAGENS = [
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
