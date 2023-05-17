<script lang="ts">
  import { options } from '@/stores';
  $: url = $options.url;
  $: method = $options.method;
  $: headers = $options.headers;
</script>

<p>body:</p>
<p>url: {url}</p>
<p>method: {method}</p>
