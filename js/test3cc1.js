			//coding challenge 1


if (bubbleBox.childElementCount <= 20) {

            var newBubble = new bubble(randInt(50, 120), "bu_bubble" + randInt(1, 10) + ".png");

            newBubble.xPos = box.width / 2;

            newBubble.yPos = box.height / 2;

            newBubble.xVelocity = randInt(-5, 5);

            newBubble.yVelocity = randInt(-5, 5);

            newBubble.rotate = randInt(0, 360);

            newBubble.hue = randInt(0, 360);

            newBubble.rotateDirection = randInt(-2, 2);

 

            var bubbleImg = document.createElement("img");

            bubbleImg.style.position = "absolute";

            bubbleImg.src = newBubble.imageURL;

            bubbleImg.style.width = newBubble.radius + “px";

            bubbleImg.style.left = newBubble.xPos + "px";

            bubbleImg.style.top = newBubble.yPos + "px";

            bubbleBox.appendChild(bubbleImg);
}		
			
//coding challenge 2
			
window.addEventListener("load",  function() {

        var orderData = location.search.slice(1);
        
        orderData = orderData.replace(/\+/g," ");

        orderData = decodeURIComponent(orderData);

        var orderFields = orderData.split(/[&=]/g);

 

        var orderForm = document.forms.order;

        orderForm.elements.modelName.value = orderFields[3];

        orderForm.elements.qty.value = orderFields[5];

        orderForm.elements.orderCost.value = orderFields[7];

        orderForm.elements.shippingType.value = orderFields[9];

        orderform.elements.protectionName.value=orderFields[13];

        orderForm.elements.subTotal.value = orderFields[15];

        orderForm.elements.salesTax.value = orderFields[17];

        orderForm.elements.cartTotal.value = orderFields[19];

    });

 

window.addEventListener("load",  function() {

        document.getElementById("subButton").onclick = runSubmit;

        document.getElementById("cardName").oninput = validateName;

        document.getElementById("cardNumber").oninput = validateIndex;

        document.getElementById("expMonth").onchange = validateDate;

        document.getElementById("cvc").oninput = validateCVC;

    });

 

function runSubmit() {

    validateName();

    validateCredit();

    validateNumber();

    validateDate();

    validateCVC();

}
function validateDate() {

    var expDate = document.getElementById("expDate");

    if (expDate.valueMissing) {

        expDate.setCustomValidity("Enter the expiration date");

    } else if (!^(0[1-9])\/20[12]\d/.test(expDate.value)) {

        expDate.setCustomValidity("Enter a valid expiration date")

    } else {

      expDate.setCustomValidity("");

    }
}


