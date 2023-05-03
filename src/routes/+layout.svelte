<script>
  import '../app.css';
  import Request from '../components/Request/Request.svelte';
  import Response from '../components/Response/Response.svelte';
  import TopBar from '../components/TopBar/TopBar.svelte';
</script>

<div class="flex h-full flex-col gap-2">
  <TopBar />
  <div class="flex h-full flex-col gap-2 text-white">
    <div class="grid h-full grid-cols-2 gap-2">
      <Request>
        <slot />
      </Request>
      <Response />
    </div>
  </div>
</div>
