<script lang="ts">

  export let haikuId: string;
  export let haiku: string;
  export let haikuCSS: string;
  export let haikuLabel: string;
</script>

<div class="f-col">
  <h2>{haikuLabel}.</h2>
  <div id={haikuId} class="css-haiku-box">
    <pre>
      {haiku}
    </pre>
  </div>
  
  <details>
    <summary>CSS</summary>
    <div class="css-box">
      {haikuCSS}
    </div>
  </details>
  
</div>

<style>
.css-haiku-box,
.css-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: solid 1px black;
  border-radius: var(--s);
  font-size: 1rem;
  font-family: monospace;
  max-width: 350px;
  width: 100%;
  min-height: max(150px, 25vh);
  overflow: hidden;
}

.css-box {
  background-color: var(--primary-3);
  color: var(--white);
}

.css-haiku-box pre {
  transition: all 0.2s;
}
</style>