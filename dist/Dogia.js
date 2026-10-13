import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { membro } from './membro.js';
export const CORES_DOGIA = {
    pelo: '#FFC107',
    contorno: '#E0A800',
    orelha: '#C8862A',
    creme: '#FFF8DC',
    tinta: '#1F1F1F',
    coleira: '#FF5A4F',
    medalha: '#FFD700',
    medalhaBorda: '#B8860B',
    boca: '#7a1f2b',
    lingua: '#F2748C',
};
/**
 * O Dogia de corpo inteiro. A cabeça é o mesmo desenho do mascote do app
 * (viewBox 120×120), então os dois são reconhecidos como o mesmo cachorro.
 * Devolve um <g>: ponha dentro de um <svg> seu ou de um <Quadro>.
 */
export function Dogia({ pose: p, t = 0, x = 0, y = 0, escala = 1, opacidade = 1, espelho = 1, feliz }) {
    const C = CORES_DOGIA;
    const ombros = [[-25, -110], [25, -110]];
    const quadril = [[-13, -50], [13, -50]];
    const rabo = 24 * Math.sin(t * 20);
    const orelha = 8 * Math.sin(t * 12.5);
    return (_jsxs("g", { transform: `translate(${x + p.balanco * escala} ${y + p.pulo * escala}) scale(${escala * espelho} ${escala}) rotate(${p.inclinacao} 0 -60)`, opacity: opacidade, children: [_jsx("ellipse", { cx: 0, cy: 4, rx: 54, ry: 9, fill: "rgba(0,0,0,0.35)", transform: `translate(${-p.balanco} ${-p.pulo})` }), _jsx("path", { d: `M 22 -62 q 34 -6 ${34 + rabo * 0.3} ${-34}`, stroke: C.orelha, strokeWidth: 11, strokeLinecap: "round", fill: "none" }), _jsx("path", { d: membro(quadril[0], p.peEsq, -9), stroke: C.contorno, strokeWidth: 15, strokeLinecap: "round", fill: "none" }), _jsx("path", { d: membro(quadril[1], p.peDir, 9), stroke: C.contorno, strokeWidth: 15, strokeLinecap: "round", fill: "none" }), _jsx("ellipse", { cx: p.peEsq[0] - 4, cy: p.peEsq[1], rx: 15, ry: 9, fill: C.creme, stroke: C.contorno, strokeWidth: 2 }), _jsx("ellipse", { cx: p.peDir[0] + 4, cy: p.peDir[1], rx: 15, ry: 9, fill: C.creme, stroke: C.contorno, strokeWidth: 2 }), _jsx("rect", { x: -30, y: -122, width: 60, height: 82, rx: 28, fill: C.pelo, stroke: C.contorno, strokeWidth: 2 }), _jsx("ellipse", { cx: 0, cy: -76, rx: 17, ry: 24, fill: C.creme }), _jsx("rect", { x: -27, y: -124, width: 54, height: 11, rx: 5, fill: C.coleira }), _jsx("circle", { cx: 0, cy: -110, r: 7, fill: C.medalha, stroke: C.medalhaBorda, strokeWidth: 1.5 }), _jsxs("g", { transform: `translate(0 -150) rotate(${p.cabeca}) translate(-60 -56)`, children: [_jsx("ellipse", { cx: 26, cy: 58, rx: 13, ry: 26, fill: C.orelha, transform: `rotate(${-6 + orelha} 26 38)` }), _jsx("ellipse", { cx: 94, cy: 58, rx: 13, ry: 26, fill: C.orelha, transform: `rotate(${6 - orelha} 94 38)` }), _jsx("circle", { cx: 60, cy: 56, r: 36, fill: C.pelo, stroke: C.contorno, strokeWidth: 2 }), _jsx("ellipse", { cx: 60, cy: 74, rx: 20, ry: 15, fill: C.creme }), feliz || p.boca > 0.7 ? (_jsxs("g", { stroke: C.tinta, strokeWidth: 3.5, strokeLinecap: "round", fill: "none", children: [_jsx("path", { d: "M40 52 q6 -8 12 0" }), _jsx("path", { d: "M68 52 q6 -8 12 0" })] })) : (_jsxs("g", { fill: C.tinta, children: [_jsx("circle", { cx: 46, cy: 51, r: 5.5 }), _jsx("circle", { cx: 74, cy: 51, r: 5.5 }), _jsx("circle", { cx: 48, cy: 49, r: 1.8, fill: "#fff" }), _jsx("circle", { cx: 76, cy: 49, r: 1.8, fill: "#fff" })] })), _jsx("ellipse", { cx: 60, cy: 66, rx: 7, ry: 5, fill: C.tinta }), _jsx("ellipse", { cx: 60, cy: 80, rx: 5 + 7 * p.boca, ry: 2 + 11 * p.boca, fill: C.boca, stroke: C.tinta, strokeWidth: 2.5 }), p.boca > 0.45 && _jsx("ellipse", { cx: 60, cy: 84 + 4 * p.boca, rx: 5 * p.boca + 1, ry: 4 * p.boca, fill: C.lingua })] }), _jsx("path", { d: membro(ombros[0], p.maoEsq, -13), stroke: C.contorno, strokeWidth: 13, strokeLinecap: "round", fill: "none" }), _jsx("path", { d: membro(ombros[1], p.maoDir, 13), stroke: C.contorno, strokeWidth: 13, strokeLinecap: "round", fill: "none" }), _jsx("circle", { cx: p.maoEsq[0], cy: p.maoEsq[1], r: 11, fill: C.creme, stroke: C.contorno, strokeWidth: 2 }), _jsx("circle", { cx: p.maoDir[0], cy: p.maoDir[1], r: 11, fill: C.creme, stroke: C.contorno, strokeWidth: 2 })] }));
}
