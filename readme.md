# koa2-boilerplate

## Features

- [x] babel编译，支持 `import`、 `class`、`decorator` 等语法
- [x] 路由的自动加载与装饰器表达
- [x] nodemon 与 debug 结合
- [x] 参数校验
- [x] sequelize 定义模型
- [x] 异常捕获与错误码设计
- [ ] jwt 权限控制
- [x] 日志系统

## Structure

```bash
.
├── app/              # 业务代码
│   ├── controller/       # 控制层：用于解析用户输入，处理后返回相应的结果
│   ├── service/          # 服务层：用于编写业务逻辑层，比如连接数据库，调用第三方接口等
│   ├── model/            # 模型层 ：用于定义数据模型
│   ├── validator/        # 参数校验层：校验用户输入参数
│   ├── utils/            # 工具
│   ├── lib/              # 类库
│   └──── app.js
│
├── config/           # 配置
│
├── logs/             # 日志
│
├── middleware/       # 中间件
│
├── static/           # 静态资源
│
├── package-lock.json
├── package.json
└── start.js
```

## Use

```bash
git clone https://github.com/phoebeCodeSpace/koa2-boilerplate.git [your project]
```
