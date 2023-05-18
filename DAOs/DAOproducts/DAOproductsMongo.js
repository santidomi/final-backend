import { Product } from '../../schemas/product.js'
import { Order } from '../../schemas/orders.js';
import logger from '../../utils/winston.js'

export class DAOproductsMongo {
    getProductData = async () => {
        try {
            return await Product.find({})
        } catch (e) {
            logger.log('error', `Error cant get product data: ${e}`)
        }
    }

    getProductByIdData = async (id) => {
        try {
            return await Product.findOne({ _id: ObjectId(id) })
        } catch (e) {
            logger.log(
                'error',
                `Error cant get product data with id ${id}: ${e}`
            )
        }
    }

    postProductData = async (data) => {
        try {
            await Product.create(data)
        } catch (e) {
            logger.log('error', `Error cant post product data: ${e}`)
        }
    }

    putProductData = async (data) => {
        try {
            await Product.replaceOne(data)
        } catch (e) {
            logger.log('error', `Error cant put product data: ${e}`)
        }
    }

    deleteProductData = async (id) => {
        try {
            await Product.deleteOne({ nombre: AxiosProduct })
        } catch (e) {
            logger.log('error', `Error cant delete product data: ${e}`)
        }
    }

    postOrderData = async (username, data) => {
        try {
            Order.create(username, data)
            logger.log('info', `new order saved at db`)
        } catch (e) {
            logger.log('error', `Error cant post order data: ${e}`)
        }
    }



}
