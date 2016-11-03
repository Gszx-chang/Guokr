


	

window.onload=function(){
	
//其他下拉列表
    var oth=document.getElementById("navOth");
	var others=document.getElementById("navOthers");	
	
	oth.onmouseenter=function(){
		var y=this.offsetHeight;
		var x=this.offsetLeft;
        others.style.display="block";
		others.style.top=y-20+"px";
		others.style.left=x-10+"px";
        var h=0;
		var i=setInterval(addh,8);
		function addh(){
			h=h+2;
		    others.style.height=h+"px";	
			if(h>=174){
				clearInterval(i);
			}
		}
	}
		
	oth.onmouseleave=function(){
		var h=parseInt(others.style.height);
		var i=setInterval(removeh,8);
		function removeh(){
			h=h-2;
		    others.style.height=h+"px";	
			if(h<=0){
				clearInterval(i);
				others.style.display="none";
			}
		
		}
	}
	
	
//推荐轮播
	var $newlis=$('#newChange li');
    var $news=$('#news').children();
	var num=0,b=0;
	var t=setInterval(change,3000);
	function change(){
		$newlis.each(function(index,element){
			$(this).css('color','#fff');
		})
		for(var i=0,l=$newlis.length;i<l;i++){
			$news.eq(i).css('display','none');
		}
		b++;
		var i=b%3;
		$news.eq(i).css('display','block');	
		$newlis.eq(i).css('color','rgb(136,201,50)');
	}
	
	$newlis.each(function(index,element){
		$(this).click(function(){
			$newlis.each(function(index,element){
			$(this).css('color','#fff');
		    })
			for(var i=0,l=$newlis.length;i<l;i++){
				$news.eq(i).css('display','none');
			}
			var i=$(this).index();
			b=i;
			$news.eq(i).css('display','block');	
		    $newlis.eq(i).css('color','rgb(136,201,50)');
			clearInterval(t);
			t=setInterval(change,3000);
		})
	})
}
	
	

	




	



//热门小组转换
    var a=0;
function groupChange(){

	a++;   //每点击一次，a+1
	var groups=document.getElementsByName('groups');  //可供显示的组
	for(var i=0,l=groups.length;i<l;i++){
		groups[i].style.display='none';    //把所有组隐藏
	}
	var b=a%groups.length;
	groups[b].style.display='block';	//循环显示组0、1、2
}



          