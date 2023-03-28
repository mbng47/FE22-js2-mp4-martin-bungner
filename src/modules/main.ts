import { evaluate } from 'mathjs';

const display = document.querySelector('.display') as HTMLDivElement;
const buttons = document.querySelectorAll('.buttons button') as NodeListOf<HTMLButtonElement>;

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const value = button.textContent as string;
        switch (value) {
            case 'AC':
                display.innerText = ' ';
                break;

            case '=':
                calculate(display.innerText)
                break;

            default:
                display.innerText += value;
                break;
        }
    })
})

function calculate(expression: string): number {
    return display.innerText = evaluate(expression);
}

const img = document.createElement('img');
document.body.append(img);
const imgUrl = new URL('../images/Sigil_of_Baphomet.png', import.meta.url);
img.src = imgUrl.href;