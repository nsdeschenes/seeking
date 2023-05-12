<script>
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  import '../app.css';
  import MainLayout from '@/components/MainLayout.svelte';

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
    <MainLayout>
      <slot />
    </MainLayout>
  </div>
</QueryClientProvider>
