const { getOptions, interpolateName } = require('loader-utils')


module.exports = function (source) {
  // 获取options，字符串能转成对象，name=[name]_[hash].[ext] ==> { name: "[name]_[hash].[ext]" }
  const options = getOptions(this) || {}
  // name和content生成一个文件
  let url = interpolateName(this, options.name, { source })
  // 告诉webpack要创建文件
  this.emitFile(url, source)
  // __webpack_public_path__是webpack全局变量，获得publicPath
  return 'module.exports = __webpack_public_path__ + ' + JSON.stringify(url)
}

// 指定webpack用raw-loader来加载文件内容而不是返回utf8字符串
module.exports.raw = true