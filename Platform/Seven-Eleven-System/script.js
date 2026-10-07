function showSection(sectionId, button) {

  // Hide every section
  const sections = document.querySelectorAll(".section");

  sections.forEach(function (section) {
    section.classList.remove("active");
  });


  // Show selected section
  const selectedSection = document.getElementById(sectionId);

  selectedSection.classList.add("active");


  // Remove active state from every navigation button
  const buttons = document.querySelectorAll(".nav-button");

  buttons.forEach(function (navButton) {
    navButton.classList.remove("active");
  });


  // Make selected button active
  button.classList.add("active");


  // Move page back to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* ORDERING TO SUPPLIER */

function submitOrder() {

  alert(
    "Purchase order submitted successfully for approval."
  );

}


/* PAYMENT TO SUPPLIER */

function processSupplierPayment() {

  alert(
    "Supplier payment has been marked for processing."
  );

}


/* SALES */

function addItem() {

  alert(
    "Item successfully added to the customer transaction."
  );

}


/* CASH PAYMENT */

function cashPayment() {

  const cashReceived =
    parseFloat(
      document.getElementById("cashReceived").value
    );


  const amountDue = 143;


  if (isNaN(cashReceived)) {

    alert(
      "Please enter the amount of cash received."
    );

    return;
  }


  if (cashReceived < amountDue) {

    alert(
      "Insufficient cash received."
    );

    return;
  }


  const change =
    cashReceived - amountDue;


  document.getElementById("changeAmount").textContent =
    "₱" + change.toFixed(2);


  alert(
    "Cash payment recorded successfully."
  );

}


/* E-WALLET PAYMENT */

function walletPayment() {

  alert(
    "Digital wallet payment verified successfully."
  );

}


/* CARD PAYMENT */

function cardPayment() {

  alert(
    "Card payment recorded successfully."
  );

}