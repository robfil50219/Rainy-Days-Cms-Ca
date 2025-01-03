document.addEventListener('DOMContentLoaded', () => {
  const apiURL = 'http://rainy-days.local/wp-json/wc/store/products'; // API endpoint
  const productContainer = document.querySelector('.body-items .row'); // Container for products

  // Function to fetch products from the API
  async function fetchProducts() {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();

      // Render the products on the page
      renderProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  // Function to render products on the page
  function renderProducts(products) {
    products.forEach(product => {
      // Create a container for each product
      const item = document.createElement('div');
      item.classList.add('item');

      // Add product image
      const productImage = document.createElement('img');
      productImage.src = product.images[0]?.src || 'images/placeholder.png'; // Fallback to placeholder if no image
      productImage.alt = product.name;
      item.appendChild(productImage);

      // Add product name
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      item.appendChild(productName);

      // Add product price
      const productPrice = document.createElement('p');
      productPrice.textContent = `${product.prices.price / 100} NOK`; // Convert price to human-readable format
      item.appendChild(productPrice);

      // Add "View Product" link
      const productLink = document.createElement('a');
      productLink.href = product.permalink; // Link to product page
      productLink.textContent = 'View Product';
      productLink.target = '_blank'; // Open in a new tab
      item.appendChild(productLink);

      // Append the product to the container
      productContainer.appendChild(item);
    });
  }

  // Fetch and display products when the page loads
  fetchProducts();
});


