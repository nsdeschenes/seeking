<div class="flex h-full grow flex-col items-center border border-green-500">
  <ul class="isolate inline-flex gap-2 py-2">
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
    <li>
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
    </li>
  </ul>
  <slot />
</div>
