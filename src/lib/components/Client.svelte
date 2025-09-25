<script>
  export let client;
</script>

<div class="bg-white shadow p-4 rounded mb-2">
  <h2 class="font-bold">{client.name}</h2>
  <p>Email: {client.email}</p>
  <p>Appointments: {client.appointments}</p>
</div>
