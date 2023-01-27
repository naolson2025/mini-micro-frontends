import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('Container')

// we can control when to mount the products app
productsMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))