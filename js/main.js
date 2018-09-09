let array = [
  {
    img: "../img/mov-4.jpg",
    p1: "8.7/10",
    p2: "2016",
    h3: "star trek",
  },
  {
    img: "../img/mov-5.jpg",
    p1: "7.5/10",
    p2: "2018",
    h3: "Ready player one",
  },
  {
    img: "../img/mov-6.jpg",
    p1: "7.0/10",
    p2: "2018",
    h3: "Ready player one",
  },
  {
    img: "../img/mov-6.jpg",
    p1: "7.0/10",
    p2: "2018",
    h3: "Ready player one",
  }
]

//Now, get the node you want to clone:

let figure = document.getElementsByClassName("figure figure--1")[0];

let parent = document.getElementById("parent");

function appendToParent(data){
  newDom = figure.cloneNode(true)
  newDom.getElementsByClassName("figure__movie")[0].src = data.img
  newDom.getElementsByClassName("rate")[0].innerHTML = data.p1
  newDom.getElementsByClassName("year")[0].innerHTML = data.p2
  newDom.getElementsByClassName("h3")[0].innerHTML = data.h3
  parent.appendChild(newDom)
}

array.forEach(function(data){
  appendToParent(data)
})
