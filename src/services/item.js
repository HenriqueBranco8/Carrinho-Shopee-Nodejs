//Requisitos 

//Criar item com subtotal
const createItem = async (nameItem, price, quantity) => {
    return {
        nameItem,
        price,
        quantity,
        subtotal: () => price * quantity 
    }
}

export default createItem