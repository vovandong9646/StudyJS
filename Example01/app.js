// var MonAn = {
// 	ten:"Cơm dương châu",
// 	nguyenLieu:"Cơm, đậu, cà rôt, thịt",
// 	gia:20000
// };

function MonAnCT(t,ngl,p){
	this.ten = t;
	this.nguyenLieu = ngl;
	this.gia = p;
}

var MonAn1 = new MonAnCT("suon nuong","xuong",200);
var MonAn2 = new MonAnCT("Banh Canh","Bot gao",300);
console.log(MonAn1);
console.log(MonAn2);


//=======================OPP1====================
// let hello = {
//     name : "World",
//     info() {
//         return `Hello ${this.name}`;
//     }
// }

// var b = document.createElement("button");
// b.textContent = "hello";
// document.body.appendChild(b);

// b.onclick = function() {
//     alert(hello.info());
// }

//=====================OPP2======================
// class HelloWorld {

//     constructor(hello) {
//         this.hello = hello;
//     }

//     info() {
//         return "Hello " + this.hello;
//     }
// }

//  var hw = new HelloWorld("World");

//  var b = document.createElement("button");
//  b.textContent = "Hello";
//  document.body.appendChild(b);

//  b.onclick = function() {
//      alert(hw.info());
//  }
