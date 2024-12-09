const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

import svgLoader from 'vue-svg-loader'

export default defineConfig({
  plugins: [vue(), svgLoader()]
})