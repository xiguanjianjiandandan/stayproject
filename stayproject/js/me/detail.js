/**
 * Created by Administrator on 2016/9/17.
 */

$(document).ready(function(){
    jq('#demo1').banqh({
        box:"#demo1",//�ܿ��
        pic:"#ban_pic1",//��ͼ���
        pnum:"#ban_num1",//Сͼ���
        prev_btn:"#prev_btn1",//Сͼ���ͷ
        next_btn:"#next_btn1",//Сͼ�Ҽ�ͷ
        pop_prev:"#prev2",//���������ͷ
        pop_next:"#next2",//�������Ҽ�ͷ
        prev:"#prev1",//��ͼ���ͷ
        next:"#next1",//��ͼ�Ҽ�ͷ
        pop_div:"#demo2",//��������
        pop_pic:"#ban_pic2",//������ͼƬ���
        pop_xx:".pop_up_xx",//�رյ�����ť
        mhc:".mhc",//���Ҳ�
        autoplay:true,//�Ƿ��Զ�����
        interTime:5000,//ͼƬ�Զ��л����
        delayTime:400,//�л�һ��ͼƬʱ��
        pop_delayTime:400,//�������л�һ��ͼƬʱ��
        order:0,//��ǰ��ʾ��ͼƬ����0��ʼ��
        picdire:true,//��ͼ��������trueΪˮƽ���������
        mindire:false,//Сͼ��������trueΪˮƽ���������
        min_picnum:5,//Сͼ��ʾ����
        pop_up:true//��ͼ�Ƿ��е�����
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
                        $("#exptype").text("[��ѡ]");
                    }
                    if(type==2){
                        $("#exptype").text("[����]");
                    }
                    if(type==3){
                        $("#exptype").text("[͵��]");
                    }
                    if(type==4){
                        $("#exptype").text("[����]");
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