const { Router } = require('express');
const bookDao = require('../lib/dao/book.dao')
const router = Router();

router.get('/query',(req,res) => {
    const handler = bookDao.query(req.query);
    handler.then(data=>{
        res.send(data)
    },err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book collection."
        });
    })
})
router.post('/add',(req,res) => {
    const handler = bookDao.add(req.body);
    handler.then(data =>{
        res.status(400).send({
            message: 'ok'
        })
    },err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book collection."
        });
    })
})

router.post('/update',(req,res) => {
    const handler = bookDao.updateOne(req.body);
    handler.then(data=>{
        res.send(data)
    },err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book collection."
        });
    })
})
router.post('/delete',(req,res) => {
    const handler = bookDao.deleteOne(req.body);
    handler.then(data=>{
        res.send(data)
    },err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book collection."
        });
    })
})
module.exports = router