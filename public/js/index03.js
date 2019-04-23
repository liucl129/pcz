$(function(){
 // 案例页
 $.ajax({
    url:"product/anli",
    type:"get",
    data:{},
    dataType:"json",
    success:function(result){
        $("#al-right").html(
            `
            <ul>
            <li>
                <a href="">
                <img src="`+result[0].img_url+`" alt="">                       
                </a><h3>`+result[0].anl+`</h3>
            </li>
            <li> 
                <a href="">
                <img src="`+result[1].img_url+`" alt="">                       
                </a><h3>`+result[1].anl+`</h3>
            </li>
            <li>
                <a href="">
                <img src="`+result[2].img_url+`" alt="">                       
                </a><h3>`+result[2].anl+`</h3>
            </li>
        </ul>
        <ul>
            <li>
                <a href="">
                <img src="`+result[3].img_url+`" alt="">                       
                </a><h3>`+result[3].anl+`</h3>
            </li>
            <li> 
                <a href="">
                <img src="`+result[4].img_url+`" alt="">                       
                </a><h3>`+result[4].anl+`</h3>
            </li>
            <li>
                <a href="">
                <img src="`+result[5].img_url+`" alt="">                       
                </a><h3>`+result[5].anl+`</h3>
            </li>
        </ul>
            `
        );
    }
});    
})