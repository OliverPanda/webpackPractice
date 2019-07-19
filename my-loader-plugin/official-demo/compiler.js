import path from 'path'
import webpack from 'webpack'
import memoryfs from 'memory-fs'
// import webpackConfiguration from './webpackConfig'

export default (fixture, options = {}) => {
  console.log('fixture为：', fixture)
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'text-loader-result.[hash:50].js'
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: {
            loader: path.resolve(__dirname, './simply-text-loader'),
            options: {
              name: 'Oliver'
            }
          }
        }
      ]
    }
  })

  compiler.outputFileSystem = new memoryfs()

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      err && reject(err)
      resolve(stats)
    })
  })
}
