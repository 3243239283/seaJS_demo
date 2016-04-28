
define(function(require,exprots,moudle){
	var $=require('jquery');
	var layer=require('layer');
	var laypage=require('laypage');
	var laytpl=require('laytpl');
	var laycss=require('laycss');
	var laypagecss=require('laypagecss');
	var stylecss=require('stylecss');

	$('#btn').click(function(){
        alert('22');
    });

    $('#laybtn').click(function(){
    	layer.open('ss');
    });

    //自定义皮肤
    laypage({
	    cont: $('#page'),//容器。值支持id名、原生dom对象，jquery对象,
	    pages: 100, //总页数
	    skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
	    groups: 7 //连续显示分页数
	});

	$.getJSON("../../json/laytpl.json",function(data){
        var tpl = document.getElementById('tpl').innerHTML; //读取模版
        //方式一：异步渲染（推荐）
        laytpl(tpl).render(data, function(render){
            document.getElementById('view').innerHTML = render;
        });
    });

})

























