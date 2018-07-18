
  // const supportsTemplate = function() {
  //   return 'content' in document.createElement('template')
  // }
  // document.addEventListener('DOMContentLoaded', ()=>{
  //   if (supportsTemplate()){
  //     console.log('template are supported.');
  //     let temp = document.getElementById('mytemplate');
  //     let content = temp.content;
  //     console.log(content)
  //
  //     document.body.appendChild(content.cloneNode(true));
  //     document.body.appendChild(content.cloneNode(true));
  //     document.body.appendChild(content.cloneNode(true));
  //     document.body.appendChild(content.cloneNode(true));
  //   }
  // })
  var arr = [
    {
      img: 'img/mov-1.jpg',
      p1: '7.7/10',
      h3: 'ready player one',
      p2: 2018,
    },
    {
      img: 'img/mov-2.jpg',
      p1: '7.9/10',
      h3: 'truth or dare',
      p2: 2018,
    },
    {
      img: 'img/mov-3.jpg',
      p1: '6.9/10',
      h3: 'friday',
      p2: 2018,
    },
    {
      img: 'img/mov-4.jpg',
      p1: '8.7/10',
      h3: 'star trek',
      p2: 2016,
    },
    {
      img: 'img/mov-5.jpg',
      p1: '7.5/10',
      h3: 'justice league',
      p2: 2017,
    },
    {
      img: 'img/mov-6.jpg',
      p1: '7.0/10',
      h3: 'hotel translyvania 2',
      p2: 2018,
    },
    {
      img: 'img/mov-7.jpg',
      p1: '9.2/10',
      h3: 'gladiator',
      p2: 2002,
    },
    {
      img: 'img/mov-8.jpg',
      p1: '8.5/10',
      h3: 'jurassic world',
      p2: 2015,
    },
    {
      img: 'img/mov-9.jpg',
      p1: '8.6/10',
      h3: 'Rampage',
      p2: 2018,
    },
    {
      img: 'img/mov-10.jpg',
      p1: '8.7/10',
      h3: 'star war',
      p2: 2016,
    },
    {
      img: 'img/mov-11.jpg',
      p1: '7.4/10',
      h3: 'Trolls',
      p2: 2016,
    },
    {
      img: 'img/mov-12.jpg',
      p1: '8.8/10',
      h3: 'Fast and furious',
      p2: 2015,
    },
    {
      img: 'img/mov-13.jpg',
      p1: '7.1/10',
      h3: 'I feel pretty',
      p2: 2018,
    },
    {
      img: 'img/mov-14.jpg',
      p1: '8.3/10',
      h3: 'Iron man',
      p2: 2016,
    },
    {
      img: 'img/mov-15.jpg',
      p1: '8.6/10',
      h3: 'Black panther',
      p2: 2018,
    },
    {
      img: 'img/mov-16.jpg',
      p1: '7.7/10',
      h3: '5 Passanger',
      p2: 2017,
    },
    {
      img: 'img/mov-17.jpg',
      p1: '7.9/10',
      h3: 'Now you see me',
      p2: 2015,
    },
    {
      img: 'img/mov-18.jpg',
      p1: '7.0/10',
      h3: 'The greatest showman',
      p2: 2016,
    },
    {
      img: 'img/mov-19.jpg',
      p1: '8.2/10',
      h3: 'Ant man',
      p2: 2016,
    },
    {
      img: 'img/mov-20.jpg',
      p1: '8.3/10',
      h3: 'DeadPool',
      p2: 2016,
    },
    {
      img: 'img/mov-21.jpg',
      p1: '8.1/10',
      h3: 'Gotti',
      p2: 2013,
    },
    {
      img: 'img/mov-22.jpg',
      p1: '8.2/10',
      h3: 'Jumanji',
      p2: 2017,
    },
    {
      img: 'img/mov-23.jpg',
      p1: '7.2/10',
      h3: 'Pacific rim',
      p2: 2016,
    },
    {
      img: 'img/mov-24.jpg',
      p1: '8.0/10',
      h3: 'West of hell',
      p2: 1990,
    },
    {
      img: 'img/mov-25.jpg',
      p1: '8.1/10',
      h3: 'Spader man',
      p2: 2010,
    },
    {
      img: 'img/mov-26.jpg',
      p1: '7.4/10',
      h3: 'A wrinkle in time',
      p2: 2017,
    },
    {
      img: 'img/mov-27.png',
      p1: '7.6/10',
      h3: 'Fifty sheeds Freed',
      p2: 2016,
    },
    {
      img: 'img/mov-28.jpg',
      p1: '6.8/10',
      h3: 'The equalizer',
      p2: 2017,
    },
    {
      img: 'img/mov-29.jpg',
      p1: '7.1/10',
      h3: 'Big legend',
      p2: 2018,
    },
    {
      img: 'img/mov-30.jpg',
      p1: '7.0/10',
      h3: 'disobedience',
      p2: 2017,
    },
    {
      img: 'img/mov-31.jpg',
      p1: '8.2/10',
      h3: 'life in a party',
      p2: 2018,
    },
    {
      img: 'img/mov-32.jpg',
      p1: '6.8/10',
      h3: 'The Duff',
      p2: 2017,
    },
  ]

  var  template = document.querySelector('#mytemplate');

  for (var i = 0; i < arr.length; i++){
    var mov = arr[i];
    var content = template.content.cloneNode(true);

    var img = content.querySelectorAll('img');
    img[0].src = mov.img;

    var p1 = content.querySelectorAll('p');
    p1[0].innerHTML = mov.p1;

    var h3 = content.querySelectorAll('h3');
    h3[0].innerHTML = mov.h3;

    var p2 = content.querySelectorAll('p');
    p2[1].innerHTML = mov.p2

    template.parentNode.appendChild(content);
    // template.parentNode.appendChild(content.cloneNode(true));
    // template.parentNode.appendChild(content.cloneNode(true));
    // template.parentNode.appendChild(content.cloneNode(true));
    // template.parentNode.appendChild(content.cloneNode(true));
  }
