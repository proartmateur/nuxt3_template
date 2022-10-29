import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // include: ['dist/__test__/**/mapping.spec.js'],
    // include: ['src/__test__/**/mapping.spec.ts'],
    exclude: ['node_modules'],
    // watchIgnore: [],
    environment: 'jsdom'
  }
})
