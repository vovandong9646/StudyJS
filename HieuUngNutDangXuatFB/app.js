document.addEventListener("DOMContentLoaded",function(){

	var tg = document.getElementById("tamgiac");
	var ds = document.getElementsByClassName("danhsach")[0];
	
	tg.onclick = function(){
		tg.classList.toggle("doimau");
		ds.classList.toggle("hienra");
	}

},false);