import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import adapter from '@sveltejs/adapter-cloudflare'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess:
      vitePreprocess({
      }),
    kit: {
      adapter: adapter({}),
    }
}
