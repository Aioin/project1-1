var oLi=document.getElementsByTagName("li");
for(var i=0;i<oLi.length;i++){
    oLi[i].index=i
    oLi[i].onclick=function(){
        console.log("腾腾是个二傻子");
}
}