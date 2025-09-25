<script>
  let title = "Welcome to Microservices Frontend Framework";
</script>

<main class="p-4 flex flex-col gap-4">
  <h1 class="text-xl font-bold">{title}</h1>

  <section class="bg-gray-100 p-4 rounded shadow">
    <p>This is your mobile layout content.</p>
  </section>

  <section class="bg-gray-200 p-4 rounded shadow">
    <p>Additional mobile section.</p>
  </section>
</main>

<style>
  @media (min-width: 768px) {
    main {
      flex-direction: row;
      gap: 2rem;
    }
    section {
      flex: 1;
    }
  }
</style>
<script lang="ts">
    export let data; // injected by SvelteKit from +page.js

    let appointments = data?.appointments ?? [];
    let error = data?.error;
</script>

{#if error}
    <p class="text-red-500">Error: {error}</p>
{:else}
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Time</th>
                <th>Vet</th>
                <!-- Add more columns as needed -->
            </tr>
        </thead>
        <tbody>
            {#each appointments as appointment}
                <tr>
                    <td>{appointment.id}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.vet}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}
