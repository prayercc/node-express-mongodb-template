// 连接层
const dbConfig = require("./config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


mongoose.connect(dbConfig.url,dbConfig.config).then(()=>{
    console.log("Connected to the database!");
}).catch(err=>{
    //处理初始连接错误
    console.log("Cannot connect to the database!", err);
    process.exit();
})

module.exports = mongoose














