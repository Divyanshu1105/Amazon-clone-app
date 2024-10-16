import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/backend-practice.js';
// import '../data/cart-class.js';

async function loadPage() {
    try {
        // throw 'error1';

        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            // throw 'error2';
            loadCart(() => {
                // reject('error3'); Used reject because cart load and if there is error which will shows in future and that's why using reject here instead of 'throw' which doesn't works in future
                resolve('value3');
            });
        });

    } catch (error) {
        console.log('Unexpected error. Please try again later.');
    }

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/*
Promise.all([
    loadProductsFetch(), // because it returns a promise
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
new Promise((resolve) => {
    loadProducts(() => { 
        resolve();
    });
}).then(() => {
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});

*/
