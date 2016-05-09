/**
 * Created by Administrator on 2016/5/8.
 */
define(function(require,exprots,moudle){
    var $=require('jquery');
    var handlebars=require('handlebars');

    //handlebars的简单示例
    $.ajax({
        url:"../js/json/laytpl.json",
        dataType:"json",
        type:"get",
        success:function(data){         //0:未实名 1:已实名
            var source   = $("#entry-template").html();
            var template = Handlebars.compile(source);
            var html    = template(data);
            document.getElementById("div1").innerHTML = html;
        }
    });



});