//Quais ações meu carrinho pode fazer


//Funcionalidades:

//Adicionar um item 🆗
const additem = async (userCart, item) => {
    userCart.push(item)
}

//Deleter um item (Isso vai deletar o item indepedente da quantide, vai excluir tudo)
const deleteItem = async (userCart, itemName) => {
    const index = userCart.findIndex(item => item.nameItem === itemName) 
    if(index !== -1){
        userCart.splice(index, 1)
    }
}

//Diminuir um item(Vai apenas diminuir a quantide do item que está no carrinho)
const reduceItem = async (userCart, item) => {

    //1 Encontrar o indice do item
    const indexFound = userCart.findIndex((product) => product.nameItem === item.nameItem)
    console.log(`Item localizado: ${indexFound +1}`)

    //2 Caso não encontrar o indice do item
    if(indexFound === -1){
        console.log('Item não encontrado')
        return
    }

    //3 item > 1 subtrair um item.
    if(item.quantity > 1){
        item.quantity --
        return
    }

    //4 Caso item = 1 deletar 1 item
    if(item.quantity == 1){
        userCart.splice(indexFound, 1)
    }


}

//Acrescentar um item
const increaseItem = async (userCart, nameItem) => {

}

const caculatorTotal = async (userCart) => {
    console.log('\nTotal your card is:')
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}
//Mostrar valor fixo do item
//Total do carrinho

const displaycart = async (userCart) => {
    console.log('\nWhite card List:')
    userCart.forEach((item, index) =>{
        console.log(`${index +1}. ${item.nameItem} - R${item.price} | Quantidae: ${item.quantity} | Subtotal ${item.subtotal().toFixed(2)}`)
    })
}

export {
    additem,
    deleteItem,
    reduceItem,
    increaseItem,
    caculatorTotal,
    displaycart
}
