<script lang="ts">
  import { createMutation } from '@tanstack/svelte-query';
  import TopBar from './TopBar/TopBar.svelte';
  import Request from './Request/Request.svelte';
  import Response from './Response/Response.svelte';
  import type { Options } from '../stores/options';

  const makeRequest = createMutation({
    mutationFn: async ({ url, method, headers }: Options) => {
      const headerObject = new Headers();

      headers.forEach((header) => {
        if (header.key !== '' && header.value !== '') {
          headerObject.append(header.key, header.value);
        }
      });

      const response = await fetch(url, { method, headers: headerObject });
      return response.json();
    },
  });
</script>

<TopBar {makeRequest} />
<div class="flex h-full flex-col gap-2 text-white">
  <div class="grid h-full grid-cols-2 gap-2">
    <Request>
      <slot />
    </Request>
    <Response rawRequest={makeRequest} />
  </div>
</div>
