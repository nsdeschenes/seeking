<script lang="ts">
  import { createMutation } from '@tanstack/svelte-query';
  import TopBar from './TopBar/TopBar.svelte';
  import Request from './Request/Request.svelte';
  import Response from './Response/Response.svelte';
  import type { Options } from '../stores/options';
  import { z } from 'zod';

  const headerSchema = z.object({
    key: z.string().min(1),
    value: z.string().min(1),
  });

  const createHeaders = ({ headers }: { headers: Options['headers'] }) => {
    const headerObject = new Headers();

    headers.forEach((header) => {
      if (headerSchema.safeParse(header).success) {
        headerObject.append(header.key, header.value);
      }
    });

    return headerObject;
  };

  const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
  type Literal = z.infer<typeof literalSchema>;
  type Json = Literal | { [key: string]: Json } | Json[];
  const jsonSchema: z.ZodType<Json> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
  );

  const createBody = ({ body }: { body: Options['body'] }) => {
    if (jsonSchema.safeParse(body).success) {
      return JSON.stringify(body);
    }
  };

  const makeRequest = createMutation({
    mutationFn: async ({ url, method, headers, body }: Options) => {
      const formattedHeaders = createHeaders({ headers });
      const configuredBody = createBody({ body });

      const response = await fetch(url, {
        method,
        headers: formattedHeaders,
        body: configuredBody,
      });
      return response.json();
    },
  });
</script>

<div class="flex h-full flex-col gap-2">
  <TopBar {makeRequest} />
  <div class="grid grid-cols-2 gap-2 pt-2">
    <ul class="isolate inline-flex justify-center gap-2 py-2">
      <li>
        <a
          href="/"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >Body</a
        >
      </li>
      <li>
        <a
          href="/headers"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >Headers</a
        >
      </li>
      <!-- <li>
        <a
          href="/url-params"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >URL Params</a
        >
      </li>
      <li>
        <a
          href="/query-string"
          class="rounded bg-zinc-700 px-4 py-2 font-mono shadow-md hover:cursor-pointer hover:bg-zinc-500 active:bg-zinc-600"
          >Query String</a
        >
      </li> -->
    </ul>
    <Request>
      <slot />
    </Request>
    <Response rawRequest={makeRequest} />
  </div>
</div>
