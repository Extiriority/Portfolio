import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import cloudflare from '@sveltejs/adapter-cloudflare'

export default {
  preprocess:
      vitePreprocess({
      }),
    kit: {
      adapter: cloudflare({}),
    }
}
