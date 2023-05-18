const socket = io()

let messages = document.getElementById('messages')
let form = document.getElementById('form')
let input = document.getElementById('input')
let windowChat = document.getElementById('windowChat')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (input.value) {
        socket.emit('chat message', input.value)
        input.value = ''
    }
})

socket.on('chat message', function (msg) {
    var item = document.createElement('li')
    item.textContent = msg
    messages.appendChild(item)
    windowChat.scrollTo(0, document.body.scrollHeight)
})
