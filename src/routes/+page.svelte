<script lang="ts">
import CSSHaiku from "$lib/components/CSSHaiku.svelte";
import haikus from '$lib/data/haikus';


</script>

<main>
  <section class="section-wrap">
    <div class="content-wrap-thin">
      <div class="f-col f-s-s">
        <h1>Welcome to CSS Haiku</h1>
        <div>
          <p>CSS haikus</p>
          <p>an experimental thing</p>
          <p>to celebrate styles.</p>
        </div>
      </div>
      <div>
        <details>
          <summary>Why CSS Haikus?</summary>
          <div class="f-col">
            <p>...</p>
          </div>
        </details>
      </div>
    </div>
  </section>
  <section class="section-wrap">
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
</main>
