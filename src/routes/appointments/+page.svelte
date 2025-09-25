<script>
  export let data;
  let appointments = data.appointments ?? [];
  let error = data.error;
</script>

{#if error}
  <p class="text-red-500">Error: {error}</p>
{:else}
  <ul>
    {#each appointments as a}
      <li>{a.time} – {a.vet}</li>
    {/each}
  </ul>
{/if}
