<script>
  export let menuItems = [];
</script>

<aside class="bg-gray-200 p-4 w-64 hidden md:block">
  <ul>
    {#each menuItems as item}
      <li class="py-2 hover:bg-gray-300 rounded">{item}</li>
    {/each}
  </ul>
</aside>

<!-- Mobile version -->
<div class="bg-gray-200 p-4 md:hidden">
  <select>
    {#each menuItems as item}
      <option>{item}</option>
    {/each}
  </select>
</div>
