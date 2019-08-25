const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(__dirname, dir)
  }
module.exports={
  publicPath: './',
    
   lintOnSave: false, // eslint-loader 是否在保存的时候检查
   css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // pass options to less-loader
      less: {
        // 引入全局变量样式
        data: `
          @import "@/assets/css/common.less;
        `
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  chainWebpack:config=>{
    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/images"))
      .set("@css", resolve("src/assets/styles/css"))
      .set("@less", resolve("src/assets/css/less"));
    if (isProduction) {
      config.plugins.delete('prefetch')  // 删除预加载
      config.plugins.delete('preload');  // 删除预加载
      config.optimization.minimize(true);// 压缩代码
      config.optimization.splitChunks({ // 分割代码
        chunks: 'all'
      })
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
          //生产环境自动删除console
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_debugger: true,
                drop_console: true//注释console
               // pure_funcs:['console.log'] // 移除console
              },
            },
            sourceMap: false,
            parallel: true,//多进程提高打包速度
          })
        );
    }
  },
  productionSourceMap: false,// 生产环境是否生成 sourceMap 文件
  parallel: require('os').cpus().length > 1,//启用并行化
  devServer: {
    //port: 8888, // 端口
    open: true, // 自动开启浏览器
    compress: false, // 开启压缩
    proxy: {//跨域处理
      '/api': {
          target: 'http://192.168.1.7:3000',
          changeOrigin: false,
          ws: true,
          pathRewrite: {
              // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
               '^/api': '/'
          }
      }
  }
  },
}