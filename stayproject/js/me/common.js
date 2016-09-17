/*进入主页前，要首先检查cookie中是否有当前用户登录信息，有的话，直接进入主页面，没有的话，跳转到登录界面*/

//从登陆页面跳转的当前页面，同时接受url中传递过来的参数username.
var mUrl = document.URL;
console.log(mUrl);
var  paramAll =mUrl.split('?')[1];
var paramValue= mUrl.split("=")[1];

//从cookie中获取登录信息
var strCookie=document.cookie;
var arrCookie=strCookie.split("; ");
var usernameCookie;
var passwordCookie;
var curUser;
for(var i=0;i<arrCookie.length;i++){
    var result1=arrCookie[i].split("=");
    if(result1[0]=="userInfo"){
        result2=result1[1];
        if(result2!=""){
            var arrResult=result2.split(",");
            usernameCookie=arrResult[0];
            passwordCookie=arrResult[1];
            curUser=JSON.parse(arrResult).username;
        }
    }
}



$(function(){
    if(paramValue!=undefined){
        curUser=paramValue;
        $("#currentUser").text(curUser);
    }else{
        if(curUser==undefined){
            window.location.href="/httpview/stayproject/login.html";
        }else{
            $("#currentUser").text(curUser);
        }

    }
    console.log(curUser);

    $("#loginedbox").on("mouseover",function(){
        var oDiv=$("#infolist")[0];
        var target={
            "height":142
        };
        startMove(oDiv,target);
    });
    $("#loginedbox").on("mouseout",function(){
        var oDiv=$("#infolist")[0];
        var target={
            "height":0
        };
        startMove(oDiv,target);
    });
    //进入主页
    $("#indexpage").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/index.html?username="+curUser;
    });
    //进入体验页
    $("#exppage").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/experience.html?username="+curUser;
    });
    //进入个人主页
    $("#mycenter").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/center.html?username="+curUser;
    });
    //进入我的消息页面
    $("#mymsg").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/mymsg.html?username="+curUser;
    });
    //进入我的体验页面
    $("#myexp").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/myexp.html?username="+curUser;
    });
    //进入设置页面
    $("#setting").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/setting.html?username="+curUser;
    });
    $("#exit").on("click",function(event){
        //点击退出按钮，要做两个处理，清除cookie，跳转到登录界面
        event.preventDefault();
        document.cookie="userInfo="+""+";repires="+new Date();
        window.location.href="/httpview/stayproject/login.html";
    });
});
