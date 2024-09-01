import HaikuItemType from '$lib/data/types.ts';

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

