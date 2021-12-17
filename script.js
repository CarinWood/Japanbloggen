



window.addEventListener('scroll', changeColor);


function changeColor() {

    let scrolled = window.scrollY;
          
    let change = document.getElementsByClassName('change');


    for (let i = 0; i < change.length; i++) {
        const changeElement = change[i];

        if (scrolled >= 752) {
        changeElement.classList.add('turn-gray');
        document.getElementsByClassName('bx')[0].style.color = 'rgb(138, 135, 135)';
        document.getElementsByClassName('bx')[0].style.transition = '1s ease-in-out';
    
    } else {
        changeElement.classList.remove('turn-gray');
        document.getElementsByClassName('bx')[0].style.color = 'white';
    }
        
    }

}

