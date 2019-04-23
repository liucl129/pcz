$(function(){
//设计页

$.ajax({
    url:"product/sheji",
    type:"get",
    data:{},
    dataType:"json",
    success:function(result){
        $(".al-right").html(
            `<ul class="show" id="ul1">
            <li>
                <a href="">
                <img src="`+result[0].img_url+`" alt="">                       
                </a><h3>案例一</h3>
            </li>
            <li> 
                <a href="">
                <img src="`+result[1].img_url+`" alt="">                      
            </a><h3>案例二</h3>
            </li>
            <li>
                <a href="">
                <img src="`+result[2].img_url+`" alt="">
                </a>
                <div><h3>案例三</h3></div>
            </li>
        </ul> `
        );
    }

});

})