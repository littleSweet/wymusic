/**
 * Created by dell on 2017/1/5.
 */
//导航栏开始
var liObj=my$("nav-list").getElementsByTagName("li");
var emObj=my$("nav-list").getElementsByTagName('em');

// for(var i=0;i<liObj.length;i++){
//
//     liObj[i].onclick=function (){
//         for(var j=0;j<liObj.length;j++){
//             liObj[j].getElementsByTagName("a")[0].className="nav-list-bg";
//         }
//         this.getElementsByTagName("a")[0].className="nav-list-bg1";
//         for(var k=0;k<emObj.length;k++){
//             emObj[k].style.display="none";
//         }
//         this.getElementsByTagName("em")[0].style.display="block";
//     }
// }
//搜索条
$("#login>.top-t-logo-txt:eq(0)").focus(function () {
    if(this.value=="单曲/歌手/专辑/歌单/MV/用户"){
        this.value="";
    }
}).blur(function () {
    if(this.value.length==0){
        this.value="单曲/歌手/专辑/歌单/MV/用户";
    }
});
$("#top-search").click(function () {
    window.location.href="http://music.163.com/#/search/m/?s="+($("#login>.top-t-logo-txt").val());
});
//小三角
var iObj=my$("login-r").getElementsByTagName("i")[0];
my$("login-r").onmouseover=function (){
    iObj.style.backgroundPosition="-228px -418px";
    iObj.previousElementSibling.style.color="#fff";
    my$("inner").style.display="block";
};

my$("login-r").onmouseout=function (){
    iObj.style.backgroundPosition="-228px -380px";
    iObj.previousElementSibling.style.color="#786658";
    my$("inner").style.display="none";
};

// top-b导航栏开始
var liObjs=my$("topB").children;
var record=null;
for(var i=0;i<liObjs.length;i++){
    liObjs[i].onmouseover=function (){
        record=this.className;
        for(var j=0;j<liObjs.length;j++){
            if(liObjs[j].className=="fir-li"){
                liObjs[j].className="fir-li";
            }else {
                liObjs[j].className="";
            }
        }
        this.className="fir-li";
        this.onmouseout=function (){
            this.className=record;
        }
    };
    liObjs[i].onclick=function (){
        for(var j=0;j<liObjs.length;j++){
            liObjs[j].className="";
        }
        this.className="fir-li";
        this.onmouseout=function (){
            this.className="fir-li";
        }
    };
}
// top-b导航栏结束
//导航栏结束