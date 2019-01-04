var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')  // 自动注入
var cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bindle.[chunkhash:5].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.txt$/, // include哪些路径下的对应后缀的文件才用这个loader去解析  exclude某些目录下不用该loader解析
        use: 'raw-loader'
      },
      {
        test: /\.(jpg|png|gif|eot|ttf|woff)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // 如果loader不在node_modules下的话 需要设置resolveLoader的modules地址, 以便能够查找到loader
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  // 通过在浏览器添加元信息增强调试效果, 'source-map': 最详细, 最慢  'eval': 最快，但不细   
  // 'eval-source-map': sourceMap嵌入每个模块
  devtool: 'source-map',
  target: 'web', // 运行环境，默认web
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my h5 title',
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      inject: true,
      alwaysWriteToDisk: false
    }),
    new cleanWebpackPlugin(['dist/*.*'])
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        // vendor js打包为vendor, css打包为styles
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },
        styles: {
          name: 'styles',
          chunks: 'all',
          test: /\.(less|css|scss)$/,
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  devServer: {
    port: 8000,
    compress: true, // 资源用gzip压缩 优点:压缩率高,传输快   缺点: 需要客户端压缩, 服务端解压
    historyApiFallBack: true, // 设置404，vue-router的history模式需要
    proxy: [{}]
  }
}