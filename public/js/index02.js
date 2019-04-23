   $(function(){
   // 新闻页
    $.ajax({
        url:"http://127.0.0.1:3000/product/new",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            console.log(result);
          $("#ul1").html(
              `
                    <li>
                        <img src="`+result[0].img_url+`" alt="">
                        <div>
                            <h3><a href="">`+result[0].nt+`</a></h3>
                            <h5>`+result[0].content+`</h5>
                        </div>
                    </li>
                    <li class="xw-li">
                        <img src="`+result[1].img_url+`" alt="">
                        <div>
                            <h3><a href="">`+result[1].nt+`</a></h3>
                            <h5>`+result[1].content+`</h5>
                        </div>
                    </li>
                    <li class="xw-li">
                        <img src="`+result[2].img_url+`" alt="">
                        <div>
                            <h3><a href="">`+result[2].nt+`</a></h3>
                            <h5>`+result[2].content+`</h5>
                        </div>
                    </li>
              `
          )  ;
          $("#ul2").html(
            `
                  <li>
                      <img src="`+result[3].img_url+`" alt="">
                      <div>
                          <h3><a href="">`+result[3].nt+`</a></h3>
                          <h5>`+result[3].content+`</h5>
                      </div>
                  </li>
                  <li class="xw-li">
                      <img src="`+result[4].img_url+`" alt="">
                      <div>
                          <h3><a href="">`+result[4].nt+`</a></h3>
                          <h5>`+result[4].content+`</h5>
                      </div>
                  </li>
                  <li class="xw-li">
                      <img src="`+result[5].img_url+`" alt="">
                      <div>
                          <h3><a href="">`+result[5].nt+`</a></h3>
                          <h5>`+result[5].content+`</h5>
                      </div>
                  </li>
            `
        );
        }
    });
})