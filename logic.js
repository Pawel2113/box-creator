var cl;
var sz;
var content_div;
var i=1;
var content_table ="";

function zielony()
{
	cl = "zielony";
	document.getElementById("kolorowy").value=cl;
	zaznaczanie();
}
function niebieski()
{
	cl = "niebieski";
	document.getElementById("kolorowy").value=cl;
	zaznaczanie();
}
function czerwony()
{
	cl = "czerwony";
	document.getElementById("kolorowy").value=cl;
	zaznaczanie();
}
function zolty()
{
	cl = "żółty";
	document.getElementById("kolorowy").value=cl;
	zaznaczanie();
}
function zaznaczanie()
{
	if (cl=="zielony"){
	color_div = "background-color:green;";
	} else if (cl=="niebieski"){
		color_div = "background-color:blue;";
	} else if (cl=="czerwony"){
		color_div = "background-color:red;";
	} else if (cl=="żółty"){
		color_div = "background-color:yellow;";
	}
	if (sz=="s") {
	size_div = "width:25px;height:25px";
	} else if(sz=="m") {
	size_div = "width:50px;height:50px";
	} else if(sz=="l") {
	size_div = "width:75px;height:75px";
	} else if(sz=="xl") {
	size_div = "width:100px;height:100px";
	} 
	
	style_div = color_div + size_div;
	
	content_div ='<div id="product" style="'+style_div+'"></div>';
	document.getElementById("field_picture1").innerHTML = content_div;
}
function maly()
{
	sz = "s";
	zaznaczanie();
}
function sredni()
{
	sz = "m";
	zaznaczanie();
}
function duzy()
{
	sz = "l";
	zaznaczanie();
}
function bardzo_duzy()
{
	sz = "xl";
	zaznaczanie();
}

function wyslij()
{
	document.getElementById("imie").innerHTML="";
	document.getElementById("wiek").innerHTML="";
	document.getElementById("kolor").innerHTML="";
	document.getElementById("rozmiar").innerText="";
	
	document.getElementById("imie2").innerHTML="";
	document.getElementById("wiek2").innerHTML="";
	document.getElementById("kolor2").innerHTML="";
	document.getElementById("rozmiar2").innerText="";
}

function zapisz()
{
	var imie = document.getElementById("tekst1").value;
	var wiek = document.getElementById("tekst2").value;
	var kolor = document.getElementById("kolorowy").value;
	var checked = true;
	
	var regex = /^[A-Za-z ]+$/
 
	
	if (imie == "") {
		window.alert("proszę podać imie");
	} else if (imie[0] == imie[0].toLowerCase()) {
		window.alert("proszę podać imie zaczynające się wielką literą");
	} else if (/\s/.test(imie)) {
		window.alert("proszę podać tylko jeden wyraz bez spacji");
	} else if (!regex.test(imie)) {
		window.alert("proszę podać tylko jeden wyraz bez znaków specjalnych i liczb");
	} else if (wiek == "" || wiek > 100 || wiek < 18) {
		window.alert("proszę podać wiek między 18 a 100 lat");
	} else if (kolor == "") {
		window.alert("proszę wybrać kolor");
	} else {
		list();
	
	
	document.getElementById('imie'+i).innerHTML=imie;
	document.getElementById('wiek'+i).innerHTML=wiek;
	document.getElementById('kolor'+i).innerHTML=kolorowy.value;
	document.getElementById('wizualizacja'+i).innerHTML = content_div;
	
	
	sprawdz_Rozmiar();
	
	i++;
	document.getElementById("tekst1").value="";
	document.getElementById("tekst2").value="";
	document.getElementById("kolorowy").value="";
	
	}
}
function sprawdz_Rozmiar()
{
	if (document.getElementById('size1').checked) {
		document.getElementById("rozmiar"+i).innerText="S";
		size1.checked = false;
	}
	else if (document.getElementById('size2').checked) {
		document.getElementById("rozmiar"+i).innerText="M";
		size2.checked = false;
	}
	else if (document.getElementById('size3').checked) {
		document.getElementById("rozmiar"+i).innerText="L";
		size3.checked = false;
	}
	else if (document.getElementById('size4').checked) {
		document.getElementById("rozmiar"+i).innerText="XL";
		size4.checked = false;
	}
}
function list()
{
	
	content_table1 = '<td><div id="imie'+i+'"></div></td>'+'<td><div id="wiek'+i+'"></div></td>'+'<td><div id="kolor'+i+'"></div></td>'+'<td><div id="rozmiar'+i+'"></div></td>'+'<td><div id="wizualizacja'+i+'"></div></td>';
	
	
	
	
		
	
	document.getElementById('line'+i).innerHTML = content_table1;
	
	
}
	
	