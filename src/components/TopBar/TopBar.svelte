<script lang="ts">
  export let url = '';
</script>

<div class="flex items-center gap-2 border border-blue-500 px-4 py-3">
  <div class="flex rounded-md font-mono shadow-sm w-5/6 lg:w-3/6">
    <span
      class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm"
      >URL</span
    >
    <input
      bind:value={url}
      type="text"
      name="request-url"
      id="request-url"
      class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 bg-transparent py-1.5 pl-2 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
      placeholder="https://www.example.com"
    />
  </div>
  <button
    class="rounded bg-zinc-700 px-4 py-2 font-mono text-white shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
    >Request</button
  >
</div>
