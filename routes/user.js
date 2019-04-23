const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空路由器对象
var router=express.Router();
//1.检索用户
router.get('/detail',(req,res)=>{

	//获取数据
	var obj=req.query;
	console.log(obj);
	var $uid=obj.uid; 
	//验证是否为空
	if($uid==''){
		res.send({code:401,msg:'uid requried'});
		//如果验证失败，阻止继续往后执行
		return;
	}
	//执行SQL语句，查询对应的数据
	pool.query('select * from zx_user where uid=?',[$uid],(err,result)=>{
		if(err) throw err;
		//发查询结果发送到浏览器
		res.send(result);
	});
	//res.send('这是详情');

});
// 用户注册
router .post('/reg',(req,res)=>{
    // 获取post请求的数据
    var obj=req.body;
    // 验证数据是否为空
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var $phone=obj.phone;
    if(!$uname){
		res.send({code:401,msg:'uname required',data:0});
		return;
	}
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	
	if(!$phone){
		res.send({code:404,msg:'phone required'});
		return;
    }
    //执行sql语句 把数据(obj)插入到数据库中
	//注册成功 {code:200,msg:'reg suc'}
	pool.query('insert into zx_user set ?',[obj],(err,result)=>{
		if(err) throw err;
		//console.log(result);//
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg suc'});
		}
	});
});
//3.用户登录
router.post('/login',(req,res)=>{
	//获取post请求的数据
	var obj=req.body;
	//验证数据是否为空
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	console.log($uname);
	console.log($upwd);
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	//执行sql语句 以用户名 和密码为条件查询数据 查看结果
	pool.query('select * from zx_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);	
		//判断是否登录成功 根据数组的长度
		if(result.length>0){
			res.send({code:200,msg:'login suc'});
		}else{
			res.send({code:301,msg:'login err'});
		}
	});
});
// 用户咨询  留言板
router .post('/ban',(req,res)=>{
    // 获取post请求的数据
    var obj=req.body;
	// 验证数据是否为空
	var $txt=obj.txt;
    var $uname=obj.uname;
	var $tel=obj.tel;
	// console.log($uname);
	// console.log($tel);
    if(!$txt){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if(!$uname){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	
	if(!$tel){
		res.send({code:404,msg:'phone required'});
		return;
    }
    //执行sql语句 把数据(obj)插入到数据库中
	//留言成功 {code:200,msg:'reg suc'}
	pool.query('insert into index_ban set ?',[obj],(err,result)=>{
		if(err) throw err;
		//console.log(result);//
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg suc'});
		}
	});
});
//导出路由器
module.exports=router;