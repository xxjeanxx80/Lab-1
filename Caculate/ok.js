// Quantity functionality
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityInput = document.getElementById('quantity');

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

// Countdown timer functionality
function updateCountdown() {
    const timerElement = document.getElementById('timer');
    let [days, hours, minutes, seconds] = timerElement.textContent.split(' : ').map(Number);

    if (seconds > 0) {
        seconds -= 1;
    } else if (minutes > 0) {
        seconds = 59;
        minutes -= 1;
    } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours -= 1;
    } else if (days > 0) {
        seconds = 59;
        minutes = 59;
        hours = 23;
        days -= 1;
    }

    timerElement.textContent = `${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);
