 const colors = ['red', 'green' , 'orange' , 'yellow'];
 const container = document.querySelector('section');
 const h1 = document.querySelector('h1');
 const colorSelected = document.querySelector('selectedColor');

for(let color of colors) {
    const divs = document.createElement('div');
    divs.classList.add('divs');
    
    container.appendChild(divs);

    divs.style.backgroundColor = color;

    divs.addEventListener('click',function() {
        h1.innerText = 'You have selected : ';
        selectedColor.innerText = divs.style.backgroundColor;
        selectedColor.style.backgroundColor=divs.style.backgroundColor;
    })
}