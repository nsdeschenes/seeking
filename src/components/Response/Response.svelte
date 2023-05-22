<!-- 
  Ace Editor - Copyright (c) 2010, Ajax.org B.V.
  All rights reserved.
-->

<script lang="ts">
  import { beforeUpdate, onMount } from 'svelte';
  // @ts-ignore
  import * as ace from 'ace-builds/src-noconflict/ace.js';
  import 'ace-builds/esm-resolver.js';

  import '@/styles/seekingTheme.css';

  export let rawRequest;

  $: data = JSON.stringify($rawRequest.data, null, 2);

  let editor: any;
  onMount(() => {
    editor = ace.edit('response', {
      mode: 'ace/mode/json',
      theme: 'ace/theme/one_dark',
      enableBasicAutocompletion: true,
      showLineNumbers: false,
      showPrintMargin: false,
      useWorker: false,
      fontSize: '14px',
      readOnly: true,
      tabSize: 2,
      value: data,
    });

    return () => {
      editor.destroy();
    };
  });

  beforeUpdate(() => {
    editor?.setValue(data);
  });
</script>

<div
  class="row-start-2 flex h-full grow
flex-col items-center"
>
  <div id="response" />
</div>

<style>
  #response {
    position: absolute;
    width: 45%;
    height: 78%;
    left: 53%;
  }
</style>
