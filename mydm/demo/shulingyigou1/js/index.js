//下拉菜单
$(document).ready(function(){
	$('.bar li').hover(function(){
		$(this).children('ul').slideToggle();
	});
});

//左侧栏
$(function(){
	 
		$(".leat li").mouseenter(function(){
			$('.baoguo').show();
			var $this=$(this);
			    index=$this.index();

        $(".baoguo div").eq(index).addClass("boc").siblings("div").removeClass("boc");
			
    });
    
    $('.leat li').mouseleave(function(){
		$('.baoguo').hide();
	});
    
});
//轮播
	$(function(){
		var size=$('.usel li').size();
		
		for(var i=1; i<=size; i++){
			var li="<li></li>";
			$(".ound").append(li);
		}
		
		$(".usel li").eq(0).show();
		$(".ound li").eq(0).addClass("active");
		$(".ound li").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");		
			var index=$(this).index();	
			$(".usel li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);	
		})
				
			var i=0;
		    var t=setInterval(move,2000);
		     
		function moveL(){
			i--;
			if(i==-1){
				i=size-1;	
			}
			console.log(i);
			$(".ound li").eq(i).addClass("active").siblings().removeClass("active");
			$(".usel li").eq(i).fadeIn(300).siblings().fadeOut(300);
			
		}
		     function move(){
			i++;
			if(i==size){
				i=0;	
			}
			$(".ound li").eq(i).addClass("active").siblings().removeClass("active");
			$(".usel li").eq(i).fadeIn(300).siblings().fadeOut(300);
		}
		     
          $(".carousel .lite").click(function(){
				moveL();
			})
			
			$(".carousel .rite").click(function(){
				move()
			})
			
			$(".carousel").hover(function(){
				clearInterval(t)
			},function(){
				t=setInterval(move,2000);
	});
});
          
          

				