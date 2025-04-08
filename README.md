# React Shop Product Viewer

A modern React application built with TypeScript that displays a list of products and detailed product information fetched from the [dummyjson.com](https://dummyjson.com/products) API.

## Features

-   **Product List View**

    -   Responsive grid layout
    -   Pagination support
    -   Display of key product information including:
        -   Product thumbnail
        -   Title and brand
        -   Price (original and discounted)
        -   Rating and stock status
        -   Availability status
        -   Minimum order quantity

-   **Product Detail View**

    -   Comprehensive product information
    -   Image gallery
    -   Price details with discount calculation
    -   Product specifications
    -   Customer reviews section

-   **Technical Features**
    -   Built with React 18 and TypeScript
    -   Responsive design for all screen sizes
    -   Clean and modern UI
    -   Efficient routing with React Router v6
    -   Component-specific styling
    -   Error handling and loading states

## Getting Started

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## API Integration

The application uses the following endpoints from dummyjson.com:

-   Product List: `https://dummyjson.com/products`
-   Product Details: `https://dummyjson.com/products/{id}`

## Technologies Used

-   React 18
-   TypeScript
-   React Router v6
-   CSS Modules
-   DummyJSON API
