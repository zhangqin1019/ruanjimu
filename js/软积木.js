/**
 * Created by Administrator on 2016/7/27.
 */
window.onload=function(){
   var $=function(id){
       return document.getElementById(id);
   };
    //ͷ��������
    var kinds=$("kinds");
    var hide=$("hide");
    kinds.onmouseover=function(){
        hide.style.display="block";
    };
    kinds.onmouseout=function(){
        hide.style.display="none";
    };
    //ͷ��������Ч��
    var search=$("search");
    var sousuo=$("sousuo");
    var sideHide=$("side-hide");
    search.onfocus=function(){
        search.style.transform="scaleX(1.5)";
        search.style.transition="all 1s";
    };
    search.onblur=function(){
        search.style.transform="scaleX(1)";
        search.style.transition="all 1s";
    };
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop;
        //������Ч��
        if(scrollTop!=0)
        {
            search.style.display="block";
            sousuo.style.display="block";
        }
        else
        {
            search.style.display="none";
            sousuo.style.display="none";
        }
        //��ͷЧ��
        if(scrollTop>370)
        {
            sideHide.style.display="block";
        }
        else
        {
            sideHide.style.display="none";
        }
    };
    sideHide.onclick=function(){
        function goTop(){
            if(document.body.scrollTop!=0)
            {
                document.body.scrollTop-=50;
            }
            else
            {
                clearInterval(stop);
            }
        };
        var stop=setInterval(goTop,10);
    };
    //�����ϼ� ���ܻ�ӭ�л�Ч��
    var ahover=$("ahover");
    var ahover1=$("ahover1");
    var one=$("one");
    var two=$("two");
    ahover.onmouseover=function(){
        one.style.display="block";
        two.style.display="none";
        ahover.style.color="#33AE6C";
        ahover1.style.color="#333";
    };
    ahover1.onmouseover=function(){
        two.style.display="block";
        one.style.display="none";
        ahover1.style.color="#33AE6C";
        ahover.style.color="#333";
    };
    //������͵���Ч��
    var yuan=document.getElementsByClassName("yuan");
    var tu=document.getElementsByClassName("tu");
    for(var i=0;i<yuan.length;i++)
    {
        yuan[i].onclick=function(){
           if(this.lastChild.style.display=="block")
           {
               this.lastChild.style.display="none";
               this.style.borderColor="#ccc";
           }
            else
           {
               this.lastChild.style.display="block";
               this.style.borderColor="#33AE6C";
           }
        };
    }
};