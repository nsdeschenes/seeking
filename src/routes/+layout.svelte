<script>
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  import '../app.css';
  import Temp from '@/components/Temp.svelte';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<QueryClientProvider client={queryClient}>
  <div class="flex h-full flex-col gap-2">
    <Temp>
      <slot />
    </Temp>
  </div>
</QueryClientProvider>
