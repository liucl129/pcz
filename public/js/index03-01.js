$(function(){
    // 新闻页
     $.ajax({
         url:"http://127.0.0.1:3000/product/anli01",
         type:"get",
         data:{},
         dataType:"json",
         success:function(result){
             console.log(result);
        $("#ul1").html(
        `  
              <li>
                 <a href="">
                 <img src="img/1-1PH6162941463.jpg" alt="">                       
                 </a><h3>案例一</h3>
             </li>
             <li> 
                 <a href="">
                 <img src="img/1-1PH6162914638.jpg" alt="">                      
             </a><h3>案例二</h3>
             </li>
             <li>
                 <a href="">
                 <img src="img/1-1PH6162Ta11.jpg" alt="">
                 </a><h3>案例三</h3>
             </li> `
         
        );
        $("#ul2").html(
            ` <li>
                 <a href="">
                 <img src="img/1-1PZ5093530643.jpg" alt="">                       
                 </a><h3>案例一</h3>
             </li>
             <li> 
                 <a href="">
                 <img src="img/1-1PH616302a21.jpg" alt="">                      
                </a><h3>案例二</h3>
             </li>
             <li>
                 <a href="">
                 <img src="img/1-1PH6163004H1.jpg" alt="">
                 </a><h3>案例三</h3>
             </li> `
        );
        $("#ul3").html(
            `<li>
            <a href="">
            <img src="img/1-1PH61632451R.jpg" alt="">                       
            </a><h3>案例一</h3>
        </li>
        <li> 
            <a href="">
            <img src="img/1-1PH6163524425.jpg" alt="">                      
           </a><h3>案例二</h3>
        </li>
        <li>
            <a href="">
            <img src="img/1-1PH6163152550.jpg" alt="">
            </a><h3>案例三</h3>
        </li> `
        );
        $("#ul4").html(
            `<li>
            <a href="">
            <img src="img/1-1PZ5093Q2602.jpg" alt="">                       
            </a><h3>案例一</h3>
        </li>
        <li> 
            <a href="">
            <img src="img/1-1PZ5093K3D3.jpg" alt="">                      
           </a><h3>案例二</h3>
        </li>
        <li>
            <a href="">
            <img src="img/1-1PH6163219505.jpg" alt="">
            </a><h3>案例三</h3>
        </li> `
        );
        }
     });
 })