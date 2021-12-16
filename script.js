const navbar = document.getElementById('navbar').addEventListener('click', changeColor);


function changeColor() {
    let change = document.getElementsByClassName('change');


    for (let i = 0; i < change.length; i++) {
        const changeElement = change[i];
        changeElement.classList.add('turn-gray');
        
    }

}