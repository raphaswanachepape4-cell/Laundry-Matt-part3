lightbox.option({
    'resizeDuration': 200,
    'fadeDuration': 300,
    'wrapAround': true
})
const products=[
    { id: 1, name: "service 1", price: 70.99 },
    { id: 2, name: "service 2", price: 129.99 },
    { id: 3, name: "service 3", price: 187.99 }
];
const cart = [];
const container = document.getElementById('product-list');

function addToCart(productId) {
      container.innerHTML = "";
        list.forEach(product => {
                container.innerHTML += `
      <div class="product-card">
        <h3>${product.name}</h3>
        <p>R${product.price}</p>
      </div>
    `;
    loadProducts(products);
    // SEARCH
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  loadProducts(filtered);
});

// SORT
function sortByPrice() {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  loadProducts(sorted);
}
        }
    
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from submitting straight away

  let isValid = true;

  // Get values
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  // 1. Name validation
  if (name === "") {
    document.getElementById('nameError').textContent = "Name is required";
    isValid = false;
  } else {
    document.getElementById('nameError').textContent = "";
  }

  // 2. Email validation - check if it has @ and .
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById('emailError').textContent = "Enter a valid email";
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  // 3. Message validation
  if (message.length < 10) {
    document.getElementById('messageError').textContent = "Message must be at least 10 characters";
    isValid = false;
  } else {
    document.getElementById('messageError').textContent = "";
  }

  // If everything is valid
  if (isValid) {
    alert("Thank you! Your message about pillow cases has been sent.");
    // here you would send to your server
  }
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stops page from refreshing

  // --- 1. CLIENT-SIDE VALIDATION ---
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  let isValid = true;

  // Reset errors
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('messageError').textContent = "";

  if (name === "") {
    document.getElementById('nameError').textContent = "Name is required";
    isValid = false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById('emailError').textContent = "Enter a valid email";
    isValid = false;
  }

  if (message.length < 10) {
    document.getElementById('messageError').textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  if (!isValid) return; // Stop if invalid

  // --- 2. ERROR HANDLING + 3. AJAX SUBMISSION ---
  // This sends the form WITHOUT refreshing the page

  let formData = {
    name: name,
    email: email,
    message: message
  };

  fetch('https://jsonplaceholder.typicode.com/posts', { // Use your own backend URL here, this is a test API
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    // Success - no page reload!
    document.getElementById('successMessage').textContent = "Thank you! Message sent successfully.";
    document.getElementById('contactForm').reset();
  })
  .catch(error => {
    // Error handling
    document.getElementById('successMessage').textContent = "Something went wrong. Please try again.";
  });
});