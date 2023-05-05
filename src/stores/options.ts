import { writable } from 'svelte/store';

const createOptions = () => {
  return writable({
    url: '',
  });
};

export const options = createOptions();
