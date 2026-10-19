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

let supplierOrders = [];

function submitOrder(event) {
  if (event) event.preventDefault();

  const supplier = document.getElementById("supplierName").value.trim();
  const product = document.getElementById("orderProduct").value.trim();
  const quantity = Number(document.getElementById("orderQuantity").value);
  const price = Number(document.getElementById("orderPrice").value);

  if (!supplier || !product || quantity < 1 || price <= 0) {
    alert("Please enter valid order details.");
    return;
  }

  const order = {
    id: Date.now(),
    supplier: supplier,
    product: product,
    quantity: quantity,
    price: price,
    total: quantity * price,
    status: "Pending"
  };

  supplierOrders.push(order);

  displaySupplierOrders();
  alert("Order placed successfully!");
}

function displaySupplierOrders() {
  const paymentBody = document.getElementById("supplierPaymentBody");

  if (!paymentBody) return;

  paymentBody.innerHTML = "";

  supplierOrders.forEach(function (order) {
    const row = document.createElement("tr");

    [
      order.id,
      order.supplier,
      order.product,
      order.quantity,
      "₱" + order.total.toFixed(2),
      order.status
    ].forEach(function (value) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    paymentBody.appendChild(row);
  });
}


/* PAYMENT TO SUPPLIER */

function processSupplierPayment() {

  alert(
    "Supplier payment has been marked for processing."
  );

}


/* SALES */

function addItem(event) {
  if (event) event.preventDefault();

  const sku = document.getElementById("sku").value.trim();
  const productName = document.getElementById("productName").value.trim();
  const quantity = parseInt(document.getElementById("itemQuantity").value, 10);
  const unitPrice = parseFloat(document.getElementById("unitPrice").value);

  const feedback = document.getElementById("itemFeedback");

  if (!sku || !productName || quantity < 1 || unitPrice <= 0 ||
    !Number.isFinite(quantity) || !Number.isFinite(unitPrice)) {
    feedback.textContent = "Please enter valid product details.";
    return;
  }

  const cartBody = document.getElementById("cartBody");

  const row = document.createElement("tr");
  const total = quantity * unitPrice;

  row.innerHTML = `
    <td>${sku}</td>
    <td>${productName}</td>
    <td>${quantity}</td>
    <td>₱${unitPrice.toFixed(2)}</td>
    <td>₱${total.toFixed(2)}</td>
    <td><button type="button" class="small-button remove-item">Remove</button></td>
  `;

  row.querySelector(".remove-item").addEventListener("click", function () {
    row.remove();
    updateTransactionTotal();
  });

  cartBody.appendChild(row);
  updateTransactionTotal();

  feedback.textContent = "Item added successfully.";
  function updateTransactionTotal() {
    const rows = document.querySelectorAll("#cartBody tr");
    let total = 0;
    let units = 0;

    rows.forEach(function (row) {
      const quantity = Number(row.cells[2].textContent);
      const price = Number(row.cells[3].textContent.replace("₱", ""));

      total += quantity * price;
      units += quantity;
    });

    document.getElementById("transactionTotal").textContent =
      "₱" + total.toFixed(2);

    document.getElementById("cartCount").textContent =
      units + (units === 1 ? " unit" : " units");
  }
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
  document.getElementById("itemForm").addEventListener("submit", addItem);
  document.getElementById("orderForm").addEventListener("submit", submitOrder);
}
