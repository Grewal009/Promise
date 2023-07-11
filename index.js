const cart = ["shoes", "shirts", "pants"];

createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID : ", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("Payment : ", paymentInfo);
    return paymentInfo;
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (summary) {
    console.log("Order summary : ", summary.join(", "));
    return summary;
  })
  .then(function (summary) {
    return updateWallet(summary);
  })
  .then(function (wallet) {
    console.log(wallet);
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
  return true;
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

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (!paymentInfo) {
      const err = new Error("error in orderSummary");
      reject(err);
    }
    resolve(cart);
  });
}

function updateWallet(summary) {
  return new Promise(function (resolve, reject) {
    if (!wallet()) {
      const err = new Error("Error in wallet");
      reject(err);
    }

    resolve("Wallet updated!");
  });
}

function wallet() {
  return false;
}
