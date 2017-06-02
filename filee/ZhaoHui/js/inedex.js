$(function(){
			var size=$(".lunbo li").size();
			
			 var i=0;
	     var t=setInterval(move,3000);
	     
		     function moveL(){
				i--;
				if(i==-1){
				  i=size-1;	
			   }
		    }
		       function move(){ 
				i++;
				if(i==size){
					i=0;	
				}
			$(".lunbo li").eq(i).fadeIn(300).siblings().fadeOut(300);
				
		} 
			$(".box").hover(function(){
				clearInterval(t)
			},function(){
				t=setInterval(move,3000);
			})
    });
