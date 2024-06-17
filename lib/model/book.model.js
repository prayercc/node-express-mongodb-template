// 负责集合的创建

const mongoose = require('../connect/index')
const timePlugin = require('./plugin/time');

// Schema 必选
const BookSchema = mongoose.Schema({
    // id: {
    //     重命名_id
    //     type: Schema.Types.ObjectId
    // },
    name: {
        type: String,
        //预定义模式修饰符
        // lowercase:true, 小写
        // trim: true, 去除收尾空格
        // uppercase: true  大写
        //定义索引
        // unique: true,  唯一索引
        // index: true  普通索引
        //字段校验
        reqiured: true, //必传
        // max: 10, number类型，最大值
        // min: 0 , number类型，最小值
        // enum: ['0','1','2'] str,枚举类型，值满足
        // match: /msg/  正则校验值
        // maxlength: 10 str,长度
        // minlength: 0 str,长度
        // validate: function(val) {
        //     // 自定义校验，返回布尔值
        //     return true
        // }
    },
    // work: {
    //     type: String
    //     // set(work){
    //     //     return 'work:'+ work
    //     // },
    //     // get(wrok){
    //     //     return work.split(":")
    //     // }
    // },
    age: Number,
    status: {
        type: Number,
        default: 0
    }
})
 /**
  * 设置静态方法
  */
// BookSchema.static.findByName = function(name,cb) {
//     return new Promise((resolve,reject) => {
//         cb()
//     })
// }
 /**
  * 配置 plugin
  */
// BookSchema.plugin(timePlugin.createdAt);
// hook 可选
// BookSchema.pre('update', function (result,next) {
//     // 执行update之前的钩子函数
//     console.log('上一个钩子函数的数据', result);
//     next({
//         msg: '给下一个钩子函数'
//     });
// });
// 生成模型 必须
const BookModel = mongoose.model('Book',BookSchema, 'books');

module.exports = BookModel