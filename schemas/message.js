import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    message: { type: String },
    // author: {
    //     id: { type: String, required: true },
    //     nombre: { type: String, required: true },
    //     apellido: { type: String, required: true },
    //     edad: { type: Number, required: true },
    //     alias: { type: String, required: true },
    //     avatar: { type: String, required: false, default: '' },
    // },
    // timestamp: { type: String, required: true },
    // text: { type: String, required: true },
})

export const Messages = mongoose.model('Messages', messageSchema)
