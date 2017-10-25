document.addEventListener("DOMContentLoaded", function(){
	
	var button1 = document.getElementsByTagName("button")[0];
	var d1 = document.getElementById("contentDiv");
	var trangThai = "lan1";
	
	button1.onclick = function(){

		if(trangThai == "lan1"){
			d1.classList.remove("dungYen");
			d1.classList.add("chuyendong1");
			trangThai = "lan2";
		} else if(trangThai == "lan2") {
			d1.classList.remove("chuyendong1");
			trangThai = "lan1";
		}
	};

}, false);

// output: cái div chuyển động bằng animation
//	-> lấy dược id của nút click
// -> lấy được id của div
// -> click vào nút thì div sẽ add 1 class animation vào
// -> còn muốn chuyển động 2 chiều thì dùng if và else if để nó chuyển động 2 chiều