window.addEventListener('scroll', changeColor);


function changeColor() {

    let scrolled = window.scrollY;     
    let change = document.getElementsByClassName('change');


    for (let i = 0; i < change.length; i++) {
        const changeElement = change[i];

        if (scrolled >= 752 && scrolled < 2183) {
        changeElement.classList.add('turn-gray');
        document.getElementsByClassName('bx')[0].style.color = 'rgb(138, 135, 135)';
        document.getElementsByClassName('bx')[0].style.transition = '1s ease-in-out';
    
    } else if (scrolled > 2884) {
        changeElement.classList.add('turn-gray');
        document.getElementsByClassName('bx')[0].style.color = 'rgb(138, 135, 135)';
        document.getElementsByClassName('bx')[0].style.transition = '1s ease-in-out';
    }
    else {
        changeElement.classList.remove('turn-gray');
        document.getElementsByClassName('bx')[0].style.color = 'white';
    }
        
    }

}



// Contact form:

let sendButton = document.getElementById('btn');
sendButton.addEventListener('click', () => {
    document.getElementById('name-field').value = '';
    document.getElementById('email-field').value = '';
    document.getElementById('phone-field').value = '';
    document.getElementById('message-field').value = '';
    alert('Thank you for your message!')
});


