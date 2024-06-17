##  express+mongodb 模拟springboot实现model、dao、service、controller4层控制

> 使用到的插件： express, mongoose

### 四层介绍

- model: model与数据库中的实体一一对应
- dao:该类都是进行数据操作的类，是对于数据库中的数据做增删改查等操作的代码。
- service: 业务层，给controller层的类提供接口进行调用。一般就是自己写的方法封装起来
- contrioller: 控制层，负责具体模块的业务流程控制，需要调用service逻辑设计层的接口来控制业务流程, 与前端接口的对接和每个功能接口的实现方法都写在这里，可以说是代码的主干部分。

### 本项目介绍

- connect: 新增连接层，用于负责数据库连接创建
- model: 与数据库集合一一对应
- dao: 负责数据库集的操作，因为Schema已经内置了很多数据库方法，本层也兼顾业务层(service)
- contrioller: 控制层，根据特性，实现在路由文件中

### 项目目录介绍
- lib
    - connect  负责数据库连接，属于connect层
    - model  定义Schema,属于model层
        - hook  定义xxxSchema各个行为的钩子函数
        - plugin 插件，定义每个Schema相同的属性和钩子函数等
        - xxx.model.js  具体定义xxxSchema
    - dao  负责实例化Schema以及封装相关curd操作
        - xxx.dao.js
    
- router
    - xxx.router.js  负责xxx集合的相关接口，属于contrioller层
- index.js  服务入口

### 接口测试

apipost等工具
