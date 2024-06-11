const cim = document.querySelector('h2');
const input = document.querySelector('input#nev');
const button = document.querySelector('button#send');
console.log(cim, input, button)

button.addEventListener('click', onClick)

function onClick (){
    cim.innerHTML = `Hello, ${input.value}!`;
}
console.log(cim)