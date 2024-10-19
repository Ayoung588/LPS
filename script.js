"use strict";

// dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

//guessing game
function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const resultMessage = document.getElementById('resultMessage');

  if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
    resultMessage.textContent = "Please enter a valid number between 1 and 10.";
    resultMessage.style.color = "red";
  } else if (userGuess === randomNumber) {
    resultMessage.textContent = `Congratulations! You guessed the number ${randomNumber}. You win a discount for LPS! 🎉`;
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = `Sorry, the random number was ${randomNumber}. Please try again!`;
    resultMessage.style.color = "orange";
  }
}

//products
//product 1 is sourced here: https://i.pinimg.com/originals/18/cd/cb/18cdcbc6dd1b566b88d0feb178b81683.png
//product 2 is sourced here: https://i.ebayimg.com/images/g/REoAAOSwboBmxaRd/s-l400.jpg
//product 3 is sourced here: https://i.pinimg.com/564x/3e/0e/e8/3e0ee8afbdb4865897cfaa695cdbc9c3.jpg
const products = [
  {
    name: "Short Hair #468",
    image: "lps_cat.png",
    description: "One of the most popular cats brought to you by LPS! Now in restock!"
  },
  {
    name: "Deer #634",
    image: "lps_deer.jpg",
    description: "A beloved classic from the early 2000's, you asked for it, we listened! Our adorablest Little Pet Shop deer makes a comeback!"
  },
  {
    name: "Collie #363",
    image: "lps_dog.jpg",
    description: "Simple but cute! This Littlest Pet Shop dog is the perfect addition to any collection."
  }
];

function showProduct(index) {
  const product = products[index];
  const productImage = document.getElementById("productImage");
  const productName = document.getElementById("productName");
  const productDescription = document.getElementById("productDescription");

  productName.textContent = product.name;
  productImage.src = product.image;
  productDescription.textContent = product.description;
}

window.onload = function() {
  showProduct(0);
};

// Submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting immediately

  document.querySelectorAll('.error').forEach(error => error.textContent = '');

  //input values
  const fullName = document.getElementById('fullName').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const email = document.getElementById('email').value.trim();
  const comments = document.getElementById('comments').value.trim();
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

  let isValid = true;


  if (!fullName) {
    document.getElementById('nameError').textContent = 'Full name is required.';
    isValid = false;
  }

  if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
    document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
    isValid = false;
  }


  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }


  if (!comments) {
    document.getElementById('commentsError').textContent = 'Comments are required.';
    isValid = false;
  }

  if (!contactMethod) {
    document.getElementById('contactMethodError').textContent = 'Please choose a contact method.';
    isValid = false;
  }

  // Display thank you message
  if (isValid) {
    const customer = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      comments: comments,
      contactMethod: contactMethod.value,
    };

    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.innerHTML = `Thank you, ${customer.fullName}!<br>Your message has been received.<br>Contact Method: ${customer.contactMethod}<br>Comments: ${customer.comments}`;
    thankYouMessage.style.display = 'block';

    document.getElementById('contactForm').reset();
  }
});