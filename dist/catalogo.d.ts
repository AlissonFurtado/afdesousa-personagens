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
export declare const PERSONAGENS: FichaPersonagem[];
export type IdPersonagem = 'dogia' | 'dona-fatura' | 'lupita';
