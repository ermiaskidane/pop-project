var array = [
  {
    img: 'img/tv_show/tv-sh1.jpg',
    p1: '7.6/10',
    h3: 'masterchef',
    p2: 2010,
  },
  {
    img: 'img/tv_show/tv-sh2.jpg',
    p1: '8.0/10',
    h3: 'The Office',
    p2: 2005,
  },
  {
    img: 'img/tv_show/tv-sh3.jpg',
    p1: '6.8/10',
    h3: 'Unreal',
    p2: 2015,
  },
  {
    img: 'img/tv_show/tv-sh4.jpg',
    p1: '7.1/10',
    h3: 'Wentworth',
    p2: 2013,
  },
  {
    img: 'img/tv_show/tv-sh5.jpg',
    p1: '8.5/10',
    h3: 'Westworld',
    p2: 2016,
  },
  {
    img: 'img/tv_show/tv-sh6.jpg',
    p1: '7.0/10',
    h3: 'Elementry',
    p2: 2012,
  },
  {
    img: 'img/tv_show/tv-sh7.jpg',
    p1: '7.8/10',
    h3: 'Suits',
    p2: 2011,
  },
  {
    img: 'img/tv_show/tv-sh8.jpg',
    p1: '8.2/10',
    h3: 'Arrow',
    p2: 2012,
  },
  {
    img: 'img/tv_show/tv-sh9.jpg',
    p1: '8.3/10',
    h3: 'The mentalist',
    p2: 2008,
  },
  {
    img: 'img/tv_show/tv-sh10.jpg',
    p1: '8.7/10',
    h3: 'the flash',
    p2: 2014,
  },
  {
    img: 'img/tv_show/tv-sh11.jpg',
    p1: '7.9/10',
    h3: 'Bachelorette',
    p2: 2003,
  },
  {
    img: 'img/tv_show/tv-sh12.jpg',
    p1: '8.0/10',
    h3: 'the 100',
    p2: 2014,
  },
  {
    img: 'img/tv_show/tv-sh13.jpg',
    p1: '7.2/10',
    h3: "the handmaid's tale",
    p2: 2017,
  },
  {
    img: 'img/tv_show/tv-sh14.jpg',
    p1: '8.9/10',
    h3: 'the simpsons',
    p2: 1989,
  },
  {
    img: 'img/tv_show/tv-sh15.jpg',
    p1: '8.5/10',
    h3: 'The expanse',
    p2: 2015,
  },
  {
    img: 'img/tv_show/tv-sh16.jpg',
    p1: '7.8/10',
    h3: 'Shades of blue',
    p2: 2016,
  },
  {
    img: 'img/tv_show/tv-sh17.jpg',
    p1: '9.3/10',
    h3: 'Prisonbreak',
    p2: 2005,
  },
  {
    img: 'img/tv_show/tv-sh18.jpg',
    p1: '7.9/10',
    h3: 'preacher',
    p2: 2016,
  },
  {
    img: 'img/tv_show/tv-sh19.jpg',
    p1: '8.2/10',
    h3: 'Power',
    p2: 2013,
  },
  {
    img: 'img/tv_show/tv-sh20.jpg',
    p1: '7.9/10',
    h3: 'Queen of the south',
    p2: 2016,
  },
  {
    img: 'img/tv_show/tv-sh21.jpg',
    p1: '8.0/10',
    h3: 'Marvel luke cage',
    p2: 2016,
  },
  {
    img: 'img/tv_show/tv-sh22.jpg',
    p1: '8.0/10',
    h3: 'sharp objects',
    p2: 2018,
  },
  {
    img: 'img/tv_show/tv-sh23.jpg',
    p1: '8.9/10',
    h3: 'Salvation',
    p2: 2017,
  },
  {
    img: 'img/tv_show/tv-sh24.jpg',
    p1: '8.9/10',
    h3: 'greys anatomy',
    p2: 2005,
  },
  {
    img: 'img/tv_show/tv-sh25.jpg',
    p1: '8.8/10',
    h3: 'game of thrones',
    p2: 2011,
  },
  {
    img: 'img/tv_show/tv-sh26.jpg',
    p1: '7.9/10',
    h3: 'Forged in fire',
    p2: 2015,
  },
  {
    img: 'img/tv_show/tv-sh27.jpg',
    p1: '7.5/10',
    h3: 'colony',
    p2: 2016,
  },
  {
    img: 'img/tv_show/tv-sh28.jpg',
    p1: '9.1/10',
    h3: 'Black mirror',
    p2: 2011,
  },
  {
    img: 'img/tv_show/tv-sh29.jpg',
    p1: '7.8/10',
    h3: 'big brother',
    p2: 2000,
  },
  {
    img: 'img/tv_show/tv-sh30.jpg',
    p1: '8.8/10',
    h3: 'the big bang theory',
    p2: 2007,
  },
  {
    img: 'img/tv_show/tv-sh31.jpg',
    p1: '8.0/10',
    h3: 'Animal kingdom',
    p2: 2016 ,
  },
  {
    img: 'img/tv_show/tv-sh33.jpg',
    p1: '8.1/10',
    h3: 'shooter',
    p2: 2015,
  }
]


// get the document
var template = document.querySelector('#mytemplate2');


for (var i = 0; i < array.length; i++){
  var tvshow = array[i];
  var content = template.content.cloneNode(true);

  var img = content.querySelectorAll('img');
  img[0].src = tvshow.img;

  var p1 = content.querySelectorAll('p');
  p1[0].innerHTML = tvshow.p1;

  var h3 = content.querySelectorAll('h3');
  h3[0].innerHTML = tvshow.h3;

  var p2 = content.querySelectorAll('p');
  p2[1].innerHTML = tvshow.p2

  template.parentNode.appendChild(content);
}
