let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

let mede= setInterval(() => {
  setTimeout(function () {
   red.style.backgroundColor="red"
   red.style.boxShadow="box-shadow: 5px 5px red inset;"
   yellow.style.backgroundColor ="rgb(119, 119, 2)"
   green.style.backgroundColor = "rgb(2, 44, 2)"
}, 3000);
setTimeout(function () {
   red.style.backgroundColor="rgb(121, 3, 3)"
   yellow.style.backgroundColor ="yellow"
   yellow.style.boxShadow="box-shadow: 5px 5px yellow inset;"
   green.style.backgroundColor = "rgb(2, 44, 2)"
}, 6000);
setTimeout(function () {
   red.style.backgroundColor="rgb(121, 3, 3)"
   yellow.style.backgroundColor ="rgb(119, 119, 2)"
   green.style.backgroundColor = "green"
   green.style.boxShadow="box-shadow: 5px 5px green inset;"
}, 9000);
}, 12000);
function myShow() {
clearInterval(mede)

}