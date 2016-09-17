/**
 * Created by Administrator on 2016/9/17.
 */

$(document).ready(function(){
    jq('#demo1').banqh({
        box:"#demo1",//总框架
        pic:"#ban_pic1",//大图框架
        pnum:"#ban_num1",//小图框架
        prev_btn:"#prev_btn1",//小图左箭头
        next_btn:"#next_btn1",//小图右箭头
        pop_prev:"#prev2",//弹出框左箭头
        pop_next:"#next2",//弹出框右箭头
        prev:"#prev1",//大图左箭头
        next:"#next1",//大图右箭头
        pop_div:"#demo2",//弹出框框架
        pop_pic:"#ban_pic2",//弹出框图片框架
        pop_xx:".pop_up_xx",//关闭弹出框按钮
        mhc:".mhc",//朦灰层
        autoplay:true,//是否自动播放
        interTime:5000,//图片自动切换间隔
        delayTime:400,//切换一张图片时间
        pop_delayTime:400,//弹出框切换一张图片时间
        order:0,//当前显示的图片（从0开始）
        picdire:true,//大图滚动方向（true为水平方向滚动）
        mindire:false,//小图滚动方向（true为水平方向滚动）
        min_picnum:5,//小图显示数量
        pop_up:true//大图是否有弹出框
    })

    var mUrl = document.URL;
    var  paramAll =mUrl.split('?')[1];
    var paramValue= mUrl.split("=")[1];
    console.log(paramValue);
    $.ajax({
        url:"../../product/GetProductById_get?id=exp"+paramValue,
        type:"get",
        success:function(data) {
            console.log(data);
            if (data != "null") {
                var datajson = JSON.parse(data);
                var id = (JSON.parse(datajson.Data)).id;
                var titletext = (JSON.parse(datajson.Data)).titletext;
                var titleimg = (JSON.parse(datajson.Data)).titleimg;
                var isFree = (JSON.parse(datajson.Data)).isFree;
                var type = (JSON.parse(datajson.Data)).type;
                var imglist = (JSON.parse(datajson.Data)).imglist;
                $("#expid").text(id);
                if(type==1){
                        $("#exptype").text("[精选]");
                    }
                    if(type==2){
                        $("#exptype").text("[慢旅]");
                    }
                    if(type==3){
                        $("#exptype").text("[偷闲]");
                    }
                    if(type==4){
                        $("#exptype").text("[话题]");
                    }

                $("#exptitle").text(titletext);
                for(var i=0;i<imglist.length;i++) {

                    var oItem=document.getElementsByClassName("detailItem")[i];
                    var oImg=oItem.getElementsByTagName("img")[0];
                    var oDes=oItem.getElementsByTagName("p")[0];
                    oImg.src=imglist[i].imgUrl;
                    oDes.innerText=imglist[i].imgDes;

                }
            }
        }
    });




});