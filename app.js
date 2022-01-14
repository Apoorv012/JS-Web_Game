
// svg levels
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");

// next button
const nextButton = document.querySelector(".next-button")

// UI Objects
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");

let currentLevel = 1;

const CollisionCheck = (value) => {
    console.log(value);
    if(value === "maze-border") alert("You stepped on the border....Try again!");

    if(value === "finish"){
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = "all";
        switch(currentLevel) {
            case 1:
                levelOne.style.pointerEvents = "none";
                break;
            case 2:
                levelTwo.style.pointerEvents = "none";
                break;
        }
    }
}

window.addEventListener("mousemove", (e) => {
    let check = e.target.classList.value;
    CollisionCheck(check);
})

nextButton.addEventListener("click", () => {
    switch(currentLevel) {
        case 1:
            levelOne.style.display = "none";
            levelTwo.style.display = "block";
            nextButton.style.opacity = 0;
            nextButton.style.pointerEvents = "none";
            uiLevel.textContent = "Level 02";
            uiMessage.textContent = "Good..Continue to finish the levels";
            currentLevel += 1;
            break;
        case 2:
            console.log('YOUTUBE!');
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            break;

    }
})
