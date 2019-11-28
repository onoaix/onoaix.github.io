$(function(){
    // do something
    var script=document.createElement("script");
    script.type="text/javascript";
    script.src="js/translate.js";
    document.getElementsByTagName('head')[0].appendChild(script);
 
 
    var value = sessionStorage.getItem("language");
    document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
            if(value==="1"){
                Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
            }
        }
    }
    function onProgress(value) {
    }
    function onError(error) {
    }
    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }
    function onRestoreOriginal() {
    }
});
 
function translate(){
    var value = sessionStorage.getItem("language");
    if(value==="1"){
        sessionStorage.setItem("language", "0");
    }else{
        sessionStorage.setItem("language", "1");
    }
    window.location.reload();//刷新当前页面.
}
————————————————
版权声明：本文为CSDN博主「前端小助手」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_40687883/article/details/81451385