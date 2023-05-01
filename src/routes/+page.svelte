<script>
  import Request from '../components/Request.svelte';
  import Response from '../components/Response.svelte';

  let url = '';
</script>

<div class="flex h-full flex-col gap-2 text-white">
  <div class="flex justify-center border border-blue-500 px-4 py-3">
    <input class="border border-red-500" type="text" placeholder="Enter URL" bind:value={url} />
    <button class="border border-red-500">Request</button>
  </div>
  <div class="flex h-full gap-2">
    <Request />
    <Response />
  </div>
</div>
