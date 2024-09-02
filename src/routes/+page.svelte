<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import HaikuNavigation from '$lib/components/HaikuNavigation.svelte';
import CSSHaiku from "$lib/components/CSSHaiku.svelte";
import haikus from '$lib/data/haikus';


</script>
<Header></Header>
<main class="section-wrap">
  <section class="content-wrap main-grid">
    <!-- Left -->
    <section>
      <HaikuNavigation/>
    </section>

    <!-- Middle -->
    <section>
      <div class="content-wrap-thin">
        <div class="f-col f-c-c gap-xxl">
          {#each haikus as haiku}
           <!-- <CSSHaiku haikuId="clearsky">&Tab;background: dodgerblue;<br>opacity: nought point eight;<br>&Tab;color: floralwhite;</CSSHaiku> -->
            <CSSHaiku 
              haikuId={haiku.haikuId} 
              haiku={haiku.haikuText}
              haikuCSS={haiku.haikuCSS}
              haikuLabel={haiku.haikuTitleLabel}
            />
          {/each}
        </div>
      </div>  
    </section>

    <!-- Right  -->
    <section>
      <details>
        <summary class="heading-3">About</summary>
        <div class="f-col body-2">
          <p>CSS Haikus is a collection of eight haikus written as CSS rules. Each haiku is rendered with it's written styles.</p>
          <p>The haikus appear in between the curly braces, so the selectors are not part of the haiku, but serve as a title.</p>
          <p>I have taken liberty in how the units and numbers are pronounces to fit the 5-7-5 syllable haiku structure. As such, I have written them out verbally to display to avoid confusion.</p>
          <p>Created by Evelyn Vernon.</p>
        </div>
      </details>
      <details>
        <summary class="heading-3">Why CSS Haikus?</summary>
        <div class="f-col body-2">
          <p>I got into haikus one summer and thought it might be fun to write haikus in css and see what sort of styles are possible with that limitation.</p>
          <p>The substance of the idea grew on me and I tried to incorporate a distinct theme in each haiku I wrote. As a collection, they form a narrative of around the dissociation, anxiety, and depression that I have faced as a fact of being alive.</p>
          <p>Each haiku's visual effect aims to be a little vignette of feeling associated with such emotional turmoil and confusion, while the written CSS is practically meaningless in terms of being written in English. This further resonates the confusion I've felt when trying to understand and express my own emotions.</p>
        </div>
      </details>
    </section>
</main>

<style>
  .main-grid {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--l);
  }

  @media screen and (min-width: 768px) {
    .main-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>