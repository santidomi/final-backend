import {
    getProductService,
    postProductService,
    putProductService,
    deleteProductService,
} from '../services/productServices.js'

import { postOrderService } from '../services/productServices.js'
import { newOrderEmail } from '../utils/nodeMailer.js'

import logger from '../utils/winston.js'

export const getProductController = async (req, res) => {
    try {
        const data = await getProductService()
        res.json(data)
    } catch (e) {
        logger.log(
            'error',
            `No es posible conseguir el controlador del producto ${e}`
        )
    }
}

export const getProductsListController = async (req, res) => {
    res.render('pages/productList', { layout: 'logged' })
}

export const getPostProductViewController = async (req, res) => {
    res.render('pages/postProduct', { layout: 'logged' })
}

export const postProductController = async (req, res) => {
    try {
        const data = req.body
        await postProductService(data)
        res.status(201)
        res.render('pages/postProduct', { layout: 'logged' })
    } catch (e) {
        logger.log('error', `Error al añadir el controlador del producto ${e}`)
    }
}

export const putProductController = async (req, res) => {
    try {
        const data = req.body
        await putProductService(data)
        res.json('Put Success, product:', { data })
    } catch (error) {}
}

export const deleteProductController = async (req, res) => {
    try {
        const id = req.id
        // const data = req.body
        await deleteProductService(id)
        res.status(200) /* .json( "delete Success, product:",{id}) */
        /* res.json() */
    } catch (error) {}
}

export const postOrder = async (req, res) => {
    const { username } = req.user
    const order = req.body
    const orderString = JSON.stringify(order)
    postOrderService(username, order)
    newOrderEmail(username, orderString)
    res.json('su orden a sido creada!')
}
