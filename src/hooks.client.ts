import * as SentrySvelte from '@sentry/svelte';
import type { HandleClientError } from '@sveltejs/kit';

SentrySvelte.init({
  dsn: import.meta.env.VITE_SVELTE_SENTRY_DSN,
  integrations: [new SentrySvelte.BrowserTracing()],
  tracesSampleRate: 0.2,
  environment: import.meta.env.MODE,
  beforeSend(event) {
    if (event.user) {
      delete event.user?.ip_address;
      delete event.user?.email;
      delete event.user?.username;
    }

    return event;
  },
  beforeSendTransaction(event) {
    if (event.user) {
      delete event.user?.ip_address;
      delete event.user?.email;
      delete event.user?.username;
    }

    return event;
  },
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
