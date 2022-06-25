# Locilc

> 一个前端脚手架工具

### 1. 概述：

​	locilc是一个前端项目脚手架构建工具，目前仅支持搭建koa项目，下面是示例图：

![image](https://tva3.sinaimg.cn/large/0087ufIQgy1h3kry4l5ttj30l309fgpo.jpg)



### 2. 安装：

- npm全局安装：

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
   ```

   

3. 使用脚手架创建项目：

   `  lic create <project>`

   参数：`  project` 为必填项，该参数将作为项目名称传入至执行程序，并以此作为项目名称来创建你所选择的项目。目前所支持的项目有：`koa` 

   ![](https://tva2.sinaimg.cn/large/0087ufIQgy1h3kr97n63wj30q7039myj.jpg)

   ``` shell
   lic craete demo1
   ? Please select the project you want to create? koa
   Initialize the repository...
   ✔ Template cloned
   ✔ Depend on the installation is complete
   Completing the project!
   
   Start the project: 
   
     cd demo1
     npm start
   
   ```

   

### 4. koa项目文件目录结构划分：

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

> - 项目启动后你可以访问示例接口：
>
>   `http://localhost:2022/home?id=1` 该接口是`GET`请求
>
>   `POST`请求地址为：`http://localhost:2022/home`

​	**开始享受开发吧～**

### 6. 归档：

- v0.0.1更新于2022/6/25：
  1. 加入koa脚手架创建项目
  2. 查询当前可搭建项目列表
  3. 查询版本号

*如果你使用本工具觉得还不错，希望能留下一个star，本工具将持续更新*