import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off',
      'vue/no-multiple-template-root': 'off',
    },
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
//   pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
)
