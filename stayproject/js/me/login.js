/**
 * Created by Administrator on 2016/9/10.
 */
$(document).ready(function(){

    $("#username").on("focus",function(){
        $(this).val("");
    });
    $("#password").on("focus",function(){
        $(this).val("");
    });

    $("#loginbtn").on("click",function(){
        console.log(1111111);
        var username=$("#username").val().trim();
        var password=$("#password").val().trim();
        if($("#rememberbtn").is(":checked")){
            saveLoginInfoToCookie(username,password);
        }

        checkUsername(username,password);

    });

    //���������û���������
    function checkUsername(username,password){
        $.ajax({
            url:"../../product/GetProductById_get?id="+"user"+username,
            type:"get",
            success:function(data){
                //����û������ڣ���ֱ����ʾ�û��������������
                if(data!="null"){
                    var datajson=JSON.parse(data);
                    var pass=(JSON.parse(datajson.Data)).password;//ע��Data��Ӧ��ֵΪ�ַ�����Ҳ��Ҫת����JSON����
                    //����û����ڣ������û������벻ƥ�䣬��Ҳ��ʾ���û��������������
                    if(pass==password){
                        window.location.href="index.html?username="+username;
                    }else{
                        $("#loginfo").css("visibility","visible");
                    }
                }else{
                    $("#loginfo").css("visibility","visible");
                }

            }
        })

    }

    //��¼ʱ�������ס���롱���򽫵�¼��Ϣ���浽cookie��
    function saveLoginInfoToCookie(username,password){
        var user={
            "username":username,
            "password":password
        }
        var date=new Date();
        date.setDate(date.getDate()+1);
        var strUser=JSON.stringify(user);
        document.cookie="userInfo="+strUser+";repires="+date;

    }


});
