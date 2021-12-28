window.addEventListener('scroll', addBackground);


function addBackground() {

    let scrolled = window.scrollY;     
    let scrollMenu = document.getElementsByClassName('scroll-menu')[0];
    console.log(scrolled);
  

    if (scrolled > 15) {
        scrollMenu.classList.add('add-background');
   
    
    
    } else if (scrolled < 15) {
        scrollMenu.classList.remove('add-background');
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


