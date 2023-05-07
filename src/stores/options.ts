import { writable } from 'svelte/store';

const createOptions = () => {
  return writable({
    url: '',
    method: 'GET',
  });
};

export const options = createOptions();
