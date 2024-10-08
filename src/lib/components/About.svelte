<script lang="ts">
  import DetailsToggle from "./DetailsToggle.svelte";
</script>

<div>
  <DetailsToggle title="About">
    <p>CSS Haikus is a collection of eight haikus written as CSS rules. Each haiku is rendered with it's written styles.</p>
    <p>The haikus appear in between the curly braces, so the selectors are not part of the haiku, but serve as a title.</p>
    <p>I have taken liberty in how the units and numbers are pronounced to fit the 5-7-5 syllable haiku structure. As such, I have written them out verbally to display to avoid confusion.</p>
    <p>Created by <a href="https://evelynvernon.com">Evelyn Vernon</a>.</p>
  </DetailsToggle>

  <DetailsToggle title="Why CSS Haikus?">
    <p>I got into haikus one summer and thought it might be fun to write haikus in css and see what sort of styles are possible with that limitation.</p>
    <p>The substance of the idea grew on me and I tried to incorporate a distinct theme in each haiku I wrote. As a collection, they form a narrative of around the dissociation, anxiety, and depression that I have faced as a fact of being alive.</p>
    <p>Each haiku's visual effect aims to be a little vignette of feeling associated with such emotional turmoil and confusion, while the written CSS is practically meaningless in terms of being understood in English. This further resonates the confusion I've felt when trying to understand and express my own emotions.</p>
  </DetailsToggle>
</div>