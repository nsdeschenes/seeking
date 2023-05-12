<script lang="ts">
  import { options } from '@/stores';

  $: headerMap = $options.headers;
  $: headers = Array.from(headerMap.entries());
</script>

<div class="flex flex-col gap-2">
  <div class="mt-2 flex flex-col gap-2">
    {#each headers as [mapKey, { key, value }], index}
      <div class="flex gap-2">
        <input
          bind:value={key}
          on:input={() => {
            headerMap.set(mapKey, { key, value });
            options.update((data) => data);
          }}
          type="text"
          name={`header-key-${mapKey}`}
          id={`header-key-${mapKey}`}
          class="block w-full rounded-md border-0 bg-transparent py-1.5 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Header"
        />
        <input
          bind:value
          on:input={() => {
            headerMap.set(mapKey, { key, value });
            options.update((data) => data);
          }}
          type="text"
          name={`header-key-${mapKey}`}
          id={`header-value-${mapKey}`}
          class="block w-full rounded-md border-0 bg-transparent py-1.5 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Value"
        />
        <button
          on:click={() => {
            if (index === 0 && headers.length === 1) {
              headerMap.set(0, { key: '', value: '' });
              options.update((data) => data);
              return;
            }
            headerMap.delete(mapKey);
            options.update((data) => data);
          }}
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
        >
          X
        </button>
      </div>
    {/each}
  </div>
  <button
    on:click={() => {
      headerMap.set(headerMap.size, { key: '', value: '' });
      options.update((data) => data);
    }}
    class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
  >
    Add header</button
  >
</div>
