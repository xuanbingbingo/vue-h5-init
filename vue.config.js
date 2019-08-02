const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  // devServer: {
  //   // 设置代理
  //   // 设置主机地址
  //   host: 'localhost',
  //   // 设置默认端口
  //   port: 8080,
  //   proxy: {
  //     '/': {
  //       target: 'http://10.200.102.118:8080', // 个人本地接口服务地址
  //       ws: false, // 是否启用websockets
  //       changOrigin: true
  //     }
  //   }
  // },
  outputDir: 'dist',
  publicPath: '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*', '!border*']
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            // selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  }
}
