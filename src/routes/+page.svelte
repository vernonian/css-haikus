<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import HaikuNavigation from '$lib/components/HaikuNavigation.svelte';
  import CSSHaiku from "$lib/components/CSSHaiku.svelte";
  import haikus from '$lib/data/haikus';
  import About from '$lib/components/About.svelte';


</script>
<Header></Header>
<main class="section-wrap">
  <section class="content-wrap main-grid">
    <!-- Left -->
    <section class="f-col f-e-s">
      <div class="sticky">
        <HaikuNavigation/>
      </div>
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
      <div class="sticky">
        <About/>
      </div>
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

  .sticky {
    width: 100%;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    .sticky {
      width: fit-content;
      position: sticky;
      top: var(--l);
    }
  }
</style>