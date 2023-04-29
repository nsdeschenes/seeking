import * as SentrySvelte from '@sentry/svelte';
import type { HandleClientError } from '@sveltejs/kit';

SentrySvelte.init({
  dsn: 'https://a6566e49d8b74311b63d8c1d264e9877@o4504770655092736.ingest.sentry.io/4505100100042752',
  integrations: [new SentrySvelte.BrowserTracing()],
  tracesSampleRate: 0.2,
});

SentrySvelte.setTag('svelteKit', 'browser');

// This will catch errors in load functions from +page.ts files
export const handleError = (({ error, event }) => {
  SentrySvelte.captureException(error, { contexts: { sveltekit: { event } } });

  return {
    // @ts-expect-error - SentryKit types are not up to date
    message: error.message,
  };
}) satisfies HandleClientError;
