import { writable } from 'svelte/store';

export interface Options {
  url: string;
  method: 'GET' | 'POST';
  headers: Map<number, { key: string; value: string }>;
  body: string;
}

const createOptions = () => {
  const store = writable<Options>({
    url: '',
    method: 'GET',
    headers: new Map([[0, { key: '', value: '' }]]),
    body: '',
  });

  return store;
};

export const options = createOptions();
