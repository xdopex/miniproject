document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".product-btn");
    const cartMessage = document.getElementById("cart-message");
    const cartTotal = document.getElementById("cart-total");
    const cartItemsList = document.getElementById("cart-items");
    const cartDropdown = document.getElementById("cart-dropdown");
    const toggleCartButton = document.getElementById("toggle-cart");

    let cart = []; 

 
    toggleCartButton.addEventListener("click", () => {
        cartDropdown.classList.toggle("hidden");
    });

 
    orderButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            const product = button.closest(".product");
            const title = product.querySelector(".product-title").textContent;
            const priceText = product.querySelector(".product-price").textContent;
            const price = parseFloat(priceText.replace("$", ""));

            
            cart.push({ title, price });

            
            updateCartDisplay();
            showMessage(`Added ${title} to cart`);
        });
    });

 
    function updateCartDisplay() {
 
        cartItemsList.innerHTML = "";

        
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.title} - $${item.price.toFixed(2)} `;

            
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.style.marginLeft = "10px";
            removeBtn.style.cursor = "pointer";
            removeBtn.addEventListener("click", () => {
                removeItemFromCart(index);
            });

            li.appendChild(removeBtn);
            cartItemsList.appendChild(li);
        });

    
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    function removeItemFromCart(index) {
        const removed = cart.splice(index, 1)[0]; 
        updateCartDisplay();
        showMessage(' Removed '+ removed.title+' from cart  ');
    }

    
    function showMessage(text) {
        cartMessage.textContent = text;
        cartMessage.style.color = "green";
        setTimeout(() => (cartMessage.textContent = ""), 2500);
    }
});


function showWelcome() {
      const name = document.getElementById('firstname').value.trim();
      const email = document.getElementById('email').value.trim();
      const messageBox = document.getElementById('welcome-message');

      if (name === "" || email === "") {
        alert("Please enter both your name and email before proceeding!");
        messageBox.style.color = "red";
        messageBox.textContent = "Please enter both your name and email to continue!";
      } else {
       
        alert(`${name}, we have sent you a confirmation message to ${email}.`);
        
 
        messageBox.style.color = "green";
        messageBox.innerHTML = `Welcome <strong>${name}</strong>!<br>
        We’ve sent a message to <strong>${email}</strong>. Enjoy exploring Electronics-Hub!`;
      }
    }




    function showMessage(event) {
      event.preventDefault(); 
      alert("Your message has been received. We’ll get back to you soon!");
    
      document.getElementById("input_box1").value = "";
      document.getElementById("input_box2").value = "";
      document.getElementById("send_message").value = "";
    }