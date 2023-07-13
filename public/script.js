const socket = io('https://catchat-dlp8.onrender.com');
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const name = prompt('what is your name?')
appendMessage('You joined')
socket.emit('new-user', name )

socket.on('chat-message', data =>{
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name =>{
    appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name =>{
    appendMessage(`${name} disconnected`)
})

let id = 0



messageForm.addEventListener('submit', e => {
e.preventDefault();
const message = messageInput.value
 localStorage.setItem('id',id + 1)

localStorage.setItem(`key${localStorage.getItem('id')}`, message)
appendMessage(`You:${localStorage.getItem(`key${localStorage.getItem('id')}`)}`)
socket.emit('send-chat-message', message);
id += 1
setTimeout(messageInput.value = '',1)
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}

let test = -1
    function load(){  
        if(localStorage.getItem('id') == null){
            return
        }
        id++
   test++
   if(test == localStorage.getItem('id') ) {
    return 
}
loadMessages()
requestAnimationFrame(load)
}
load()

function loadMessages() {
    const newMessageElement = document.createElement('div') 
    newMessageElement.innerText = localStorage.getItem(`key${id}`)
    console.log(id)
    console.log(test)
    console.log(localStorage.getItem('id'))
    messageContainer.append(newMessageElement)
}