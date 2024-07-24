const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './' // Bu ayar ile kök dizinden bağımsız olarak göreli yollar kullanılır
})
