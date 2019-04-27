// JavaScript Document
window.onload = function() {
	"use strict";
	setInterval(function() {
		var b = document.createElement("span");
		document.body.appendChild(b);
		b.style.background="white";
		b.style.position = "absolute";
		b.style.borderRadius = "100px";
		b.yn = 0;
		b.xn = Math.floor((Math.random() * 1700) + 100);
		b.style.left = b.xn + "px";
		b.w = 30;
		b.h = 30;
		var x = setInterval(function () {
				b.yn += 5;
				b.xn -= 2;
				b.w -=1;
				b.h -=1;
				b.style.top = b.yn + "px";
				b.style.left = b.xn + "px";
				if(b.h > 3)
				{
					b.style.width = b.w + "px";
					b.style.height = b.h + "px";
				}
				if(b.yn === 785)
				{
					clearInterval(x);
					setInterval(function(){
						b.parentElement.removeChild(b);
					}, 2000);
				}
			}, 100, 0);
			b.onclick = function () {
				b.parentNode.removeChild(b);
			};
	}, 500);
	
};