# white-box-cli
ts-react项目白盒脚手架

# 特点
1. 未把webpack配置隐藏，就像白盒一样，开发者可根据自己需要修改
2. 提供一键上传ftp/sftp服务器命令

# 适用对象
个人项目、小型前端团队、webpack折腾爱好者

# 配置包含
- React
- Typescript
- CSS、Less 及其 Module
- PostCSS
- ESLint
- Prettier
- HMR


# 快速使用
```
npx white-box-cli init my-app
```

*推荐使用`npx`方式*

# 功能命令

## 初始化项目

### npx
```
npx white-box-cli init my-app
```
### 全局安装
```
npm i white-box-cli -g
white-box-cli init my-app
```

## 进入开发模式

### npm
```
npm run dev
```

### npx
```
npx white-box-cli 
```

### 全局
```
white-box-cli dev
```

选项功能请通过`white-box-cli dev --help`或`npx white-box-cli dev --help`查看。

常用示例 (npx则命令前加上npx即可) :
* `white-box-cli dev -p 8081`: 指定端口号

## 打包应用

### npm
```
npm run build
```

### npx
```
npx white-box-cli build
```

### 全局
```
white-box-cli build
```

## 部署至FTP/SFTP服务器
❗❗❗注意防止**upload.js**等敏感信息外泄！！.gitignore中已添加upload.js，防止上传至GitHub！

使用upload功能需要项目根目录下含**upload.js**，项目初始化后会包含**upload.js**，根据规范配置填写即可。

👉[upload.js配置规范](https://github.com/Joeoeoe/white-box-cli/blob/master/template/upload.js)
### npm
```
npm run upload
```

### npx
```
npx white-box-cli upload
```

### 全局
```
white-box-cli upload
```

选项功能请通过`white-box-cli upload --help`或`npx white-box-cli upload --help`查看。

常用示例 (若受用npx，则命令前加上npx即可) :
* `white-box-cli upload -b`: 打包后再上传。(生成项目可通过`npm run build-upload`快捷调用)


## 其他模板项目命令
* npm run fix: 调用eslint
* npm run format: 调用prettier

# 如果有一天我不想使用这个脚手架了😥
由于脚手架的webpack配置是完全暴露的，如果有一天不使用此脚手架，其中的配置信息可正常使用

比如使用webpack-cli，只需调整命令即可。


# Todo

## 1.0
- [x] 自定义端口支持 √
- [x] init 进度完善 √
- [x] npx 执行 √
- [x] 脚手架 typescript 改写 √
- [x] build功能 √
- [x] 脚手架报错机制 √
- [x] 脚手架提示完善 √
- [x] template 项目 typescript 本地安装 √
- [x] tsc watch √
- [x] upload 至服务器 √
- [x] upload 1.添加防止信息泄露提示, 使用inquirer提醒交互; √
- [x] 文档编写
