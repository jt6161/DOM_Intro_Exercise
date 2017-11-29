console.log("Javascript is alive!");


function replaceWord() {
  let element = document.getElementById("greeting");
  element.innerHTML = "Hello, World!";
}
replaceWord()



function changeColor() {
  let targets = document.querySelectorAll('li');
  for (let i = 0; i < targets.length; i++) {
    targets[i].style.backgroundColor = "yellow";
  }
}
changeColor()


let newimg = document.createElement("img");
newimg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
document.getElementById('greeting').appendChild(newimg);


Element.prototype.addClassName = function (selected) {
  if (!this.hasClassName(selected)) {
    this.className = [this.className,]
  }
}
