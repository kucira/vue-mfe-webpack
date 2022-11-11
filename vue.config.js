const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.js'
    }
  },
  publicPath: 'auto',
  configureWebpack: {
    optimization: {
      // splitChunks: false
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'core',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue'
        },
        shared: {
          vue: {
            singleton: true
          }
        }
      })
    ]
  },
  transpileDependencies: true
})
