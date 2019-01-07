JSON依赖包的引用说明
1. webpack + webpack-cli --webpack4需要webpack-cli
2. raw-loader, css-loader, file-loader----- 
      raw-loader: import 文件为一个字符串
      css-loader + style-loader: importCSS文件的时候 解析CSS文件
      file-loader: import文件为一个url
3. webpack-dev-server, 创建开发环境, 启动node server, 能够实现热重载, 打包文件不存硬盘直接存内存中
4. clean-webpack-plugin, 清除之前打包的文件， 不然每次打包都会留下来
