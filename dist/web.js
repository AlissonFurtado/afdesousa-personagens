'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Dogia } from './Dogia.js';
import { CORES_DONA_FATURA, DonaFatura } from './DonaFatura.js';
import { ACOES } from './poses.js';
import { Quadro } from './Quadro.js';
import { PERSONAGENS } from './catalogo.js';
/**
 * Relógio em segundos para animar no navegador. Para quando a aba fica em
 * segundo plano e fica em 0 para quem pediu menos movimento no sistema.
 */
export function useTempo(ativo = true) {
    const [t, setT] = useState(0);
    useEffect(() => {
        if (!ativo || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        const inicio = performance.now();
        let quadro = requestAnimationFrame(function passo(agora) {
            setT((agora - inicio) / 1000);
            quadro = requestAnimationFrame(passo);
        });
        return () => cancelAnimationFrame(quadro);
    }, [ativo]);
    return t;
}
/** O personagem já se mexendo — é o que o app usa na maioria das telas. */
export function PersonagemAnimado({ quem, acao = 'parado', altura, bpm, feliz, pega, animar = true, className }) {
    const t = useTempo(animar);
    const pose = ACOES[acao](t, { bpm });
    const nome = PERSONAGENS.find((p) => p.id === quem)?.nome ?? quem;
    return (_jsx(Quadro, { altura: altura, rotulo: nome, className: className, children: quem === 'dogia' ? _jsx(Dogia, { pose: pose, t: t, feliz: feliz }) : _jsx(DonaFatura, { pose: pose, t: t, pega: pega, contorno: CORES_DONA_FATURA.papel }) }));
}
