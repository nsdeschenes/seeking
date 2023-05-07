<script lang="ts">
  export let rawRequest;

  $: data = JSON.stringify($rawRequest.data, null, 2);
</script>

<div class="h-[calc(100vh-70px)] border border-white">
  <p class="h-[calc(100vh-70px)] overflow-x-scroll overflow-y-scroll font-mono text-sm">
    {#if !data && !$rawRequest.isLoading} No data {/if}
    {#if $rawRequest.isLoading}
      Loading...
    {/if}
    {#if $rawRequest.isError}
      Error: {JSON.stringify($rawRequest.error)}
    {/if}
    {#if $rawRequest.isSuccess}
      {data}
    {/if}
  </p>
</div>
