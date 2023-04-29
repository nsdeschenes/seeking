<script>
  import { invoke } from '@tauri-apps/api/tauri';

  let name = '';
  let greetMsg = '';

  async function greet() {
    greetMsg = await invoke('greet', { name });
  }
</script>

<div class="pl-2">
  <div class="flex gap-3">
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <button on:click={greet} class="bg-gray-500 hover:bg-gray-700 py-1 px-2 rounded-md text-white"
      >Greet</button
    >
  </div>
  <p><span class="font-semibold">Message:</span> {greetMsg}</p>
</div>
