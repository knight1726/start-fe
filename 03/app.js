// var link = document.querySelector('#link');
// link.addEventListener('click', function() {
//     console.log(111);
//     event.stopPropagation();
//     event.preventDefault();
// });

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         console.log('li');
//         event.stopPropagiton();
//     }   
// }) ;
// var list = document.querySelector('#list');
// console.log(list.children);

// document.body.addEventListener('click', function(){
//     console.log('body');
// });

// for(var i = o; i < list.children.length; i++) {
//     list.children[i].addEventListener('click', function(){
//         console.log(1);
//     });
// }

// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments,event,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// function clickBody(){
//     console.log('click');
// }

// document.querySelector('.box').addEventListener('click', clickBody);
// document.querySelector('.box').addEventListener('click', function () {
//     console.log('click');
// });

// console.log(window.outerWidth);
// console.log(window.name);
//console.log(window.open('http://www.daum.net'));


//var debug = document.getElementById('debug');
//console.log(debug);

// var box = document.querySelector('.box');
// //console.log(box);
// var box2 = document.querySelectorAll('box');
// var box = document.querySelector('#debug');
// console.log(box);

// var div = document.createElement('div');
// // console.log(div);
// div.style.border = '1px solid #000';
// div.innerHTML = 'hello';

// document.body.appendChild(div);

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

//var debug = document.getElementById('debug');
//debug.remove();

//const list = document.getElementById('list'); 
//list.removeChild(list.children[0]);