const popAncher = document.querySelector('.pop-ancher');
const sortAncher = document.querySelector('.sort-ancher');

popAncher.addEventListener('click', () =>{
  const popup = document.querySelector('.popup');
  popup.classList.toggle('open');
});


sortAncher.addEventListener('click', () =>{
    const sortBy = document.querySelector('.sortby');
    sortBy.classList.toggle('open');
})


$(document).ready(function(){
// check wether jquery working or not
  // $('h3').click(function(){
  //   $(this).css('background-color', '#ff0000');
  // })
  //
  // $('h2').click(function(){
  //   $(this).css('background-color','#ccc')
  // })

$('.js__list--icon').click(function(){
  var nav = $('.header__list--2');

  nav.slideToggle(200);
})

})
