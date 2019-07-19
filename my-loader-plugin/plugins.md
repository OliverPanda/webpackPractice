### plugins大概简介
plugins是一个具有apply方法的js对象， apply方法会被webpack compiler对象调用，并且compiler可以在整个compilation（编译）周期中使用

### webpack插件的组成
1. 插件本身是一个带apply函数的对象

2. 指定webpack-plugin附加到的webpacks事件钩子,`compiler.hook.done`之类的

3. 调用callback返回

### 基础plugin例子demo
```
class FilePlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    // 把plugin挂载到某个webpack生命周期钩子上，同步plugins用tap, 异步用tapAsync或者tapPromise
    compiler.hook.emit.tap('filePlugin', (compilation, callback) => {
      
    })    
  }
}

module.exports = FilePlugin
```