const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空路由器对象
var router=express.Router();

//关于我们
router.get("/add",(req,res)=>{
    var sql="select content from index_about";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//首页案例图片
router.get("/img",(req,res)=>{
    var sql="select cid,img_url from index_case";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// 首页 新闻
router.get("/new",(req,res)=>{
    var sql="select nt,content,img_url from index_new limit 0,6";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// 新闻页
router.get("/new1",(req,res)=>{
    var sql="select nt,content,img_url from index_new1 limit 0,3";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
        // console.log(result)
    })
})

// 案例页
router.get("/anli",(req,res)=>{
    var sql = "select anl,img_url from index_anli";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
        // console.log(result);
    })
})
// 案例分页
router.get("/anli01",(req,res)=>{
    var sql = "select anl,img_url from index_anli01";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
        // console.log(result);
    })
})
//设计师
router.get("/sheji",(req,res)=>{
    var sql = "select img_url from index_sheji";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
        // console.log(result);
    })
});
//导出路由
module.exports=router;