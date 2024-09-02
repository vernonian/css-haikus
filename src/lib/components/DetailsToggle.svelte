<script lang="ts">

  export let title: String;
  

</script>


<details class="details-toggle f-col">
  <summary class="heading-4 f-row f-c-s gap-xs">{title}</summary>
  <div class="f-col body-2">
    <slot></slot>
  </div>
</details>

<style>
  .details-toggle {
    color: var(--primary-4);
    margin-bottom: var(--m);
  }

  .details-toggle > div {
    margin-top: var(--s);
  }

  .details-toggle summary {
    position: relative;
    width: 100%;
    cursor: pointer;
    color: var(--primary-5);
  }

  .details-toggle summary::after {
    content: "+";
    color: inherit;
    font-weight: 600;
    font-size: 0.878rem;
  }

  .details-toggle[open] summary::after {
    content: '-';
    color: inherit;
  }
</style>