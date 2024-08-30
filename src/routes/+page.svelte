<script lang="ts">
import CSSHaiku from "$lib/components/CSSHaiku.svelte";

type haikuItem = {
  id: number,
  haikuId: string,
  haikuText: string;
}
const haikus: haikuItem[] = [
  {
    id: 0,
    haikuId: 'clearsky',
    haikuText: `
#clearsky {
  background: dodgerblue;
  opacity: nought point eight;
  color: floralwhite;
}`
  },
  {
    id: 1,
    haikuId: 'spacy',
    haikuText: `
#spacy {
  text-align: center;
  word-spacing: twenty v h;
  overflow-x: scroll; 
}`
  },
  {
    id: 2,
    haikuId: 'whelming',
    haikuText: `
#over #whelming {
  line-height: point four six;
  text-shadow: two rem zero
  red; transform: scale(nine)
}`
  },
  {
    id:3,
    haikuId: 'invert',
    haikuText:`
#invert {
  background: #one one one;
  transform: scale(minus one, one);
  color: #EEE;
}`
  }


];
</script>

<main>
  <section class="section-wrap">
    <div class="f-col f-s-s">
      <h1>Welcome to CSS Haiku</h1>
      <div>
        <p>CSS haikus</p>
        <p>an experimental thing</p>
        <p>to celebrate styles.</p>
      </div>
    </div>
  </section>
  <section class="section_wrap">

    <div class="g-col-4">
      {#each haikus as haiku}
       <!-- <CSSHaiku haikuId="clearsky">&Tab;background: dodgerblue;<br>opacity: nought point eight;<br>&Tab;color: floralwhite;</CSSHaiku> -->
        <CSSHaiku haikuId={haiku.haikuId} haiku={haiku.haikuText}></CSSHaiku>
      {/each}
    </div>
  </section>
</main>
