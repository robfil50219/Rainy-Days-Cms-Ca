// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form-container form');
  
    const showPopupMessage = (message) => {
      const popup = document.createElement('div');
      popup.className = 'popup-message';
      popup.textContent = message;
  
      // Basic styling for the popup
      popup.style.position = 'fixed';
      popup.style.top = '50%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.backgroundColor = '#333';
      popup.style.color = '#fff';
      popup.style.padding = '20px';
      popup.style.borderRadius = '5px';
      popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      popup.style.zIndex = '1000';
  
      document.body.appendChild(popup);
  
      // Remove the popup after 3 seconds and refresh the page
      setTimeout(() => {
        document.body.removeChild(popup);
        window.location.reload();
      }, 3000);
    };
  
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        showPopupMessage('Thank you for your message! We will get back to you soon.');
      });
    }
  });
  