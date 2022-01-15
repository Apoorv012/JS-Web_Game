
// svg levels
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");

// next button
const nextRetryButton = document.querySelector(".next-retry-button");

// UI Objects
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");

// Colors
const LIGHT_BLUE = "#1872AE";
const RED = "#FF0000";

// Variables
let hasLevelCompleted = false;

let currentLevel = 1;

const CollisionCheck = (value) => {
    console.log(value);

    if(value === "maze-border") Retry();

    if(value === "finish"){
        hasLevelCompleted = true;
        nextRetryButton.style.background = LIGHT_BLUE;
        nextRetryButton.style.opacity = 1;
        nextRetryButton.style.pointerEvents = "all";
        nextRetryButton.textContent = 'Next Level';
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

const Retry = () => {
    nextRetryButton.style.opacity = 1;
    nextRetryButton.style.background = RED;
    nextRetryButton.style.pointerEvents = 'all';
    nextRetryButton.textContent = 'Retry!';
    switch(currentLevel) {
        case 1:
            levelOne.style.pointerEvents = "none";
            break;
        case 2:
            levelTwo.style.pointerEvents = "none";
    }
}

window.addEventListener("mousemove", (e) => {
    if(hasLevelCompleted) return;
    let check = e.target.classList.value;
    CollisionCheck(check);
});

nextRetryButton.addEventListener("click", () => {
    nextRetryButton.style.opacity = 0;
    nextRetryButton.style.pointerEvents = "none";

    if(hasLevelCompleted) {
        switch(currentLevel) {
            case 1:
                levelOne.style.display = "none";
                levelTwo.style.display = "block";
                uiLevel.textContent = "Level 02";
                uiMessage.textContent = "Good..Continue to finish the levels";
                currentLevel += 1;
                break;
            case 2:
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                break;
        }
        hasLevelCompleted = false;

    } else {
        switch(currentLevel) {
            case 1:
                levelOne.style.pointerEvents = "all";
                break;
            case 2:
                levelTwo.style.pointerEvents = "all";
                break;
        }
    }
});
