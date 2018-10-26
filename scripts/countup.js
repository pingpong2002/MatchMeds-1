function countUp(elementId,max,interval) {
	"use strict";
	var count=0;
	var delay=500/(max/interval);
	document.getElementById(elementId).innerHTML=count;
	var counter=setInterval(function(){
		if(interval<1) {
			document.getElementById(elementId).innerHTML=count.toFixed(1);
		}
		else {document.getElementById(elementId).innerHTML=count;}
		count+=interval;
		count=Math.round(count*10)/10;
		if(count>max) {
			clearInterval(counter);
		}
	},delay);
}