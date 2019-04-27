// JavaScript Document
/*jshint esversion: 6 */
window.onload = function() {
	"use strict";
	var primaImagine = document.getElementById("primaImagine");
	var titlu = document.getElementsByClassName("titlu");
	var figuri = document.getElementsByTagName("figure");
	var figuriCSS = document.querySelectorAll("figure");
	var optiuneAscundeJumatate = document.getElementById("optiuneAscundeJumatate");
	var optiuneAscundeCealaltaJumatate = document.getElementById("optiuneAscundeCealaltaJumatate");
	var optiuneAfiseazaToate = document.getElementById("optiuneAfiseazaToate");
	primaImagine.onclick = function() {
		primaImagine.src = "fisiereUtile/imagini/galerie/psychonauts2.jpg";
	};
	titlu[0].onclick = stilAlternativ;
	optiuneAscundeJumatate.onclick = ascundeJumatate;
	optiuneAscundeCealaltaJumatate.onclick = ascundeCealaltaJumatate;
	optiuneAfiseazaToate.onclick = afiseazaToate;
	function stilAlternativ() {
		for(var figura of figuri) {
			figura.style.border = "solid grey";
			figura.style.borderRadius = "10px";
		}
		titlu[0].onclick = stilOriginal;
	}
	function stilOriginal() {
		for(var figura of figuri) {
			figura.style.border = "none";
			figura.style.borderRadius = "0px";
		}
		titlu[0].onclick = stilAlternativ;
	}
	function ascundeJumatate() {
		for(let i = 0; i<figuri.length/2; i++) {
			figuriCSS[i].style.visibility = "hidden";
		}
	}
	function ascundeCealaltaJumatate() {
		for(let i = figuri.length/2; i<figuri.length; i++) {
			figuriCSS[i].style.visibility = "hidden";
		}
	}
	function afiseazaToate() {
		for(let i = 0; i<figuri.length; i++) {
			figuriCSS[i].style.visibility = "visible";
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