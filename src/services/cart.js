//Quais ações meu carrinho pode fazer


//Funcionalidades:

//Adicionar um item 🆗
const additem = async (userCart, item) => {
    userCart.push(item)
}

//Deleter um item (Isso vai deletar o item indepedente da quantide, vai excluir tudo)
const deleteItem = async (userCart) => {
    const del = userCart.splice(0, -1)
    console.log(del)
}

//Diminuir um item(Vai apenas diminuir a quantide do item que está no carrinho)
const reduceItem = async (userCart, index) => {

}

//Acrescentar um item
const increaseItem = async (userCart, nameItem) => {

}

const caculatorTotal = async (userCart) => {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}
//Mostrar valor fixo do item
//Total do carrinho

export {
    additem,
    deleteItem,
    reduceItem,
    increaseItem,
    caculatorTotal
}
