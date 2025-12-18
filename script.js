//Chapter 1 of DOM :-
// var frstimg = document.querySelector(".bbg")
// var scndimg = document.querySelector("#cottoncandy")

// var h3 = document.querySelector('.headline')
// var h3 = document.querySelector('#headline2')

//Chapter 2 of DOM :- Changing text content using VariableName.textContent
// var btn = document.querySelector("button");
// btn.textContent = "Starting.."

// var h1 = document.querySelector('h1')
// h1.textContent = "Arju is a fuckin fake ass person"

// :: innerHtml - It is for adding tags in HTML through Javascript

// var h1 = document.querySelector('h1')
// h1.innerHTML = "<i>Spitting nothing but faxx</i>"   

// Practice like hell : Question 1 -

// var btn = document.querySelector(".Yes");
// var p = document.querySelector("p");
// btn.addEventListener("click", function(){
//     p.textContent = "YAYYY!!!";
// })

// var btn = document.querySelector(".No");
// var p = document.querySelector("p");
// btn.addEventListener("click", function(){
//     p.textContent = "HUHH! :'(";
    
// })

// Question 2 - 

// var img1 = document.querySelector(".ho31");
// var img2 = document.querySelector(".ho32");

// var btn = document.querySelector("button")
// .addEventListener("click", function(){
//     var src1 = img1.src;
//     var src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;
// })

// Question 3 -

// var inps = document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector("h4");
// var form = document.querySelector("form");         //prevent default code; for stopping forms to reload the browser
// form.addEventListener( "submit", function(ev){
//     ev.preventDefault();
//     for(var i = 0; i < inps.length; i++){
//         if(inps[i].value.trim() === ''){
//             h4.textContent = "KHAALI CHORH DOGE KA MARDAWA?";
//             h4.style.color = 'red';
//             break;
//         }
//     }    
// })

// Question - 4

// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var ul = document.querySelector('ul');
// var li;

// add.addEventListener("click", function(){
//     if(inp.value.trim() === ''){}
//     else{
//         li = document.createElement("li");
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         inp.value = '';
//     }
// })

// remove.addEventListener("click", function(){
//     ul.removeChild(li);
// })

// Question - 5 :

// var start = document.querySelector('#start');
// var h3 = document.querySelector('h3');
// var stop = document.querySelector('#stop');
// var int;

// start.addEventListener("click", function(){
//     var count = 0;
//     int = setInterval(function(){
//         h3.textContent = count;
//         count++;
//     }, 1000)
// })

// stop.addEventListener("click", function(){
//     clearInterval(int);
// })

// Question - 6 // Approach 1st : Brute Force

// var aril = document.querySelector('#aril')
// var neev = document.querySelector('#neev')
// var akash = document.querySelector('#akash')

// var text4aril = document.querySelector('#text4aril')
// var text4neev = document.querySelector('#text4neev')
// var text4akash = document.querySelector('#text4aksh')

// function sabhtao(){
//     document.querySelectorAll('h3').forEach(function(h3){
//         h3.style.display = 'none';
//     })
// }

// aril.addEventListener("click", function(){
//     sabhtao();
//     text4aril.style.display = 'block';
// })

// neev.addEventListener("click", function(){
//     sabhtao();
//     text4neev.style.display = 'block';
// })

// akash.addEventListener("click", function(){
//     sabhtao();
//     text4akash.style.display = 'block';
// })


var start = document.querySelector("#start");
var progress = document.querySelector("#progress");
var h3 = document.querySelector("h3");



start.addEventListener("click", function(){
    var speed = 0;
    h3.style.display = 'block';
    var int = setInterval(function(){
        if(speed === 99){
            clearInterval(int)
            h3.textContent = "Download Done!"
        }
        speed++;
        progress.style.width = speed+'%';

    }, 50)
})




