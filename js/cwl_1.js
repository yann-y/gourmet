/**
 * Created by Administrator on 2019/12/7 0007.
 */
/* ################################    Javascript    ################################ */
function change(obj,x){
    obj.index=x;

    var moreThan=document.getElementsByClassName("morethan");
    var a1=moreThan[0].getElementsByClassName("a1");
    for(var i=0;i<a1.length;i++){
        a1[i].style.color="black";
        a1[i].style.textDecoration="none";
    }
    obj.style.color="red";
    obj.style.textDecoration="underline";


    var tabDiv=document.getElementsByClassName("content_1");
    var tabCookbooks=tabDiv[0].getElementsByClassName("cookbook");
    for(i=0;i<tabCookbooks.length;i++){
        tabCookbooks[i].style.display="none";
    }
    tabCookbooks[obj.index].style.display="block";

}

//2.DOM�����¼�
//a.��ȡ�¼�Դ
var moreThan=document.getElementsByClassName("morethan");
var a1=moreThan[0].getElementsByClassName("a1");
//ѭ����ÿ��li����������¼�
for(var i=0;i<a1.length;i++){
    a1[i].index=i;//��Ԫ�ذ�����
    //b.���¼�
    a1[i].onmouseover=function(){
        //c.������
        change(this,this.index);
    }
}
var x=0;
setInterval(function(){
    //ѭ���ı�
    var moreThan=document.getElementsByClassName("morethan");
    var a1=moreThan[0].getElementsByClassName("a1");
    if(x==a1.length){
        x=0;
    }
    for(var i=0;i<a1.length;i++){
        a1[i].style.color="black";
        a1[i].style.textDecoration="none";
    }
    a1[x].style.color="red";
    a1[x].style.textDecoration="underline";


    var tabDiv=document.getElementsByClassName("content_1");
    var tabCookbooks=tabDiv[0].getElementsByClassName("cookbook");
    for(i=0;i<tabCookbooks.length;i++){
        tabCookbooks[i].style.display="none";
    }
    tabCookbooks[x].style.display="block";
    x++;
},100);
