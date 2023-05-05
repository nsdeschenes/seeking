<script lang="ts">
  import { options } from '@/stores';
  $: url = $options.url;
</script>

<p>body, url: {url}</p>
