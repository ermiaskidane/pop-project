// lets get the popup from index.html
// and bring it up to tv.html

var req = new XMLHttpRequest();
req.open('GET', 'index.html', false);
req.send(null);

if(req.status == 200){
  var parser = new DOMParser();
  var doc = parser.parseFromString(req.responseText, "text/html");
  var eles = doc.getElementsByClassName("popup--js");
  var container = document.getElementsByClassName("popup-tv--js");
  container[0].innerHTML = container[0].innerHTML + eles[0].innerHTML
  // console.log(container[0].innerHTML);

  // lets fetch for sortby from index.html

  // get the element from DOM
  var sortby = doc.getElementsByClassName('sortby--js');

  // get the element that holds it
  var sortByTv = document.getElementsByClassName('sortby-tv--js');

  // insert it
  sortByTv[0].innerHTML = sortByTv[0].innerHTML + sortby[0].innerHTML

  // console.log(sortByTv[0].innerHTML);

}


// now lets add the open class to popup-tv
// so we can toggle it
var tvAncher = document.querySelector('.tv-ancher--js');

tvAncher.addEventListener('click', () =>{
  var popupTv = document.querySelector('.popup-tv--js');

  popupTv.classList.toggle('open');
})


// now lets toggle to sortby-tv--js
var sortBy =  document.querySelector('.tv-sortby--js');

sortBy.addEventListener('click', () =>{
  var sortByTv = document.querySelector('.sortby-tv--js');

  sortByTv.classList.toggle('open');
})





$(document).ready(function(){

  $('.js__list--icontv').click(function(){
    var navtv = $('.js__list--2tv');

    navtv.slideToggle(200);
  });

})
