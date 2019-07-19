class FilePlugin {
  apply (compiler) {
    compiler.hooks.emit.tapAsync(
      'emit file list plugin',
      (compilation, callback) => {
        // 在生成的文件中 创建头部字符串
        var filelist = 'file-list-plugin'

        // compilation.assets: 所有编译过的资源
        for (var filename in compilation.assets) {
          filelist += '-' + filename
        }
        // 将列表作为新的资源插入到webpack构建中
        compilation.assets['filelist.md'] = {
          source: () => filelist,
          size: () => filelist.length
        }
        callback()
      }
    )
  }
}

module.exports = FilePlugin