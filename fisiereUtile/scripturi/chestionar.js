// JavaScript Document
/*jshint esversion: 6 */
window.onload = function () {
	"use strict";
	var bifat = document.getElementById("bifat");
	var verificare = document.getElementById("verificare");
	var accept = document.getElementById("accept");
	bifat.ondragstart = function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	};
	verificare.ondragover = function allowDrop(ev) {
  ev.preventDefault();
};
	verificare.ondrop = function drop(ev) {
		ev.preventDefault();
		ev.target.checked = true;
	};
	var decolare = document.getElementById("decolare");
	decolare.onclick = function raspunde() {
		if(verificare.checked === false)
		{
			let stil = window.getComputedStyle(accept);
			if(stil.getPropertyValue('color')==="rgb(0, 0, 0)" && accept.className === ""){
				accept.classList.add("animat");}
			return;
		}
		var numarCorecte = 0;
		for (let i = 1; i <= 3; i++) {
			var raspunsuri = document.getElementsByName('grup' + i);
			for (var j = 0; j < raspunsuri.length; j++) {
				var raspuns = raspunsuri[j];
				if (raspuns.value === "corect" && raspuns.checked) {
					numarCorecte++;
				}
			}
		}
		alert("Raspunsuri corecte: " + numarCorecte + "/3");
	};
	document.addEventListener('keydown', reset);
	function reset(e){
		if(e.code === "KeyR"){
		accept.className = "";
		}
	}
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
						document.body.removeChild(b);
					}, 2000);
				}
			}, 100);
			b.onclick = function () {
				b.parentNode.removeChild(b);
			};
	}, 500);
};
