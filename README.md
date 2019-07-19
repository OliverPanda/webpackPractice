### webpack正常使用流程
1. 初始化参数config.js

2. 使用webpack获得compiler
```
import config from 'config'
import webpack from 'webpack'
const compiler = webpack(config)
```
3. 运行compiler -> compiler.run((err, stats) => {})

### 多个loader的时候, loader是从右向左调用的, webpack处理流程
1. 实际上会**先从左到右调用loader里的pitch方法**

2. pitch完从右到左执行loader

## loader和plugins的区别
loader一般用于文件解析， 比如require某个文件的时候，调用某一个或多个loader对该文件进行解析，一般返回字符串，可以定义loader的export.defautls.raw = true返回buffer

plugins比loader要灵活，plugins是一个有apply方法的js对象， 会被webpack compiler进行调用， 然后**作用于整个webpack的编译(compilation)过程，甚至可以调用API中断webpack的编译**

总结： 
loader更多的感觉是针对于webpack编译之前的文件解析操作  
plugin则是更多偏向编译过程中的操作



[常用loader具体做了什么](./my-loader-plugin/README.md)




### 注意事项
1. output必须是绝对路径

