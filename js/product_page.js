document.addEventListener('DOMContentLoaded', () => {
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.style.display = 'block';

  // Function to fetch product data
  const getProductData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Get the product ID from the URL
    const productDetailURL = `//rainy-days.local/wp-json/wc/store/products/${productId}`;

    try {
      const response = await fetch(productDetailURL);
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      const productData = await response.json();

      displayProductDetails(productData); // Call the function to display the data
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  // Function to display product details
  const displayProductDetails = (product) => {
    const productTitle = document.getElementById('product-title');
    const productImage = document.getElementById('product-img');
    const productPrice = document.querySelector('.item-price');
    const productDescription = document.getElementById('item-description');

    productTitle.textContent = product.name;
    productImage.src = product.images[0]?.src || 'images/placeholder.png';
    productPrice.textContent = `${product.prices.price / 100} NOK`; 
    productDescription.innerHTML = product.description; 
  };

  // Fetch data and hide the loading indicator when done
  getProductData().then(() => {
    loadingIndicator.style.display = 'none';
  });
});

    
 
  

