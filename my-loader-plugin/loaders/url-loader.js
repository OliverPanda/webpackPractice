const { getOptions } = require('loader-utils')
const mime = require('mime')

module.exports = function (content) {
  var options = getOptions(this)
  var limit = options && options.limit

  if (limit) {
    limit = parseInt(limit, 10)
  }
  var mimetype = (options && options.mimetype) || mime.getType(this.resourcePath)
  // 没限制 || 没超限制
  if(!limit || content.length < limit) {
    if(typeof content === "string") {
      content = new Buffer(content)
    }

    // 直接返回 base64 编码的内容
    return "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + content.toString("base64"));
  }

  // 超过了文件大小限制，那么我们将直接调用 file-loader 来加载
  var fallback = options.fallback || "file-loader"
  var fallbackLoader = require(fallback)

  return fallbackLoader.call(this, content)
}
module.exports.raw = true