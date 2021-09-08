function totalPrice() {
    const totalPrice = document.getElementById('total-cost');
    const extraTotalPrice = document.getElementById('extra-value');
    const bestPrice = document.getElementById('best-price');
    const memoryCost =  document.getElementById('memory-cost');
    const storageCost =  document.getElementById('storage-cost');
    const deliveryCost =  document.getElementById('delivery-cost');

    totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt( memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);

    extraTotalPrice.innerText = totalPrice.innerText;
}



document.getElementById('8gb-memory').addEventListener('click', function () {
     const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    totalPrice();
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
    totalPrice();
})


// ssd

document.getElementById('256gb-ssd').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    totalPrice();
})

document.getElementById('512gb-ssd').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    totalPrice();
})

document.getElementById('1tb-ssd').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    totalPrice();
})


// delivery charge

document.getElementById('delivery-25').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    totalPrice();
})
document.getElementById('delivery-21').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    totalPrice();
    
})


document.getElementById('promo-button').addEventListener('click', function () {
    const promoField = document.getElementById('promo-input');
    const promoFieldValue = promoField.value;
    const extraValue = document.getElementById('extra-value');
    const extraFieldValue = parseInt(extraValue.innerHTML);
    
    if (promoFieldValue == "stevekaku") {
        
        const extraField = extraFieldValue * 0.8;
        extraValue.innerText = extraField;
        promoField.value = '';
    }

    else {
        promoField.value = '';
    }

    
})






