//=======================OPP1====================
let hello = {
    name : "World",
    info() {
        return `Hello ${this.name}`;
    }
}

var b = document.createElement("button");
b.textContent = "hello";
document.body.appendChild(b);

b.onclick = function() {
    alert(hello.info());
}

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
