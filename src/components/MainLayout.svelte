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

<div class="flex h-full flex-col gap-2">
  <TopBar {makeRequest} />
  <div class="grid  grid-cols-2 gap-2 pt-2">
    <ul class="isolate inline-flex gap-2 py-2 justify-center">
      <li>
        <a
          href="/"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >Body</a
        >
      </li>
      <li>
        <a
          href="/headers"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >Headers</a
        >
      </li>
      <!-- <li>
        <a
          href="/url-params"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >URL Params</a
        >
      </li>
      <li>
        <a
          href="/query-string"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >Query String</a
        >
      </li> -->
    </ul>
    <Request>
      <slot />
    </Request>
    <Response rawRequest={makeRequest} />
  </div>
</div>
