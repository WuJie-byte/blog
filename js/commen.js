   window.onload=function(){
        var obox=document.querySelector(".tag-cloud-list");

        var obj=obox.getElementsByTagName("a");
        //随机方法
        function rand(num){
            return parseInt(Math.random()*num+1);
        }
        //随机颜色值
        function randomcolor(){
            var str=Math.ceil(Math.random()*16777215).toString(16);
            if(str.length<6){
                str="0"+str;
            }
            return str;
        }
        //循环
        for( len=obj.length,i=len;i--;){
            obj[i].className="color"+rand(5);
            obj[i].style.zIndex=rand(5);
            obj[i].style.fontSize=rand(12)+18+"px";
            // obj[i].style.background="#"+randomcolor();
            obj[i].style.color="#"+randomcolor();
        }

    }