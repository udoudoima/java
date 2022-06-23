var myname = window.prompt("what your name");

console.log("Hello", myname);
document.getElementById("mybutton").onclick = function() {
    var myname = document.getElementById("myText").value;
    console.log("Hello", myname);
}

var myheight = window.prompt("Height");

console.log("Hello", myheight);

var mycountry = window.prompt("my country");

console.log("Hello", mycountry);