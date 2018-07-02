var express = require('express');
var router = express.Router();

router.post('/create',(req,res,next) => {
    res.status(200).json({msg: 'Post rquest is working'});
});

router.get('/read',(req,res,next) => {
    res.status(200).json({msg: 'Post rquest is working'});
});

router.put('/update',(req,res,next) => {
    res.status(200).json({msg: 'Post rquest is working'});
});

router.delete('/delete',(req,res,next) => {
    res.status(200).json({msg: 'Post rquest is working'});
});

module.exports = router;