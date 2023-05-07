<script lang="ts">
  import { createMutation } from '@tanstack/svelte-query';
    import TopBar from './TopBar/TopBar.svelte';
    import Request from './Request/Request.svelte';
    import Response from './Response/Response.svelte';

  interface MakeRequestArgs {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  }

  const makeRequest = createMutation({
    mutationFn: async ({ url, method }: MakeRequestArgs) => {
      const response = await fetch(url, { method });
      return response.json();
    },
  });
</script>

<TopBar makeRequest={makeRequest} />
<div class="flex h-full flex-col gap-2 text-white">
  <div class="grid h-full grid-cols-2 gap-2">
    <Request>
      <slot />
    </Request>
    <Response rawRequest={makeRequest} />
  </div>
</div>
