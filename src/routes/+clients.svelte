<script>
  let clients = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
  ];
</script>

<main class="p-4">
  <h1 class="text-xl font-bold mb-4">Clients</h1>

  <ul class="space-y-2">
    {#each clients as client}
      <li class="bg-gray-100 p-2 rounded shadow">{client.name}</li>
    {/each}
  </ul>
</main>
