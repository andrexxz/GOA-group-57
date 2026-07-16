document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const searchInput = document.getElementById("searchInput");
  const cartTotalPriceEl = document.querySelector(".cart-total-price");
  const productModal = document.getElementById("productModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modalBody = document.getElementById("modalBody");

  let allProducts = [];
  let cartTotal = 0;

  async function fetchProducts() {
    try {
      const fakeStoreRes = await fetch("https://fakestoreapi.com/products");
      const dummyJsonRes = await fetch("https://dummyjson.com/products");

      const fakeStoreData = await fakeStoreRes.json();
      const dummyJsonData = await dummyJsonRes.json();

      const normalizedFakeStore = fakeStoreData.map((item) => ({
        id: `fake_${item.id}`,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.image,
        rating: item.rating ? item.rating.rate : "N/A",
        brand: "N/A",
        stock: "N/A",
      }));

      const normalizedDummyJson = dummyJsonData.products.map((item) => ({
        id: `dummy_${item.id}`,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.thumbnail || item.images[0],
        rating: item.rating || "N/A",
        brand: item.brand || "N/A",
        stock: item.stock !== undefined ? item.stock : "N/A",
      }));

      allProducts = [...normalizedFakeStore, ...normalizedDummyJson];

      loadingSpinner.style.display = "none";
      renderProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      loadingSpinner.innerHTML =
        "<p>Error loading products. Please try again later.</p>";
    }
  }

  function renderProducts(products) {
    productGrid.innerHTML = "";
    if (products.length === 0) {
      productGrid.innerHTML =
        '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); font-size: 1.2rem;">პროდუქტი ვერ მოიძებნა...</p>';
      return;
    }

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-footer">
                        <div class="product-price">₾${product.price.toFixed(2)}</div>
                        <button class="add-to-cart-btn" data-price="${product.price}">დამატება</button>
                    </div>
                </div>
            `;

      card.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-to-cart-btn")) {
          addToCart(parseFloat(e.target.dataset.price));
          return;
        }
        openModal(product);
      });

      productGrid.appendChild(card);
    });
  }

  function addToCart(price) {
    cartTotal += price;
    cartTotalPriceEl.textContent = `₾${cartTotal.toFixed(2)}`;

    cartTotalPriceEl.style.transform = "scale(1.1)";
    cartTotalPriceEl.style.color = "#fff";
    setTimeout(() => {
      cartTotalPriceEl.style.transform = "scale(1)";
      cartTotalPriceEl.style.color = "var(--accent-color)";
    }, 200);
  }

  function openModal(product) {
    modalBody.innerHTML = `
            <div class="modal-image-container">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="modal-details">
                <div class="modal-category">${product.category}</div>
                <h2>${product.title}</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">ბრენდი (Brand)</div>
                        <div class="info-value">${product.brand}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">რეიტინგი (Rating)</div>
                        <div class="info-value">⭐ ${product.rating}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">მარაგი (Stock)</div>
                        <div class="info-value">${product.stock}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">ფასი (Price)</div>
                        <div class="info-value">₾${product.price.toFixed(2)}</div>
                    </div>
                </div>
                <p class="modal-description">${product.description}</p>
                <div class="modal-footer-actions">
                    <div class="modal-price">₾${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" style="font-size: 1.1rem; padding: 0.8rem 2rem;" id="modalAddToCart">კალათაში დამატება</button>
                </div>
            </div>
        `;

    document.getElementById("modalAddToCart").addEventListener("click", () => {
      addToCart(product.price);
      closeModal();
    });

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm),
    );
    renderProducts(filteredProducts);
  });

  closeModalBtn.addEventListener("click", closeModal);
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeModal();
  });

  fetchProducts();
});