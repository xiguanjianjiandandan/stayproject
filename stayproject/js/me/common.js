/*������ҳǰ��Ҫ���ȼ��cookie���Ƿ��е�ǰ�û���¼��Ϣ���еĻ���ֱ�ӽ�����ҳ�棬û�еĻ�����ת����¼����*/

//�ӵ�½ҳ����ת�ĵ�ǰҳ�棬ͬʱ����url�д��ݹ����Ĳ���username.
var mUrl = document.URL;
console.log(mUrl);
var  paramAll =mUrl.split('?')[1];
var paramValue= mUrl.split("=")[1];

//��cookie�л�ȡ��¼��Ϣ
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
    //������ҳ
    $("#indexpage").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/index.html?username="+curUser;
    });
    //��������ҳ
    $("#exppage").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/experience.html?username="+curUser;
    });
    //���������ҳ
    $("#mycenter").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/center.html?username="+curUser;
    });
    //�����ҵ���Ϣҳ��
    $("#mymsg").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/mymsg.html?username="+curUser;
    });
    //�����ҵ�����ҳ��
    $("#myexp").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/myexp.html?username="+curUser;
    });
    //��������ҳ��
    $("#setting").on("click",function(event){
        event.preventDefault();
        window.location.href="/httpview/stayproject/html/personage/setting.html?username="+curUser;
    });
    $("#exit").on("click",function(event){
        //����˳���ť��Ҫ�������������cookie����ת����¼����
        event.preventDefault();
        document.cookie="userInfo="+""+";repires="+new Date();
        window.location.href="/httpview/stayproject/login.html";
    });
});
