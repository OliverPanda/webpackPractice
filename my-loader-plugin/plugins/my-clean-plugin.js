const path = require('path')
const fs =  require('fs')

const delFiles = function delDir (path) {
  let files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach((file, index) => {
      let curPath = path + "/" + file
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath) //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    })
    fs.rmdirSync(path)
  }
}

class Cleanup {
  constructor (path) {
    // 后续可以兼容数组，字符串，正则， 参考vue-router includes，目前默认数组
    this.path = path
  }
  apply (compiler) {
    compiler.hooks.beforeCompile.tap (
      'remove old dist',
      (params) => {
        console.log('runing my-clean-plugin')
        this.path.forEach((row) => {
          var pathUrl = row
          // 相对路径转绝对路径
          if (!path.isAbsolute(row)) {
            pathUrl = path.resolve(compiler.options.output.path, row)
          }
          console.log('first path is ', pathUrl)
          delFiles(pathUrl)
        })
        return true // return true to emit the output, otherwise false
        // callback()
      }
    )
  }
}

module.exports = Cleanup