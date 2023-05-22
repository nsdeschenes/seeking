<!-- 
  Ace Editor - Copyright (c) 2010, Ajax.org B.V.
  All rights reserved.
-->

<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from 'svelte';
  // @ts-ignore
  import * as ace from 'ace-builds/src-noconflict/ace.js';
  import 'ace-builds/esm-resolver.js';

  import { options } from '@/stores';

  import '@/styles/seekingTheme.css';

  $: body = $options.body;
  $: method = $options.method;

  let editor: any = null;
  $: editor;

  afterUpdate(() => {
    if (method === 'GET') {
      editor.setReadOnly(true);
      editor.setGhostText('\tUnable to edit body for GET requests.');
    } else {
      editor.setReadOnly(false);
      editor.removeGhostText('');
    }
  });

  onMount(() => {
    editor = ace.edit('editor', {
      mode: 'ace/mode/json',
      theme: 'ace/theme/one_dark',
      enableBasicAutocompletion: true,
      showLineNumbers: false,
      showPrintMargin: false,
      useWorker: false,
      fontSize: '14px',
      tabSize: 2,
    });

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
