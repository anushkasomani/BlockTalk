const express=require('express');
const Block=require('../models/node');
const router=express.Router();


router.get('/blocks', (rrq,res)=>{
    Block.find()
    .then((result)=>{
        res.render('index',{blocks: result});
    })
    .catch((err)=>{
        console.log(err);
    });
})


router.post('/blocks',(req,res)=>{
    console.log(req.body)
    const block=new Block(req.body);
    block.save()
    .then(()=>{
        res.redirect('/blocks');
    })
    .catch((err)=>{
        console.error(err);
    });
});


module.exports=router;

