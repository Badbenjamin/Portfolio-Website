// bio list creator
const bioButton = document.getElementById("bioClick");
const list = document.getElementById("bioList");

bioButton.addEventListener("click", function(event){ 
        if (bioButton.textContent === "Click for Bio") {
        bioButton.textContent = "About Me...";
        bioButton.style.color = "white";

        const liOne = document.createElement("li");
        liOne.textContent = "I live in Brooklyn";
        liOne.id = 'one';
        list.append(liOne);

        const liTwo = document.createElement("li");
        liTwo.textContent = "I'm learning Software Engineering";
        liTwo.id = 'two';
        list.append(liTwo);
    } else {
        bioButton.textContent = "Click for Bio";
        bioButton.style.color = "black";
        const removeOne = document.getElementById("one");
        removeOne.remove();
        const removeTwo = document.getElementById("two");
        removeTwo.remove();
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

