const cart = ["shoes", "shirts", "pants"];

createOrder(cart)
  .then(function (orderId) {
    console.log("order ID : ", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("Payment : ", paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart()) {
      const err = new Error("cart is not valid");
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

function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    if (!paymentVerified()) {
      const err = new Error("Error in payment!");
      reject(err);
    }

    resolve("payment successfull!");
  });
  return pr;
}

function paymentVerified() {
  return true;
}
