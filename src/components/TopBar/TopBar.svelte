<script lang="ts">
  import { createMutation } from '@tanstack/svelte-query';

  import { options } from '@/stores';

  export let makeRequest;
  export let url = '';

  let method: 'GET' | 'POST' = 'GET';
</script>

<div class="flex items-center gap-2 px-4 py-3">
  <div class="flex w-5/6 rounded-md font-mono shadow-sm lg:w-3/6">
    <span
      class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm"
      >URL</span
    >
    <input
      bind:value={url}
      on:input={() => {
        options.update((data) => ({ ...data, url }));
      }}
      type="url"
      name="request-url"
      id="request-url"
      class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 bg-transparent py-1.5 pl-2 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 invalid:bg-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
      placeholder="https://www.example.com"
    />
  </div>
  <select
    bind:value={method}
    on:change={() => {
      options.update((data) => ({ ...data, method }));
    }}
    name="http-method"
    class="w-fit rounded-md border-0 bg-zinc-700 py-2 pl-3 pr-10 font-mono text-white hover:cursor-pointer hover:bg-zinc-500 sm:text-sm sm:leading-6"
  >
    <option value="GET">GET</option>
    <option value="POST">POST</option>
  </select>
  <button
    on:click={() => {
      $makeRequest.mutate($options);
    }}
    class="rounded bg-zinc-700 px-4 py-2 font-mono text-white shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600 sm:text-sm"
    >Request</button
  >
</div>
