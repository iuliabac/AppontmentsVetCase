<script>
  import Request from '$lib/components/Request.svelte';
  export let data;
  let requests = data.requests ?? [];
</script>

{#each requests as request}
  <Request {request} />
{/each}
