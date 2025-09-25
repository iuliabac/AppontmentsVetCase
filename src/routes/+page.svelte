<script>
  let title = "Microservices Frontend Framework";
</script>

<main class="p-4 flex flex-col gap-4">
  <h1 class="text-xl font-bold">{title}</h1>

  <section class="bg-gray-100 p-4 rounded shadow">
    <p>Mobile section 1</p>
  </section>

  <section class="bg-gray-200 p-4 rounded shadow">
    <p>Mobile section 2</p>
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
