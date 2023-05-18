import logger from '../../utils/winston.js'

let products = [
    {
        _id: 0,
        nombre: 'Array memory',
        precio: 1,
        descripcion: 'data from memory',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ7LlI0FVZf5key4hdIoYO7apFcBsjWW6xuLuZt6sT5hpQOEDwjcM5gRGcqJV0w72PpU&usqp=CAU',
        stock: 1,
    },
    {
        _id: 1,
        nombre: 'cafe',
        precio: 20,
        descripcion: 'cafe',
        thumbnail: 'https://cdn-icons-png.flaticon.com/512/5777/5777810.png',
        stock: 10,
    },
    {
        _id: 2,
        nombre: 'Te',
        precio: 15,
        descripcion: 'Té',
        thumbnail: 'https://us.123rf.com/450wm/matahiasek/matahiasek1602/matahiasek160200141/52819742-taza-de-t%C3%A9-silueta-aislado-en-el-fondo-blanco.jpg',
        stock: 10,
    },
    {
        _id: 3,
        nombre: 'Chocolatada',
        precio: 70,
        descripcion: 'Chocolatada',
        thumbnail: 'https://images.vexels.com/media/users/3/259859/isolated/preview/8335558b18587b8bc7172ac1548815e3-taza-de-chocolate-caliente-plana.png',
        stock: 10,
    },
    {
        _id: 4,
        nombre: 'Cocacola',
        precio: 80,
        descripcion: 'Cocacola',
        thumbnail: 'https://www.pngplay.com/wp-content/uploads/9/Coca-Cola-Free-PNG.png',
        stock: 10,
    },
    {
        _id: 5,
        nombre: '7up',
        precio: 10,
        descripcion: '7up',
        thumbnail: 'https://greenboom.com.ar/wp-content/uploads/2020/11/7up.jpg',
        stock: 10,
    },
    {
        _id: 6,
        nombre: 'Fanta',
        precio: 150,
        descripcion: 'Fanta',
        thumbnail: 'https://www.kindpng.com/picc/m/572-5729897_fanta-png-fanta-naranja-2-litros-transparent-png.png',
        stock: 10,
    },
    {
        _id: 7,
        nombre: 'manaos',
        precio: 50,
        descripcion: 'manaos',
        thumbnail: 'https://www.distribuidoradelsur.com.ar/sysmam/padmin/productos/img/MANAOS-POMELO-X-2-1-4-LTS.png',
        stock: 10,
    },
    {
        _id: 8,
        nombre: 'pritty',
        precio: 30,
        descripcion: 'pritty',
        thumbnail: 'https://www.facilshops.com/static/stores/s730_cz1b/images/products/xl/pritty-gaseosa-limon-x-2-25-l-pack-contiene-6-unidades-_7481.png',
        stock: 10,
    },
    {
        _id: 9,
        nombre: 'goliat',
        precio: 290,
        descripcion: 'goliat',
        thumbnail: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/833/228/products/861-5dc626f9fe013e7ac116307640799702-640-0.jpg',
        stock: 10,
    },
    {
        _id: 10,
        nombre: 'fernet',
        precio: 110,
        descripcion: 'fernet branca',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/395/170/products/branca-7501-16d6331e17710f9da116385675752508-480-0.jpg',
        stock: 10,
    },
    {
        _id: 11,
        nombre: 'Vodka',
        precio: 25,
        descripcion: 'Vodka Absolut',
        thumbnail: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c23f.png',
        stock: 10,
    },
    {
        _id: 12,
        nombre: 'Vodka',
        precio: 600,
        descripcion: 'Vodka smirnoff',
        thumbnail: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c240.png',
        stock: 10,
    },
    {
        _id: 13,
        nombre: 'Cerveza',
        precio: 55,
        descripcion: 'Cerveza Brahma',
        thumbnail: 'https://vinotecamasis.com.ar/wp-content/uploads/2022/09/Cerveza-Brahma-Lata-473-ml.png',
        stock: 10,
    },
    {
        _id: 14,
        nombre: 'Cerveza',
        precio: 300,
        descripcion: 'Cerveza quilmes',
        thumbnail: 'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61392_default_medium.jpeg',
        stock: 10,
    },
    {
        _id: 15,
        nombre: 'Cerveza',
        precio: 70,
        descripcion: 'Cerveza stella',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJxlUOfjxS4lYWPww2gR7wjcoJfEPQgmVJDNNh-n14WisPsyKbjlKxtBCLn3m3JJtJYw&usqp=CAU',
        stock: 10,
    },
]

export class DAOproductsMemory {
    getProductData = async () => {
        try {
            return products
        } catch (e) {
            logger.log('error', `Error cant get products data: ${e}`)
        }
    }

    postProductData = async (data) => {
        try {
            return products.push(data)
        } catch (e) {
            logger.log('error', `Error cant post product data: ${e}`)
        }
    }
}
