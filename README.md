# Locilc

> 一个前端脚手架构建工具，持续更新中...

### 1. 概述：

​	locilc是一个前端项目脚手架构建工具，目前支持的项目有：[koa](https://github.com/koajs/koa)、[tools-base](https://github.com/loclink/tools-base)

![locilc01](https://tva1.sinaimg.cn/large/0087ufIQgy1h46iyvyaevg30jd0bpmz8.gif)



### 2. 安装：

- 使用npm全局安装：

  ``` shell
  npm install locilc -g
  ```



### 3. 如何使用

1. 查看帮助：

   ```shell
   lic -h  
   Usage: lic [options] [command]
   
   Options:
     -v, --version     Print the version number
     -h, --help        display help for command
   
   Commands:
     create <project>  Use the project name to create a custom project
     list              Print the current can create a list of items
     help [command]    display help for command
   
   ```

   

2. 查看当前支持创建的项目列表：

   ``` shell
   lic list        
   1. koa
   2. tools-base
   ```




### 4. 创建koa项目：

使用指令：`  lic create <project>`   `<project>` 为必填项， 将进入项目模板选择列表，项目目录名称为该指令传入的`<project>`参数，`package.json`中`name`属性也取决于该参数的值。

参数：该参数将作为项目名称传入至执行程序，并以此作为项目名称来创建你所选择的项目。

![locilc01](https://tva1.sinaimg.cn/large/0087ufIQgy1h46iyvyaevg30jd0bpmz8.gif)

koa项目文件目录结构划分：

``` shell
.
├── package.json
├── package-lock.json
└── src # 核心源码
    ├── app # 一些全局的方法定义于此文件夹中
    │   ├── config.js # 项目的配置文件
    │   └── index.js # 注册全局中间件
    ├── controller # 控制中间件目录-该目录下的中间件处理数据库和返回接口结果
    │   └── home.controller.js # 示例home接口的控制器中间件
    ├── error # 错误处理目录
    │   ├── error-types.js  # 声明错误处理类型
    │   └── handle-error.js # 错误处理方法
    ├── main.js # 入口文件
    ├── middleware # 校验中间件目录-参数校验的方法放于此目录
    │   └── home.middleware.js # 示例home接口的参数校验中间件
    └── router # koa-router 路由-该目录下的文件将作为koa-router的实例自动注册，详情请参考home.js与index.js
        ├── home.js # home接口的路由
        └── index.js # 自动注册路由方法放于此文件中

```



### 5. koa项目的启动：

``` shell
cd demo1
npm start

> demo1@1.0.0 start
> nodemon ./src/main.js

[nodemon] 2.0.18
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./src/main.js`

    Server started!! Port is:2022
    Try to "GET" request: http://localhost:2022/home?id=1
  
```

项目启动后你可以访问示例接口：

`http://localhost:2022/home?id=1` 该接口是`GET`请求

`POST`请求地址为：`http://localhost:2022/home`

​	**开始享受开发吧～**



### 6. 关于tools-base：

tools-base是一个起手式的工具库开发基础构建设施，使用typescript开发一个属于自己的工具库并发布至`npm`仓库供自己或其他开发者使用。

详细内容请查阅： https://github.com/loclink/tools-base 



### 7. 归档：

- v1.0.0更新于2022/6/25：
  
  1. 加入koa脚手架创建项目
  2. 查询当前可搭建项目列表
  3. 查询版本号


- v1.0.1更新于2022/07/14：
  
  1. 重构创建操作
  2. 加入tools-base开发模板
  3. 新增版本校验


- v1.0.2更新于2022/07/14：

  1. 加入git仓库初始化操作

  

### 8. 未来计划：

1. 加入koa+ts+typeorm创建选项
2. 加入vue相关创建选项（vue2、vue3、pinia、vite）
3. 加入react相关创建选项（react+ts）
4. 加入前端路由的快捷创建方式
5. 加入后端路由的快捷创建方式

*觉得还不戳的话请留下你的star吧 ~*