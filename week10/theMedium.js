console.log("theMessage");

const theButton = document.querySelector('button');
// var --> don't use
let theBody = document.querySelector('body');
let theThesis = document.getElementById("theMainPoint")

theButton.addEventListener('click', beTheChange )

//theButton.addEventListener('hover', beTheFresh)

function beTheChange(){
    console.log("you clicked!");
    theThesis.style.backgroundColor = "white";
    //theBody.style.backgroundColor = "yellow"
    theThesis.textContent = "Nice to meet you!"

    const name = prompt("What's poppin?");
    document.body.innerHTML = "<h1>Welcome," + name + "!</h1>";
}
/*function beTheFresh(){
    console.log("you clicked again!");
    theThesis.style.backgroundColor = "red";
    theThesis.textContent = "T-T";
}
*/