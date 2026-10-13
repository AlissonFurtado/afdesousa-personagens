# @afdesousa/personagens

Os personagens da A F DE SOUSA em SVG para React. O mesmo desenho roda no app
(Next.js) e nos vídeos (Remotion): quem muda é só o relógio que move a pose.

| id | Nome | Papel | Componente |
|---|---|---|---|
| `dogia` | Dogia | herói | `<Dogia>` |
| `dona-fatura` | Dona Fatura | vilã | `<DonaFatura>` |

## Instalar

```
npm i github:AlissonFurtado/afdesousa-personagens#v0.1.1
```

Sempre por **tag**, nunca pela `main`: assim um desenho novo não muda um app
ou um vídeo que ninguém pediu para mudar. A pasta `dist/` vai no git de
propósito, para a instalação não precisar compilar nada.

## Usar no app (Next.js)

```tsx
import { PersonagemAnimado } from '@afdesousa/personagens/web';

<PersonagemAnimado quem="dona-fatura" acao="gritando" altura={180} />
<PersonagemAnimado quem="dogia" acao="acenando" feliz />
```

`/web` é componente de cliente (usa `requestAnimationFrame`) e respeita quem
pediu menos movimento no sistema. Para um desenho parado, sem JavaScript no
navegador, use a raiz do pacote num componente de servidor:

```tsx
import { Quadro, Dogia, parado } from '@afdesousa/personagens';

<Quadro altura={120} rotulo="Dogia"><Dogia pose={parado(0)} /></Quadro>
```

## Usar no vídeo (Remotion)

```tsx
import { Dogia, DonaFatura, dancando, gritando } from '@afdesousa/personagens';

const t = useCurrentFrame() / fps;
<svg width={1080} height={1920}>
  <DonaFatura pose={gritando(t, { bpm: 133 })} t={t} x={300} y={1500} escala={3} />
  <Dogia pose={dancando(t, { bpm: 133 })} t={t} x={780} y={1500} escala={3} feliz />
</svg>
```

Os personagens devolvem um `<g>` com os pés em `(x, y)`; `escala={1}` dá uns
210 px de altura.

## Poses

Uma `Pose` diz onde estão as mãos e os pés e como o corpo se mexe. As prontas
são funções do tempo em segundos: `parado`, `acenando`, `gritando`, `dancando`,
`comemorando`. Para uma pose só de uma cena, monte o objeto na mão ou combine
duas com `misturar(a, b, k)`.

## Acrescentar um personagem

1. `src/<Nome>.tsx`: um componente que recebe `PersonagemProps`, desenha com os
   pés em `(0, 0)` e usa `membro()` para braços e pernas — assim ele já aceita
   todas as poses. Exporte também o objeto de cores.
2. Uma entrada em `src/catalogo.ts` (id, nome, papel, quem é) e o id novo em
   `IdPersonagem`.
3. Exporte em `src/index.ts` e trate o id em `PersonagemAnimado` (`src/web.tsx`).
4. `npm run build`, commit com a `dist/`, tag nova (`v0.2.0`) e `git push --tags`.
5. Atualize a ficha na skill `personagens-afdesousa` (`~/.claude/skills/`), que
   é onde os agentes de todos os projetos leem quem é quem.

Pose nova entra em `src/poses.ts` e em `ACOES`.
