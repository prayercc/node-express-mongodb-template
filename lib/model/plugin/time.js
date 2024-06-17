 /**
    * doc 创建时间 plugin。其中在 插入一条 doc 时 同时创建 createdAt 和 updateAt 字段
    *
    * @param schema
    * @param options
    */


function createdAt(schema,options){
    schema.add({createdAt: Date});
    //增加前钩子
    schema.pre('save', function (next) {
        let now = Date.now();
        this.createdAt = now;
        next();
    });
}

module.exports = {
    createdAt
}