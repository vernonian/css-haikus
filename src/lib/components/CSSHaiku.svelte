<script lang="ts">
  import DetailsToggle from "./DetailsToggle.svelte";

  export let haikuBoxId: string;
  export let haikuId: string;
  export let haiku: string;
  export let haikuCSS: string;
  export let haikuLabel: string;
</script>

<div id="haiku-{haikuId}"class="css-haiku f-col">
  <h2 class="heading-6 primary-5">{haikuLabel}</h2>
  <div id={haikuBoxId} class="css-haiku-box">
    <pre id={haikuId}>
      {haiku}
    </pre>
  </div>
  
  <DetailsToggle title="CSS">
    <div class="css-box">
      <pre>
        {haikuCSS}
      </pre>
    </div>
  </DetailsToggle>
</div>

<style>
  .css-haiku {
    width: 100%;
    margin: 0 auto;
    padding: var(--m) 0 0;
  }

.css-haiku-box,
.css-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: solid 1px var(--textcolor-body);
  border-radius: var(--xxs);
  font-size: 1rem;
  font-family: monospace;
  width: 100%;
  min-height: max(250px, 25vh);
  overflow: hidden;
  scroll-margin-top: 100px;
}

.css-box {
  background-color: var(--primary-3);
  color: var(--white);
  border: none;
}

.css-haiku-box pre {
  transition: all 0.2s;
}
</style>