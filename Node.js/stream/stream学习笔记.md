# Node.js steam 学习笔记

```js
// 大文件读取的时候用stream的方法而不是直接读文件
fs.readFile(fileName, function(err, data){
  res.end(data);
})
// 替换成用stream的方法
const readStream = fs.createReadStream(fileName);
readSream.pipe(res);
```
