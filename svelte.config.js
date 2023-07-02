import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-cloudflare'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess:
      sveltePreprocess({
        postcss: true,
      }),
    kit: {
      adapter: adapter({}),
    }
}
