function filter(){
    const categorySelect = document.querySelector("select");
    const priceInput = document.querySelector("#filtrerPrice");
    const filterButton = document.querySelector("#filter");
    const products = document.querySelectorAll(".product");
    
    filterButton.addEventListener("click", () => {
        const selectedCategory = categorySelect.value;
        const maxPrice = parseFloat(priceInput.value.replace(/\./g, '').replace('$','')) || Infinity;
        
        products.forEach(product => {
            const productPriceText = product.querySelector("p").innerText;
            const productPrice = parseFloat(productPriceText.replace(/\./g, '').replace('$',''));
            
            const categoryMatch = selectedCategory === "all" || product.classList.contains(selectedCategory);
            const priceMatch = productPrice <= maxPrice;

            if (categoryMatch && priceMatch) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    })
}
