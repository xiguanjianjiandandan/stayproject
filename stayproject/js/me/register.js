/**
 * Created by Administrator on 2016/9/12.
 */
/**
 * Created by Administrator on 2016/9/10.
 */
/**
 * Created by Administrator on 2016/9/10.
 */
$(document).ready(function(){
    var oRegBtn=$("#regbtn");
    //setBtnDisable();

    $("#username").on("focus",function(){
        $(this).val("");
    });
    $("#phonenumber").on("focus",function(){
        $(this).val("");
    });
    $("#password").on("focus",function(){
        $(this).val("");
    });
    $("#repassword").on("focus",function(){
        $(this).val("");
    });

    $("#username").on("blur",function(){
        //ֻ�ܰ���������ĸ���Ҳ��������ֿ�ͷ,�ҳ���Ϊ6��12λ

        var username=$(this).val();
        if(checkFormatOfNamePass(username)){
            //��ʽ��ȷ
            queryUserById(username);

        }else{
            //��ʽ����
            $("#usernameInfo").text("error");
            $("#usernameInfo").css("color","red");
        }
        setBtnDisable();
    });
    $("#phonenumber").on("blur",function(){
        //ֻ�ܰ���������ĸ���Ҳ��������ֿ�ͷ,�ҳ���Ϊ6��12λ
        var phonenumber=$(this).val();
        if(checkFormatOfPhonenumber(phonenumber)){
            //��ʽ��ȷ
            $("#phonenumberInfo").text("ok")
            $("#phonenumberInfo").css("color","green");

        }else{
            //��ʽ����
            $("#phonenumberInfo").text("error");
            $("#phonenumberInfo").css("color","red");
        }
        setBtnDisable();
    });
    $("#password").on("blur",function(){
        var password=$(this).val();
        if(checkFormatOfNamePass(password)){
            //��ʽ��ȷ
            $("#passwordInfo").text("ok")
            $("#passwordInfo").css("color","green");


        }else{
            //��ʽ����
            $("#passwordInfo").text("error");
            $("#passwordInfo").css("color","red");
        }
        setBtnDisable();
    });
    $("#repassword").on("blur",function(){
        var repassword=$(this).val();
        var password=$("#password").val();
        if(repassword!=password){
            $("#repasswordInfo").text("error");
            $("#repasswordInfo").css("color","red");

        }else{
            $("#repasswordInfo").text("ok");
            $("#repasswordInfo").css("color","green");
        }
        setBtnDisable();
    });

    $("#regbtn").on("click",function(){
        register();
    });


    //�������������ʽ�Ƿ���ȷ
    function checkFormatOfNamePass(text){
        var format=/^([a-z]|[A-Z]|_){1}([a-z]|[A-Z]|[0-9]|_){5,11}/;
        return format.test(text);
    }
    function checkFormatOfPhonenumber(phonenumber){
        var format2=/^1[3|4|5|7|8]\d{9}$/;
        return format2.test(phonenumber);
    }

    //����ע�ᰴť��״̬
    function setBtnDisable(){
        var usernameInfo=$("#usernameInfo").text().trim();
        var passwordInfo=$("#passwordInfo").text().trim();
        var repasswordInfo=$("#repasswordInfo").text().trim();
        if(usernameInfo=="ok"&&passwordInfo=="ok"&&repasswordInfo=="ok"){

            oRegBtn.removeAttr("disabled");
        }else{
            oRegBtn.attr("disabled",true);
        }
    }

    //��ѯ��ǰ�û��Ƿ���ڣ�
    function queryUserById(id){
        $.ajax({
            url:"../../../../product/GetProductById_get?id=user"+id,
            type:"get",
            success:function(data){
                if(data!="null"){
                    console.log(data);
                    $("#usernameInfo").text("exited");
                    $("#usernameInfo").css("color","red");
                }else{
                    $("#usernameInfo").text("ok")
                    $("#usernameInfo").css("color","green");
                }

            }
        });
    }
    //ע���û�
    function register(){
        //���ʹ��jquery��ȡ��ѡ��ť��Ĭ��ѡ��״̬��
        //console.log($("#optionsRadios1").is(":checked"));
        //console.log($("#optionsRadios2").is(":checked"));
        var username=$("#username").val().trim();
        var phonenumber=$("#phonenumber").val().trim();
        var password=$("#password").val().trim();
        var repassword=$("#repassword").val().trim();

        var user={
            "id":username,
            "username":username,
            "phonenumber":phonenumber,
            "password":password
        };
        var strData=JSON.stringify(user);
        console.log(strData);
        $.ajax({
            url:"../../../../product/CreateUpdateProduct_post",
            async:true,
            data:{
                "id":"user"+username,
                "datajson":strData
            },
            dataType:"json",
            type:"post",
            success:function(data,status,xhr){
                if(data==1){
                    window.location.href="login.html";
                }
            }

        });
        //$.post("http://localhost:63486/product/CreateUpdateProduct_post",data,function(data,status){
        //    console.log(status+","+data);
        //});
    }

});

