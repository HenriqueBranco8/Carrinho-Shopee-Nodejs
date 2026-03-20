import createItem from './services/item.js'
import * as cartService from './services/cart.js'


const myCart = []
const item1 = await createItem('Book', 19.99, 1)
const item2 = await createItem('smartphone', 899.99, 2)


console.log('Welcome to the your White Cart!')

await cartService.additem(myCart, item1)
//await cartService.additem(myCart, item2)

console.log(item2.subtotal())

console.log('total your card is: ')
await cartService.caculatorTotal(myCart)