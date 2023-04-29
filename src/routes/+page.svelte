<script>
  import Greet from '../lib/Greet.svelte';
</script>

<h1 class="text-xl font-semibold">Welcome to SvelteKit</h1>
<Greet />
<button
  class="bg-gray-500 hover:bg-gray-700 py-1 px-2 rounded-md text-white"
  type="button"
  on:click={() => {
    throw new Error('Sentry Frontend Error');
  }}
>
  Throw error
</button>
