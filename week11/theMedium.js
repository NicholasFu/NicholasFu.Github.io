console.log("theMessage");

const theButton = document.querySelector('button');

let theBody = document.querySelector('body');
let theThesis = document.getElementById("theMainPoint")

theButton.addEventListener('click', beTheChange )



function beTheChange(){
    console.log("you clicked!");
    theThesis.style.backgroundColor = "white";
    //theBody.style.backgroundColor = "yellow"
    theThesis.textContent = "Nice to meet you plz Type your name here!"

    const name = prompt("Nice to meet you Plz Type your name here!");
    document.body.innerHTML = "<h1>Absolutely no,  " + name + " can't live without medium!</h1>";
}