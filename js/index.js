document.addEventListener('DOMContentLoaded', () => {
  const apiURL = 'https://rainy-days.local/wp-json/wc/store/products';
  const loadingIndicator = document.getElementById('loading-indicator');
  const productContainer = document.querySelector('.body-items .row');
  const searchBar = document.getElementById('search-bar');
  const sortOptions = document.getElementById('sort-options');

  let products = []; // To store the fetched products
  let filteredProducts = []; // To store filtered/sorted products

  // Fetch data from the API
  const fetchData = async () => {
    try {
      loadingIndicator.style.display = 'block';

      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      products = await response.json();
      filteredProducts = [...products]; // Clone the initial array
      displayProducts(filteredProducts);

      loadingIndicator.style.display = 'none';
    } catch (error) {
      console.error('Error fetching products:', error);
      loadingIndicator.style.display = 'none';
    }
  };

  // Function to display products
  const displayProducts = (productsArray) => {
    productContainer.innerHTML = ''; // Clear the container
    if (productsArray.length === 0) {
      productContainer.textContent = 'No products available.';
      return;
    }

    productsArray.forEach((product) => {
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

  // Search Functionality
  const handleSearch = () => {
    const searchQuery = searchBar.value.toLowerCase();
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
  };

  // Sort Functionality
  const handleSort = () => {
    const sortValue = sortOptions.value;

    if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => a.prices.price - b.prices.price);
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => b.prices.price - a.prices.price);
    } else if (sortValue === 'name-asc') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'name-desc') {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    displayProducts(filteredProducts);
  };

  // Add Event Listeners
  searchBar.addEventListener('input', handleSearch);
  sortOptions.addEventListener('change', handleSort);

  // Call the fetchData function when the page loads
  fetchData();
});


