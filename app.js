// function replaceWord() {
//   let element = document.getElementById("greeting");
//   element.innerHTML = "Hello, World!";
// }
// replaceWord()
//
// function changeColor() {
//   let targets = document.querySelectorAll('li');
//   for (let i = 0; i < targets.length; i++) {
//     targets[i].style.backgroundColor = "yellow";
//   }
// }
// changeColor()
//
// let newimg = document.createElement("img");
// newimg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
// document.getElementById('greeting').appendChild(newimg);
//
// function addClass ()
// let list = document.querySelectorAll(li)
// for (let i = 0; i < list.length; i++) {
//   list.addEventListener("click", function() {
//       if (list[i].className !== "selected") {
//         list[i].className = "selected"
//       }
//     }
//   }
//   addClass()

$(document).ready(function() {

  $('#greeting').text("HELLO WORLD!");

  $("li").css('background-color', "yellow");

  let newimg = $('<img>');
  newimg.attr({
      'src': 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'
    })
    .appendTo("#greeting");

  $('li').on("click", function() {
    $('li').removeClass('selected');
    $(this).addClass("selected");
  });




})
