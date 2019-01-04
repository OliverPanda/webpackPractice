webpack 包含几个大模块： entry, output, mode, module(loader), plugins, resolve, 

entry: 入口 entry: {main: 'aaa.js', entry2: 'bbb.js'}  => entry: 'aaa.js'是entry: {main: 'aaa.js'}的简写
output 打包文件的出口，必须使用绝对路径 [name]--chunk名   [chunkhash:5]--生成5位随机的哈希

context---设置资源的基础路径,如果设置为path.resolve(__dirname, '../')的话需要在resolve.modules中重新设置modules的路径为./node_modules

mode: 分development和production， production相对于development多了很多压缩优化的plugins，但速度慢

module -- 不同的文件用什么文件(loader)去解析, module.rules: [{test: 正则, loader: ['', ''], options:{}]

plugins: 

runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。


代码优化： 
1. webpack4自带两种优化方式 mode: 'development'   mode: 'production'
2. 自己自定优化方式的话在config.optimization


引入webpack-dev-server启动node服务并像vue一样直接打开页面