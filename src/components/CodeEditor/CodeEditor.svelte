<!-- 
  Ace Editor - Copyright (c) 2010, Ajax.org B.V.
  All rights reserved.
-->

<script lang="ts">
  import { onMount } from 'svelte';
  // @ts-ignore
  import * as ace from 'ace-builds/src-noconflict/ace.js';
  import 'ace-builds/esm-resolver.js';

  import { options } from '@/stores';

  import '@/styles/seekingTheme.css';

  $: body = $options.body;
  export let readOnly = false;

  let editor: any = null;

  onMount(() => {
    editor = ace.edit('editor', {
      mode: 'ace/mode/json',
      theme: 'ace/theme/one_dark',
      enableBasicAutocompletion: true,
      showLineNumbers: false,
      showPrintMargin: false,
      useWorker: false,
      fontSize: '14px',
      readOnly,
      tabSize: 2,
    });

    editor.setValue(body);
    editor.clearSelection();

    editor.session.on('change', () => {
      const value = editor.getValue();
      options.update((data) => ({ ...data, body: value }));
    });

    return () => {
      editor.destroy();
    };
  });
</script>

<div>
  <div id="editor" />
</div>

<style>
  #editor {
    position: absolute;
    width: 45%;
    height: 78%;
    left: 3%;
  }
</style>
