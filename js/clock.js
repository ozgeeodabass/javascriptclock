

let name = prompt("İsminizi Giriniz: ");

let nameInfo = document.querySelector("#myName");
let clockInfo = document.querySelector("#myClock");


function clock(){
	const date=new Date();
	let day=date.getDay();
	let days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
	let clock=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
	let showClock = `${clock}:${minute}:${second} ${days[day]}`
	clockInfo.innerHTML = `${showClock}`
	setInterval(clock,1000); 
	
}

if(name){
    nameInfo.innerHTML= `${name}`
    clock();
}else {
    alert("Lütfen isminizi giriniz!");

}

