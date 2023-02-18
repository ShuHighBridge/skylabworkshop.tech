import {defineConfig} from 'astro/config'

// https://astro.build/config
// eslint-disable-next-line import/no-unresolved
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
})
