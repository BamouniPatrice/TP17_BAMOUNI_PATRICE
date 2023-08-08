//SELECteurS
//document.querySelector("h4").style.background = "yellow"; 

//click 
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
console.log(response);

console.log(btn1, btn2); 
console.log(questionContainer);


questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-cliked");
})
btn1.addEventListener("click", () => {
response.classList.add('show-response'); 
response.style.background = "green";
});
btn2.addEventListener("click", () => {
    response.classList.add('show-response');
    response.style.background = "red";
});

{/*<div> > #id > .class > baliseHTML*/}

//================================================
//Mouse Events
const mousemove = document.querySelector(".mousemove");

console.log(mousemove);
window.addEventListener("mousemove", () => {
    console.log("MOUSEMOVE");
});
window.addEventListener("mousemove", (e) => {
    console.log(e);
});
window.addEventListener("mousemove", (e) => {
 mousemove.style.left = e.pageX + "px";
 mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
 mousemove.style.transform ="scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
    mousemove.style.transform ="scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});
 
   questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgb(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
   questionContainer.style.background = "pink" 
})

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
})

//=============================================================
//KeyPess event
const keypressContainer = document.querySelector(".keypress");
console.log(keypressContainer);

const key = document.getElementById("key");  
console.log(key);

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + "z.mp3";
    console.log(audio.src);
    audio.play(); 
}

document.addEventListener("keypress", (e) => {
    console.log(e.key);
});
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if(e.key=== "j") {
    keypressContainer.style.background = "pink"
}else if(e.key === "h") {
    keypressContainer.style.background = "teal"
}else {
    keypressContainer.style.background = "red"
}

if(e.key === "z")ring(e.key);
});

//====================================================

//Scrool Event

 const nav = document.querySelector("nav");

 window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if(window.scrollY > 120) {
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px";
    }
 })
 ///==============================================
 // Form Event

const inputName = document.querySelector('input[type="text"]');
console.log(inputName);
const select = document.querySelector("select");
const form = document.querySelector("form");
console.log(form);
 let pseudo = "";
console.log(select); 
 let language = "";
 inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
    console.log(pseudo);
 });
 
 select.addEventListener("input", (e) => {
    language = e.target.value;
 })

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log(cgv.checked);
 if (cgv.checked) {
    document.querySelector('form > div').innerHTML = `
   <h3>Pseudo : ${pseudo}</h3>
   <h4>language prefere : ${language}</h4>
   
    `;
 }else {
    alert("veuillez accepter lesCGV"); 
 }    
})
//=======================================================   
//Load event
window.addEventListener("load",() => {
 console.log("Document Charge !");
})

//========================================================
//ForEach
//const boxes = document .getElementsByClassName("box");
//console.log(boxes);
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)" ;
    });
}); 
//=================================================
//addEventListener Vs onclick
//ocument.body.onclick = function () {
 //   console.log("Click !");
//}
//document.body.onscroll = () => {
   // console.log("Scroll !"); 
//}

//Bubbling => fin (de base l'eventlistener est parametre en mode bubbling)
document.body.addEventListener("click", () => {
    console.log("click 1 !");
}, false);

//Usecapture
document.body.addEventListener("click", () => {
    console.log("click 2 !");
},
true
);

//https://gomakething.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-net hod-and-when-do-you-need-it/ 

//==========================================================
//stop propagation
//questionContainer.addEventListener("click", () => {
    //alert("Test !");
   // e.stopPropagation();
//})

//removeEventlistener
//==============================================
//BOM  
//console.log(window.innerHeight);
//console.log(window.scrollY);
window.open("http://google.com", "cours js ", "height=600, width=888") 
//window.close() 
//Evenements adossés a window
//alert("hello");

//confirm
btn2.addEventListener("click", () => {
    confirm("voulez vous vraiment vous tromper ?")
});

//prompt
btn1.addEventListener("click", () => {
 answer = prompt("Entrez votre nom !");
 
 questionContainer.innerHTML += "<h3>Bravo" + answer + "</h3>";
});

setTimeout(() => {
 questionContainer.style.borderRaduis = "300px";
}, 2000)

setInterval(() => {
    document.body.innerHTML += `
    <div class='box'>
    <h2>Nouvelle Boite !</h2>
    <div>
    `;
}, 1000);

document.body.addEventListener("click",(e) => {
    console.log(e.target);
    clearInterval(interval); 
})

//Location
//console.log(location.href );
//location.replace("http://lequipe.fr");
//window.onload = () => {
   // location.href = "http://twitter.fr";
//}

//navigator
//console.log(navigator.user Argent);
//http://developper.morilla.org/doc/web/API/Geolocation/getCurrentPosition

var options = {
    enableHighAccuracy:true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    var crd = pos.coords;

    console.log("Votre position actuelle est :");
    console.log(`latitude : ${crd.latitude}`);
    console.log(`longitude : ${crd.longitude}`);
    console.log(`la precision est de ${crd.accuracy}
    metre`);
}

function error(err) {
    console.warn(`ERREUR ${err.code}: ${err.message}`)
    ;
}

//history
//console.log(history);
//window.history.back();
//history.go(-2)

 //================================== 
 //SetPoperty
 window.addEventListener("mousemove", (e) => {
    console.log(e);
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");

 });
   
