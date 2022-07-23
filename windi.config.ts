import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

/**
 * safelist: 支持动态构建的类也能够按需加载，例如：
 *  <div className={`p-${size}`} /> 当白名单中包含此类时，能提供按需生成的CSS
 */

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],
  preflight: true,
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  transformCSS: 'pre', // 支持 css/postcss/scss 中的 scoped style
});
