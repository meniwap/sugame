let character = document.getElementById('character');
let gameContainer = document.getElementById('gameContainer');
let timeDisplay = document.getElementById('timeDisplay');
let floorDisplay = document.getElementById('floorDisplay');
let clickButton = document.getElementById('clickButton');
let floorHeight = 50; // גובה כל קומה, התאם לפי הדמות
let currentFloor = 0;
let timeLeft = 15;
let interval = null;

function updateDisplays() {
    timeDisplay.textContent = 'Time left: ' + timeLeft + ' seconds';
    floorDisplay.textContent = 'Current floor: ' + currentFloor;
}

function startGame() {
    if (interval) {
        clearInterval(interval); // עצירה של כל טיימר קודם
    }

    interval = setInterval(() => {
        timeLeft--;
        updateDisplays();
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert('Time is up! You reached floor: ' + currentFloor);
            resetGame();
        }
    }, 1000);
    updateDisplays();
}

function resetGame() {
    currentFloor = 0;
    timeLeft = 15;
    character.style.bottom = '0px'; // החזרת הדמות לתחתון
    gameContainer.scrollTop = gameContainer.scrollHeight; // גלילה לתחתון
    updateDisplays();
}

function handleUserInput() {
    if (timeLeft === 15 && !interval) {
        startGame();
    }
    currentFloor++;
    character.style.bottom = (currentFloor * floorHeight) + 'px'; // עדכון מיקום הדמות מלמטה
    gameContainer.scrollTop = gameContainer.scrollHeight - parseInt(character.style.bottom); // גלילה לפי מיקום הדמות
    updateDisplays();
}

clickButton.addEventListener('click', handleUserInput);
clickButton.addEventListener('touchstart', handleUserInput);
