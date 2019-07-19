## 总结： 

1. AST语法树获取： 

```
const stats = await compiler('./example.txt')

// AST语法树获取
const output = stats.toJson()
```

2. AST语法树: 大概属性: { asserts, entrypoints, outputPath, publicPath, hash, namedChunkGroups, chunks, modules, children }等属性


3. AST语法树生成， webpack通过acorn这个javascript parser将用户自定义的源代码解析为AST语法树


## loader总结
loader总是返回字符串, 如果某loader(如file-loader)需要接受二进制文件，配置module.exports.raw = true，就可以接受buffer

### 常用功能对应API
开启缓存： this.cacheable()

异步: 
```
var callback = this.async()
dosomething(() => {
  ...
  callback(null, result)
})
```

获取loader的options(loader-utils插件) + 校验options格式(schema-utils插件)
```
const getOption = require('loader-utils').getOptions
const validate = require('shcema-utils')

let shcema = {
  "type": "object",
  "properties": {
    "content": {
      "type": "string",
    }
  }
}

module.exports = function (source) {
  const options = getOption(this)
}
```

loader默认传给loader字符串, 需要二进制文件的时候，会转为Buffer
```
module.exports = fucntion (source) {
  source instanceof Buffer // true
  // raw不为true的时候也可以直接返回buffer
  return source
}
module.exports.raw = true
```


## babel-loader编写总结
利用babel-core库， babelOptions设置好babel的preset之后，调用var result = babel.transform(source, babelOptions), 返回result.code

## style-loader + css-loader

css-loader: 解析@import或者url这样的外部资源  
style-loader: 定义pitch先拿到css样式(不定义的话可能拿到的是字符串)，把样式插入head标签中   
!!代表忽略loader中的require，如果不忽略的话会产生无限递归调用的情况， 如: 在style-loader里面require('xx.css')， 就会无限递归

**所以在style-loader中如果要引入css文件`require('xx.css')`就需要一个 css-loader**


## file-loader
复制一份文件内容，并根据配置为他生成一个唯一的文件名
1. loaderUtils.interpolateName能把内容和名字生成为一个文件

2. this.emitFile()告诉webpack要生成的是文件

3. module.exports.raw = true，导出的为二进制文件

## url-loader
如果是字符串，转为buffer, 如果是其他类型把文件做base64编码，然后嵌入CSS/HTML/JS中
结果就是：  
用file-loader的话， 会把文件打包到dist下  
而用url-loader的话是直接转成base64嵌入了所以不会在dist下生成图片文件