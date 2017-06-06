//弹出框
var odescr=document.getElementById('descr');
				odescr.onmouseover=function(){
					this.style.left='0px';
				}
				odescr.onmouseout=function(){
					this.style.left='-410px';
			}



//轮播图
$(function(){
		var size=$('.two-g li').size();
		for(var i=1; i<=size; i++){
			var li="<li></li>";
			$(".boc").append(li);
		}
		$(".two-g li").eq(0).show();
		$(".boc li").eq(0).addClass("active");
		$(".boc li").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");		
			var index=$(this).index();	
			$(".two-g li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);	
		})
		
		var i=0;
	    var t=setInterval(move,1500);
		function moveL(){
		i--;
		if(i==-1){
			i=size-1;	
		}
		$(".boc li").eq(i).addClass("active").siblings().removeClass("active");
		$(".two-g li").eq(i).fadeIn(300).siblings().fadeOut(300);
		
	}
	     function move(){
		i++;
		if(i==size){
			i=0;	
		}
		$(".boc li").eq(i).addClass("active").siblings().removeClass("active");
		$(".two-g li").eq(i).fadeIn(300).siblings().fadeOut(300);
		
	}			
		$(".use .leit").click(function(){
			moveL();
		})
		
		$(".use .riet").click(function(){
			move()
		})
		
		$(".use").hover(function(){
			clearInterval(t)
		},function(){
			t=setInterval(move,1500);
		});
	});


//手机页面弹出消失
$('.btn3').click(function(){
			$('.tan').show();
			$('.bou').show();
			$('.tan').css('left',($(window).width()-$('.tan').outerWidth())/2);
			$('.tan').css('top',($(window).height()-$('.tan').outerHeight())/2);
		});
		
		$('.im').click(function(){          //点击x的时候窗口状态
			$('.tan').fadeOut();
			$('.bou').fadeOut();
	});
	$('.btn4').click(function(){
			$('.tan1').show();
			$('.bou1').show();
			$('.tan1').css('left',($(window).width()-$('.tan1').outerWidth())/2);
			$('.tan1').css('top',($(window).height()-$('.tan1').outerHeight())/2);
		});
		
		$('.im1').click(function(){          //点击x的时候窗口状态
			$('.tan1').fadeOut();
			$('.bou1').fadeOut();
	});
	$('.btn5').click(function(){
			$('.tan2').show();
			$('.bou2').show();
			$('.tan2').css('left',($(window).width()-$('.tan2').outerWidth())/2);
			$('.tan2').css('top',($(window).height()-$('.tan2').outerHeight())/2);
		});
		
		$('.im1').click(function(){          //点击x的时候窗口状态
			$('.tan2').fadeOut();
			$('.bou2').fadeOut();
	});