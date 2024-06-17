//每个函数负责单一的增删改查
const BookModel = require('../model/book.model')

//查询
const query = (query) => {
    // 配置项
    const projection = {
        name: 1,
        age: 1
    }
    //查询项目
    const queryObj = {}
    if(query.name) {
        Object.defineProperty(queryObj,'name',query.name)
    }
    //查询交互
    return BookModel.find(queryObj,projection)        
}
//增加
const add = (body) => {
    if(body.name && body.age) {
        const newBook = new BookModel({
            name: body.name,
            age: body.age,
            status: body.status ? body.status : false
        })
       return newBook.save()
    } else {
        return new Promise((_,reject) => reject('参数不全'))
    }
}
//修改
const updateOne = (body) => {
    const { id, ...others } = body
    if(id) {
        return BookModel.findOneAndUpdate({
            _id: id
        }, others, {
            returnDocument: "after",
            select: "name age"
        })
    } else {
        return new Promise((_,reject) => reject('参数不全'))
    }
}
//删除
const deleteOne = (body) => {
    const { id } = body
    console.log(BookModel)
    if(id) {
        return BookModel.findOneAndRemove({
            _id: id
        })
    } else {
        return new Promise((_,reject) => reject('参数不全'))
    }
}
// 关联他表
// const unitSearch = (query) => {
//     const { id } = query
//     return BookModel.aggregate([
//         {
//             $llokup: {
//                 from: 'order',
//                 localField: '_id',
//                 foreignField: 'order_pid',
//                 as: 'join'
//             }
//         },
//         { $match: {price: {$gt: 20 } }},
//         { $project: {"inventory_docs": 1, "_id": 0} }
//     ])
// }
module.exports = {
    query,
    add,
    updateOne,
    deleteOne
}