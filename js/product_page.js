document.addEventListener('DOMContentLoaded', () => {
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.style.display = 'block';

  const getProductData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productDetailURL = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;

    try {
      const response = await fetch(productDetailURL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const productData = await response.json();

      displayProductDetails(productData); // Call the function to display the data
    } catch (error) {
      console.error('Error fetching product data', error);
    }
  };

  const displayProductDetails = (product) => {
    const productTitle = document.getElementById('product-title');
    const productImage = document.getElementById('product-img');
    const productPrice = document.querySelector('.item-price');
    const productDescription = document.getElementById('item-description');

    productTitle.textContent = product.title;
    productImage.src = product.image;
    productPrice.textContent = product.onSale ? `$${product.discountedPrice}` : `$${product.price}`;
    productDescription.textContent = product.description;
  };

  getProductData().then(() => {
    loadingIndicator.style.display = 'none';
  }); // Call the getProductData function when the page loads
});

    
 
  

