<script lang="ts">
  import { onMount } from 'svelte';
  import { handleKeys } from './handleKeys';

  let body = '';

  onMount(() => {
    const abortController = new AbortController();
    const editor = document.getElementById('code-editor') as HTMLTextAreaElement;
    editor?.addEventListener('keydown', (e) => handleKeys({ editor, e }), {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  });
</script>

<textarea
  bind:value={body}
  class="resize-none overflow-auto rounded-md border border-white bg-transparent p-1 caret-white"
  cols="80"
  rows="30"
  id="code-editor"
/>
