<script lang="ts">
  import haikus from "$lib/data/haikus";
</script>

<nav class="bg-primary-0 primary-4">
  <ol class="list-wrap">
    {#each haikus as haiku}
      <li><a class="nav-link" href="#{haiku.haikuId}">#{haiku.haikuId}</a></li>
    {/each}
  </ol>
</nav>

<style>
  nav {
    padding: var(--m);
    border-radius: var(--xs);
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    nav {
      width: fit-content;
    }
  }

  .nav-link {
    color: var(--primary-4);
    text-decoration:underline;
  }

  .nav-link:hover {
    color: var(--primary-5);
    text-decoration: none;
  }
</style>