<script lang="ts">
  // Components
  import Header from '$lib/components/Header.svelte';
  import HaikuNavigation from '$lib/components/HaikuNavigation.svelte';
  import CSSHaiku from "$lib/components/CSSHaiku.svelte";
  import About from '$lib/components/About.svelte';

  // Haiku data
  import haikus from '$lib/data/haikus';
  import '$lib/ui/haikus.css';
</script>

<Header/>
<main class="section-wrap">
  <div class="main-grid">
    <!-- Left -->
    <section class="nav">
      <div class="sticky">
        <div class="f-col f-e-s">
          <HaikuNavigation/>
        </div>
      </div>
    </section>

    <!-- Middle -->
    <section class="haikus">
      <!-- <div class="content-wrap-thin"> -->
        <div class="f-col f-c-c gap-xl">
          {#each haikus as haiku}
            <CSSHaiku 
              haikuBoxId={haiku.haikuBoxId}
              haikuId={haiku.haikuId} 
              haiku={haiku.haikuText}
              haikuCSS={haiku.haikuCSS}
              haikuLabel={haiku.haikuTitleLabel}
            />
          {/each}
        </div>
      <!-- </div>   -->
    </section>

    <!-- Right  -->
    <section class="about">
      <div class="sticky">
        <About/>
      </div>
    </section>
  </div>
</main>

<style>

  main.section-wrap {
    padding-top: 0px;
  }

  .main-grid {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--l);
    grid-template-areas: 'about' 'haikus';
  }

  .nav, .haikus, .nav {
    max-width: 100%;
  }

  .nav { 
    grid-area: nav; 
    visibility: hidden;
    display: none;
  }

  .haikus {
    border-top: solid 1px var(--primary-3);
    grid-area: haikus;
  }

  .about { grid-area: about; }

  @media screen and (min-width: 950px) {
    .main-grid {
      grid-template-columns: 1fr minmax(500px, 1fr) 1fr;
      grid-template-areas: 'nav haikus about';
    }

    .nav {
      display: block;
      visibility: visible;
    }
  }



  .sticky {
    width: 100%;
    position: relative;
  }

  @media screen and (min-width: 950px) {
    .sticky {
      width: 100%;
      position: sticky;
      top: var(--l);
    }
  }
</style>