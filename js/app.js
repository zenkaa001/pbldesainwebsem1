    const STATE_KEY = 'fashion_pbl_editorial_lookbook_v5';

    const initialCatalogData = {
      products: [
        {
          id: 'PRD01',
          name: 'Jaket Denim Wash Klasik Pria',
          category: 'Pria',
          sizeRange: 'PRIA · XS-XXL',
          price: 399000,
          originalPrice: 499000,
          stock: 22,
          rating: 4.9,
          colors: [
            { name: 'Indigo Blue', hex: '#3B5998' },
            { name: 'Charcoal', hex: '#303841' },
            { name: 'Warm Cream', hex: '#EFE8DD' }
          ],
          material: '100% Katun Denim Selvedge Ringan',
          img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=750&q=85',
          desc: 'Jaket denim berpotongan bersih dengan warna indigo autentik hasil pencucian lembut. Nyaman dilapis di atas kaos harian maupun kemeja.',
          reviews: [
            { user: 'Rizky Pratama', rating: 5, comment: 'Warna Indigo Blue-nya sangat pas dan bahan denimnya tidak kaku sama sekali.' },
            { user: 'Dimas Saputra', rating: 5, comment: 'Potongan bahu rapi dan jahitannya presisi.' }
          ]
        },
        {
          id: 'PRD02',
          name: 'Blazer Tailored Cream Minimalis',
          category: 'Wanita',
          sizeRange: 'WANITA · S-XL',
          price: 499000,
          originalPrice: 599000,
          stock: 16,
          rating: 4.9,
          colors: [
            { name: 'Warm Cream', hex: '#E5D7C4' },
            { name: 'Charcoal', hex: '#303841' },
            { name: 'Sage Teal', hex: '#76ABAE' }
          ],
          material: '68% Poliester, 29% Rayon, 3% Spandeks',
          img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=750&q=85',
          desc: 'Blazer editorial warna cream hangat dengan siluet terstruktur namun tetap ringan dan tidak mudah kusut untuk tampilan formal maupun kasual.',
          reviews: [
            { user: 'Nadia Putri', rating: 5, comment: 'Warna Warm Cream-nya elegan dan mudah dipadukan dengan celana bahan apa saja.' }
          ]
        },
        {
          id: 'PRD03',
          name: 'Kaos Katun Lembut Anak',
          category: 'Anak',
          sizeRange: 'ANAK · 110-160cm',
          price: 129000,
          originalPrice: 169000,
          stock: 30,
          rating: 4.8,
          colors: [
            { name: 'Off White', hex: '#F6F5F0' },
            { name: 'Soft Teal', hex: '#76ABAE' },
            { name: 'Burnt Orange', hex: '#FF5722' }
          ],
          material: '100% Katun Combed Organik Lembut',
          img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=750&q=85',
          desc: 'Kaos harian anak berwarna putih gading bersih yang halus di kulit, menyerap keringat dengan optimal, dan bebas bergerak sepanjang hari.',
          reviews: [
            { user: 'Ibu Sari', rating: 5, comment: 'Bahannya lembut dan adem dipakai anak aktif.' }
          ]
        },
        {
          id: 'PRD04',
          name: 'Kaos Crew Neck Supima Hitam',
          category: 'Pria',
          sizeRange: 'PRIA · XS-XXL',
          price: 179000,
          originalPrice: null,
          stock: 42,
          rating: 4.9,
          colors: [
            { name: 'Charcoal Black', hex: '#23272A' },
            { name: 'Pure White', hex: '#FFFFFF' },
            { name: 'Muted Teal', hex: '#76ABAE' }
          ],
          material: '100% Katun Supima Serat Panjang',
          img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=750&q=85',
          desc: 'Kaos esensial berwarna hitam pekat dengan kilau alami serat katun Supima premium dan kerah rib kokoh yang tidak mudah melar.',
          reviews: [
            { user: 'Fajar Nugroho', rating: 5, comment: 'Hitamnya pekat dan adem banget dipakai seharian.' }
          ]
        },
        {
          id: 'PRD05',
          name: 'Kemeja Linen Relaxed Putih',
          category: 'Wanita',
          sizeRange: 'WANITA · XS-XL',
          price: 349000,
          originalPrice: 429000,
          stock: 19,
          rating: 4.9,
          colors: [
            { name: 'Pure White', hex: '#F9F9F9' },
            { name: 'Sand Cream', hex: '#EFE8DD' },
            { name: 'Terracotta', hex: '#FF5722' }
          ],
          material: '55% Linen Eropa, 45% Katun',
          img: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=750&q=85',
          desc: 'Kemeja putih bersih berpotongan relaks dengan tekstur linen alami yang sejuk dan rapi untuk gaya minimalis modern.',
          reviews: [
            { user: 'Aulia Rahma', rating: 5, comment: 'Potongannya jatuh dengan rapi dan warna putihnya bersih.' }
          ]
        },
        {
          id: 'PRD06',
          name: 'Jaket Hoodie Kasual Anak',
          category: 'Anak',
          sizeRange: 'ANAK · 110-160cm',
          price: 239000,
          originalPrice: 289000,
          stock: 18,
          rating: 4.8,
          colors: [
            { name: 'Slate Navy', hex: '#303841' },
            { name: 'Teal Blue', hex: '#76ABAE' },
            { name: 'Warm Cream', hex: '#EFE8DD' }
          ],
          material: '100% Katun French Terry Ringan',
          img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=750&q=85',
          desc: 'Luaran kasual anak berwarna gelap yang ringan, lembut di bagian dalam, serta praktis dipadukan untuk sekolah maupun akhir pekan.',
          reviews: [
            { user: 'Budi Santoso', rating: 5, comment: 'Ringan tapi tetap hangat saat cuaca berangin.' }
          ]
        },
        {
          id: 'PRD07',
          name: 'Sweter Rajut Crew Neck Abu',
          category: 'Pria',
          sizeRange: 'PRIA · S-XL',
          price: 379000,
          originalPrice: null,
          stock: 21,
          rating: 4.8,
          colors: [
            { name: 'Heather Gray', hex: '#8E9297' },
            { name: 'Charcoal Slate', hex: '#303841' },
            { name: 'Warm Cream', hex: '#EFE8DD' }
          ],
          material: '80% Katun Halus, 20% Wol Merino',
          img: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=750&q=85',
          desc: 'Sweter rajut halus berwarna abu-abu heather dengan anyaman rapat yang rapi, memberikan kehangatan ringan tanpa terasa berat.',
          reviews: [
            { user: 'Andi Wijaya', rating: 5, comment: 'Rajutannya halus tidak gatal di kulit dan warna abunya sangat versatile.' }
          ]
        },
        {
          id: 'PRD08',
          name: 'Kardigan Rajut Hangat Terracotta',
          category: 'Wanita',
          sizeRange: 'WANITA · S-XL',
          price: 329000,
          originalPrice: 399000,
          stock: 17,
          rating: 4.9,
          colors: [
            { name: 'Terracotta Rust', hex: '#C85A32' },
            { name: 'Warm Cream', hex: '#EFE8DD' },
            { name: 'Charcoal', hex: '#303841' }
          ],
          material: '65% Katun, 35% Viscose Lembut',
          img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=750&q=85',
          desc: 'Kardigan rajut bernuansa terracotta hangat dengan tekstur lembut yang dapat dicuci dengan mesin dan mudah dipadukan sebagai luaran harian.',
          reviews: [
            { user: 'Clarissa', rating: 5, comment: 'Warnanya hangat dan bikin kulit terlihat cerah, rajutannya juga rapi.' }
          ]
        }
      ],
      cart: [
        { productId: 'PRD01', size: 'M', color: 'Indigo Blue', qty: 1 },
        { productId: 'PRD02', size: 'L', color: 'Warm Cream', qty: 1 }
      ],
      coupons: [
        { code: 'PROMO10', type: 'percent', value: 10, active: true },
        { code: 'FASHION10', type: 'percent', value: 10, active: true },
        { code: 'HEMAT50', type: 'fixed', value: 50000, active: true }
      ],
      userProfile: {
        name: 'Zaid Nashrudin',
        email: 'zaid.nashrudin@student.pens.ac.id',
        phone: '085723312579',
        address: 'Jl. Raya ITS, Keputih, Kec. Sukolilo, Surabaya'
      },
      orders: [
        {
          id: 'ORD-2026-001',
          date: '19 Nov 2026',
          customer: 'Zaid Nashrudin',
          phone: '085723312579',
          itemsSummary: 'Jaket Denim Wash Klasik Pria (Indigo Blue, M x1)',
          method: 'Transfer Bank BCA (VA)',
          total: 414000,
          status: 'Selesai'
        },
        {
          id: 'ORD-2026-002',
          date: '21 Nov 2026',
          customer: 'Zaid Nashrudin',
          phone: '085723312579',
          itemsSummary: 'Sweter Rajut Crew Neck Abu (Heather Gray, L x1)',
          method: 'QRIS / E-Wallet',
          total: 394000,
          status: 'Dikirim'
        },
        {
          id: 'ORD-2026-003',
          date: '22 Nov 2026',
          customer: 'Nadia Putri',
          phone: '085799887766',
          itemsSummary: 'Blazer Tailored Cream Minimalis (Warm Cream, M x1)',
          method: 'Transfer Bank Mandiri',
          total: 514000,
          status: 'Menunggu Verifikasi'
        }
      ]
    };

    const storedState = JSON.parse(localStorage.getItem(STATE_KEY));
    let state = storedState
      ? { ...JSON.parse(JSON.stringify(initialCatalogData)), ...storedState }
      : JSON.parse(JSON.stringify(initialCatalogData));
    state.userProfile = { ...initialCatalogData.userProfile, ...(state.userProfile || {}) };
    state.lastInterestCategory = state.lastInterestCategory || null;

    // Runtime UI States
    let selectedCategory = 'Semua';
    let lastInterestCategory = state.lastInterestCategory;
    let searchKeyword = '';
    let searchInputValue = '';
    let sortMode = 'featured';
    let activePromo = null;
    let currentPdpId = 'PRD01';
    let currentPdpSize = 'M';
    let currentPdpColor = 'Indigo Blue';
    let cardSelectedColors = {};
    let adminOrderFilter = 'Semua';
    let uploadedBase64Image = '';
    let chartInstance = null;
    const promoCouponAdded = !state.coupons.some(coupon => coupon.code.toUpperCase() === 'PROMO10');
    if (promoCouponAdded) {
      state.coupons.unshift({ code: 'PROMO10', type: 'percent', value: 10, active: true });
    }

    // Helper Functions
    function saveState() {
      state.lastInterestCategory = lastInterestCategory;
      try {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));
        return true;
      } catch (error) {
        console.error('Gagal menyimpan data demo ke penyimpanan lokal.', error);
        showToast('Penyimpanan penuh atau tidak tersedia. Hapus beberapa data/gambar lalu coba lagi.');
        return false;
      }
    }

    function rupiah(num) {
      return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
    }

    function showToast(msg) {
      const bodyEl = document.getElementById('uqToastBody');
      const toastEl = document.getElementById('uqToast');
      if (bodyEl && toastEl && window.bootstrap) {
        bodyEl.textContent = msg;
        bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2500 }).show();
      }
    }

    function fallbackSvg(code) {
      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533">
          <rect width="400" height="533" fill="#EFE8DD"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#303841">${code}</text>
        </svg>`
      )}`;
    }

    function resetDemoState() {
      if (!confirm('Atur ulang seluruh data demo ke kondisi awal?')) return;
      localStorage.removeItem(STATE_KEY);
      state = JSON.parse(JSON.stringify(initialCatalogData));
      activePromo = null;
      cardSelectedColors = {};
      selectedCategory = 'Semua';
      lastInterestCategory = null;
      searchKeyword = '';
      saveState();
      renderAllViews();
      showToast('Data demo berhasil diatur ulang ke kondisi awal.');
    }

    // =========================================================================
    // ROLE & PAGE NAVIGATION
    // =========================================================================
    function switchRole(role) {
      const userView = document.getElementById('userStorefrontView');
      const adminView = document.getElementById('adminDashboardView');
      const btnUser = document.getElementById('btnSwitchUser');
      const btnAdmin = document.getElementById('btnSwitchAdmin');

      if (role === 'admin') {
        userView.style.display = 'none';
        adminView.style.display = 'block';
        btnAdmin.className = 'btn btn-light btn-sm py-0 px-2 fw-bold';
        btnUser.className = 'btn btn-outline-light btn-sm py-0 px-2 fw-bold';
        navigateAdmin('dashboard');
      } else {
        adminView.style.display = 'none';
        userView.style.display = 'block';
        btnUser.className = 'btn btn-light btn-sm py-0 px-2 fw-bold';
        btnAdmin.className = 'btn btn-outline-light btn-sm py-0 px-2 fw-bold';
        navigateUser('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function navigateUser(page, scrollToTop = true) {
      document.querySelectorAll('#userStorefrontView .view-section').forEach(sec => sec.classList.remove('active'));
      const target = document.getElementById(`page-user-${page}`);
      if (target) target.classList.add('active');

      // Update mobile bottom nav active state
      document.querySelectorAll('.mobile-nav-item').forEach(btn => btn.classList.remove('active'));
      if (page === 'home') document.getElementById('mNavHome')?.classList.add('active');
      if (page === 'cart') {
        document.getElementById('mNavCart')?.classList.add('active');
        renderCartPage();
      }
      if (page === 'profile') {
        document.getElementById('mNavProfile')?.classList.add('active');
        renderProfileOrders();
      }
      if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function navigateAdmin(section) {
      document.querySelectorAll('.admin-subview').forEach(sec => (sec.style.display = 'none'));
      document.querySelectorAll('.admin-menu-btn').forEach(btn => btn.classList.remove('active'));

      const targetSec = document.getElementById(`admin-sec-${section}`);
      if (targetSec) targetSec.style.display = 'block';
      document.getElementById(`admMenu-${section}`)?.classList.add('active');

      const titles = {
        dashboard: 'Dashboard & Laporan Penjualan',
        products: 'Manajemen Produk',
        orders: 'Manajemen Pesanan',
        discounts: 'Manajemen Diskon & Kupon'
      };
      const titleEl = document.getElementById('adminHeaderTitle');
      if (titleEl) titleEl.textContent = titles[section] || 'Admin Panel';

      if (section === 'dashboard') renderAdminDashboard();
      if (section === 'products') renderAdminProducts();
      if (section === 'orders') renderAdminOrders();
      if (section === 'discounts') renderAdminDiscounts();
    }

    // =========================================================================
    // CATALOG, FILTERING, SORTING & RECOMMENDATION ENGINE
    // =========================================================================
    function selectCategory(cat, shouldScroll = false) {
      selectedCategory = cat;
      if (cat !== 'Semua') {
        lastInterestCategory = cat;
        saveState();
      }

      document.querySelectorAll('[data-cat-nav]').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-cat-nav') === cat);
      });

      document.querySelectorAll('#categoryTabsContainer .cat-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === cat);
      });

      renderCatalog();
      renderRecommended();
      if (shouldScroll) {
        document.getElementById('catalogAnchor')?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function handleSearchInput(val) {
      searchInputValue = val;

      const desktopInp = document.getElementById('desktopSearchInput');
      const mobileInp = document.getElementById('mobileSearchInput');
      if (desktopInp && desktopInp.value !== val) desktopInp.value = val;
      if (mobileInp && mobileInp.value !== val) mobileInp.value = val;
    }

    function handleSearchKeydown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSearchSubmit();
      }
    }

    function handleSearchSubmit() {
      searchKeyword = searchInputValue.trim().toLowerCase();

      const isHomeActive = document
        .getElementById('page-user-home')
        ?.classList.contains('active');
      if (searchKeyword && !isHomeActive) {
        navigateUser('home', false);
      }

      const results = renderCatalog();
      if (!searchKeyword) return;

      requestAnimationFrame(() => {
        const target = results.length
          ? document.getElementById(`catalog-product-${results[0].id}`)
          : null;
        if (target) {
          target.classList.add('search-result-highlight');
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          document.getElementById('catalogAnchor')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }

    function clearSearch() {
      searchInputValue = '';
      searchKeyword = '';
      handleSearchInput('');
      renderCatalog();
    }

    function handleSortChange(val) {
      sortMode = val;
      renderCatalog();
    }

    function buildProductCardHTML(p, recTag = null, contextPrefix = 'cat') {
      const hasSale = p.originalPrice && p.originalPrice > p.price;
      const colors = p.colors || [{ name: 'Charcoal', hex: '#303841' }];
      const activeColorName = cardSelectedColors[p.id] || colors[0].name;
      const colorLabelId = `cardColorLabel-${contextPrefix}-${p.id}`;

      const swatchesHTML = colors.map(c => {
        const isSelected = c.name === activeColorName;
        return `<span class="swatch-dot ${isSelected ? 'selected' : ''}" style="background-color: ${c.hex};" title="${c.name}" onclick="selectCardColor(event, '${p.id}', '${c.name}', '${colorLabelId}')"></span>`;
      }).join('');

      return `
        <div class="col-6 col-md-4 col-lg-3">
          <article ${contextPrefix === 'cat' ? `id="catalog-product-${p.id}"` : ''} class="uq-product-card h-100 d-flex flex-column">
            <div class="uq-img-ratio mb-2" style="cursor: pointer;" onclick="openProductDetail('${p.id}')">
              <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='${fallbackSvg(p.id)}'">
              ${recTag ? `<span class="position-absolute top-0 start-0 bg-ch-teal px-2 py-1 fw-bold text-uppercase" style="font-size: 0.62rem; letter-spacing: 0.05em;">${recTag}</span>` : ''}
              ${p.stock <= 0 ? `<span class="position-absolute bottom-0 start-0 bg-ch-orange px-2 py-1 fw-bold text-uppercase" style="font-size: 0.65rem;">Stok Habis</span>` : ''}
            </div>

            <!-- Color Swatches + Active Color Name -->
            <div class="d-flex flex-wrap align-items-center gap-2 mb-1">
              <div class="d-flex align-items-center gap-1">${swatchesHTML}</div>
              <span id="${colorLabelId}" class="text-muted text-truncate" style="font-size: 0.68rem;">Warna: <strong class="text-ch-charcoal">${activeColorName}</strong></span>
            </div>

            <!-- Gender & Size Micro Label -->
            <div class="text-muted fw-semibold text-uppercase" style="font-size: 0.68rem; letter-spacing: 0.04em;">
              ${p.sizeRange || (p.category.toUpperCase() + ' · S-XL')}
            </div>

            <!-- Product Title (2-line clamp) -->
            <h3 class="uq-title-clamp my-1" style="cursor: pointer;" onclick="openProductDetail('${p.id}')">${p.name}</h3>

            <!-- Price & Rating -->
            <div class="mt-auto tabular-nums">
              ${hasSale ? `
                <div class="price-strike">${rupiah(p.originalPrice)}</div>
                <div class="price-sale">${rupiah(p.price)}</div>
                <div class="limited-tag">Limited Offer</div>
              ` : `
                <div class="price-regular mt-2">${rupiah(p.price)}</div>
              `}
              <div class="d-flex justify-content-between align-items-center mt-1 mb-2 small text-muted" style="font-size: 0.74rem;">
                <span>★ ${p.rating} (${p.reviews.length})</span>
                <span>Stok: ${p.stock}</span>
              </div>
              <button type="button" class="btn btn-uq-outline w-100 py-1" ${p.stock <= 0 ? 'disabled' : ''} onclick="quickAddProduct('${p.id}')">
                + Keranjang
              </button>
            </div>
          </article>
        </div>
      `;
    }

    function selectCardColor(event, prodId, colorName, labelId) {
      event.stopPropagation();
      cardSelectedColors[prodId] = colorName;
      const swatchContainer = event.target.parentElement;
      swatchContainer.querySelectorAll('.swatch-dot').forEach(dot => dot.classList.remove('selected'));
      event.target.classList.add('selected');

      const labelEl = document.getElementById(labelId);
      if (labelEl) {
        labelEl.innerHTML = `Warna: <strong class="text-ch-charcoal">${colorName}</strong>`;
      }
    }

    function renderCatalog() {
      const grid = document.getElementById('mainCatalogGrid');
      const countLabel = document.getElementById('productCountLabel');
      if (!grid) return [];

      let list = [...state.products];

      if (selectedCategory !== 'Semua') {
        list = list.filter(p => p.category === selectedCategory);
      }

      if (searchKeyword) {
        list = list.filter(
          p =>
            p.name.toLowerCase().includes(searchKeyword) ||
            p.id.toLowerCase().includes(searchKeyword) ||
            p.category.toLowerCase().includes(searchKeyword) ||
            (p.desc || '').toLowerCase().includes(searchKeyword) ||
            (p.material || '').toLowerCase().includes(searchKeyword)
        );
      }

      if (sortMode === 'newest') {
        list.reverse();
      } else if (sortMode === 'price-low') {
        list.sort((a, b) => a.price - b.price);
      } else if (sortMode === 'price-high') {
        list.sort((a, b) => b.price - a.price);
      } else if (sortMode === 'rating') {
        list.sort((a, b) => b.rating - a.rating);
      }

      if (countLabel) countLabel.textContent = `${list.length} Produk`;

      if (list.length === 0) {
        grid.innerHTML = `<div class="col-12 text-center py-5 text-muted small bg-white border border-ch">Tidak ditemukan produk yang sesuai dengan pencarianmu.</div>`;
        return list;
      }

      grid.innerHTML = list.map(p => buildProductCardHTML(p, null, 'cat')).join('');
      return list;
    }

    function renderRecommended() {
      const recGrid = document.getElementById('recommendedProductsGrid');
      const reasonTag = document.getElementById('recReasonTag');
      if (!recGrid) return;

      const cartProductIds = new Set(state.cart.map(item => item.productId));
      const availableProducts = state.products.filter(p => !cartProductIds.has(p.id));
      let items = [];
      let cardBadge = 'POPULER';

      if (lastInterestCategory) {
        const matched = availableProducts.filter(p => p.category === lastInterestCategory);
        const others = availableProducts.filter(p => p.category !== lastInterestCategory).sort((a, b) => b.rating - a.rating);
        items = [...matched, ...others].slice(0, 4);
        cardBadge = `MINAT: ${lastInterestCategory.toUpperCase()}`;
        if (reasonTag) reasonTag.textContent = `BERDASARKAN KATEGORI ${lastInterestCategory.toUpperCase()}`;
      } else {
        items = [...availableProducts].sort((a, b) => b.rating - a.rating).slice(0, 4);
        cardBadge = 'REKOMENDASI';
        if (reasonTag) reasonTag.textContent = 'POPULER & RATING TERTINGGI';
      }

      recGrid.innerHTML = items.map(p => buildProductCardHTML(p, cardBadge, 'rec')).join('');
    }

    // =========================================================================
    // PRODUCT DETAIL PAGE (PDP) & REVIEWS
    // =========================================================================
    function openProductDetail(prodId) {
      const p = state.products.find(item => item.id === prodId);
      if (!p) return;

      currentPdpId = prodId;
      lastInterestCategory = p.category;
      saveState();
      const sizes = p.category === 'Anak' ? ['110cm', '120cm', '130cm', '140cm', '150cm'] : ['S', 'M', 'L', 'XL'];
      currentPdpSize = p.category === 'Anak' ? sizes[0] : 'M';
      const colors = p.colors || [{ name: 'Charcoal', hex: '#303841' }];
      currentPdpColor = cardSelectedColors[p.id] || colors[0].name;

      document.getElementById('pdpBreadcrumbCat').textContent = p.category;
      document.getElementById('pdpBreadcrumbTitle').textContent = p.name;
      const imgEl = document.getElementById('pdpImage');
      imgEl.src = p.img;
      imgEl.onerror = () => { imgEl.src = fallbackSvg(p.id); };

      document.getElementById('pdpCodeLabel').textContent = `Kode Produk: ${p.id}`;
      document.getElementById('pdpRatingVal').textContent = p.rating;
      document.getElementById('pdpReviewCountVal').textContent = p.reviews.length;
      document.getElementById('pdpTitle').textContent = p.name;

      const hasSale = p.originalPrice && p.originalPrice > p.price;
      if (hasSale) {
        document.getElementById('pdpPromoArea').style.display = 'block';
        document.getElementById('pdpRegularArea').style.display = 'none';
        document.getElementById('pdpSalePrice').textContent = rupiah(p.price);
        document.getElementById('pdpOrigPrice').textContent = rupiah(p.originalPrice);
      } else {
        document.getElementById('pdpPromoArea').style.display = 'none';
        document.getElementById('pdpRegularArea').style.display = 'block';
        document.getElementById('pdpRegPrice').textContent = rupiah(p.price);
      }

      document.getElementById('pdpShortDesc').textContent = p.desc;
      document.getElementById('pdpMaterialInfo').textContent = p.material || '100% Katun Berkualitas Tinggi';
      document.getElementById('pdpStockCount').textContent = p.stock;
      document.getElementById('pdpQtyField').value = p.stock > 0 ? '1' : '0';

      const addBtn = document.getElementById('pdpAddCartBtn');
      addBtn.disabled = p.stock <= 0;
      addBtn.textContent = p.stock <= 0 ? 'Stok Habis' : 'Tambah ke Keranjang';
      document.getElementById('pdpQtyDecrease').disabled = p.stock <= 0;
      document.getElementById('pdpQtyIncrease').disabled = p.stock <= 0;

      document.getElementById('pdpSelectedColorName').textContent = currentPdpColor;
      document.getElementById('pdpColorSwatches').innerHTML = colors.map(c => `
        <span class="swatch-dot ${c.name === currentPdpColor ? 'selected' : ''}" style="width: 24px; height: 24px; background-color: ${c.hex};"
              onclick="selectPdpColor(this, '${c.name}')" title="${c.name}"></span>
      `).join('');

      document.getElementById('pdpSelectedSizeName').textContent = currentPdpSize;
      document.getElementById('pdpSizeButtons').innerHTML = sizes.map(size => `
        <button type="button" class="uq-size-btn ${size === currentPdpSize ? 'active' : ''}"
                onclick="selectPdpSize(this, '${size}')">${size}</button>
      `).join('');
      const sizeMeasurements = p.category === 'Anak'
        ? [['110cm', '45 cm', '34 cm', '39 cm'], ['120cm', '48 cm', '36 cm', '42 cm'], ['130cm', '51 cm', '38 cm', '45 cm'], ['140cm', '54 cm', '40 cm', '48 cm'], ['150cm', '57 cm', '42 cm', '51 cm']]
        : [['S', '68 cm', '51 cm', '58 cm'], ['M', '70 cm', '54 cm', '60 cm'], ['L', '72 cm', '57 cm', '61.5 cm'], ['XL', '74 cm', '60 cm', '63 cm']];
      document.getElementById('pdpSizeGuideBody').innerHTML = sizeMeasurements.map(row => `
        <tr>${row.map(value => `<td>${value}</td>`).join('')}</tr>
      `).join('');

      renderPdpReviews(p);
      renderRecommended();

      const cartProductIds = new Set(state.cart.map(item => item.productId));
      const similar = state.products.filter(item => item.category === p.category && item.id !== p.id && !cartProductIds.has(item.id)).slice(0, 4);
      document.getElementById('pdpSimilarGrid').innerHTML = similar.map(item => buildProductCardHTML(item, 'SERUPA', 'sim')).join('');

      navigateUser('detail');
    }

    function selectPdpColor(el, colorName) {
      currentPdpColor = colorName;
      cardSelectedColors[currentPdpId] = colorName;
      document.getElementById('pdpSelectedColorName').textContent = colorName;
      document.querySelectorAll('#pdpColorSwatches .swatch-dot').forEach(dot => dot.classList.remove('selected'));
      el.classList.add('selected');
    }

    function selectPdpSize(el, sizeVal) {
      currentPdpSize = sizeVal;
      document.getElementById('pdpSelectedSizeName').textContent = sizeVal;
      document.querySelectorAll('#pdpSizeButtons .uq-size-btn').forEach(btn => btn.classList.remove('active'));
      el.classList.add('active');
    }

    function stepPdpQty(delta) {
      const p = state.products.find(item => item.id === currentPdpId);
      const inp = document.getElementById('pdpQtyField');
      if (!p || p.stock <= 0) {
        inp.value = '0';
        return;
      }
      const maxStock = p.stock;
      let val = parseInt(inp.value, 10) || 1;
      val = Math.min(maxStock, Math.max(1, val + delta));
      inp.value = val;
    }

    function renderPdpReviews(p) {
      const box = document.getElementById('pdpReviewsContainer');
      if (!box) return;
      if (!p.reviews || p.reviews.length === 0) {
        box.innerHTML = `<div class="p-3 border border-ch small text-muted">Belum ada ulasan untuk produk ini.</div>`;
        return;
      }
      box.innerHTML = p.reviews.map(r => `
        <div class="border border-ch p-3 mb-2 bg-white">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <strong class="small">${r.user}</strong>
            <span class="text-ch-orange small">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
          </div>
          <p class="small text-secondary mb-0">${r.comment}</p>
        </div>
      `).join('');
    }

    function handleAddReview(e) {
      e.preventDefault();
      const p = state.products.find(item => item.id === currentPdpId);
      if (!p) return;

      const userName = document.getElementById('revInputName').value.trim();
      const ratingVal = parseInt(document.getElementById('revInputRating').value, 10);
      const commentTxt = document.getElementById('revInputComment').value.trim();

      p.reviews.unshift({ user: userName, rating: ratingVal, comment: commentTxt });
      const avg = p.reviews.reduce((sum, item) => sum + item.rating, 0) / p.reviews.length;
      p.rating = Number(avg.toFixed(1));

      saveState();
      document.getElementById('revInputComment').value = '';
      document.getElementById('pdpRatingVal').textContent = p.rating;
      document.getElementById('pdpReviewCountVal').textContent = p.reviews.length;
      renderPdpReviews(p);
      renderCatalog();
      showToast('Terima kasih! Ulasan produk berhasil ditambahkan.');
    }

    // =========================================================================
    // CART & CHECKOUT
    // =========================================================================
    function quickAddProduct(prodId) {
      const p = state.products.find(item => item.id === prodId);
      if (!p) return;
      const defaultColor = cardSelectedColors[prodId] || ((p.colors && p.colors[0]) ? p.colors[0].name : 'Charcoal');
      insertIntoCart(prodId, p.category === 'Anak' ? '110cm' : 'M', defaultColor, 1);
    }

    function addPdpToCart() {
      const qty = parseInt(document.getElementById('pdpQtyField').value, 10) || 1;
      insertIntoCart(currentPdpId, currentPdpSize, currentPdpColor, qty);
    }

    function insertIntoCart(prodId, size, color, qty) {
      const p = state.products.find(item => item.id === prodId);
      if (!p || p.stock <= 0) {
        showToast('Maaf, stok produk sedang habis.');
        return;
      }

      const existing = state.cart.find(c => c.productId === prodId && c.size === size && c.color === color);
      if (existing) {
        existing.qty = Math.min(p.stock, existing.qty + qty);
      } else {
        state.cart.push({ productId: prodId, size, color, qty: Math.min(p.stock, qty) });
      }

      lastInterestCategory = p.category;
      saveState();
      updateCartBadges();
      renderRecommended();
      showToast(`"${p.name}" (${color}, ${size}) masuk ke keranjang.`);
    }

    function updateCartBadges() {
      const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
      const headerBadge = document.getElementById('headerCartBadge');
      const mobileBadge = document.getElementById('mobileCartBadge');
      if (headerBadge) headerBadge.textContent = totalItems;
      if (mobileBadge) mobileBadge.textContent = totalItems;
    }

    function updateCartItemQty(index, delta) {
      const item = state.cart[index];
      if (!item) return;
      const p = state.products.find(prod => prod.id === item.productId);
      const maxStock = p ? p.stock : 20;

      const nextQty = item.qty + delta;
      if (nextQty <= 0) {
        state.cart.splice(index, 1);
      } else if (nextQty <= maxStock) {
        item.qty = nextQty;
      } else {
        showToast(`Maksimal stok tersedia: ${maxStock} pcs.`);
      }
      saveState();
      updateCartBadges();
      renderCartPage();
      renderRecommended();
    }

    function removeCartItem(index) {
      state.cart.splice(index, 1);
      saveState();
      updateCartBadges();
      renderCartPage();
      renderRecommended();
      showToast('Item dihapus dari keranjang.');
    }

    function applyPromoCode() {
      const codeInput = document.getElementById('promoCodeInput').value.trim().toUpperCase();
      const statusEl = document.getElementById('promoStatusText');
      if (!codeInput) {
        activePromo = null;
        renderCartPage();
        return;
      }

      const found = state.coupons.find(c => c.code.toUpperCase() === codeInput && c.active);
      if (!found) {
        activePromo = null;
        if (statusEl) statusEl.innerHTML = `<span class="text-danger fw-semibold">Kode kupon "${codeInput}" tidak valid atau sudah tidak aktif.</span>`;
        renderCartPage();
        return;
      }

      activePromo = found;
      const desc = found.type === 'percent' ? `${found.value}%` : rupiah(found.value);
      if (statusEl) statusEl.innerHTML = `<span class="text-ch-teal fw-bold">Kupon "${found.code}" diterapkan (Potongan ${desc}).</span>`;
      renderCartPage();
      showToast(`Kupon ${found.code} berhasil diterapkan!`);
    }

    function renderCartPage() {
      const container = document.getElementById('cartItemsContainer');
      if (!container) return;

      if (state.cart.length === 0) {
        container.innerHTML = `
          <div class="border border-ch bg-white p-5 text-center">
            <i class="bi bi-bag-x fs-1 text-muted d-block mb-2"></i>
            <p class="small text-muted mb-3">Keranjang belanjamu masih kosong.</p>
            <button class="btn btn-uq-black btn-sm" onclick="navigateUser('home')">Mulai Belanja</button>
          </div>
        `;
        document.getElementById('cartSubtotalText').textContent = 'Rp 0';
        document.getElementById('cartDiscountText').textContent = '- Rp 0';
        document.getElementById('cartShippingText').textContent = 'Rp 0';
        document.getElementById('cartGrandTotalText').textContent = 'Rp 0';
        return;
      }

      let subtotal = 0;

      container.innerHTML = state.cart.map((item, idx) => {
        const p = state.products.find(prod => prod.id === item.productId);
        if (!p) return '';
        const rowTotal = p.price * item.qty;
        subtotal += rowTotal;

        return `
          <div class="border border-ch bg-white p-3 mb-2 d-flex gap-3 align-items-center tabular-nums">
            <img src="${p.img}" alt="${p.name}" style="width: 68px; height: 90px; object-fit: cover;" class="border border-ch flex-shrink-0" onerror="this.src='${fallbackSvg(p.id)}'">
            <div class="flex-grow-1 min-w-0">
              <div class="d-flex justify-content-between align-items-start gap-2">
                <h6 class="fw-bold small mb-1 text-truncate">${p.name}</h6>
                <button type="button" class="btn btn-link text-muted p-0" onclick="removeCartItem(${idx})" title="Hapus"><i class="bi bi-trash"></i></button>
              </div>
              <div class="small text-muted mb-2" style="font-size: 0.75rem;">Warna: <strong>${item.color}</strong> · Ukuran: <strong>${item.size}</strong></div>
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div class="input-group input-group-sm" style="width: 100px;">
                  <button class="btn btn-uq-outline px-2" type="button" onclick="updateCartItemQty(${idx}, -1)">-</button>
                  <input type="text" class="form-control text-center fw-bold border-ch px-1" value="${item.qty}" readonly>
                  <button class="btn btn-uq-outline px-2" type="button" onclick="updateCartItemQty(${idx}, 1)">+</button>
                </div>
                <div class="fw-bold small text-ch-charcoal">${rupiah(rowTotal)}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      let discount = 0;
      if (activePromo) {
        discount = activePromo.type === 'percent'
          ? Math.round((subtotal * activePromo.value) / 100)
          : Math.min(subtotal, activePromo.value);
      }

      const shipping = subtotal > 0 ? 15000 : 0;
      const grandTotal = Math.max(0, subtotal - discount + shipping);

      document.getElementById('cartSubtotalText').textContent = rupiah(subtotal);
      document.getElementById('cartDiscountText').textContent = `- ${rupiah(discount)}`;
      document.getElementById('cartShippingText').textContent = rupiah(shipping);
      document.getElementById('cartGrandTotalText').textContent = rupiah(grandTotal);
    }

    function submitOrderCheckout(e) {
      e.preventDefault();
      if (state.cart.length === 0) {
        showToast('Keranjang masih kosong. Tambahkan produk terlebih dahulu.');
        return;
      }

      const receiverName = document.getElementById('chkReceiverName').value.trim();
      const receiverPhone = document.getElementById('chkReceiverPhone').value.trim();
      const receiverAddr = document.getElementById('chkReceiverAddress').value.trim();
      const payMethod = document.getElementById('chkPaymentMethod').value;

      let subtotal = 0;
      const summaryParts = [];
      const orderItems = [];

      state.cart.forEach(item => {
        const p = state.products.find(prod => prod.id === item.productId);
        if (p) {
          subtotal += p.price * item.qty;
          p.stock = Math.max(0, p.stock - item.qty);
          summaryParts.push(`${p.name} (${item.color}, ${item.size} x${item.qty})`);
          orderItems.push({ productId: p.id, qty: item.qty, unitPrice: p.price });
        }
      });

      let discount = 0;
      if (activePromo) {
        discount = activePromo.type === 'percent'
          ? Math.round((subtotal * activePromo.value) / 100)
          : Math.min(subtotal, activePromo.value);
      }
      const grandTotal = Math.max(0, subtotal - discount + 15000);

      const newOrderId = `ORD-2026-${String(state.orders.length + 1).padStart(3, '0')}`;
      const todayStr = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

      const newOrder = {
        id: newOrderId,
        date: todayStr,
        customer: receiverName,
        phone: receiverPhone,
        address: receiverAddr,
        items: orderItems,
        itemsSummary: summaryParts.join(', '),
        method: payMethod,
        total: grandTotal,
        status: 'Menunggu Verifikasi'
      };

      state.orders.unshift(newOrder);
      state.cart = [];
      activePromo = null;
      saveState();

      updateCartBadges();
      renderCatalog();
      renderRecommended();
      renderCartPage();

      // Populate Digital Invoice Modal
      document.getElementById('modalInvId').textContent = newOrder.id;
      document.getElementById('modalInvStatus').textContent = newOrder.status;
      document.getElementById('modalInvCustomer').textContent = newOrder.customer;
      document.getElementById('modalInvMethod').textContent = newOrder.method;
      document.getElementById('modalInvItems').textContent = newOrder.itemsSummary;
      document.getElementById('modalInvTotal').textContent = rupiah(newOrder.total);

      const waMsg = encodeURIComponent(
        `Halo Admin, saya ingin mengonfirmasi pesanan:\n` +
        `ID Order: ${newOrder.id}\n` +
        `Nama: ${newOrder.customer}\n` +
        `Item: ${newOrder.itemsSummary}\n` +
        `Metode: ${newOrder.method}\n` +
        `Total: ${rupiah(newOrder.total)}`
      );
      document.getElementById('modalInvWaLink').href = `https://wa.me/6285123664265?text=${waMsg}`;

      const invModal = new bootstrap.Modal(document.getElementById('invoiceDigitalModal'));
      invModal.show();
    }

    function printDigitalInvoice() {
      document.body.classList.add('print-invoice-mode');
      window.addEventListener('afterprint', () => {
        document.body.classList.remove('print-invoice-mode');
      }, { once: true });
      window.print();
    }

    // =========================================================================
    // PROFILE & USER ORDERS
    // =========================================================================
    function updateProfileInfo(e) {
      e.preventDefault();
      state.userProfile = {
        name: document.getElementById('profInputName').value.trim(),
        email: document.getElementById('profInputEmail').value.trim(),
        phone: document.getElementById('profInputPhone').value.trim(),
        address: document.getElementById('profInputAddress').value.trim()
      };
      renderUserProfile();
      if (!saveState()) return;
      showToast('Data profil pengguna berhasil diperbarui.');
    }

    function renderUserProfile() {
      const profile = state.userProfile;
      document.getElementById('profHeaderName').textContent = profile.name;
      document.getElementById('profInputName').value = profile.name;
      document.getElementById('profInputEmail').value = profile.email;
      document.getElementById('profInputPhone').value = profile.phone;
      document.getElementById('profInputAddress').value = profile.address;
      document.getElementById('chkReceiverName').value = profile.name;
      document.getElementById('chkReceiverPhone').value = profile.phone;
      document.getElementById('chkReceiverAddress').value = profile.address;
      document.querySelector('#page-user-profile .bg-ch-teal').textContent = profile.name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part[0].toUpperCase())
        .join('');
    }

    function getStatusBadgeClass(status) {
      if (status === 'Selesai') return 'bg-ch-teal';
      if (status === 'Dikirim') return 'bg-ch-charcoal';
      if (status === 'Diproses') return 'bg-secondary';
      return 'bg-ch-orange';
    }

    function renderProfileOrders() {
      const box = document.getElementById('userOrdersListContainer');
      if (!box) return;

      if (state.orders.length === 0) {
        box.innerHTML = `<div class="border border-ch bg-white p-4 small text-muted">Belum ada riwayat pesanan.</div>`;
        return;
      }

      box.innerHTML = state.orders.map(o => `
        <div class="border border-ch bg-white p-3 mb-2 tabular-nums">
          <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom border-ch pb-2 mb-2 gap-2">
            <div>
              <strong class="small">${o.id}</strong>
              <span class="text-muted small ms-2">${o.date}</span>
            </div>
            <span class="badge ${getStatusBadgeClass(o.status)}">${o.status}</span>
          </div>
          <div class="small text-secondary mb-2">${o.itemsSummary}</div>
          <div class="d-flex justify-content-between align-items-center small">
            <span class="text-muted">${o.method}</span>
            <strong class="text-ch-orange">${rupiah(o.total)}</strong>
          </div>
        </div>
      `).join('');
    }

    // =========================================================================
    // ADMIN DASHBOARD, CRUD PRODUCT (UPLOAD), ORDERS & COUPONS
    // =========================================================================
    function getOrderItems(order) {
      if (Array.isArray(order.items)) return order.items;

      const summary = order.itemsSummary || '';
      return state.products.reduce((items, product) => {
        const productIndex = summary.indexOf(product.name);
        if (productIndex === -1) return items;
        const match = summary.slice(productIndex).match(/x(\d+)\)/i);
        items.push({
          productId: product.id,
          qty: match ? Number(match[1]) : 1,
          unitPrice: product.price
        });
        return items;
      }, []);
    }

    function getOrderMonth(dateValue) {
      const parsed = new Date(dateValue);
      if (!Number.isNaN(parsed.getTime())) return { year: parsed.getFullYear(), month: parsed.getMonth() };

      const parts = String(dateValue).trim().split(/\s+/);
      const monthNumbers = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, Mei: 4, May: 4, Jun: 5,
        Jul: 6, Agu: 7, Aug: 7, Sep: 8, Okt: 9, Oct: 9, Nov: 10, Des: 11, Dec: 11
      };
      const month = monthNumbers[parts[1]];
      const year = Number(parts[2]);
      return month === undefined || !Number.isFinite(year) ? null : { year, month };
    }

    function renderAdminDashboard() {
      const totalRevenue = state.orders.reduce((sum, o) => sum + o.total, 0);
      const avgRating = (
        state.products.reduce((sum, p) => sum + p.rating, 0) / Math.max(1, state.products.length)
      ).toFixed(1);

      document.getElementById('admKpiRevenue').textContent = rupiah(totalRevenue);
      document.getElementById('admKpiOrders').textContent = `${state.orders.length} Order`;
      document.getElementById('admKpiProducts').textContent = `${state.products.length} Item`;
      document.getElementById('admKpiRating').textContent = `${avgRating} ★`;

      const reportBody = document.getElementById('admSalesReportBody');
      if (reportBody) {
        reportBody.innerHTML = state.orders.map(o => `
          <tr>
            <td class="fw-bold">${o.id}</td>
            <td>${o.date}</td>
            <td>${o.customer}</td>
            <td>${o.itemsSummary}</td>
            <td><span class="badge ${getStatusBadgeClass(o.status)}">${o.status}</span></td>
            <td class="fw-bold">${rupiah(o.total)}</td>
          </tr>
        `).join('');
      }

      const categoryRevenue = { Wanita: 0, Pria: 0, Anak: 0 };
      state.orders.forEach(order => {
        getOrderItems(order).forEach(item => {
          const product = state.products.find(candidate => candidate.id === item.productId);
          if (product && Object.prototype.hasOwnProperty.call(categoryRevenue, product.category)) {
            categoryRevenue[product.category] += Number(item.unitPrice || product.price) * Number(item.qty || 0);
          }
        });
      });
      const categorizedRevenue = Object.values(categoryRevenue).reduce((sum, amount) => sum + amount, 0);
      [
        ['Wanita', 'admCategoryWomen'],
        ['Pria', 'admCategoryMen'],
        ['Anak', 'admCategoryKids']
      ].forEach(([category, id]) => {
        const percent = categorizedRevenue ? Math.round(categoryRevenue[category] / categorizedRevenue * 100) : 0;
        document.getElementById(`${id}Percent`).textContent = `${percent}%`;
        document.getElementById(`${id}Bar`).style.width = `${percent}%`;
      });

      const canvas = document.getElementById('uqSalesChart');
      if (canvas && window.Chart) {
        if (chartInstance) chartInstance.destroy();
        const firstMonth = new Date();
        firstMonth.setDate(1);
        firstMonth.setMonth(firstMonth.getMonth() - 5);
        const chartMonths = Array.from({ length: 6 }, (_, index) => {
          const month = new Date(firstMonth);
          month.setMonth(firstMonth.getMonth() + index);
          return month;
        });
        const monthlyRevenue = new Map();
        state.orders.forEach(order => {
          const orderMonth = getOrderMonth(order.date);
          if (!orderMonth) return;
          const key = `${orderMonth.year}-${orderMonth.month}`;
          monthlyRevenue.set(key, (monthlyRevenue.get(key) || 0) + Number(order.total || 0));
        });
        chartInstance = new Chart(canvas, {
          type: 'bar',
          data: {
            labels: chartMonths.map(month => month.toLocaleDateString('id-ID', { month: 'short' })),
            datasets: [{
              label: 'Omzet Bulanan (Rp)',
              data: chartMonths.map(month => monthlyRevenue.get(`${month.getFullYear()}-${month.getMonth()}`) || 0),
              backgroundColor: '#76ABAE',
              borderColor: '#303841',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: '#EFE8DD' } },
              x: { grid: { display: false } }
            }
          }
        });
      }
    }

    function renderAdminProducts() {
      const tbody = document.getElementById('admProductsBody');
      if (!tbody) return;
      tbody.innerHTML = state.products.map(p => `
        <tr>
          <td class="fw-bold">${p.id}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <img src="${p.img}" alt="${p.name}" style="width: 38px; height: 50px; object-fit: cover;" class="border border-ch" onerror="this.src='${fallbackSvg(p.id)}'">
              <span class="fw-semibold">${p.name}</span>
            </div>
          </td>
          <td>${p.category}</td>
          <td><span class="badge ${p.stock > 5 ? 'bg-ch-teal' : 'bg-ch-orange'}">${p.stock} pcs</span></td>
          <td class="fw-bold">${rupiah(p.price)}</td>
          <td>
            <button class="btn btn-uq-outline btn-sm py-0 px-2 me-1" onclick="openAdminProductModal('${p.id}')"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-outline-danger btn-sm py-0 px-2" onclick="deleteProductAdmin('${p.id}')"><i class="bi bi-trash"></i></button>
          </td>
        </tr>
      `).join('');
    }

    function openAdminProductModal(editId = '') {
      uploadedBase64Image = '';
      document.getElementById('admEditProdId').value = editId;
      document.getElementById('admProdFile').value = '';

      const previewImg = document.getElementById('admProdPreviewImg');
      const promptBox = document.getElementById('admProdUploadPrompt');

      if (editId) {
        const p = state.products.find(item => item.id === editId);
        if (!p) return;
        document.getElementById('admProdModalTitle').textContent = `Edit Produk (${p.id})`;
        document.getElementById('admProdCode').value = p.id;
        document.getElementById('admProdCode').readOnly = true;
        document.getElementById('admProdName').value = p.name;
        document.getElementById('admProdCat').value = p.category;
        document.getElementById('admProdStock').value = p.stock;
        document.getElementById('admProdPrice').value = p.price;
        document.getElementById('admProdOrigPrice').value = p.originalPrice || '';
        document.getElementById('admProdDesc').value = p.desc;
        document.getElementById('admProdUrl').value = p.img.startsWith('data:') ? '' : p.img;

        previewImg.src = p.img;
        previewImg.style.display = 'block';
        promptBox.style.display = 'none';
      } else {
        const nextNum = String(state.products.length + 1).padStart(2, '0');
        document.getElementById('admProdModalTitle').textContent = 'Tambah Produk Baru';
        document.getElementById('admProdCode').value = `PRD${nextNum}`;
        document.getElementById('admProdCode').readOnly = false;
        document.getElementById('admProdName').value = '';
        document.getElementById('admProdCat').value = 'Wanita';
        document.getElementById('admProdStock').value = 25;
        document.getElementById('admProdPrice').value = '';
        document.getElementById('admProdOrigPrice').value = '';
        document.getElementById('admProdUrl').value = '';
        document.getElementById('admProdDesc').value = 'Material katun berkualitas tinggi dengan potongan minimalis yang nyaman sepanjang hari.';

        previewImg.src = '';
        previewImg.style.display = 'none';
        promptBox.style.display = 'block';
      }

      new bootstrap.Modal(document.getElementById('adminProductModal')).show();
    }

    function onAdminFileSelected(input) {
      const file = input.files && input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        const image = new Image();
        image.onload = function () {
          const scale = Math.min(1, 600 / image.width);
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(image.width * scale);
          canvas.height = Math.round(image.height * scale);
          const context = canvas.getContext('2d');
          if (!context) {
            showToast('Gambar tidak dapat diproses di browser ini.');
            return;
          }

          try {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            uploadedBase64Image = canvas.toDataURL('image/jpeg', 0.75);
            const previewImg = document.getElementById('admProdPreviewImg');
            previewImg.src = uploadedBase64Image;
            previewImg.style.display = 'block';
            document.getElementById('admProdUploadPrompt').style.display = 'none';
          } catch (error) {
            console.error('Gagal mengompres gambar produk.', error);
            showToast('Gambar gagal dikompres. Coba pilih file gambar lain.');
          }
        };
        image.onerror = function () {
          showToast('File yang dipilih bukan gambar yang dapat dibaca.');
        };
        image.src = ev.target.result;
      };
      reader.onerror = function () {
        showToast('File gambar gagal dibaca.');
      };
      reader.readAsDataURL(file);
    }

    function onAdminUrlTyped(urlVal) {
      if (!urlVal.trim()) return;
      uploadedBase64Image = '';
      const previewImg = document.getElementById('admProdPreviewImg');
      previewImg.src = urlVal.trim();
      previewImg.style.display = 'block';
      document.getElementById('admProdUploadPrompt').style.display = 'none';
    }

    function saveProductFromAdmin(e) {
      e.preventDefault();
      const editId = document.getElementById('admEditProdId').value;
      const code = document.getElementById('admProdCode').value.trim().toUpperCase();
      const name = document.getElementById('admProdName').value.trim();
      const category = document.getElementById('admProdCat').value;
      const stock = parseInt(document.getElementById('admProdStock').value, 10) || 10;
      const price = parseInt(document.getElementById('admProdPrice').value, 10) || 199000;
      const origRaw = document.getElementById('admProdOrigPrice').value;
      const originalPrice = origRaw ? parseInt(origRaw, 10) : null;
      const desc = document.getElementById('admProdDesc').value.trim();
      const typedUrl = document.getElementById('admProdUrl').value.trim();

      if (state.products.some(product => product.id === code && product.id !== editId)) {
        showToast(`Kode produk "${code}" sudah digunakan. Gunakan kode yang berbeda.`);
        return;
      }

      const finalImg = uploadedBase64Image || typedUrl || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=750&q=85';

      if (editId) {
        const existing = state.products.find(p => p.id === editId);
        if (existing) {
          existing.name = name;
          existing.category = category;
          existing.sizeRange = `${category.toUpperCase()} · S-XL`;
          existing.stock = stock;
          existing.price = price;
          existing.originalPrice = originalPrice;
          existing.desc = desc;
          existing.img = finalImg;
        }
        showToast(`Produk ${editId} berhasil diperbarui.`);
      } else {
        state.products.unshift({
          id: code,
          name,
          category,
          sizeRange: `${category.toUpperCase()} · S-XL`,
          price,
          originalPrice,
          stock,
          rating: 5.0,
          colors: [
            { name: 'Charcoal', hex: '#303841' },
            { name: 'Warm Cream', hex: '#EFE8DD' },
            { name: 'Muted Teal', hex: '#76ABAE' }
          ],
          material: '100% Katun Pilihan',
          img: finalImg,
          desc,
          reviews: [{ user: 'Pembeli Pertama', rating: 5, comment: 'Produk baru dengan kualitas bahan sangat baik.' }]
        });
        showToast(`Produk baru "${name}" (${code}) berhasil ditayangkan!`);
      }

      saveState();
      renderAdminProducts();
      renderCatalog();
      renderRecommended();

      const modalEl = document.getElementById('adminProductModal');
      bootstrap.Modal.getInstance(modalEl)?.hide();
    }

    function deleteProductAdmin(prodId) {
      state.products = state.products.filter(p => p.id !== prodId);
      saveState();
      renderAdminProducts();
      renderCatalog();
      renderRecommended();
      showToast(`Produk ${prodId} dihapus dari katalog.`);
    }

    function filterOrdersAdmin(statusFilter, btnEl) {
      adminOrderFilter = statusFilter;
      btnEl.parentElement.querySelectorAll('.cat-tab-btn').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
      renderAdminOrders();
    }

    function renderAdminOrders() {
      const tbody = document.getElementById('admOrdersBody');
      if (!tbody) return;

      const list = adminOrderFilter === 'Semua'
        ? state.orders
        : state.orders.filter(o => o.status === adminOrderFilter);

      if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">Tidak ada pesanan pada kategori status ini.</td></tr>`;
        return;
      }

      tbody.innerHTML = list.map(o => `
        <tr>
          <td class="fw-bold">${o.id}<div class="text-muted fw-normal" style="font-size:0.7rem;">${o.date}</div></td>
          <td>${o.customer}<div class="text-muted" style="font-size:0.7rem;">${o.phone || '-'}</div></td>
          <td>${o.itemsSummary}</td>
          <td>${o.method}</td>
          <td class="fw-bold">${rupiah(o.total)}</td>
          <td><span class="badge ${getStatusBadgeClass(o.status)}">${o.status}</span></td>
          <td>
            <select class="form-select form-select-sm border-ch" style="min-width: 155px;" onchange="changeOrderStatusAdmin('${o.id}', this.value)">
              <option value="Menunggu Verifikasi" ${o.status === 'Menunggu Verifikasi' ? 'selected' : ''}>Menunggu Verifikasi</option>
              <option value="Diproses" ${o.status === 'Diproses' ? 'selected' : ''}>Diproses</option>
              <option value="Dikirim" ${o.status === 'Dikirim' ? 'selected' : ''}>Dikirim</option>
              <option value="Selesai" ${o.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
            </select>
          </td>
        </tr>
      `).join('');
    }

    function changeOrderStatusAdmin(orderId, nextStatus) {
      const target = state.orders.find(o => o.id === orderId);
      if (!target) return;
      target.status = nextStatus;
      saveState();
      renderAdminOrders();
      renderProfileOrders();
      showToast(`Status pesanan ${orderId} diubah menjadi "${nextStatus}".`);
    }

    function createCouponAdmin(e) {
      e.preventDefault();
      const code = document.getElementById('admCouponCode').value.trim().toUpperCase();
      const type = document.getElementById('admCouponType').value;
      const value = parseInt(document.getElementById('admCouponValue').value, 10) || 10;

      state.coupons.unshift({ code, type, value, active: true });
      saveState();
      document.getElementById('admCouponCode').value = '';
      document.getElementById('admCouponValue').value = '';
      renderAdminDiscounts();
      showToast(`Kupon "${code}" berhasil ditambahkan.`);
    }

    function toggleCouponStatus(idx) {
      if (!state.coupons[idx]) return;
      state.coupons[idx].active = !state.coupons[idx].active;
      saveState();
      renderAdminDiscounts();
    }

    function deleteCouponAdmin(idx) {
      state.coupons.splice(idx, 1);
      saveState();
      renderAdminDiscounts();
      showToast('Kupon promo dihapus.');
    }

    function renderAdminDiscounts() {
      const tbody = document.getElementById('admCouponsBody');
      if (!tbody) return;
      tbody.innerHTML = state.coupons.map((c, idx) => `
        <tr>
          <td class="fw-bold">${c.code}</td>
          <td>${c.type === 'percent' ? c.value + '%' : rupiah(c.value)}</td>
          <td>
            <div class="form-check form-switch mb-0">
              <input class="form-check-input" type="checkbox" ${c.active ? 'checked' : ''} onchange="toggleCouponStatus(${idx})">
              <label class="form-check-label small">${c.active ? 'Aktif' : 'Nonaktif'}</label>
            </div>
          </td>
          <td>
            <button class="btn btn-outline-danger btn-sm py-0 px-2" onclick="deleteCouponAdmin(${idx})"><i class="bi bi-trash"></i></button>
          </td>
        </tr>
      `).join('');
    }

    function renderAllViews() {
      renderUserProfile();
      renderCatalog();
      renderRecommended();
      updateCartBadges();
      renderCartPage();
      renderProfileOrders();
    }

    document.addEventListener('DOMContentLoaded', () => {
      if (promoCouponAdded) saveState();
      renderAllViews();
    });
