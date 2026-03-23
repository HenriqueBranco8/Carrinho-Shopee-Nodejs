import createItem from './services/item.js'
import * as cartService from './services/cart.js'

//Cart User
const myCart = []

//List of Wish
const myWhishList = []

const item1 = await createItem('Book', 19.99, 1)
const item2 = await createItem('smartphone', 899.99, 2)
const item3 = await createItem('SSD 1TB', 280, 1 )
const item4 = await createItem('Porco', 800, 13 )

console.log('Welcome to the your White Cart!')
//Add one item in cart
await cartService.additem(myCart, item1)
await cartService.additem(myCart, item2)
await cartService.additem(myWhishList, item3)
await cartService.additem(myWhishList, item4)

console.log('total your card is: ')
await cartService.caculatorTotal(myCart)


await cartService.deleteItem(myWhishList)
//await console.log(item2.quantity)
