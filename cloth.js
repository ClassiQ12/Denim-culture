document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SHOPPING CART LOGIC
    const cartButtons = document.querySelectorAll('button');
    let cartCount = 0;

    cartButtons.forEach(button => {
        // We only want to target "Add to Cart" buttons
        if (button.textContent === "Add to Cart") {
            button.addEventListener('click', (e) => {
                // Get the product name from the closest <h3>
                const productCard = e.target.parentElement;
                const productName = productCard.querySelector('h3').innerText;
                
                cartCount++;
                alert(`${productName} has been added to your cart! \nTotal items: ${cartCount}`);
                
                // Optional: Change button text temporarily
                const originalText = button.textContent;
                button.textContent = "Added!";
                button.style.backgroundColor = "#27ae60"; // Success green
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = ""; // Reset to CSS color
                }, 1500);
            });
        }
    });

    // 2. FORM VALIDATION & SUBMISSION
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the page from refreshing
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const fit = document.getElementById('fit').value;

            // Simple validation check
            if (name && email) {
                alert(`Success! Thank you, ${name}. Your 15% discount code has been sent to ${email}. We've noted your preference for ${fit} fits!`);
                contactForm.reset(); // Clear the form
            } else {
                alert("Please fill out all fields.");
            }
        });
    }

    // 3. SMOOTH SCROLLING FOR NAV LINKS
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});