# Rainy Days Webshop

## Project Overview

Rainy Days Webshop is an e-commerce platform created as part of the Noroff cross-course project. The platform integrates WordPress and WooCommerce for product management, along with a custom frontend built using HTML, CSS, and JavaScript.

## Features

- **Dynamic Product Display:** Products are fetched dynamically from a WordPress REST API.
- **Responsive Design:** Fully responsive layout suitable for desktop, tablet, and mobile devices.
- **Product Details Page:** View detailed information about each product.
- **API Integration:** Uses WordPress/WooCommerce REST API for backend communication.

## File Structure

- `/css/` - Contains the stylesheet files for the project.
- `/images/` - Includes logo, product images, and other assets.
- `/js/` - Contains JavaScript files for fetching API data and rendering the frontend.
- `index.html` - The homepage displaying the product grid.
- `product_page.html` - The product details page.

## Prerequisites

Ensure the following before running the project:

- WordPress and WooCommerce are installed and configured.
- The WordPress site is accessible via a secure HTTPS connection.
- The WordPress REST API is enabled and accessible.

## Launching the Site Locally

### Step 1: Install WordPress Locally

1. Download and install [Local by Flywheel](https://localwp.com/) or another local WordPress environment.
2. Create a new WordPress site in your local environment.
3. Install and activate the WooCommerce plugin.

### Step 2: Import WordPress Data

1. Import the provided WordPress export file into your local WordPress installation.
2. Navigate to the "Tools > Import" section in the WordPress admin panel.
3. Choose the provided XML file and upload it.

### Step 3: Set Up HTTPS

1. Ensure the local WordPress instance supports HTTPS.
2. Activate SSL in your local environment (e.g., using Local by Flywheel's SSL settings).

### Step 4: Update API URLs

1. Open the `index.js` and `product_page.js` files located in the `/js/` folder.
2. Replace the API URL with your local WordPress site's URL:
   ```javascript
   const apiURL =
     "https://your-local-wordpress-site.local/wp-json/wc/store/products";
   ```

### Step 5: Open the Files

1. Open `index.html` in your preferred browser.
2. Navigate through the site to test its functionality.

## Deployment

The project is deployed on [Netlify](https://netlify.com) for the frontend and a dynamic WordPress host for the backend. Ensure the WordPress instance is live and accessible for the frontend to function correctly.

## Submission Details

- **WordPress Export:** A full export of the WordPress database and files is included for evaluation.
- **ReadMe File:** This document serves as the project's ReadMe.
- **Functionality Demonstration:** The application demonstrates all required functionalities outlined in the assignment brief.

## Known Issues

- Ensure the WordPress instance is running and accessible for the frontend to fetch data.
- Mixed content errors can occur if the WordPress instance does not use HTTPS. Ensure the SSL certificate is active.

## Credentials

- WordPress Admin User: `Noroff`
- Password: `Noroff123!Secure`

## Author

- **Developer:** Robert Filep
- **Contact:** robfil50219@stud.noroff.no

## License

This project is for educational purposes as part of the Noroff Cross-Course Assignment and is not intended for commercial use.

---

For any issues or queries, please reach out via the contact information provided.
