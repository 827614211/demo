$(function(){
	$(".menu li").bind("click", function(){
		$(".content>div").eq($(this).index()).show().siblings().hide();
		$(this).addClass("kua").siblings().removeClass("kua");
	});
});
