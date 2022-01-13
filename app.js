
// svg levels
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");

// next button
const nextButton = document.querySelector(".next-button")

// UI Objects
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");

// End Game sound and image
const screemSound = document.querySelector(".screem-sound");
const spookyPicture = document.querySelector(".spooky-picture");



const CollisionCheck = (value) => {
    if(value === "maze-border") alert("You stepped on the border....Try again!");

    if(value === "finish"){
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = "all";
        levelOne.style.pointerEvents = "none";
    }

    if(value === "end-game"){
        spookyPicture.style.display = "block";
        screemSound.play();
        document.body.style.background = "black";
    }
}

window.addEventListener("mousemove", (e) => {
    let check = e.target.classList.value;
    CollisionCheck(check);
})

nextButton.addEventListener("click", () => {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = "none";
    uiLevel.textContent = "Level 02";
    uiMessage.textContent = "One more to go";
})
