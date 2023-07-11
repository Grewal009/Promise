const cart = ["shoes", "shirts", "pants"];
const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    //proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart()) {
      const err = "cart is not valid";
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(() => resolve(orderId), 2000);
    }
  });
  return pr;
}

function validateCart() {
  return false;
}
