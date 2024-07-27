document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(product => {
                const productDetails = document.getElementById('product-details');
                productDetails.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <img src="${product.thumbnail}" alt="${product.title}">
                `;
            })
            .catch(err => console.error('Error fetching product details:', err));
    } else {
        document.getElementById('product-details').textContent = 'No product ID found.';
    }
});

