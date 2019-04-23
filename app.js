const express=require('express');
//
const bodyParser=require('body-parser');
//引入路由器
const productRouter=require('./routes/product.js');
//引入用户路由器
const userRouter=require('./routes/user.js');
//创建web服务器
var server=express();
server.listen(5050);
//托管静态资源到public
server.use(express.static('./public'));
//配置中间件
server.use(bodyParser.urlencoded({
	extended:false
}));
//使用路由器管理路由
//把商品路由器挂载到/product
server.use('/product',productRouter);
server.use('/user',userRouter);