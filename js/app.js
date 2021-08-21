//total price counting function

function totalPrice() {
    const storageCost = document.getElementById('memory-cost').innerText;
    const bestPrice = document.getElementById('best-price').innerText;
    const ssdCost = document.getElementById('ssd-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalPrice = parseInt(bestPrice) + parseInt(storageCost) + parseInt(ssdCost) + parseInt(deliveryCost);
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
}

//total price after applying promo code

function applyPromo() {
    const total = parseInt(document.getElementById('total').innerText);
    const promoCode = document.getElementById('promo-code').value;
    if (promoCode == 'stevekaku') {
        document.getElementById('total').innerText = total - (total * 0.2);
    }
    document.getElementById('promo-code').value = '';
    console.log(promoCode);
}

//common function to findout the selected products price 

function productPrice(productName, valuePrice) {
    const productCost = document.getElementById(productName + "-cost");
    productCost.innerText = valuePrice;
    totalPrice();
}

//applying event handler an all buttons sequencialy 
document.getElementById('8GB-memory-btn').addEventListener('click', function () {
    productPrice('memory', 0);
});
document.getElementById('16GB-memory-btn').addEventListener('click', function () {
    productPrice('memory', 180);
});
document.getElementById('256GB-ssd-btn').addEventListener('click', function () {
    productPrice('ssd', 0);
});
document.getElementById('512GB-ssd-btn').addEventListener('click', function () {
    productPrice('ssd', 100);
});
document.getElementById('1TB-ssd-btn').addEventListener('click', function () {
    productPrice('ssd', 180);
});
document.getElementById('date25-btn').addEventListener('click', function () {
    productPrice('delivery', 0);
});
document.getElementById('date21-btn').addEventListener('click', function () {
    productPrice('delivery', 20);
});
document.getElementById('apply-btn').addEventListener('click', function () {
    applyPromo();
});

