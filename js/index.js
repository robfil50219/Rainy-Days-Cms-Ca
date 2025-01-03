document.addEventListener('DOMContentLoaded', () => {
  const apiURL = 'https://rainy-days.local/wp-json/wc/store/products';
  const loadingIndicator = document.getElementById('loading-indicator');
  const productContainer = document.querySelector('.body-items .row');

  // Fetch data from the API
  const fetchData = async () => {
    try {
      // Show loading indicator
      loadingIndicator.style.display = 'block';

      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const products = await response.json();

      // Display products and hide the loading indicator
      displayProducts(products);
      loadingIndicator.style.display = 'none';
    } catch (error) {
      console.error('Error fetching products:', error);
      // Hide loading indicator even if there’s an error
      loadingIndicator.style.display = 'none';
    }
  };

  // Function to display products
  const displayProducts = (products) => {
    if (products.length === 0) {
      productContainer.textContent = 'No products available.';
      return;
    }

    products.forEach((product) => {
      const item = document.createElement('div');
      item.classList.add('item');

      // Product Image
      const productImage = document.createElement('img');
      productImage.src = product.images[0]?.src || 'images/placeholder.png';
      productImage.alt = product.name;
      item.appendChild(productImage);

      // Product Name
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      item.appendChild(productName);

      // Product Price
      const productPrice = document.createElement('p');
      productPrice.textContent = `${product.prices.price / 100} NOK`;
      item.appendChild(productPrice);

      // View Product Link
      const productLink = document.createElement('a');
      productLink.href = `product_page.html?id=${product.id}`;
      productLink.textContent = 'View Product';
      item.appendChild(productLink);

      productContainer.appendChild(item);
    });
  };

  // Call the fetchData function when the page loads
  fetchData();
});


