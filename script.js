// bio list creator
const bioButton = document.getElementById("bioClick");
// const list = document.getElementById("bioList");

bioButton.addEventListener("click", function(event){ 
    bioButton.textContent = "About Me...";
    bioButton.style.color = "white";
});

const mainTitle = document.getElementById("Main-Title");

// title black/white click event 
mainTitle.addEventListener("click", function (event) {
    console.log(mainTitle.style.color)
    if (mainTitle.style.color === "white") {
        mainTitle.style.color = "black";
    } else {
        mainTitle.style.color = "white";
    }
});

const bioPic = document.getElementById("Main-Pic");

bioPic.addEventListener("mouseover", function (event) {
    console.log(event)
    bioPic.style.width = "500px";
})

bioPic.addEventListener("mouseout", function (event) {
    console.log(event)
    bioPic.style.width = "";
});

