<script lang="ts">

  export let haikuId: string;
  export let haiku: string;
</script>

<div id={haikuId} class="css-haiku-box">
  <pre>
    {haiku}
  </pre>
</div>

<style>
.css-haiku-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: solid 1px black;
  font-size: 1rem;
  font-family: monospace;
  max-width: 350px;
  width: 100%;
  min-height: max(150px, 25vh);
  overflow: hidden;
}

.css-haiku {
  padding-left: var(--gap-m);
}

.css-haiku-box pre {
  transition: all 0.2s;
}
</style>