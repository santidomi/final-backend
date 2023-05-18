import { createTransport } from 'nodemailer'
import logger from './winston.js'
import { config } from '../config/config.js'

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.UTILS.NODEMAILER.USER,
        pass: config.UTILS.NODEMAILER.PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
})

export const newOrderEmail = async (username, order) => {
    const newOrderEmail = {
        from: 'joselamensa10@gmail.com',
        to: username,
        subject: 'Tu orden fué creada correctamente',
        html: `
        <h3> Orden generada correctamente</h3>
        <p>Ordering user: ${username}</p>
        <p>Your order: ${order}</p>
        `,
    }

    try {
        const info = await transporter.sendMail(newOrderEmail)
        logger.log('info', `email has been sent to ${username}`)
    } catch (err) {
        logger.log('error', `cant sent mail to ${username}`)
    }
}

export const sendUserEmail = async (username, password) => {
    const UserMailOptions = {
        from: 'joselamensa10@gmail.com',
        to: username,
        subject: 'Registro completo',
        html: `
        <h3 >Registro realizado</h3>
        <h2>Bienvenido!</h2>
        <p>Username:${username}</p>
        <p>Password:${password}</p>
        `,
    }

    try {
        const info = await transporter.sendMail(UserMailOptions)
        logger.log('info', `Mail enviado correctamente a: ${username}`)
    } catch (err) {
        logger.log('error', `No es posible enviar el mail a: ${username}`)
    }
}

export const sendAdminEmail = async (newUserName) => {
    const adminMailOptions = {
        from: 'joselamensa10@gmail.com',
        to: 'joselamensa10@gmail.com',
        subject: 'Usuario nuevo',
        html: `<h3> Registro completo</h3>
        <p>New user:${newUserName}</p>`,
    }

    try {
        const info = await transporter.sendMail(adminMailOptions)
        logger.log('info', `Email enviado`)
    } catch (err) {
        logger.log('error', `No se puede mandar el mail`)
    }
}
