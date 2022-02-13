/* -----------------------------
---input value convert to integer
--------------------------------*/
function getInputValue(idClass, priceId, isPhone, idPlus) {
  let phonePrice = 1219;
  let casePrice = 59;
  const itemPriceElem = document.getElementById(priceId);
  const inputElement = document.getElementById(idClass);
  const inputText = inputElement.value;
  const inputNumber = parseInt(inputText);
  if (idPlus) {
    let updateInputQuantity = (document.getElementById(idClass).value =
      inputNumber + 1);
    if (isPhone) {
      itemPriceElem.innerText = phonePrice * updateInputQuantity;
    } else {
      itemPriceElem.innerText = casePrice * updateInputQuantity;
    }
  } else {
    if (document.getElementById(idClass).value > 0) {
      let updateInputQuantity = (document.getElementById(idClass).value =
        inputNumber - 1);
      if (isPhone) {
        itemPriceElem.innerText = phonePrice * updateInputQuantity;
      } else {
        itemPriceElem.innerText = casePrice * updateInputQuantity;
      }
    }
  }
  totalSummaryPrice();
}

/* ---------------------------
---TOTAL SUMMARY PRICE
--------------------------- */
function totalSummaryPrice() {
  const phoneTotalPrice = parseFloat(
    document.getElementById("phone-price").innerText
  );
  const caseTotalPrice = parseFloat(
    document.getElementById("case-price").innerText
  );
  const subtotalElem = document.getElementById("subtotal-amount");
  const subtotal = phoneTotalPrice + caseTotalPrice;
  subtotalElem.innerText = subtotal;
  const taxElem = document.getElementById("tax-amount");
  const tax = subtotal / 5;
  taxElem.innerText = tax;
  const totalElem = document.getElementById("total-amount");
  totalElem.innerText = subtotal + tax;
}

// =============PHONE PLUS HANDLER=========
document.getElementById("phone-plus").addEventListener("click", function () {
  getInputValue("phone-field", "phone-price", true, true);
});
// ============PHONE MINUS HANDLER=========
document.getElementById("phone-minus").addEventListener("click", function () {
  getInputValue("phone-field", "phone-price", true, false);
});
// ============CASE PLUS HANDLER==========
document.getElementById("case-plus").addEventListener("click", function () {
  getInputValue("case-field", "case-price", false, true);
});
// ============CASE MINUS HANDLER==========
document.getElementById("case-minus").addEventListener("click", function () {
  getInputValue("case-field", "case-price", false, false);
});
