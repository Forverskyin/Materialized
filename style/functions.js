var $window=$(window),gardenCtx,gardenCanvas,$garden,garden;var clientWidth=$(window).width();var clientHeight=$(window).height();



$(function(){
	$loveHeart=$("#loveHeart");
	
	var a=$loveHeart.width()/2;
	
	var b=$loveHeart.height()/2-55;$garden=$("#garden");
	
	gardenCanvas=$garden[0];
	
	gardenCanvas.width=$("#loveHeart").width();
	
	gardenCanvas.height=$("#loveHeart").height();
	
	gardenCtx=gardenCanvas.getContext("2d");
	
	gardenCtx.globalCompositeOperation="lighter";
	
	garden=new Garden(gardenCtx,gardenCanvas);
	
	$("#content").css("width",$loveHeart.width()+$("#code").width());
	
	$("#content").css("height",Math.max($loveHeart.height(),$("#code").height()));
	
	$("#content").css("margin-top",Math.max(($window.height()-$("#content").height())/2,0));
	
	$("#content").css("margin-left",Math.max(($window.width()-$("#content").width())/2,10));
	
	setInterval(function(){garden.render()},Garden.options.growSpeed)
	
});

var treeHeight = 0;

$(window).resize(function(){
	var b=$(window).width();
	var a=$(window).height();
	if(b!=clientWidth&&a!=clientHeight){
		location.replace(location)
	}
});
	function getHeartPoint(c){
		
		var b=c/Math.PI;
		
		var a=-9.1*(16*Math.pow(Math.sin(b),1));
		
		var d=-20*(13*Math.cos(b)-5*Math.cos(2*b)-2*Math.cos(3*b)-Math.cos(4*b));
		
		if(treeHeight.toFixed(2) == 16.00){
			var h = getLeafPoint(c-3.2);
			return h;
		}	
		else
			return new Array(offsetX+a-200,offsetY+d)
		
	}
	
	function getLeafPoint(c){
		var b = c/Math.PI;
		
		var a = 200*(Math.sin(b));
		
		var d = -200*(Math.cos(b));
		
		return new Array((offsetX+a),(offsetY+d-150));
	}
	
	function getHeartPoint2(c){
		
		var b=c/Math.PI;
		
		var a=9.1*(16*Math.pow(Math.sin(b),1));
		//var a=300*(Math.sin(b));
		var d=-20*(13*Math.cos(b)-5*Math.cos(2*b)-2*Math.cos(3*b)-Math.cos(4*b));
		//var d=-300*(Math.cos(b));
		if(treeHeight.toFixed(2) == 16.00)
			return;
		else
			return new Array(offsetX+a+200,offsetY+d)
		
	}
	
function startHeartAnimation(){
	var c=0;
	
	var d=10;
	
	var b=new Array();
	var b2=new Array();
	var a=setInterval(function(){
		
		var h=getHeartPoint(d);
		
		var h2=getHeartPoint2(d);
		
		var e=true;
		
		for(var f=0;f<b.length;f++){
			
			var g=b[f];
			
			var j=Math.sqrt(Math.pow(g[0]-h[0],2)+Math.pow(g[1]-h[1],2));
			
			if(j<Garden.options.bloomRadius.max*1.3){
				
				e=false;
				break
				
			}
		}
		if(e){
			
			b.push(h);
			b2.push(h2);
			garden.createRandomBloom(h[0],h[1]);
			garden.createRandomBloom(h2[0],h2[1]);
		}

		if(d>=30){
			clearInterval(a);showMessages()
		}
		else{		
			if(treeHeight.toFixed(2) != 16.00)
			treeHeight = d;
			//alert(treeHeight);
			d+=0.1
		}

	},c)	
}

(function(a){
	a.fn.typewriter=function(){
		
		this.each(function(){
			var d=a(this),c=d.html(),b=0;d.html("");
			var e=setInterval(function(){
				var f=c.substr(b,1);
				
				if(f=="<"){
					b=c.indexOf(">",b)+1}
				else{
					b++
				}
				d.html(c.substring(0,b)+(b&1?"_":""));
				if(b>=c.length){
					clearInterval(e)
				}
			},100)
		});
		return this
	}
})(jQuery);
function showMessages(){
	$("#messages").fadeIn(3000,
	function(){showHBD();})
}
	function adjustWordsPosition(){
		$("#words").css("position","absolute");
		$("#words").css("top",$("#garden").position().top+195);
		$("#words").css("left",$("#garden").position().left+70)
	}function adjustCodePosition(){
		$("#code").css("margin-top",($("#garden").height()-$("#code").height())/3.5)
	}function showHBD(){
		$("#HBD").fadeIn(3000);
	}
	
	
	
	