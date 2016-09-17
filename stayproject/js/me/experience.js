/**
 * Created by Administrator on 2016/9/16.
 */
function getExpList(pagesize,pageindex){
    console.log("获取数据"+pagesize+","+pageindex);
    $.ajax({
        url:"../../product/GetProductsByPage_get?pagesize="+pagesize+"&pageindex="+pageindex,
        type:"get",
        success:function(data){
            if(data!="null"){
                var datajson=JSON.parse(data);
                console.log(datajson);
                for(var i=0;i<datajson.length;i++){
                    if(datajson[i].Id.match(/^exp/)) {
                        var expJson = JSON.parse(datajson[i].Data);
                       var oImgItem= document.getElementsByClassName("imgItem")[i];
                        var oFree=oImgItem.getElementsByTagName("i")[0];
                        var oImg=oImgItem.getElementsByTagName("img")[0];
                        oImg.src=expJson.titleimg;

                        var oBtn=document.getElementsByClassName("querydetailbtn")[i];
                        oBtn.index=i;
                        oBtn.onclick=function(event){
                            event.preventDefault();
                            var id=JSON.parse(datajson[this.index].Data).id;
                            window.location.href="detail.html?id="+id;
                        }


                        if(expJson.isFree==1){
                            oFree.style.backgroundPositionY=-202+"px";
                        }else{
                            oFree.style.backgroundPositionY=-266+"px";
                        }
                    }
                }
            }else{
                console.log("数据为空");
            }

        }
    });
}

PageClick = function(pageclickednumber) {
    console.log(pageclickednumber);
    $("#pager").pager({ pagenumber: pageclickednumber, pagecount: 15, buttonClickCallback: PageClick });
    getExpList(12,parseInt(pageclickednumber)+4);
}

$(function(){
    console.log("开始展示");
    $("#pager").pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PageClick});
    getExpList(12,5);


});