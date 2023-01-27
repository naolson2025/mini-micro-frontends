import faker from 'faker';

// document.querySelector('#dev-products').innerHTML = products;

// solves the two problems described below
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  if (el) {
    el.innerHTML = products;
  }
}

// situation 1
// we are running this file in development isolation
// we are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// we want to immediately render our app into that element

// NODE_ENV is set to 'development' automatically
// by webpack. because we have mode = 'development' in webpack.config.js
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    // assuming our container doesn't have an element
    // with id 'dev-products'
    mount(el);
  }
}

// situation 2
// we are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app

export { mount };