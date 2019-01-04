记录下写的过程中遇到的问题：
1. Child html-webpack-plugin for "index.html"  ------ Entrypoint undefined = ./index.html
    出现配置： 
      config.plugins >> {
        new HtmlWebpackPlugin({
          title: 'my h5 title',
          filename: './index.html',
          inject: true,
          minify: true
        })
      }
  

2. 脚本命令---> 运行dev无法成功生成打包文件, 运行webpack可以
    "dev": "webpack-dev-server --inline --progress --config webpack.config.js --hide_modules",
    "webpack": "webpack --config webpack.config.js --hide_modules"

    A: webpack-dev-server
  