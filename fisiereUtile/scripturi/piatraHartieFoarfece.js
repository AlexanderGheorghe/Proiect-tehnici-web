// JavaScript Document
/*jshint esversion: 6 */
this.onload = function () {
	"use strict";
	var butonPiatra = document.getElementById("piatra");
	var butonHartie = document.getElementById("hartie");
	var butonFoarfece = document.getElementById("foarfece");
	var Alegeri = Object.freeze({
		"piatra": 1,
		"hartie": 2,
		"foarfece": 3
	});
	var alegereUtilizator;
	var cutie = 0;
	var mainContent = document.getElementById("mainContent");
	butonPiatra.onclick = function () {
		alegereUtilizator = Alegeri.piatra;
		afiseazaRezultat();
	};
	butonHartie.onclick = function () {
		alegereUtilizator = Alegeri.hartie;
		afiseazaRezultat();
	};
	butonFoarfece.onclick = function () {
		alegereUtilizator = Alegeri.foarfece;
		afiseazaRezultat();
	};

	function afiseazaRezultat() {
		var afisaj;
		if (!cutie) {
			afisaj = document.createElement("input");
			afisaj.type = "text";
			afisaj.style.display = "block";
			afisaj.style.width = "290px";
		} else {
			afisaj = cutie;
		}
		var alegereCPU = Math.floor((Math.random() * 3) + 1);
		if (alegereUtilizator === alegereCPU) {
			afisaj.value = "egalitate";
		}
		if (alegereUtilizator === Alegeri.piatra && alegereCPU === Alegeri.foarfece) {
			afisaj.value = "Piatra tocește foarfecele, ai câștigat!";
		}
		if (alegereUtilizator === Alegeri.piatra && alegereCPU === Alegeri.hartie) {
			afisaj.value = "Piatra este învelită în hârtie, pierzătorule!";
		}
		if (alegereUtilizator === Alegeri.hartie && alegereCPU === Alegeri.piatra) {
			afisaj.value = "Hârtia învăluie piatra, ai câștigat!";
		}
		if (alegereUtilizator === Alegeri.hartie && alegereCPU === Alegeri.foarfece) {
			afisaj.value = "Hârtia este ciopârțită de foarfece, pierzătorule!";
		}
		if (alegereUtilizator === Alegeri.foarfece && alegereCPU === Alegeri.piatra) {
			afisaj.value = "Foarfecele sunt tocite de piatră, pierzătorule!";
		}
		if (alegereUtilizator === Alegeri.foarfece && alegereCPU === Alegeri.hartie) {
			afisaj.value = "Foarfecele decupează hârtia, ai câștigat!";
		}
		if (!cutie) {
			var butonReset = document.createElement("input");
			butonReset.type = "button";
			butonReset.value = "Reset";
			butonReset.onclick = function () {
				mainContent.removeChild(butonReset);
				mainContent.removeChild(afisaj);
				cutie = 0;
			};
			mainContent.appendChild(afisaj);
			mainContent.appendChild(butonReset);
			cutie = afisaj;
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
