import { productsMount } from 'products/ProductsIndex';
import { cartMount } from 'cart/CartIndex';

console.log('container');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));