### 第一步：安装pug:

```js
#安装支持pug依赖
npm install -g pug pug-loader pug-filters pug-cli
```

> 这个地方务必使用全局安装，否则会出现“'pug' 不是内部或外部命令，也不是可运行的程序“

### 第二步：了解pug的语法：

具体大家可以去看一下这个[官方文档](https://pug.bootcss.com/language/includes.html)

第三部：转译成html：

```js
pug xxx.pug        # 压缩版 (默认)
pug -P xxx.pug     # 格式化版 (不能小写，否则以为是--path)
pug -P -o ./html   # 编译到哪里
pug -w             # watching 自动编译
```
node template.js
console.log('<p>Timothy's Pug source code!</p>)
