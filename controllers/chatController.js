import { postMessageService } from '../services/messageServices.js'
import logger from '../utils/winston.js'

export const getMessageData = async (req, res) => {
    try {
        res.render('pages/chatTab', { layout: 'logged' })
    } catch (e) {
        logger.log('error', `No es posible renderizar el chat${e}`)
    }
}

export const postMessageController = async (req, res) => {
    try {
        const user = req.user
        const data = req.body
        await postMessageService(data, user).then(res.status(201))
    } catch (e) {
        logger.log('error', `No es posible postear el mensaje: ${e}`)
    }
}
