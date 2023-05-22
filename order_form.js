const body = document.querySelector('body')
const orderForm = document.createElement('form');
const wrapperForm = document.createElement('div');
const quantity = document.createElement('label');
const quantityField = document.createElement('input');

orderForm.classList.add('form');
orderForm.classList.add('wrapper__form');
quantity.classList.add('quantity');
quantity.setAttribute('for', 'quantity');
quantityField.classList.add('quantity__field');
quantityField.setAttribute('type', 'number');
quantityField.setAttribute('min', '1');
quantityField.setAttribute('placeholder', 'выберите количество товаров');

quantity.textContent = 'Количество';

body.appendChild(orderForm);
orderForm.appendChild(wrapperForm);
wrapperForm.appendChild(quantity);
wrapperForm.appendChild(quantityField);