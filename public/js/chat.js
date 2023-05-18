const socket = io()

Desnormalizacion
const authorSchema = new normalizr.schema.Entity(
    'authors',
    {},
    { idAttribute: 'email' }
)
const messageSchema = new normalizr.schema.Entity('messages', {
    author: authorSchema,
})
const chatSchema = new normalizr.schema.Entity('chats', {
    messages: [messageSchema],
})

/* Envia mensajes al backend */
function sendMessage() {
    const email = document.getElementById('emailChat').value
    const name = document.getElementById('nameChat').value
    const lastname = document.getElementById('lastnameChat').value
    const age = document.getElementById('ageChat').value
    const alias = document.getElementById('aliasChat').value
    const avatar = document.getElementById('avatarChat').value
    const inputMessage = document.getElementById('inputMessageChat').value
    const newMessageData = {
        author: {
            email: email,
            name: name,
            lastname: lastname,
            age: age,
            alias: alias,
            avatar: avatar,
        },
        text: inputMessage,
    }
    inputMessage.value = ' '
    socket.emit('newMessageData', newMessageData)
    return false
}
document
    .getElementById('preventDefault')
    .addEventListener('click', function (event) {
        event.preventDefault()
    })
