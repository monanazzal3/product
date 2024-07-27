document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.classList.add('product-item');
                
                const productImage = document.createElement('img');
                productImage.src = product.thumbnail;
                productImage.alt = product.title;

                const productTitle = document.createElement('span');
                productTitle.textContent = product.title;
                
                listItem.appendChild(productImage);
                listItem.appendChild(productTitle);
                
                listItem.addEventListener('click', () => {
                    const url = `product.html?id=${product.id}`;
                    console.log('Navigating to:', url); // إضافة هذا السطر لطباعة URL في وحدة التحكم
                    window.location.href = url;
                });
                
                

                productList.appendChild(listItem);
            });
        })
        .catch(err => console.error('Error fetching products:', err));
});
