import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 100 },
    nombre: { type: String, required: true, max: 100 },
    direccion: { type: String, required: true, max: 100 },
    edad: { type: Number, required: true, max: 100 },
    telefono: { type: String, required: true, max: 100 },
    url: {
        type: String,
        default:
            'https://img.icons8.com/material-outlined/256/gender-neutral-user.png',
    },
})

export const User = mongoose.model('usuarios', UserSchema)
