console.log("Thit prompijarn");
console.log("Bright")

const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid Expression');
        clearDisplay();
    }
}
