const pressBtn = document.querySelector('#pressBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

pressBtn.addEventListener('click',sendMsg)
function sendMsg(){
    let content = messageIn.value
    if(content === ''){
        alert('What the Fuck are you tryn to do')
    }
     else{
            messageOut.innerHTML = content;
            messageIn.value = '';
        }
    }
    
    