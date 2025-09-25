<script>
  export let request;
</script>

<div class="p-4 bg-gray-100 rounded shadow mb-2">
  <h3 class="font-semibold">Request #{request.id}</h3>
  <p>Client: {request.client}</p>
  <p>Status: {request.status}</p>
</div>
