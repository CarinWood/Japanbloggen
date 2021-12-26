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
let nameField =  document.getElementById('name-field');
let sendButton = document.getElementById('btn');
let messageField =  document.getElementById('message-field');
sendButton.addEventListener('click', () => {
    
        if (nameField.value == '' || messageField.value == '') {
            alert('Please fill in the required fields!')
           
        } else {
            alert('Thank you ' + nameField.value +' for your message!')
   nameField.value = '';
    document.getElementById('email-field').value = '';
    document.getElementById('phone-field').value = '';
    messageField.value = '';
   
        }
});


