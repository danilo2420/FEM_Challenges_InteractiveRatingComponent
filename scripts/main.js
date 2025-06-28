/* DOM elements */
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');
const numberContainer = document.getElementById('numberContainer');

/* Variables */
let chosenNumber = -1;

/* Functions */
function main() {
    configureNumberButtons();
    configureSubmitButton();
}

function configureNumberButtons() {
    for (item of numberContainer.children) {
        const number = item.dataset.number;
        item.addEventListener('click', () => {
            chosenNumber = number;
            activateNumber(number);
        });
    }
}

function activateNumber(number) {
    for (item of numberContainer.children) {
        const itemNumber = item.dataset.number;
        if (itemNumber != number){
            item.classList.remove('container1__numbers__item--chosen');
        } else {
            item.classList.add('container1__numbers__item--chosen');
        }
    }
}

function configureSubmitButton() {
    submitButton.addEventListener('click', () => {
        if (chosenNumber != -1) {
            output.innerText = 'You selected ' + chosenNumber + ' out of 5';

            container1.style.display = 'none';
            container2.style.display = 'flex';
        }
    });
}

main();
