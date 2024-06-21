// bio list creator
const bioButton = document.getElementById("bioClick");
const list = document.getElementById("bioList");

bioButton.addEventListener("click", function(event){ 
        if (bioButton.textContent === "Click for Bio") {
        bioButton.textContent = "About Me...";
        bioButton.style.color = "white";

        const liOne = document.createElement("li");
        liOne.textContent = "I live in Brooklyn";
        list.append(liOne);
        
       

    } else {
        bioButton.textContent = "Click for Bio";
        bioButton.style.color = "black";
    }
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

