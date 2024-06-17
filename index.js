const express = require("express");
const mongoose = require("./lib/connect");
const bookRouter = require('./router/book.router')

const PORT = 8080;
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// 中间件，简单记录访问日志
app.use((req,res,next) => {
    if(req.method === 'GET') {
        console.log(`GET  ${req.url} ${JSON.stringify(req.query)}`)
    } else {
        console.log(`POST  ${req.url} ${JSON.stringify(req.body)}`)
    }
    next();
})
//注册相关接口
app.use("/api/book",bookRouter);
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to prayers application." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});