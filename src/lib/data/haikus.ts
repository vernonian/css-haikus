import type { HaikuItemType } from '$lib/data/types.ts';

const haikus: HaikuItemType[] = [
  {
    id: 0,
    haikuId: 'clearsky',
    haikuTitleLabel: `I`,
    haikuText: `
#clearsky {
  background: dodgerblue;
  opacity: nought point eight;
  color: floralwhite;
}`,
    haikuCSS: `
#clearsky {
  background: dodgerblue;
  text-shadow: 0 0 1em;
  color: floralwhite;
}
#clearsky:hover {
  text-shadow: 0 0 4em;
  cursor: default;
}`
  },
  {
    id: 1,
    haikuId: 'spacy',
    haikuTitleLabel: 'II',
    haikuText:`
#spacy {
  text-align: center;
  word-spacing: twenty v h;
  overflow-x: scroll; 
}`,
    haikuCSS:`
#spacy {
  text-align: center;
  word-spacing: 20vh;
  overflow-x: scroll; 
}
#spacy:hover {
  backdrop-filter: none;
  letter-spacing: .9rem;
  cursor: col-resize; 
}`
  },
  {
    id: 2,
    haikuId: 'whelming',
    haikuTitleLabel: 'III',
    haikuText:`
#whelming {
  line-height: point four six;
  text-shadow: two rem zero
  red; transform: scale(nine);
}`,
    haikuCSS:`
#over #whelming {
  line-height: .38;
  text-shadow: 3rem 0
  red; transform: scale(9);
}
#whelming:hover {
  cursor: grabbing;
}
#over:hover #whelming {
  line-height: .3rem;
  animation: infinite
    tense 1.1s;  
}
@keyframes tense {
  0% {line-height: 0.35rem; letter-spacing: -1px;}
  20% {line-height: 0.3rem;letter-spacing: 0px;}
  40% {line-height: 0.32rem; letter-spacing: -1px;}
  60% {line-height: 0.3rem;letter-spacing: -2px;}
  80% {line-height: 0.38rem; letter-spacing: -1px;}
  100% {line-height: 0.3rem;letter-spacing: 0px;}
}`
  },
  {
    id: 3,
    haikuId: 'invert',
    haikuTitleLabel: 'IV',
    haikuText:`
#invert {
  background: #one one one;
  transform: scale(minus one, one);
  color: #EEE;
}
`,
    haikuCSS:`
#invert {
  background: #111;
  transform: scale(-1, 1);
  color: #EEE;
}
#invert:hover {
  background:#EEE;
  transform: scale(1, -1);
  color: #111;
}`
  },
  {
    id: 4,
    haikuId: 'thin',
    haikuTitleLabel: 'V',
    haikuText:`
#thin {
  text-transform: lowercase;
  transition: eleven s;
  transform: scale(six);
}`,
    haikuCSS:`
#stretched #thin {
  text-transform: lowercase;
  transition: 11s;
  transform: scaleX(6);
}
#stretched:hover #thin {
 cursor: ew-resize; 
 transform: scale(8, 1);
}`
  },
  {
    id: 5,
    haikuId: 'distant',
    haikuTitleLabel: 'VI',
    haikuText:`
#distant {
  font-size: point nine rem;
  filter: blur(point one eight rem);
  color: olivedrab;
}`,
    haikuCSS:`
#distant {
  font-size: .9rem;
  filter: blur(.18rem);
  color: olivedrab;
}
#vi:hover #distant {
  cursor: not-allowed;
  filter: blur(0.06rem);
  color: forestgreen;
}`
  },
  {
    id: 6,
    haikuId: 'panic',
    haikuTitleLabel: 'VII',
    haikuText:`
#panic {
  color: orangered;
  animation: var(--calm-down);
  line-height: point six six;    
}
`,
    haikuCSS:`
#panic {
  color: orangered;
  animation: var(--calm-down);
  line-height: .66;    
}
#panic:hover {
  animation: none;
  cursor: wait; transform:
  scale(.999);
}
:root {
  --a: 0.03rem;
  --b: -0.03rem;
  --calm-down: shiver infinite both 0.5s;
}
@keyframes shiver {
  0%  { transform: translate(var(--b), var(--a));
    opacity: 0.7;
  }
  10% { transform: translate(0,0); }
  20% { transform: translate(var(--a), var(--a)); }
  30% { transform: translate(var(--b), var(--b)); }
  40% { transform: translate(var(--b), var(--a)); }
  50% { transform: translate(0, 0);}
  60% { transform: translate(var(--a), var(--a)); }
  70% { transform: translate(var(--a), var(--b)); }
  80% { transform: translate(var(--b), var(--b));opacity: 0.7; }
  90% { transform: translate(var(--b), var(--a)); }
  100%{ transform: translate(var(--a), var(--b)); }
}`
  },
  {
    id: 7,
    haikuId: 'dissonance',
    haikuTitleLabel: 'VIII',
    haikuText:`
#dissonance {
  background: transparent;
  animation: var(--transcend);
  text-align: center;
}
`,
    haikuCSS:`
#true:hover #dissonance {
  cursor: progress;
} 
#dissonance {
  background: transparent;
  animation: var(--transcend);
  text-align: center;
}

:root {
  --truth: all 0.2s;
  --transcend: transcend 5s infinite alternate ease-in-out;
}

@keyframes transcend {
  0% {
      color: lightskyblue;
      transition: all 0.2s;
      transform: translate(0.55rem, -0.85rem);
      text-shadow: 1.1em 1.7em hotpink;
  }
  20% {
      color: lightskyblue;
      transition: all 0.2s;
      transform: translate(0.55rem, -0.85rem);
      text-shadow: 1.1em 1.7em hotpink;
  }
  50% {text-shadow: 0.5rem 0.85rem transparent;}
  80% {
    color: hotpink;
    text-shadow: var(--vii-a);
    transform: translate(1.1rem, 0rem);
  }
  100% {
    color: hotpink;
    text-shadow: var(--vii-a);
    transform: translate(1.1rem, 0rem);
  }
}
`
  }
];

export default haikus;


//   {
//     id: 1,
//     haikuId: 'spacy',
//     haikuText: `
// #spacy {
//   text-align: center;
//   word-spacing: twenty v h;
//   overflow-x: scroll; 
// }`
// },
//   {
//     id: 2,
//     haikuId: 'whelming',
//     haikuText: `
// #over #whelming {
//   line-height: point four six;
//   text-shadow: two rem zero
//   red; transform: scale(nine)
// }`
//   },
//   {
//     id:3,
//     haikuId: 'invert',
//     haikuText:`
// #invert {
//   background: #one one one;
//   transform: scale(minus one, one);
//   color: #EEE;
// }`
//   }

