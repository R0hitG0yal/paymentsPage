const { all } = require("express/lib/application");

function toggleDetails(id) {
  const allDetails = document.querySelectorAll(".details");
  const allDiscount = document.querySelectorAll(".discount");
  const allOffer = document.querySelectorAll(".off");
  allDetails.forEach((detail) => {
    if (detail.id === ("details-" + id)) {
      detail.style.display = "block";
    } else {
      detail.style.display = "none";
    }
  });
  allDiscount.forEach((discount) => {
    if (discount.id === "discount-" + id) {
      discount.style.display = "none";
    } else {
      discount.style.display = "flex";
    }
  });
  allOffer.forEach((offer) => {
    if (offer.id === "off-" + id) {
      offer.style.display = "block";
    } else {
      offer.style.display = "none";
    }
  });

  // Update total based on selected option
  const selectedOption = document.querySelector(`input[name="bundle"]:checked`);
  let price = 0;

  switch (selectedOption.value) {
    case "1":
      price = 18;
      break;
    case "2":
      price = 24;
      break;
    case "3":
      price = 36;
      break;
  }

  updateTotal(price, selectedOption.value);
}

function updateTotal(price, pairs) {
  const totalElement = document.getElementById("total");
  totalElement.textContent = price.toFixed(2);
}
