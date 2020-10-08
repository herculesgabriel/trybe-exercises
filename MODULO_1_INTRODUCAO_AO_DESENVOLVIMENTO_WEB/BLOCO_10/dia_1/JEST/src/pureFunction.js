// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => ({ ...item, price });

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => [...cart, item]

module.exports = { setPrice, addToCart };