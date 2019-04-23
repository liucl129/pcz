$(function(){
    //
     
    // 获取关于我们文字
    $.ajax({
        url:"http://127.0.0.1:3000/product/add",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            $("#pt").html(result[0].content);
            
        }
    });
    // 获取首页案例图片
    $.ajax({
        url:"http://127.0.0.1:3000/product/img",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            // console.log(result);
            $("#hom").html(`
            <div class="img0 " id="hom1">
                <img src="`+result[0].img_url+`" >
                <img src="`+result[1].img_url+`" >
                <img src="`+result[2].img_url+`" >
            </div>
            <div class="img0 " id="hom2">
                <img src="`+result[3].img_url+`" >
                <img src="`+result[4].img_url+`" >
                <img src="`+result[5].img_url+`" >
            </div>
            <div class="img0 " id="hom3">
                <img src="`+result[6].img_url+`" >
                <img src="`+result[7].img_url+`" >
                <img src="`+result[8].img_url+`" >
            </div>
            <div class="img0 " id="hom4">
                <img src="`+result[9].img_url+`" >
                <img src="`+result[10].img_url+`" >
                <img src="`+result[11].img_url+`" >
            </div>`);     
        }
    });
    // 首页新闻
    $.ajax({
        url:"http://127.0.0.1:3000/product/new",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            // console.log(result);
        $("#NW1").html(
           ` <div class="PD">
            <p class="NEWS">NEWS</p>
            <p class="DT">新闻动态</p>
        </div>
        <div class="newFirst">
            <div><img src="`+result[0].img_url+`" alt=""></div>
            <div class="xtext">
                <span class="spans">`+result[0].nt+`</span></a>
                <div class="tts">`+result[0].content+`
                </div>
            </div>
        </div>
        <div class="newFirst">
            <div><img src="`+result[1].img_url+`" alt=""></div>
            <div class="xtext">
                <span class="">`+result[1].nt+`</span>
                <div class="tts">`+result[1].content+`
                </div>
            </div>
        </div>`);
        
        }
    });
});
