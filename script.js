const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const cor4 = document.getElementById('cor4');

function addClassSelected(evento) {
    const currentSelected = document.querySelector('.selected');
    currentSelected.classList.remove('selected');
    evento.target.classList.add('selected');
}



