import { jsx as _jsx } from "react/jsx-runtime";
/** Caixa que cabe um personagem em qualquer pose pronta, com os pés em (0, 0). */
export const CAIXA = { x: -130, y: -280, largura: 260, altura: 300 };
/** Um <svg> do tamanho certo para um personagem sozinho — o jeito simples de usar no app. */
export function Quadro({ altura = 160, rotulo, className, children }) {
    return (_jsx("svg", { role: rotulo ? 'img' : undefined, "aria-label": rotulo, "aria-hidden": rotulo ? undefined : true, width: (altura * CAIXA.largura) / CAIXA.altura, height: altura, viewBox: `${CAIXA.x} ${CAIXA.y} ${CAIXA.largura} ${CAIXA.altura}`, className: className, style: { overflow: 'visible' }, children: children }));
}
