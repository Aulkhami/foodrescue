// FoodRescue Consumer App State
function formatRupiah(amount) {
  return "Rp " + Math.round(amount).toLocaleString("id-ID");
}

function formatRupiahAbbr(amount) {
  if (amount >= 1000) {
    return "Rp " + Math.round(amount / 1000) + "rb";
  }
  return "Rp " + Math.round(amount);
}

const state = {
  isAuthenticated: false,
  currentView: "explore", // 'explore', 'cart', 'checkout', 'impact', 'orders', 'profile', 'success', 'partner-detail', 'food-detail'
  searchQuery: "",
  budgetLimit: 50000,
  selectedCategory: "all",
  selectedPartner: null,
  selectedFoodItem: null,

  // Notifications State
  notifications: [
    {
      id: "n-1",
      title: "Pesanan Siap Diambil!",
      desc: "Pesanan Anda #FR-8291 di Sunrise Bakehouse siap untuk diambil sendiri.",
      time: "Baru saja",
      read: false,
      icon: "shopping-bag",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "n-2",
      title: "Misi Baru Tersedia!",
      desc: 'Misi baru "Selamatkan 5 makanan minggu ini" telah dimulai. Dapatkan koin bonus!',
      time: "2 jam lalu",
      read: true,
      icon: "compass",
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: "n-3",
      title: "Lencana Baru Terbuka!",
      desc: 'Selamat! Anda telah membuka lencana "Juara CO2".',
      time: "1 hari lalu",
      read: true,
      icon: "award",
      color: "text-amber-500 bg-amber-50",
    },
  ],

  // User Profile
  user: {
    name: "Alex",
    email: "example@gmail.com",
    coins: 1250,
    co2Saved: 12.0, // kg
    mealsRescued: 24,
    moneySaved: 500000, // Rp
    address: "Gang Hijau No. 42, Sukajadi, Bandung 40162",
    favoritePartners: ["partner-1"], // Default favorite partner
  },

  // Cart State
  cart: [],

  // Payment Options
  selectedPayment: "ecopay", // 'ecopay', 'card', 'cod'
  ecopayBalance: 150000,

  // Ongoing/Past Orders
  orders: [
    {
      id: "FR-4829",
      partnerName: "Luigi's Artisanal Bakery",
      itemName: "Kotak Pizza Misteri",
      itemCount: 2,
      price: 25000,
      status: "ongoing",
      expiresIn: "44m 58s",
      distance: "jarak 0,6 km",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
      items: [
        { name: "Kotak Pizza Misteri", quantity: 2, price: 12500 }
      ],
    },
    {
      id: "FR-8291",
      partnerName: "Sunrise Bakehouse",
      itemName: "Kotak Kue Akhir Hari",
      itemCount: 1,
      price: 15000,
      status: "ongoing",
      expiresIn: "Siap Diambil",
      distance: "jarak 1,9 km",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
      items: [
        { name: "Kotak Kue Akhir Hari", quantity: 1, price: 15000 }
      ],
    },
    {
      id: "FR-1279",
      partnerName: "Urban Greens",
      itemName: "Mangkuk Salad Superfood",
      itemCount: 1,
      price: 15000,
      status: "completed",
      date: "24 Okt 2023",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
      items: [
        { name: "Mangkuk Salad Superfood", quantity: 1, price: 15000 }
      ],
    },
    {
      id: "FR-1102",
      partnerName: "The Vegan Joint",
      itemName: "Eco-Burger & Kentang Goreng Manis",
      itemCount: 1,
      price: 26500,
      status: "completed",
      date: "21 Okt 2023",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
      items: [
        { name: "Eco-Burger & Kentang Goreng Manis", quantity: 1, price: 26500 }
      ],
    },
  ],

  // Gamification Quests
  quests: [
    {
      id: "q-1",
      title: "Selamatkan 5 makanan minggu ini",
      description:
        "Kumpulkan 5 kotak penyelamatan untuk mengurangi pemborosan makanan.",
      progress: 3,
      target: 5,
      reward: "200 Koin",
      completed: false,
    },
    {
      id: "q-2",
      title: "Masuk Hijau Harian",
      description: "Buka aplikasi setiap hari untuk menemukan mitra terdekat.",
      progress: 1,
      target: 1,
      reward: "20 Koin",
      completed: true,
    },
    {
      id: "q-3",
      title: "Hemat 15kg CO2",
      description: "Pencapaian total dampak ekologis.",
      progress: 12,
      target: 15,
      reward: "500 Koin + Lencana Eco",
      completed: false,
    },
  ],

  // Badges Grid
  badges: [
    {
      id: "b-1",
      name: "Pahlawan Tanpa Sampah",
      icon: "🍃",
      desc: "Terbuka: Menyelamatkan lebih dari 10 makanan sisa!",
      unlocked: true,
    },
    {
      id: "b-2",
      name: "Penyelamat Kue",
      icon: "🥐",
      desc: "Terbuka: Menyelamatkan kue 5 kali!",
      unlocked: true,
    },
    {
      id: "b-3",
      name: "Juara CO2",
      icon: "🌍",
      desc: "Terbuka: Menyelamatkan 10kg emisi CO2!",
      unlocked: true,
    },
    {
      id: "b-4",
      name: "Penyelamat Pagi",
      icon: "🌅",
      desc: "Menyelamatkan makanan sebelum jam 09.00",
      unlocked: false,
    },
    {
      id: "b-5",
      name: "Duta Eco",
      icon: "🎖️",
      desc: "Mengumpulkan 2.000 Koin Eco",
      unlocked: false,
    },
    {
      id: "b-6",
      name: "Pelindung Bumi",
      icon: "🛡️",
      desc: "Selesaikan 10 misi",
      unlocked: false,
    },
  ],

  // Blind Box Tap Interaction
  blindBox: {
    tapsRemaining: 3,
    state: "closed", // 'closed', 'shaking', 'revealed'
    revealedItem: null,
  },
};

// Partners Mock Data
const partners = [
  {
    id: "partner-1",
    name: "Sunrise Bakehouse",
    address: "122 Baker St, New York",
    lat: 40.7259,
    lng: -73.993,
    rating: 4.8,
    distance: "0.3 mil",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
    description:
      "Toko roti lokal artisanal yang berkomitmen pada zero waste. Spesialisasi dalam sourdough organik, kue kering, dan roti tawar.",
    tags: ["Toko Roti", "Vegetarian"],
  },
  {
    id: "partner-2",
    name: "Green Valley Grocers",
    address: "45 Orchard Dr, New York",
    lat: 40.729,
    lng: -73.997,
    rating: 4.6,
    distance: "0.8 mil",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    description:
      "Pasar bahan makanan lokal segar yang menyelamatkan bundel hasil tani tidak sempurna dan sayuran organik kemasan.",
    tags: ["Sayuran", "Organik"],
  },
  {
    id: "partner-3",
    name: "Green Bean Cafe",
    address: "88 Commerce St, New York",
    lat: 40.723,
    lng: -74.001,
    rating: 4.7,
    distance: "1.2 mil",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
    description:
      "Kedai kopi dan dapur ramah lingkungan yang menyelamatkan mangkuk sarapan, kue kering, dan mangkuk biji-bijian makan siang setiap hari.",
    tags: ["Makanan Berat", "Kopi"],
  },
  {
    id: "partner-4",
    name: "Luigi's Artisanal Bakery",
    address: "12 Bleecker St, New York",
    lat: 40.7275,
    lng: -73.9902,
    rating: 4.9,
    distance: "0.4 mil",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
    description:
      "Toko roti dan tempat makan Italia yang menawarkan roti lapis segar, loyang pizza, dan kotak manis akhir hari.",
    tags: ["Toko Roti", "Pizza"],
  },
];

// Food Items Catalog
const catalog = [
  {
    id: "item-1",
    name: "Kotak Kue Akhir Hari",
    partnerId: "partner-1",
    partnerName: "Sunrise Bakehouse",
    price: 15000,
    originalPrice: 60000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    freshnessBadge: "Baru Dipanggang Hari Ini",
    freshnessClass: "bg-emerald-50 text-emerald-800 border-emerald-100",
    stockLeft: 3,
    category: "bakery",
    co2Reduction: 0.9,
    pickupWindow: "Ambil sebelum jam 18:00",
  },
  {
    id: "item-2",
    name: "Bundel Sayuran Tidak Sempurna",
    partnerId: "partner-2",
    partnerName: "Green Valley Grocers",
    price: 20000,
    originalPrice: 80000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
    freshnessBadge: "Hasil Tani Organik Segar",
    freshnessClass: "bg-emerald-50 text-emerald-800 border-emerald-100",
    stockLeft: 1,
    category: "veggies",
    co2Reduction: 1.5,
    pickupWindow: "Ambil sebelum jam 19:30",
  },
  {
    id: "item-3",
    name: "Mangkuk Biji-bijian Sisa",
    partnerId: "partner-3",
    partnerName: "Green Bean Cafe",
    price: 12000,
    originalPrice: 45000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
    freshnessBadge: "Disiapkan 2 jam lalu",
    freshnessClass: "bg-amber-50 text-amber-800 border-amber-100",
    stockLeft: 4,
    category: "meals",
    co2Reduction: 0.8,
    pickupWindow: "Ambil sebelum jam 16:00",
  },
  {
    id: "item-4",
    name: "Bundel Roti Artisanal",
    partnerId: "partner-1",
    partnerName: "Sunrise Bakehouse",
    price: 15000,
    originalPrice: 50000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
    freshnessBadge: "Sourdough & Baguette Segar",
    freshnessClass: "bg-emerald-50 text-emerald-800 border-emerald-100",
    stockLeft: 2,
    category: "bakery",
    co2Reduction: 1.1,
    pickupWindow: "Ambil sebelum jam 18:00",
  },
  {
    id: "item-5",
    name: "Kotak Pizza Sisa",
    partnerId: "partner-4",
    partnerName: "Luigi's Artisanal Bakery",
    price: 25000,
    originalPrice: 90000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    freshnessBadge: "Potongan Pizza Hangat",
    freshnessClass: "bg-emerald-50 text-emerald-800 border-emerald-100",
    stockLeft: 2,
    category: "meals",
    co2Reduction: 1.4,
    pickupWindow: "Ambil sebelum jam 20:00",
  },
];

// Leaflet Map instances
let map = null;
let markers = [];
let userMarker = null;

let loginMap = null;
let loginMarker = null;
window.loginSelectedLat = 40.7265;
window.loginSelectedLng = -73.995;
window.lastGeocodedAddress = "";

let profileEditMap = null;
let profileEditMarker = null;
window.profileSelectedLat = 40.7265;
window.profileSelectedLng = -73.995;
window.lastGeocodedProfileAddress = "";

let routeMap = null;
let routePolyline = null;
let routeUserMarker = null;
let routePartnerMarker = null;
window.activeTrackOrder = null;
window.activeTrackPartner = null;
window.routeOriginMode = "saved";
window.liveRouteLat = null;
window.liveRouteLng = null;


// DOM References & Render Controllers
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  setupNavEventListeners();
  setupSearchAndFilters();
  setupMap();
  setupNotificationDropdown();

  // Check localStorage for logged-in user
  const savedUser = localStorage.getItem("foodrescue_user");
  if (savedUser) {
    try {
      state.user = JSON.parse(savedUser);
      if (!state.user.favoritePartners) {
        state.user.favoritePartners = [];
      }
      state.isAuthenticated = true;
      updateUserDynamicElements();
      updateUserMapMarker();
      switchView("explore");
    } catch (e) {
      localStorage.removeItem("foodrescue_user");
      state.isAuthenticated = false;
      switchView("login");
    }
  } else {
    state.isAuthenticated = false;
    switchView("login");
  }
}

function setupNotificationDropdown() {
  const bellBtn = document.getElementById("bell-btn");
  const dropdown = document.getElementById("notif-dropdown");
  const markReadBtn = document.getElementById("mark-read-btn");

  if (bellBtn && dropdown) {
    bellBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
      renderNotifications();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !dropdown.contains(e.target) &&
        e.target !== bellBtn &&
        !bellBtn.contains(e.target)
      ) {
        dropdown.classList.add("hidden");
      }
    });
  }

  if (markReadBtn) {
    markReadBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      markAllNotifsAsRead();
    });
  }

  updateBellDot();
}

function updateBellDot() {
  const bellDot = document.getElementById("bell-dot");
  if (bellDot) {
    const unreadCount = state.notifications.filter((n) => !n.read).length;
    if (unreadCount > 0) {
      bellDot.classList.remove("hidden");
    } else {
      bellDot.classList.add("hidden");
    }
  }
}

function renderNotifications() {
  const container = document.getElementById("notif-list");
  if (!container) return;

  if (state.notifications.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-gray-400">
        <i data-lucide="bell-off" class="w-8 h-8 mx-auto mb-2 text-gray-300"></i>
        <p class="text-xs font-semibold">Tidak ada notifikasi baru</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = state.notifications
    .map(
      (n) => `
    <div onclick="clickNotification('${n.id}')" class="p-3 flex items-start gap-3 hover:bg-gray-50/50 transition-colors cursor-pointer ${
      n.read ? "" : "bg-emerald-50/10"
    }">
      <div class="p-2 rounded-xl flex-shrink-0 ${
        n.color || "text-gray-500 bg-gray-50"
      }">
        <i data-lucide="${n.icon || "bell"}" class="w-4 h-4"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-baseline">
          <h4 class="font-bold text-xs text-gray-900 truncate leading-snug">${
            n.title
          }</h4>
          <span class="text-[9px] text-gray-400 font-semibold whitespace-nowrap ml-2">${
            n.time
          }</span>
        </div>
        <p class="text-[10px] text-gray-500 leading-normal mt-0.5">${n.desc}</p>
      </div>
    </div>
  `,
    )
    .join("");

  lucide.createIcons();
}

window.clickNotification = function (notifId) {
  const notif = state.notifications.find((n) => n.id === notifId);
  if (!notif) return;

  // Mark as read
  notif.read = true;
  updateBellDot();
  renderNotifications();

  // Close dropdown
  const dropdown = document.getElementById("notif-dropdown");
  if (dropdown) {
    dropdown.classList.add("hidden");
  }

  // Navigate based on icon/category type
  if (
    notif.icon === "shopping-bag" ||
    notif.icon === "check-circle" ||
    notif.icon === "package" ||
    notif.icon === "gift"
  ) {
    switchView("orders");
  } else if (
    notif.icon === "compass" ||
    notif.icon === "award" ||
    notif.icon === "leaf"
  ) {
    switchView("impact");
  }
};

window.markAllNotifsAsRead = function () {
  state.notifications.forEach((n) => (n.read = true));
  updateBellDot();
  renderNotifications();
};

// Global Nav & Screen Controllers
function setupNavEventListeners() {
  const tabs = ["explore", "orders", "impact", "profile"];

  tabs.forEach((tab) => {
    const btn = document.getElementById(`nav-${tab}`);
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switchView(tab);
      });
    }
  });

  // Floating Cart Icon
  document.getElementById("floating-cart-btn").addEventListener("click", () => {
    switchView("cart");
  });
}

function updateFloatingCart() {
  const floatingCart = document.getElementById("floating-cart-btn");
  if (!floatingCart) return;

  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const showViews = ["explore", "food-detail", "partner-detail"];

  if (showViews.includes(state.currentView) && count > 0) {
    if (floatingCart.classList.contains("hidden")) {
      floatingCart.classList.remove("hidden");
      floatingCart.classList.add("animate-cart-bounce");
      setTimeout(() => {
        floatingCart.classList.remove("animate-cart-bounce");
      }, 550);
    }

    if (state.currentView == "food-detail") {
      floatingCart.setAttribute("style", "bottom: 9rem;");
    } else {
      floatingCart.removeAttribute("style");
    }

    // Update count text
    const badgeCount = document.getElementById("cart-badge-count");
    if (badgeCount) {
      badgeCount.innerText = `${count} Barang`;
    }

    // Calculate and update subtotal price
    const subtotal = state.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const badgeTotal = document.getElementById("cart-badge-total");
    if (badgeTotal) {
      badgeTotal.innerText = formatRupiah(subtotal);
    }
  } else {
    floatingCart.classList.add("hidden");
  }
}

function switchView(viewName, params = {}) {
  // If not authenticated and trying to go to any page other than login, redirect to login
  if (!state.isAuthenticated && viewName !== "login") {
    viewName = "login";
  }

  state.currentView = viewName;
  window.scrollTo(0, 0);

  // Hide all screens
  const screens = document.querySelectorAll(".app-screen");
  screens.forEach((s) => s.classList.add("hidden"));

  // Show active screen
  const activeScreen = document.getElementById(`screen-${viewName}`);
  if (activeScreen) {
    activeScreen.classList.remove("hidden");
    // Scroll to top
    activeScreen.scrollTop = 0;
  }

  // Manage header and nav visibility for login page
  const header = document.getElementById("app-header");
  const nav = document.getElementById("app-nav");
  if (viewName === "login") {
    if (header) header.classList.add("hidden");
    if (nav) nav.classList.add("hidden");
    if (window.initLoginMap) {
      window.initLoginMap();
    }
  } else {
    if (header) header.classList.remove("hidden");
    if (nav) nav.classList.remove("hidden");

    if (viewName === "explore" && map) {
      setTimeout(() => {
        map.invalidateSize();
        updateUserMapMarker();
        updateMapMarkers();
      }, 150);
    }

    if (viewName === "order-route" && window.initRouteMap) {
      window.initRouteMap();
    }
  }

  // Manage details parameters
  if (viewName === "partner-detail") {
    state.selectedPartner = partners.find((p) => p.id === params.partnerId);
    renderPartnerDetail();
  } else if (viewName === "food-detail") {
    state.selectedFoodItem = catalog.find((i) => i.id === params.itemId);
    renderFoodDetail();
  }

  // Update Bottom Nav active highlights
  const tabIds = ["explore", "orders", "impact", "profile"];
  tabIds.forEach((tab) => {
    const btn = document.getElementById(`nav-${tab}`);
    const icon = btn.querySelector(".nav-icon");
    const label = btn.querySelector(".nav-label");

    if (
      tab === viewName ||
      (viewName === "partner-detail" && tab === "explore") ||
      (viewName === "food-detail" && tab === "explore")
    ) {
      icon.setAttribute(
        "class",
        icon.getAttribute("class").replace("text-gray-400", "text-emerald-600"),
      );
      label.className =
        "nav-label text-[10px] font-semibold text-emerald-600 transition-colors";
    } else {
      icon.setAttribute(
        "class",
        icon.getAttribute("class").replace("text-emerald-600", "text-gray-400"),
      );
      label.className =
        "nav-label text-[10px] font-semibold text-gray-400 transition-colors";
    }
  });

  // Floating Cart Visibility
  updateFloatingCart();

  // Trigger map resize if switching back to explore
  if (viewName === "explore" && map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }

  renderAll();
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById("search-bar");
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderExploreCatalog();
    updateMapMarkers();
  });

  // Budget Slider
  const slider = document.getElementById("budget-slider");
  const sliderVal = document.getElementById("budget-value");
  slider.addEventListener("input", (e) => {
    state.budgetLimit = parseFloat(e.target.value);
    sliderVal.innerText = formatRupiah(state.budgetLimit);
    renderExploreCatalog();
    updateMapMarkers();
  });

  // Category Badges
  const badges = document.querySelectorAll(".category-badge");
  badges.forEach((badge) => {
    badge.addEventListener("click", () => {
      badges.forEach((b) => {
        b.classList.remove("bg-emerald-600", "text-white");
        b.classList.add(
          "bg-white",
          "text-gray-600",
          "border",
          "border-gray-200",
        );
      });
      badge.classList.remove(
        "bg-white",
        "text-gray-600",
        "border",
        "border-gray-200",
      );
      badge.classList.add("bg-emerald-600", "text-white");

      state.selectedCategory = badge.dataset.category;
      renderExploreCatalog();
      updateMapMarkers();
    });
  });
}

function updatePartnerCoordinates() {
  let userLat = (state.user && state.user.lat) || 40.7265;
  let userLng = (state.user && state.user.lng) || -73.995;

  if (
    window.exploreLocationMode === "live" &&
    window.liveUserLat &&
    window.liveUserLng
  ) {
    userLat = window.liveUserLat;
    userLng = window.liveUserLng;
  }

  const offsets = [
    { id: "partner-1", latOffset: -0.0006, lngOffset: 0.002 },
    { id: "partner-2", latOffset: 0.0025, lngOffset: -0.002 },
    { id: "partner-3", latOffset: -0.0035, lngOffset: -0.006 },
    { id: "partner-4", latOffset: 0.001, lngOffset: 0.0048 },
  ];

  offsets.forEach((off) => {
    const partner = partners.find((p) => p.id === off.id);
    if (partner) {
      partner.lat = userLat + off.latOffset;
      partner.lng = userLng + off.lngOffset;
    }
  });
}

// Leaflet Map Integration
function setupMap() {
  updatePartnerCoordinates();

  const userLat = (state.user && state.user.lat) || 40.7265;
  const userLng = (state.user && state.user.lng) || -73.995;

  // Center map around user coordinates
  map = L.map("map", {
    zoomControl: false,
    attributionControl: false,
  }).setView([userLat, userLng], 15);

  // Style with beautiful Stadia Alidade Smooth or OpenStreetMap tiles
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
    },
  ).addTo(map);

  // Add User Location Pin
  updateUserMapMarker();

  // Load Partner Markers
  updateMapMarkers();
}

function updateUserMapMarker() {
  if (!map) return;

  updatePartnerCoordinates();

  let userLat = (state.user && state.user.lat) || 40.7265;
  let userLng = (state.user && state.user.lng) || -73.995;

  if (
    window.exploreLocationMode === "live" &&
    window.liveUserLat &&
    window.liveUserLng
  ) {
    userLat = window.liveUserLat;
    userLng = window.liveUserLng;
  }

  map.setView([userLat, userLng], map.getZoom() || 15);

  if (userMarker) {
    userMarker.setLatLng([userLat, userLng]);
  } else {
    const userIcon = L.divIcon({
      className: "custom-marker",
      html: '<div class="marker-user"></div>',
      iconSize: [20, 20],
    });
    userMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(map);
  }
}

function updateMapMarkers() {
  if (!map) return;

  // Clear old markers
  markers.forEach((m) => map.removeLayer(m));
  markers = [];

  // Filter partners based on search queries and categories
  const activeItems = getFilteredItems();
  const visiblePartnerIds = [
    ...new Set(activeItems.map((item) => item.partnerId)),
  ];

  partners.forEach((partner) => {
    if (!visiblePartnerIds.includes(partner.id)) return;

    // Find lowest priced item for this partner
    const partnerItems = activeItems.filter(
      (item) => item.partnerId === partner.id,
    );
    if (partnerItems.length === 0) return;
    const lowestPrice = Math.min(...partnerItems.map((i) => i.price));

    const priceMarker = L.divIcon({
      className: "custom-marker",
      html: `<div class="marker-label">${formatRupiahAbbr(lowestPrice)}</div>`,
      iconSize: [70, 32],
    });

    const marker = L.marker([partner.lat, partner.lng], {
      icon: priceMarker,
    }).addTo(map);

    // Clicking a marker filters search list to that partner or shows Partner Detail
    marker.on("click", () => {
      switchView("partner-detail", { partnerId: partner.id });
    });

    markers.push(marker);
  });
}

// Filter Function
function getFilteredItems() {
  const favorites = state.user?.favoritePartners || [];
  return catalog.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(state.searchQuery) ||
      item.partnerName.toLowerCase().includes(state.searchQuery);
    const matchesBudget = item.price <= state.budgetLimit;
    
    let matchesCategory = false;
    if (state.selectedCategory === "all") {
      matchesCategory = true;
    } else if (state.selectedCategory === "favorites") {
      matchesCategory = favorites.includes(item.partnerId);
    } else {
      matchesCategory = item.category === state.selectedCategory;
    }

    return matchesSearch && matchesBudget && matchesCategory;
  });
}

// Render Controllers
function renderAll() {
  if (state.currentView === "explore") {
    renderExploreCatalog();
  } else if (state.currentView === "cart") {
    renderCart();
  } else if (state.currentView === "checkout") {
    renderCheckout();
  } else if (state.currentView === "impact") {
    renderImpact();
  } else if (state.currentView === "orders") {
    renderOrders();
  } else if (state.currentView === "profile") {
    renderProfile();
  }
}

// Explore / Catalog rendering
function renderExploreCatalog() {
  const container = document.getElementById("surplus-catalog");
  const items = getFilteredItems();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-8">
        <div class="text-4xl">🔍</div>
        <p class="text-gray-500 font-medium mt-2">Tidak ada item makanan yang cocok dengan filter Anda.</p>
        <button onclick="resetFilters()" class="text-emerald-600 font-semibold text-sm mt-1 underline">Atur Ulang Filter</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map(
      (item) => {
        const isFavoritePartner = state.user?.favoritePartners && state.user.favoritePartners.includes(item.partnerId);
        return `
    <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative flex flex-col cursor-pointer" onclick="switchView('food-detail', { itemId: '${item.id}' })">
      <div class="relative h-32 w-full">
        <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover">
        <div class="absolute top-2 left-2 ${item.freshnessClass} px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm border border-white/20">
          ${item.freshnessBadge}
        </div>
        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[10px] font-medium">
          ${item.pickupWindow}
        </div>
      </div>
      <div class="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">${item.partnerName}</span>
            ${isFavoritePartner ? `<span class="text-red-500 text-[10px]" title="Mitra Favorit">❤️</span>` : ""}
          </div>
          <h3 class="font-bold text-gray-900 text-sm leading-tight mt-0.5 line-clamp-1">${item.name}</h3>
          
          <div class="flex items-center mt-1">
            <span class="text-yellow-400 text-xs">★</span>
            <span class="text-xs text-gray-600 font-medium ml-1">${item.rating}</span>
            <span class="text-[10px] text-gray-400 ml-1">(5)</span>
            <span class="text-[10px] text-emerald-600 font-bold ml-auto">${item.stockLeft} left</span>
          </div>
        </div>
        
        <div class="flex items-baseline justify-between mt-3 pt-2 border-t border-gray-50">
          <div>
            <span class="text-xs text-gray-400 line-through">${formatRupiah(item.originalPrice)}</span>
            <span class="text-base font-bold text-emerald-600 ml-1">${formatRupiah(item.price)}</span>
          </div>
          <button onclick="event.stopPropagation(); addItemToCart('${item.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-1.5 shadow-sm transition-transform active:scale-95 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
      }
    )
    .join("");
}

function resetFilters() {
  document.getElementById("search-bar").value = "";
  document.getElementById("budget-slider").value = 100000;
  document.getElementById("budget-value").innerText = "Rp 100.000";
  state.searchQuery = "";
  state.budgetLimit = 100000;
  state.selectedCategory = "all";

  const badges = document.querySelectorAll(".category-badge");
  badges.forEach((b) => {
    b.classList.remove("bg-emerald-600", "text-white");
    b.classList.add("bg-white", "text-gray-600", "border", "border-gray-200");
    if (b.dataset.category === "all") {
      b.classList.remove(
        "bg-white",
        "text-gray-600",
        "border",
        "border-gray-200",
      );
      b.classList.add("bg-emerald-600", "text-white");
    }
  });

  renderExploreCatalog();
  updateMapMarkers();
}

// Partner Details Screen
function renderPartnerDetail() {
  const p = state.selectedPartner;
  if (!p) return;

  const header = document.getElementById("partner-header");
  const details = document.getElementById("partner-details-container");

  const isFavorite = state.user?.favoritePartners && state.user.favoritePartners.includes(p.id);

  header.innerHTML = `
    <button onclick="switchView('explore')" class="text-gray-600 hover:text-gray-900 flex items-center gap-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <h2 class="font-bold text-gray-900 text-lg flex-1 text-center">${p.name}</h2>
    <button onclick="toggleFavoritePartner('${p.id}')" class="text-gray-400 hover:text-red-500 transition-colors flex items-center justify-center p-1 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}" fill="${isFavorite ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  `;

  // Find partner's items
  const partnerItems = catalog.filter((item) => item.partnerId === p.id);
  const itemsHtml = partnerItems
    .map(
      (item) => `
    <div class="bg-white rounded-xl p-3 border border-gray-100 flex gap-3 shadow-sm" onclick="switchView('food-detail', { itemId: '${item.id}' })">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-lg object-cover">
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-sm text-gray-900 leading-tight">${item.name}</h4>
          <span class="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block">${item.freshnessBadge}</span>
        </div>
        <div class="flex justify-between items-baseline mt-2">
          <div>
            <span class="text-xs text-gray-400 line-through">${formatRupiah(item.originalPrice)}</span>
            <span class="text-sm font-bold text-emerald-600 ml-1">${formatRupiah(item.price)}</span>
          </div>
          <button onclick="event.stopPropagation(); addItemToCart('${item.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-1 shadow-sm transition-transform active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  details.innerHTML = `
    <div class="relative h-44 w-full">
      <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div class="absolute bottom-4 left-4 right-4 text-white">
        <h3 class="text-xl font-bold font-heading">${p.name}</h3>
        <p class="text-xs text-gray-200 mt-1">${p.address}</p>
      </div>
    </div>
    
    <div class="p-4 space-y-4">
      <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-around text-center">
        <div>
          <span class="text-emerald-600 text-lg font-bold">★ ${p.rating}</span>
          <span class="block text-[10px] text-gray-400 font-semibold uppercase">Penilaian</span>
        </div>
        <div class="border-l border-gray-100 h-8"></div>
        <div>
          <span class="text-gray-900 text-lg font-bold">${p.distance}</span>
          <span class="block text-[10px] text-gray-400 font-semibold uppercase">Jarak</span>
        </div>
        <div class="border-l border-gray-100 h-8"></div>
        <div>
          <span class="text-gray-900 text-lg font-bold">0.9kg</span>
          <span class="block text-[10px] text-gray-400 font-semibold uppercase">CO₂ Dihemat/Kotak</span>
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-sm mb-1">Tentang Mitra</h4>
        <p class="text-xs text-gray-500 leading-relaxed">${p.description}</p>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-sm mb-3">Penyelamatan Tersedia</h4>
        <div class="space-y-3">
          ${itemsHtml}
        </div>
      </div>
    </div>
  `;
}

// Food Details Screen
function renderFoodDetail() {
  const item = state.selectedFoodItem;
  if (!item) return;

  const header = document.getElementById("food-header");
  const content = document.getElementById("food-detail-container");

  header.innerHTML = `
    <button onclick="switchView('explore')" class="text-gray-600 hover:text-gray-900 flex items-center gap-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <h2 class="font-bold text-gray-900 text-lg flex-1 text-center pr-5">Detail Produk</h2>
  `;

  content.innerHTML = `
    <div class="relative h-64 w-full">
      <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
      <div class="absolute bottom-4 right-4 bg-amber-500 text-white font-bold px-3 py-1 rounded-full text-xs shadow-sm">
        ${item.pickupWindow}
      </div>
    </div>
    
    <div class="p-4 space-y-4 pb-20">
      <div>
        <button onclick="switchView('partner-detail', { partnerId: '${item.partnerId}' })" class="text-xs text-emerald-600 font-bold hover:underline mb-1 inline-block uppercase tracking-wider">${item.partnerName} ➔</button>
        <h3 class="text-xl font-bold text-gray-900 leading-snug">${item.name}</h3>
        
        <div class="flex items-center gap-2 mt-2">
          <span class="text-yellow-400">★★★★★</span>
          <span class="text-xs text-gray-600 font-semibold">${item.rating} (5 ulasan)</span>
        </div>
      </div>
      
      <div class="flex justify-between items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
        <div>
          <span class="text-xs text-emerald-800">Harga Asli: <span class="line-through font-semibold">${formatRupiah(item.originalPrice)}</span></span>
          <div class="text-xl font-extrabold text-emerald-600 mt-0.5">${formatRupiah(item.price)}</div>
        </div>
        <div class="bg-emerald-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-lg">
          Hemat 75%
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-3">
        <span class="text-2xl">🌱</span>
        <div>
          <h4 class="font-bold text-xs text-gray-900">Dampak Penghematan Eco</h4>
          <p class="text-[11px] text-gray-500">Menyelamatkan kantong ini mencegah sekitar <span class="font-bold text-emerald-600">${item.co2Reduction} kg CO2</span> memasuki atmosfer!</p>
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">Apa Isi di Dalamnya</h4>
        <p class="text-xs text-gray-500 leading-relaxed">Pilihan acak kejutan dari produk panggang harian kami yang tidak terjual hari ini. Biasanya mencakup roti tawar, croissant, bagel, dan kue manis. Sangat segar, lezat, dan siap diselamatkan!</p>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Akreditasi Kesegaran (Freshness Accreditation)</h4>
        <div class="flex gap-2">
          <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-100 flex items-center gap-1">
            <span>🛡️</span> Aman Dikonsumsi
          </span>
          <span class="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-100 flex items-center gap-1">
            <span>❄️</span> Simpan di Lemari Es
          </span>
        </div>
      </div>
    </div>
    
    <!-- Sticky Product Footer -->
    <div class="fixed bottom-[65px] left-0 right-0 w-full bg-white border-t border-gray-100 p-3 shadow-lg z-50">
      <div class="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 flex items-center gap-3">
        <div class="flex items-center border border-gray-200 rounded-xl px-2 py-1.5 bg-gray-50">
          <button onclick="adjustDetailsQty(-1)" class="w-6 h-6 flex items-center justify-center font-bold text-gray-500 hover:text-gray-950">-</button>
          <span id="detail-qty-indicator" class="w-8 text-center font-bold text-sm text-gray-900">1</span>
          <button onclick="adjustDetailsQty(1)" class="w-6 h-6 flex items-center justify-center font-bold text-gray-500 hover:text-gray-950">+</button>
        </div>
        <button onclick="addDetailsToCart()" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2">
          <span>Selamatkan</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </div>
  `;
  state.detailQty = 1;
}

window.adjustDetailsQty = function (delta) {
  state.detailQty = Math.max(1, state.detailQty + delta);
  document.getElementById("detail-qty-indicator").innerText = state.detailQty;
};

window.addDetailsToCart = function () {
  const item = state.selectedFoodItem;
  if (!item) return;

  // Check for partner conflict
  if (state.cart.length > 0 && state.cart[0].partnerId !== item.partnerId) {
    window.openCartConflictModal(state.cart[0].partnerName, item.partnerName, item, state.detailQty);
    return;
  }

  const existing = state.cart.find((c) => c.id === item.id);
  if (existing) {
    existing.quantity += state.detailQty;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      partnerId: item.partnerId,
      partnerName: item.partnerName,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      quantity: state.detailQty,
      pickupWindow: item.pickupWindow,
      co2Reduction: item.co2Reduction,
    });
  }

  showToast("Berhasil dimasukkan ke Keranjang!");
  updateFloatingCart();
};

// Cart Rendering & Handlers
function renderCart() {
  const container = document.getElementById("cart-items-list");
  const subtotalLabel = document.getElementById("cart-subtotal");
  const platformFeeLabel = document.getElementById("cart-platform-fee");
  const taxLabel = document.getElementById("cart-tax");
  const totalLabel = document.getElementById("cart-total");
  const savingsBanner = document.getElementById("cart-eco-savings-banner");
  const checkoutContainer = document.getElementById("cart-checkout-container");

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 px-4">
        <div class="text-5xl mb-4">🛒</div>
        <h3 class="font-bold text-gray-900 text-lg">Keranjang Anda kosong</h3>
        <p class="text-gray-500 text-xs mt-1">Menyelamatkan makanan akan menghemat uang Anda dan mencegah emisi CO₂ mencemari atmosfer!</p>
        <button onclick="switchView('explore')" class="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm text-sm">Mulai Menyelamatkan</button>
      </div>
    `;
    checkoutContainer.classList.add("hidden");
    savingsBanner.classList.add("hidden");
    return;
  }

  checkoutContainer.classList.remove("hidden");
  savingsBanner.classList.remove("hidden");

  // Subtotal calculations
  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalOriginal = state.cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0,
  );
  const totalSavings = totalOriginal - subtotal;
  const co2Prevented = state.cart.reduce(
    (sum, item) => sum + item.co2Reduction * item.quantity,
    0,
  );

  const platformFee = 2000;
  const tax = subtotal * 0.05;
  const total = subtotal + platformFee + tax;

  // Render Cart Item List
  container.innerHTML = state.cart
    .map(
      (item) => `
    <div class="bg-white rounded-2xl p-3 border border-gray-100 shadow-xs flex gap-3 relative">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover">
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="font-bold text-sm text-gray-900 leading-tight">${item.name}</h4>
            <button onclick="removeFromCart('${item.id}')" class="text-gray-400 hover:text-gray-900 text-xs">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <p class="text-[10px] text-gray-400 font-medium">${item.partnerName}</p>
        </div>
        
        <div class="flex justify-between items-center mt-2">
          <div>
            <span class="text-[10px] text-gray-400 line-through">${formatRupiah(item.originalPrice)}</span>
            <span class="text-sm font-extrabold text-emerald-600 ml-1">${formatRupiah(item.price)}</span>
          </div>
          
          <div class="flex items-center border border-gray-100 rounded-lg px-1.5 py-0.5 bg-gray-50">
            <button onclick="updateCartQuantity('${item.id}', -1)" class="w-5 h-5 flex items-center justify-center font-bold text-gray-400 hover:text-gray-900">-</button>
            <span class="w-6 text-center font-bold text-xs text-gray-900">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.id}', 1)" class="w-5 h-5 flex items-center justify-center font-bold text-gray-400 hover:text-gray-900">+</button>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // Render Savings Box
  savingsBanner.innerHTML = `
    <div class="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex items-center gap-3">
      <div class="bg-emerald-600 text-white rounded-full p-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-sm text-emerald-900">Total Penghematan: ${formatRupiah(totalSavings)}!</h4>
        <p class="text-[11px] text-emerald-700">Plus, Anda mencegah emisi CO₂ sebesar <span class="font-bold">${co2Prevented.toFixed(1)} kg</span> hari ini.</p>
      </div>
    </div>
  `;

  subtotalLabel.innerText = formatRupiah(subtotal);
  platformFeeLabel.innerText = formatRupiah(platformFee);
  taxLabel.innerText = formatRupiah(tax);
  totalLabel.innerText = formatRupiah(total);

  // Bottom Sticky Total Card
  document.getElementById("checkout-bar-total").innerText = formatRupiah(total);
}

window.addItemToCart = function (itemId) {
  const item = catalog.find((i) => i.id === itemId);
  if (!item) return;

  // Check for partner conflict
  if (state.cart.length > 0 && state.cart[0].partnerId !== item.partnerId) {
    window.openCartConflictModal(state.cart[0].partnerName, item.partnerName, item, 1);
    return;
  }

  const existing = state.cart.find((c) => c.id === itemId);
  if (existing) {
    existing.quantity++;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      partnerId: item.partnerId,
      partnerName: item.partnerName,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      quantity: 1,
      pickupWindow: item.pickupWindow,
      co2Reduction: item.co2Reduction,
    });
  }

  // Update floating badge
  updateFloatingCart();

  showToast("Berhasil dimasukkan ke Keranjang!");
};

window.updateCartQuantity = function (itemId, delta) {
  const item = state.cart.find((c) => c.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    renderCart();
  }
};

window.removeFromCart = function (itemId) {
  state.cart = state.cart.filter((c) => c.id !== itemId);

  // Update floating badge
  updateFloatingCart();

  renderCart();
};

window.goToCheckout = function () {
  switchView("checkout");
};

// Checkout Page rendering
function renderCheckout() {
  const checkoutItems = document.getElementById("checkout-items-list");
  const subtotalLabel = document.getElementById("checkout-subtotal");
  const ecoDiscountLabel = document.getElementById("checkout-eco-discount");
  const deliveryLabel = document.getElementById("checkout-delivery-fee");
  const totalLabel = document.getElementById("checkout-total");
  const addressLabel = document.getElementById("partner-addresses");

  const orderedPartners = new Set();
  state.cart.forEach((item) => {
    orderedPartners.add(item.partnerId);
  });
  let addresses = "";
  orderedPartners.forEach((partnerId) => {
    const partner = partners.find((p) => p.id == partnerId);
    addresses += `
      <div>
        <div class="text-xs text-gray-700 font-bold">
          ${partner.name}
        </div>
        <p class="text-xs text-gray-500 mt-0.5">
          ${partner.address}
        </p>
      </div>
    `;
  });
  addressLabel.innerHTML = addresses;

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalOriginal = state.cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0,
  );
  const ecoDiscount = totalOriginal - subtotal;

  // Render checkout items (summary list)
  checkoutItems.innerHTML = state.cart
    .map(
      (item) => `
    <div class="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
      <img src="${item.image}" alt="${item.name}" class="w-10 h-10 rounded-lg object-cover">
      <div class="flex-1">
        <h4 class="font-bold text-xs text-gray-900 line-clamp-1">${item.name}</h4>
        <p class="text-[10px] text-gray-400 font-semibold">Qty: ${item.quantity}</p>
      </div>
      <span class="text-xs font-bold text-gray-900">${formatRupiah(item.price * item.quantity)}</span>
    </div>
  `,
    )
    .join("");

  // We mock a fixed delivery fee or self-pickup
  const deliveryFee = 0.0; // Self-pickup is always Rp 0
  const tax = subtotal * 0.05;
  const platformFee = 2000;
  const total = subtotal + deliveryFee + tax + platformFee;

  subtotalLabel.innerText = formatRupiah(subtotal + tax + platformFee);
  ecoDiscountLabel.innerText = `-${formatRupiah(ecoDiscount)}`;
  deliveryLabel.innerText =
    deliveryFee === 0 ? "GRATIS (Ambil Sendiri)" : formatRupiah(deliveryFee);
  totalLabel.innerText = formatRupiah(total);

  // Default wallet highlights
  selectPayment(state.selectedPayment);
}

window.selectPayment = function (method) {
  state.selectedPayment = method;

  // Reset border highlights
  const paymentIds = ["ecopay", "card", "cod"];
  paymentIds.forEach((id) => {
    const el = document.getElementById(`pay-method-${id}`);
    const check = document.getElementById(`pay-check-${id}`);
    if (id === method) {
      el.classList.add("border-emerald-600", "bg-emerald-50/40");
      check.classList.remove("hidden");
    } else {
      el.classList.remove("border-emerald-600", "bg-emerald-50/40");
      check.classList.add("hidden");
    }
  });
};

window.placeOrder = function () {
  if (state.cart.length === 0) return;

  // Create ongoing order
  const orderId = `FR-${Math.floor(1000 + Math.random() * 9000)}`;
  const firstItem = state.cart[0];
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const platformFee = 2000;
  const tax = subtotal * 0.05;
  const totalPrice = subtotal + platformFee + tax;
  const co2SavedToday = state.cart.reduce(
    (sum, item) => sum + item.co2Reduction * item.quantity,
    0,
  );

  const newOrder = {
    id: orderId,
    partnerName: firstItem.partnerName,
    itemName: firstItem.name,
    itemCount: totalItems,
    price: totalPrice,
    status: "ongoing",
    expiresIn: "1h 59m",
    distance: "jarak 1,2 km",
    image: firstItem.image,
    items: state.cart.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
  };

  // Add to order list at the beginning
  state.orders.unshift(newOrder);

  // Update impact metrics
  const totalOriginal = state.cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0,
  );
  const savingsToday = totalOriginal - subtotal;

  state.user.co2Saved += co2SavedToday;
  state.user.mealsRescued += totalItems;
  state.user.moneySaved += savingsToday;
  saveUserState();

  // Add notification
  state.notifications.unshift({
    id: `n-${Date.now()}`,
    title: "Pesanan Berhasil Dibuat!",
    desc: `Pesanan Anda #${orderId} di ${firstItem.partnerName} berhasil dibuat.`,
    time: "Baru saja",
    read: false,
    icon: "shopping-bag",
    color: "text-emerald-600 bg-emerald-50",
  });
  updateBellDot();

  // Show Success Screen with details
  renderSuccessScreen(
    orderId,
    firstItem.partnerName,
    co2SavedToday,
    totalItems,
  );
  switchView("success");

  // Clear Cart
  state.cart = [];
  updateFloatingCart();
};

function renderSuccessScreen(orderId, partnerName, co2, meals) {
  const container = document.getElementById("success-summary-container");

  container.innerHTML = `
    <div class="bg-emerald-600/10 border border-emerald-500/20 rounded-2xl p-4 text-center">
      <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl mb-2">✓</div>
      <h3 class="font-bold text-gray-900 text-base">Pesanan Berhasil Dibuat!</h3>
      <p class="text-xs text-gray-500 mt-1">Terima kasih telah menyelamatkan makanan lezat dan membantu planet kita berkembang.</p>
    </div>
    
    <div class="grid grid-cols-2 gap-3 mt-4">
      <div class="bg-emerald-800 text-white rounded-2xl p-3 border border-emerald-700 shadow-sm flex flex-col justify-between">
        <span class="text-[10px] uppercase font-semibold tracking-wider text-emerald-200">CO₂ Dicegah</span>
        <span class="text-lg font-black mt-2 font-heading">${co2.toFixed(1)}kg CO₂</span>
        <span class="text-[9px] text-emerald-200 mt-1">Keuntungan Lingkungan</span>
      </div>
      
      <div class="bg-amber-500 text-white rounded-2xl p-3 border border-amber-400 shadow-sm flex flex-col justify-between">
        <span class="text-[10px] uppercase font-semibold tracking-wider text-amber-100">Makanan Diselamatkan</span>
        <span class="text-lg font-black mt-2 font-heading">${meals} Makanan</span>
        <span class="text-[9px] text-amber-100 mt-1">Kontribusi Sosial</span>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mt-4 space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-gray-50">
        <span class="text-xs text-gray-400 font-semibold uppercase">ID Pesanan</span>
        <span class="text-xs font-bold text-gray-900">#${orderId}</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-gray-50">
        <span class="text-xs text-gray-400 font-semibold uppercase">Waktu Pengambilan</span>
        <span class="text-xs font-bold text-gray-900">Hari ini, 16:00 - 18:00</span>
      </div>
      <div class="flex justify-between items-start">
        <span class="text-xs text-gray-400 font-semibold uppercase mt-0.5">Lokasi</span>
        <span class="text-xs font-bold text-gray-900 text-right max-w-[180px]">${partnerName} - ${state.user.address.split(",")[0]}</span>
      </div>
    </div>
    
    <!-- Eco Impact Quote -->
    <div class="relative rounded-2xl overflow-hidden mt-4 h-32 flex items-end">
      <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <p class="relative text-white font-medium text-[11px] p-3 leading-relaxed italic z-10">
        "Tindakan kecil, perubahan besar. Setiap penyelamatan mengurangi metana dari TPA dan memberi makan komunitas kita."
      </p>
    </div>
  `;
}

// Eco-Impact Screen
function renderImpact() {
  // Update header coins balance
  document.getElementById("impact-coins-balance").innerText =
    state.user.coins.toLocaleString();
  document.getElementById("impact-co2-saved").innerText =
    `${state.user.co2Saved.toFixed(1)} kg`;
  document.getElementById("impact-meals-rescued").innerText =
    `${state.user.mealsRescued} Makanan`;

  // Render Quests
  const questContainer = document.getElementById("quests-list-container");
  questContainer.innerHTML = state.quests
    .map((q) => {
      const isCompleted = q.progress >= q.target;
      const progressPercent = Math.min(100, (q.progress / q.target) * 100);

      return `
      <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-2">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-bold text-sm text-gray-900 leading-snug">${q.title}</h4>
            <p class="text-xs text-gray-400 font-medium">${q.description}</p>
          </div>
          <span class="min-w-[96px] text-xs text-center font-bold ${isCompleted ? "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full" : "text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full"}">
            +${q.reward}
          </span>
        </div>
        
        <div class="space-y-1">
          <div class="w-full bg-gray-100 rounded-full h-2">
            <div class="bg-emerald-600 h-2 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
          </div>
          <div class="flex justify-between items-center text-[10px] text-gray-400 font-bold">
            <span>Kemajuan</span>
            <span>${q.progress}/${q.target} selesai</span>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Render Badges
  const badgeContainer = document.getElementById("badges-grid-container");
  badgeContainer.innerHTML = state.badges
    .map(
      (b) => `
    <div class="bg-white rounded-2xl p-3 border border-gray-100 shadow-xs text-center flex flex-col items-center justify-center relative group ${b.unlocked ? "" : "opacity-50"}">
      <span class="text-3xl filter ${b.unlocked ? "" : "grayscale"}">${b.icon}</span>
      <h5 class="font-bold text-xs text-gray-900 mt-2">${b.name}</h5>
      <p class="text-[9px] text-gray-400 leading-tight mt-0.5 line-clamp-2">${b.desc}</p>
    </div>
  `,
    )
    .join("");

  // Render Rewards Shop
  renderRewardShop();
}

function renderRewardShop() {
  const shopContainer = document.getElementById("reward-shop-container");

  const rewards = [
    {
      id: "reward-1",
      title: "Kotak Misteri Kejutan",
      desc: "Berisi makanan senilai hingga $30 dari toko roti lokal.",
      coins: 500,
      popular: true,
      tag: "Populer",
    },
    {
      id: "reward-2",
      title: "Tiket Undian Mega",
      desc: "Kesempatan memenangkan Peralatan Dapur Ramah Lingkungan senilai $500.",
      coins: 100,
      endsSoon: true,
      tag: "Segera Berakhir",
    },
    {
      id: "reward-3",
      title: "Tanam Pohon",
      desc: "Kami akan menanam pohon asli atas nama Anda di Amazon.",
      coins: 500,
      tag: "Ramah Lingkungan",
    },
    {
      id: "reward-4",
      title: "Voucher Mitra $10",
      desc: "Diskon langsung di salah satu mitra Platinum kami.",
      coins: 1000,
      tag: "Nilai Tunai",
    },
  ];

  shopContainer.innerHTML = rewards
    .map((r) => {
      const isAffordable = state.user.coins >= r.coins;

      // Check if it's the Blind Box to hook the game
      const clickAction =
        r.id === "reward-1"
          ? "openBlindBoxModal()"
          : `redeemReward('${r.id}', ${r.coins})`;

      return `
      <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="p-3.5">
          <div class="flex justify-between items-start">
            <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${r.popular ? "bg-emerald-50 text-emerald-800" : r.endsSoon ? "bg-amber-50 text-amber-800" : "bg-gray-100 text-gray-500"}">
              ${r.tag}
            </span>
          </div>
          
          <h4 class="font-bold text-sm text-gray-900 mt-2">${r.title}</h4>
          <p class="text-[10px] text-gray-400 leading-tight mt-1">${r.desc}</p>
        </div>
        
        <div class="px-3.5 pb-3.5 pt-2 border-t border-gray-50 flex items-center justify-between gap-1">
          <div class="flex items-center gap-0.5 text-amber-500 font-extrabold text-xs">
            <i data-lucide="coins" class="w-3 h-3 text-amber-500 mr-1"></i><span>${r.coins}</span>
          </div>
          <button onclick="${clickAction}" class="text-[10px] font-bold px-3 py-1.5 rounded-lg ${isAffordable ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs" : "bg-gray-100 text-gray-400 cursor-not-allowed"}">
            Tukarkan
          </button>
        </div>
      </div>
    `;
    })
    .join("");
}

window.redeemReward = function (rewardId, cost) {
  if (state.user.coins < cost) {
    alert("Saldo Koin Eco tidak mencukupi.");
    return;
  }

  state.user.coins -= cost;
  saveUserState();
  alert("🎉 Hadiah Berhasil Ditukarkan! Kode telah dikirim ke email Anda.");
  renderImpact();
};

// Interactive Blind Box Mystery Game (Gamification Page)
window.openBlindBoxModal = function () {
  if (state.user.coins < 500) {
    alert("Saldo Koin Eco tidak mencukupi.");
    return;
  }

  state.blindBox = {
    tapsRemaining: 3,
    state: "closed",
    revealedItem: null,
  };

  // Show blind box overlay
  const overlay = document.getElementById("blindbox-overlay");
  overlay.classList.remove("hidden");
  renderBlindBoxState();
};

window.closeBlindBoxModal = function () {
  const overlay = document.getElementById("blindbox-overlay");
  overlay.classList.add("hidden");
  renderImpact();
};

window.tapBlindBox = function () {
  if (state.blindBox.state === "revealed") return;

  const box = document.getElementById("blindbox-card");
  box.classList.add("shake-box");

  // Remove shake after animation completes
  setTimeout(() => {
    box.classList.remove("shake-box");
  }, 500);

  state.blindBox.tapsRemaining--;

  if (state.blindBox.tapsRemaining <= 0) {
    state.blindBox.state = "revealed";
    // Deduct coins
    state.user.coins -= 500;
    saveUserState();
    // Select random item from catalog as reward
    const rand = Math.floor(Math.random() * catalog.length);
    state.blindBox.revealedItem = catalog[rand];
  }

  renderBlindBoxState();
};

function renderBlindBoxState() {
  const container = document.getElementById("blindbox-inner-content");
  const bb = state.blindBox;

  if (bb.state === "closed") {
    container.innerHTML = `
      <div id="blindbox-card" onclick="tapBlindBox()" class="w-40 h-40 bg-amber-50 rounded-3xl border border-amber-200 flex items-center justify-center text-6xl shadow-md cursor-pointer hover:scale-105 transition-transform mx-auto">
        🎁
      </div>
      <div class="text-center mt-6">
        <h3 class="font-bold text-gray-900 text-base">Kotak Misteri Kejutan</h3>
        <p class="text-xs text-gray-400 mt-1">Ketuk kotak hadiah <span class="font-bold text-emerald-600">${bb.tapsRemaining} kali</span> untuk melihat kejutan penyelamatan Anda!</p>
        <div class="text-amber-500 font-black text-sm mt-3">🪙 500 Koin</div>
      </div>
    `;
  } else if (bb.state === "revealed") {
    const item = bb.revealedItem;
    container.innerHTML = `
      <div class="badge-pop space-y-4">
        <div class="w-32 h-32 rounded-2xl overflow-hidden mx-auto border border-emerald-100 shadow-sm relative">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
          <div class="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold text-center py-0.5 rounded">
            ${item.partnerName}
          </div>
        </div>
        
        <div class="text-center">
          <span class="text-[9px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-100">Makanan Misterius Terungkap!</span>
          <h3 class="font-bold text-gray-950 text-base mt-2 leading-snug">${item.name}</h3>
          <p class="text-[11px] text-gray-500 mt-1">Klaim makanan sisa segar ini. Dinilai tinggi dan siap untuk diambil sendiri.</p>
        </div>
        
        <div class="bg-gray-50 rounded-xl p-3 border border-gray-100 text-center space-y-1.5">
          <div class="text-[10px] text-gray-400 font-semibold uppercase">Kebijakan Klaim</div>
          <p class="text-[9px] text-gray-500 leading-normal">⚠️ Anda memiliki waktu <span class="font-bold text-amber-500">30 menit</span> untuk mengambil setelah diklaim. Pembatalan hanya mengembalikan 25% koin (125 koin).</p>
        </div>
        
        <div class="flex gap-2">
          <button onclick="closeBlindBoxModal()" class="flex-1 border border-gray-200 text-gray-600 font-bold py-2 rounded-xl text-xs hover:bg-gray-50">Batal (Kembali 25%)</button>
          <button onclick="claimBlindMeal('${item.id}')" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-xs shadow-sm">Klaim Makanan!</button>
        </div>
      </div>
    `;
  } else {
    // Shaking states
    container.innerHTML = `
      <div id="blindbox-card" onclick="tapBlindBox()" class="w-40 h-40 bg-amber-50 rounded-3xl border border-amber-200 flex items-center justify-center text-6xl shadow-md cursor-pointer shake-box mx-auto">
        🎁
      </div>
      <div class="text-center mt-6">
        <h3 class="font-bold text-gray-900 text-base">Kotak Misteri Kejutan</h3>
        <p class="text-xs text-gray-400 mt-1">Terus ketuk! <span class="font-bold text-emerald-600">${bb.tapsRemaining} kali lagi</span> untuk membuka!</p>
        <div class="text-amber-500 font-black text-sm mt-3">🪙 500 Koin</div>
      </div>
    `;
  }
}

window.claimBlindMeal = function (itemId) {
  const item = catalog.find((i) => i.id === itemId);
  if (!item) return;

  // Directly add to ongoing orders (free pickup)
  const orderId = `FR-${Math.floor(1000 + Math.random() * 9000)}`;
  const newOrder = {
    id: orderId,
    partnerName: item.partnerName,
    itemName: `${item.name} (Kotak Misteri)`,
    itemCount: 1,
    price: 0.0, // Claimed via coins
    status: "ongoing",
    expiresIn: "30m 00s",
    distance: "jarak 1,9 km",
    image: item.image,
    items: [
      {
        name: `${item.name} (Kotak Misteri)`,
        quantity: 1,
        price: 0.0,
      },
    ],
  };

  state.orders.unshift(newOrder);
  state.user.mealsRescued += 1;
  state.user.co2Saved += item.co2Reduction;
  saveUserState();

  // Add notification
  state.notifications.unshift({
    id: `n-${Date.now()}`,
    title: "Kotak Misteri Diklaim!",
    desc: `Kotak Misteri Anda #${orderId} (${item.name}) berhasil diklaim.`,
    time: "Baru saja",
    read: false,
    icon: "gift",
    color: "text-amber-500 bg-amber-50",
  });
  updateBellDot();

  alert("🎉 Kotak kejutan diklaim! Lihat di daftar penyelamatan aktif Anda.");
  closeBlindBoxModal();
  switchView("orders");
};

// Orders / Rescues screen
function renderOrders() {
  const container = document.getElementById("orders-list-container");

  const ongoing = state.orders.filter((o) => o.status === "ongoing");
  const past = state.orders.filter((o) => o.status === "completed");

  const ongoingHtml =
    ongoing.length === 0
      ? `
    <p class="text-xs text-gray-400 text-center py-4">Tidak ada penyelamatan aktif saat ini.</p>
  `
      : ongoing
          .map(
            (o) => `
    <div class="bg-white rounded-2xl p-3.5 border border-gray-100 shadow-sm flex gap-3.5 relative">
      <img src="${o.image}" alt="${o.partnerName}" class="w-16 h-16 rounded-xl object-cover">
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="font-bold text-sm text-gray-900 leading-snug">${o.partnerName}</h4>
            <span class="text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              ⏱️ ${o.expiresIn}
            </span>
          </div>
          <div class="flex flex-wrap gap-1 mt-1">
            ${(o.items || [{ name: o.itemName, quantity: o.itemCount }])
              .map(
                (item) => `
              <span class="bg-gray-50 text-[9px] text-gray-500 font-bold px-2 py-0.5 rounded-full border border-gray-100 flex items-center whitespace-nowrap">
                ${item.name} x${item.quantity}
              </span>
            `,
              )
              .join("")}
          </div>
        </div>
        
        <div class="flex items-center justify-between mt-3">
          <span class="text-[10px] text-gray-400 font-semibold">📍 ${o.distance}</span>
          <button onclick="trackOrderRoute('${o.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg shadow-xs transition-colors">
            Lacak Pesanan
          </button>
        </div>
      </div>
    </div>
  `,
          )
          .join("");

  const pastHtml =
    past.length === 0
      ? `
    <p class="text-xs text-gray-400 text-center py-4">Belum ada riwayat penyelamatan sebelumnya.</p>
  `
      : past
          .map(
            (o) => `
    <div class="bg-white rounded-xl p-3 border border-gray-50 shadow-xs flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="${o.image}" alt="${o.partnerName}" class="w-12 h-12 rounded-lg object-cover">
        <div>
          <h4 class="font-bold text-xs text-gray-900 leading-tight">${o.partnerName}</h4>
          <div class="flex flex-wrap gap-1 mt-0.5">
            ${(o.items || [{ name: o.itemName, quantity: 1 }])
              .map(
                (item) => `
              <span class="bg-gray-50 text-[8px] text-gray-400 font-bold px-1.5 py-0.5 rounded-md whitespace-nowrap">
                ${item.name} x${item.quantity}
              </span>
            `,
              )
              .join("")}
          </div>
          <span class="text-[9px] text-gray-400 block mt-0.5">${o.date || "Selesai"}</span>
        </div>
      </div>
      
      <div class="text-right space-y-1.5">
        <div class="text-xs font-bold text-gray-900">${formatRupiah(o.price)}</div>
        <button onclick="reorderItem('${o.partnerName}')" class="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 hover:bg-emerald-100 transition-colors">
          Pesan Lagi
        </button>
      </div>
    </div>
  `,
          )
          .join("");

  container.innerHTML = `
    <div>
      <div class="flex justify-between items-center mb-3">
        <h3 class="font-bold text-gray-900 text-sm">Penyelamatan Aktif</h3>
        <span class="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full">${ongoing.length} Aktif</span>
      </div>
      <div class="space-y-3.5">
        ${ongoingHtml}
      </div>
    </div>
    
    <div class="pt-2">
      <h3 class="font-bold text-gray-900 text-sm mb-3">Penyelamatan Selesai</h3>
      <div class="space-y-3">
        ${pastHtml}
      </div>
    </div>
  `;
}

window.reorderItem = function (partnerName) {
  // Find partner's items
  const partner = partners.find((p) => p.name === partnerName);
  if (partner) {
    switchView("partner-detail", { partnerId: partner.id });
  } else {
    alert(`Mengarahkan ke katalog sisa ${partnerName}...`);
  }
};

// Profile Screen rendering
function renderProfile() {
  document.getElementById("profile-name").innerText = state.user.name;
  document.getElementById("profile-address").innerText = state.user.address;
  document.getElementById("profile-co2").innerText =
    `${state.user.co2Saved.toFixed(1)} kg`;
  document.getElementById("profile-meals").innerText = state.user.mealsRescued;
  document.getElementById("profile-saved").innerText = formatRupiah(
    state.user.moneySaved,
  );
  document.getElementById("profile-coins").innerText =
    state.user.coins.toLocaleString();

  // Render favorite partners
  const favoriteContainer = document.getElementById("profile-favorite-partners");
  if (favoriteContainer) {
    const favoriteIds = state.user.favoritePartners || [];
    if (favoriteIds.length === 0) {
      favoriteContainer.innerHTML = `
        <div class="text-center py-5 text-gray-400 text-xs bg-gray-50/50 rounded-xl border border-dashed border-gray-100">
          <span class="text-2xl block mb-1">❤️</span>
          Belum ada mitra favorit.<br>Tandai mitra sebagai favorit Anda untuk melihatnya di sini!
        </div>
      `;
    } else {
      const favoritePartnersList = partners.filter((p) => favoriteIds.includes(p.id));
      favoriteContainer.innerHTML = favoritePartnersList
        .map(
          (p) => `
        <div class="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-xs">
          <div class="flex items-center gap-3 cursor-pointer flex-1" onclick="switchView('partner-detail', { partnerId: '${p.id}' })">
            <img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-lg object-cover">
            <div>
              <h5 class="font-bold text-xs text-gray-900 leading-tight">${p.name}</h5>
              <div class="flex items-center gap-1 mt-0.5">
                <span class="text-yellow-400 text-[10px]">★</span>
                <span class="text-[10px] text-gray-500 font-medium">${p.rating}</span>
                <span class="text-[9px] text-gray-400">• ${p.distance}</span>
              </div>
            </div>
          </div>
          <button onclick="toggleFavoritePartner('${p.id}')" class="text-red-500 hover:text-gray-400 transition-colors p-1.5 flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-red-500 text-red-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      `
        )
        .join("");
    }
  }
}

function showToast(message, iconName = "shopping-bag") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className =
    "pointer-events-auto bg-gray-50/95 backdrop-blur-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold transition-all duration-300 transform translate-y-8 opacity-0 max-w-xs md:max-w-lg border border-gray-100";

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 text-emerald-500 flex-shrink-0"></i>
    <span class="flex-1 line-clamp-2">${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.className =
      "pointer-events-auto bg-gray-50/95 backdrop-blur-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold transition-all duration-300 transform translate-y-0 opacity-100 max-w-xs md:max-w-lg border border-gray-100";
  }, 10);

  setTimeout(() => {
    toast.className =
      "pointer-events-auto bg-gray-50/95 backdrop-blur-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold transition-all duration-300 transform -translate-y-4 opacity-0 max-w-xs md:max-w-lg border border-gray-100";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// ==========================================
// DUMMY LOGIN FEATURE LOGIC
// ==========================================

window.handleCustomLogin = async function (event) {
  event.preventDefault();
  const usernameInput = document.getElementById("login-username").value.trim();
  const emailInput = document.getElementById("login-email").value.trim();
  const addressInput = document.getElementById("login-address").value.trim();

  if (usernameInput && addressInput) {
    let lat = window.loginSelectedLat || 40.7265;
    let lng = window.loginSelectedLng || -73.995;

    // Check if the user manually modified or typed a new address
    if (window.lastGeocodedAddress !== addressInput) {
      const coords = await forwardGeocode(addressInput);
      if (coords) {
        lat = coords.lat;
        lng = coords.lng;
      }
    }

    state.user = {
      name: usernameInput,
      email: emailInput,
      coins: 0,
      co2Saved: 0.0,
      mealsRescued: 0,
      moneySaved: 0,
      address: addressInput,
      lat: lat,
      lng: lng,
      favoritePartners: [],
    };
    state.isAuthenticated = true;
    localStorage.setItem("foodrescue_user", JSON.stringify(state.user));

    updateUserDynamicElements();
    updateUserMapMarker();
    showToast(
      `Akun berhasil dibuat. Selamat datang, ${state.user.name}!`,
      "user",
    );
    switchView("explore");

    // Reset form
    document.getElementById("login-form").reset();

    // Reset login coordinates
    window.loginSelectedLat = 40.7265;
    window.loginSelectedLng = -73.995;
    window.lastGeocodedAddress = "";
    if (loginMarker) {
      loginMarker.setLatLng([window.loginSelectedLat, window.loginSelectedLng]);
    }
    if (loginMap) {
      loginMap.setView([window.loginSelectedLat, window.loginSelectedLng], 14);
    }
  }
};

window.logoutUser = function () {
  localStorage.removeItem("foodrescue_user");
  state.user = {
    name: "",
    email: "",
    coins: 0,
    co2Saved: 0,
    mealsRescued: 0,
    moneySaved: 0,
    address: "",
    lat: 40.7265,
    lng: -73.995,
    favoritePartners: [],
  };
  state.isAuthenticated = false;

  // Clear any inputs in custom form
  const loginForm = document.getElementById("login-form");
  if (loginForm) loginForm.reset();

  // Reset login map selection state
  window.loginSelectedLat = 40.7265;
  window.loginSelectedLng = -73.995;
  window.lastGeocodedAddress = "";
  if (loginMarker) {
    loginMarker.setLatLng([window.loginSelectedLat, window.loginSelectedLng]);
  }
  if (loginMap) {
    loginMap.setView([window.loginSelectedLat, window.loginSelectedLng], 14);
  }
  if (window.highlightSegmentedMode) {
    window.highlightSegmentedMode("login", "default");
  }

  showToast("Anda telah keluar dari aplikasi.", "log-out");
  switchView("login");
};

function saveUserState() {
  if (state.user) {
    localStorage.setItem("foodrescue_user", JSON.stringify(state.user));
    updateUserDynamicElements();
  }
}

function updateUserDynamicElements() {
  if (!state.user) return;

  const welcomeName = document.getElementById("welcome-user-name");
  if (welcomeName) welcomeName.innerText = state.user.name;

  const impactName = document.getElementById("impact-user-name");
  if (impactName) impactName.innerText = state.user.name;

  // Update welcome location text if present
  const welcomeLocation = document.getElementById("welcome-user-location");
  if (welcomeLocation && state.user.address) {
    const addressParts = state.user.address.split(",");
    welcomeLocation.innerText = addressParts[0] || state.user.address;
  }

  // Update Profile screen metrics
  renderProfile();
}

// ==========================================
// LOGIN MAP & GEOLOCATION FEATURES
// ==========================================

window.initLoginMap = function () {
  if (loginMap) {
    // If already created, ensure Leaflet calculates container bounds correctly after view switch
    setTimeout(() => {
      loginMap.invalidateSize();
    }, 150);
    return;
  }

  // Delay slightly to ensure DOM transition has finished and elements are visible
  setTimeout(() => {
    const container = document.getElementById("login-map");
    if (!container) return;

    loginMap = L.map("login-map", {
      zoomControl: true,
      attributionControl: false,
    }).setView([window.loginSelectedLat, window.loginSelectedLng], 14);

    // Style tiles
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
      },
    ).addTo(loginMap);

    // Custom marker pin
    const loginIcon = L.divIcon({
      className: "login-marker-container",
      html: '<div class="marker-pin-login"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    });

    loginMarker = L.marker([window.loginSelectedLat, window.loginSelectedLng], {
      icon: loginIcon,
      draggable: true,
    }).addTo(loginMap);

    // Click on map to position pin and update address
    loginMap.on("click", async (e) => {
      clearSegmentedHighlights("login");
      updateLoginLocation(e.latlng.lat, e.latlng.lng);
    });

    // Drag pin to update location and address
    loginMarker.on("dragend", async (e) => {
      clearSegmentedHighlights("login");
      const latLng = loginMarker.getLatLng();
      updateLoginLocation(latLng.lat, latLng.lng);
    });

    // Force redraw map bounds
    loginMap.invalidateSize();
  }, 100);
};

async function updateLoginLocation(lat, lng) {
  window.loginSelectedLat = lat;
  window.loginSelectedLng = lng;

  if (loginMarker) {
    loginMarker.setLatLng([lat, lng]);
  }
  if (loginMap) {
    loginMap.panTo([lat, lng]);
  }

  const statusEl = document.getElementById("login-map-status");
  const addressInput = document.getElementById("login-address");

  if (statusEl) statusEl.innerText = "Mendapatkan alamat...";
  if (addressInput) addressInput.value = "Mencari lokasi...";

  const address = await reverseGeocode(lat, lng);

  if (addressInput) addressInput.value = address;
  window.lastGeocodedAddress = address;
  if (statusEl) statusEl.innerText = "Lokasi diset dari peta";
}

window.detectUserLocation = function (event) {
  if (event) event.preventDefault();

  const statusEl = document.getElementById("login-map-status");
  if (statusEl) statusEl.innerText = "Mencari lokasi GPS...";

  if (!navigator.geolocation) {
    showToast("Geolocation tidak didukung oleh browser Anda", "compass");
    if (statusEl) statusEl.innerText = "GPS tidak didukung";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if (!loginMap) {
        window.initLoginMap();
      }

      highlightSegmentedMode("login", "gps");
      await updateLoginLocation(lat, lng);
      showToast("Lokasi GPS berhasil dideteksi!", "compass");
    },
    (error) => {
      console.error("Geolocation error:", error);
      let errMsg = "Gagal mengakses GPS.";
      if (error.code === error.PERMISSION_DENIED) {
        errMsg = "Izin lokasi ditolak oleh pengguna.";
      }
      showToast(errMsg, "compass");
      if (statusEl) statusEl.innerText = "Gagal mendeteksi lokasi";
    },
    { enableHighAccuracy: true, timeout: 8000 },
  );
};

async function reverseGeocode(lat, lng) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
      {
        headers: {
          "Accept-Language": "id, en",
          "User-Agent": "FoodRescue/1.0",
        },
      },
    );
    const data = await response.json();

    if (data && data.address) {
      const addr = data.address;
      const street = addr.road || addr.suburb || addr.neighbourhood || "";
      const number = addr.house_number ? `${addr.house_number} ` : "";
      const city =
        addr.city || addr.town || addr.municipality || addr.county || "";
      const stateName = addr.state || "";

      const parts = [];
      if (street) parts.push(number + street);
      if (city) parts.push(city);
      if (stateName) parts.push(stateName);

      if (parts.length > 0) {
        return parts.join(", ");
      }
    }

    return data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }
}

async function forwardGeocode(addressStr) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(addressStr)}`,
      {
        headers: {
          "Accept-Language": "id, en",
          "User-Agent": "FoodRescue/1.0",
        },
      },
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };
    }
  } catch (error) {
    console.error("Forward geocoding error:", error);
  }
  return null;
}

// ==========================================
// PROFILE EDIT ADDRESS MODAL LOGIC
// ==========================================

window.openProfileAddressModal = function () {
  const modal = document.getElementById("profile-address-modal");
  if (!modal) return;

  // Show modal
  modal.classList.remove("hidden");

  // Get user location
  window.profileSelectedLat = (state.user && state.user.lat) || 40.7265;
  window.profileSelectedLng = (state.user && state.user.lng) || -73.995;
  const currentAddress = (state.user && state.user.address) || "";

  // Set input field
  const input = document.getElementById("profile-edit-address");
  if (input) input.value = currentAddress;
  window.lastGeocodedProfileAddress = currentAddress;

  // Render status
  const statusEl = document.getElementById("profile-map-status");
  if (statusEl) statusEl.innerText = "Klik peta / geser pin";

  // Create or refresh map
  setTimeout(() => {
    if (profileEditMap) {
      profileEditMap.setView(
        [window.profileSelectedLat, window.profileSelectedLng],
        14,
      );
      if (profileEditMarker) {
        profileEditMarker.setLatLng([
          window.profileSelectedLat,
          window.profileSelectedLng,
        ]);
      }
      profileEditMap.invalidateSize();
      return;
    }

    const container = document.getElementById("profile-edit-map");
    if (!container) return;

    profileEditMap = L.map("profile-edit-map", {
      zoomControl: true,
      attributionControl: false,
    }).setView([window.profileSelectedLat, window.profileSelectedLng], 14);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
      },
    ).addTo(profileEditMap);

    const loginIcon = L.divIcon({
      className: "login-marker-container",
      html: '<div class="marker-pin-login"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    });

    profileEditMarker = L.marker(
      [window.profileSelectedLat, window.profileSelectedLng],
      {
        icon: loginIcon,
        draggable: true,
      },
    ).addTo(profileEditMap);

    profileEditMap.on("click", async (e) => {
      clearSegmentedHighlights("profile");
      updateProfileEditLocation(e.latlng.lat, e.latlng.lng);
    });

    profileEditMarker.on("dragend", async (e) => {
      clearSegmentedHighlights("profile");
      const latLng = profileEditMarker.getLatLng();
      updateProfileEditLocation(latLng.lat, latLng.lng);
    });

    profileEditMap.invalidateSize();
  }, 100);
};

window.closeProfileAddressModal = function () {
  const modal = document.getElementById("profile-address-modal");
  if (modal) modal.classList.add("hidden");
};

async function updateProfileEditLocation(lat, lng) {
  window.profileSelectedLat = lat;
  window.profileSelectedLng = lng;

  if (profileEditMarker) {
    profileEditMarker.setLatLng([lat, lng]);
  }
  if (profileEditMap) {
    profileEditMap.panTo([lat, lng]);
  }

  const statusEl = document.getElementById("profile-map-status");
  const addressInput = document.getElementById("profile-edit-address");

  if (statusEl) statusEl.innerText = "Mendapatkan alamat...";
  if (addressInput) addressInput.value = "Mencari lokasi...";

  const address = await reverseGeocode(lat, lng);

  if (addressInput) addressInput.value = address;
  window.lastGeocodedProfileAddress = address;
  if (statusEl) statusEl.innerText = "Lokasi diset dari peta";
}

window.detectProfileLocation = function (event) {
  if (event) event.preventDefault();

  const statusEl = document.getElementById("profile-map-status");
  if (statusEl) statusEl.innerText = "Mencari lokasi GPS...";

  if (!navigator.geolocation) {
    showToast("Geolocation tidak didukung oleh browser Anda", "compass");
    if (statusEl) statusEl.innerText = "GPS tidak didukung";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if (!profileEditMap) {
        window.openProfileAddressModal();
      }

      highlightSegmentedMode("profile", "gps");
      await updateProfileEditLocation(lat, lng);
      showToast("Lokasi GPS berhasil dideteksi!", "compass");
    },
    (error) => {
      console.error("Geolocation error:", error);
      let errMsg = "Gagal mengakses GPS.";
      if (error.code === error.PERMISSION_DENIED) {
        errMsg = "Izin lokasi ditolak oleh pengguna.";
      }
      showToast(errMsg, "compass");
      if (statusEl) statusEl.innerText = "Gagal mendeteksi lokasi";
    },
    { enableHighAccuracy: true, timeout: 8000 },
  );
};

window.saveProfileAddress = async function () {
  const addressInput = document.getElementById("profile-edit-address");
  if (!addressInput) return;

  const addressVal = addressInput.value.trim();
  if (!addressVal) {
    showToast("Alamat tidak boleh kosong", "compass");
    return;
  }

  let lat = window.profileSelectedLat;
  let lng = window.profileSelectedLng;

  if (window.lastGeocodedProfileAddress !== addressVal) {
    showToast("Menggeocoding alamat baru...", "compass");
    const coords = await forwardGeocode(addressVal);
    if (coords) {
      lat = coords.lat;
      lng = coords.lng;
    }
  }

  // Update user state
  if (state.user) {
    state.user.address = addressVal;
    state.user.lat = lat;
    state.user.lng = lng;
    saveUserState();
    updateUserMapMarker();

    showToast("Alamat berhasil diperbarui!", "compass");
    window.closeProfileAddressModal();
  }
};

// ==========================================
// SEGMENTED LOCATION SELECTOR UTILITIES
// ==========================================

function clearSegmentedHighlights(prefix) {
  const defaultBtn = document.getElementById(`${prefix}-loc-default`);
  const gpsBtn = document.getElementById(`${prefix}-loc-gps`);
  if (defaultBtn) {
    defaultBtn.className =
      "py-2.5 rounded-xl cursor-pointer hover:bg-white/50 transition-all duration-200";
  }
  if (gpsBtn) {
    gpsBtn.className =
      "py-2.5 rounded-xl cursor-pointer hover:bg-white/50 transition-all duration-200";
  }
}

function highlightSegmentedMode(prefix, mode) {
  clearSegmentedHighlights(prefix);
  const activeBtn = document.getElementById(`${prefix}-loc-${mode}`);
  if (activeBtn) {
    activeBtn.className =
      "py-2.5 rounded-xl cursor-pointer bg-white text-emerald-600 shadow-xs transition-all duration-200";
  }
}

window.exploreLocationMode = "saved";
window.liveUserLat = null;
window.liveUserLng = null;

window.selectExploreLocationMode = function (mode, event) {
  if (event) event.preventDefault();
  window.exploreLocationMode = mode;

  const savedBtn = document.getElementById("explore-loc-saved");
  const liveBtn = document.getElementById("explore-loc-live");

  if (savedBtn && liveBtn) {
    if (mode === "saved") {
      savedBtn.className =
        "px-2.5 py-1.5 rounded-lg cursor-pointer bg-white text-emerald-600 shadow-xs transition-all duration-200";
      liveBtn.className =
        "px-2.5 py-1.5 rounded-lg cursor-pointer hover:bg-white/50 transition-all duration-200";

      updateUserMapMarker();
      updateMapMarkers();
      showToast("Radar diatur ke alamat tersimpan Anda!", "compass");
    } else if (mode === "live") {
      savedBtn.className =
        "px-2.5 py-1.5 rounded-lg cursor-pointer hover:bg-white/50 transition-all duration-200";
      liveBtn.className =
        "px-2.5 py-1.5 rounded-lg cursor-pointer bg-white text-emerald-600 shadow-xs transition-all duration-200";

      if (navigator.geolocation) {
        showToast("Mendeteksi lokasi GPS live...", "compass");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            window.liveUserLat = position.coords.latitude;
            window.liveUserLng = position.coords.longitude;

            updateUserMapMarker();
            updateMapMarkers();
            showToast("Radar diatur ke lokasi GPS live Anda!", "compass");
          },
          (error) => {
            console.error("Live GPS error:", error);
            showToast(
              "Gagal mengakses GPS live. Kembali ke alamat tersimpan.",
              "compass",
            );
            window.selectExploreLocationMode("saved");
          },
          { enableHighAccuracy: true, timeout: 8000 },
        );
      } else {
        showToast("GPS live tidak didukung browser Anda.", "compass");
        window.selectExploreLocationMode("saved");
      }
    }
  }
};

// ==========================================
// ORDER ROUTE NAVIGATION VIEW LOGIC
// ==========================================

window.trackOrderRoute = function (orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;

  const partner = partners.find((p) => p.name === order.partnerName);
  window.activeTrackOrder = order;
  window.activeTrackPartner = partner;
  window.routeOriginMode = "saved"; // Default back to saved

  // Set titles
  const partnerTitleEl = document.getElementById("route-partner-title");
  if (partnerTitleEl) {
    const isMultiItem = order.items && order.items.length > 1;
    const titleSuffix = isMultiItem ? `${order.itemName} +${order.items.length - 1}` : order.itemName;
    partnerTitleEl.innerText = `Rute ke ${order.partnerName} (${titleSuffix})`;
  }

  // Set order details card content
  const detailsEl = document.getElementById("route-order-details");
  if (detailsEl) {
    detailsEl.classList.remove("items-center");
    detailsEl.classList.add("items-start");
    detailsEl.innerHTML = `
      <img src="${order.image}" alt="${order.itemName}" class="w-12 h-12 rounded-xl object-cover flex-shrink-0 mt-0.5">
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-baseline">
          <h4 class="font-extrabold text-xs text-gray-900 truncate">${order.partnerName}</h4>
          <span class="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">${order.id}</span>
        </div>
        <div class="flex flex-wrap gap-1 mt-1 mb-1.5">
          ${(order.items || [{ name: order.itemName, quantity: order.itemCount || 1 }])
            .map(
              (item) => `
            <span class="bg-gray-50 text-[9px] text-gray-500 font-bold px-2 py-0.5 rounded-full border border-gray-100 flex items-center whitespace-nowrap">
              ${item.name} x${item.quantity}
            </span>
          `,
            )
            .join("")}
        </div>
        <div class="flex justify-between items-center mt-1">
          <span class="text-[9px] text-gray-400 font-semibold">Total Pembayaran:</span>
          <strong class="text-xs font-black text-gray-900">${formatRupiah(order.price)}</strong>
        </div>
      </div>
    `;
  }

  // Update button highlights
  const savedBtn = document.getElementById("route-origin-saved");
  const liveBtn = document.getElementById("route-origin-live");
  if (savedBtn && liveBtn) {
    savedBtn.className =
      "py-2.5 rounded-xl cursor-pointer bg-white text-emerald-600 shadow-xs transition-all duration-200";
    liveBtn.className =
      "py-2.5 rounded-xl cursor-pointer hover:bg-white/50 transition-all duration-200";
  }

  switchView("order-route");
};

window.selectRouteOriginMode = function (mode, event) {
  if (event) event.preventDefault();
  window.routeOriginMode = mode;

  const savedBtn = document.getElementById("route-origin-saved");
  const liveBtn = document.getElementById("route-origin-live");
  if (savedBtn && liveBtn) {
    if (mode === "saved") {
      savedBtn.className =
        "py-2.5 rounded-xl cursor-pointer bg-white text-emerald-600 shadow-xs transition-all duration-200";
      liveBtn.className =
        "py-2.5 rounded-xl cursor-pointer hover:bg-white/50 transition-all duration-200";
      window.initRouteMap();
    } else if (mode === "live") {
      savedBtn.className =
        "py-2.5 rounded-xl cursor-pointer hover:bg-white/50 transition-all duration-200";
      liveBtn.className =
        "py-2.5 rounded-xl cursor-pointer bg-white text-emerald-600 shadow-xs transition-all duration-200";

      // Fetch GPS live and render
      if (navigator.geolocation) {
        showToast("Mengakses lokasi GPS live...", "compass");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            window.liveRouteLat = position.coords.latitude;
            window.liveRouteLng = position.coords.longitude;
            window.initRouteMap();
          },
          (error) => {
            console.error("GPS error:", error);
            showToast(
              "Gagal mengakses GPS live. Kembali ke alamat tersimpan.",
              "compass",
            );
            window.selectRouteOriginMode("saved");
          },
          { enableHighAccuracy: true, timeout: 8000 },
        );
      } else {
        showToast("GPS live tidak didukung browser Anda.", "compass");
        window.selectRouteOriginMode("saved");
      }
    }
  }
};

window.initRouteMap = function () {
  const order = window.activeTrackOrder;
  const partner = window.activeTrackPartner;
  if (!order) return;

  // 1. Get Coordinates
  let userLat = (state.user && state.user.lat) || 40.7265;
  let userLng = (state.user && state.user.lng) || -73.995;

  if (window.routeOriginMode === "live") {
    if (window.liveRouteLat && window.liveRouteLng) {
      userLat = window.liveRouteLat;
      userLng = window.liveRouteLng;
    } else {
      // Trigger GPS fetch
      window.selectRouteOriginMode("live");
      return;
    }
  }

  let partnerLat = (partner && partner.lat) || 40.7259;
  let partnerLng = (partner && partner.lng) || -73.993;

  // 2. Initialize Map
  setTimeout(() => {
    const container = document.getElementById("route-map");
    if (!container) return;

    if (!routeMap) {
      routeMap = L.map("route-map", {
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 20,
        },
      ).addTo(routeMap);
    }

    // Clear old route items
    if (routeUserMarker) routeMap.removeLayer(routeUserMarker);
    if (routePartnerMarker) routeMap.removeLayer(routePartnerMarker);
    if (routePolyline) routeMap.removeLayer(routePolyline);

    // 3. Draw Route Markers
    const userIcon = L.divIcon({
      className: "custom-marker",
      html: '<div class="marker-user"></div>',
      iconSize: [20, 20],
    });
    routeUserMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(
      routeMap,
    );

    const partnerIcon = L.divIcon({
      className: "login-marker-container",
      html: '<div class="marker-pin-login"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    });
    routePartnerMarker = L.marker([partnerLat, partnerLng], {
      icon: partnerIcon,
    }).addTo(routeMap);

    // 4. Draw Route Line (dashed glowing emerald line)
    routePolyline = L.polyline(
      [
        [userLat, userLng],
        [partnerLat, partnerLng],
      ],
      {
        color: "#059669",
        weight: 4,
        opacity: 0.8,
        dashArray: "6, 6",
      },
    ).addTo(routeMap);

    // 5. Fit Map view to show both points
    routeMap.fitBounds(
      [
        [userLat, userLng],
        [partnerLat, partnerLng],
      ],
      { padding: [50, 50] },
    );
    routeMap.invalidateSize();

    // 6. Calculate Route Info
    const distanceKm = getHaversineDistance(
      userLat,
      userLng,
      partnerLat,
      partnerLng,
    );
    const distanceText =
      distanceKm < 1
        ? `${Math.round(distanceKm * 1000)} m`
        : `${distanceKm.toFixed(2)} km`;
    const durationMin = Math.round(distanceKm * 12) || 1; // 12 min per km walk

    const distanceEl = document.getElementById("route-distance-text");
    const durationEl = document.getElementById("route-duration-text");
    if (distanceEl) distanceEl.innerText = `Jarak tempuh: ${distanceText}`;
    if (durationEl) durationEl.innerText = `${durationMin} mnt`;

    // 7. Render dynamic turn directions
    const stepsContainer = document.getElementById("route-steps-container");
    if (stepsContainer) {
      const originName =
        window.routeOriginMode === "saved"
          ? "Alamat Tersimpan"
          : "Lokasi GPS Live";
      const partnerName = order.partnerName;

      stepsContainer.innerHTML = `
        <div class="flex items-start gap-2">
          <i data-lucide="navigation" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
          <span>Mulai dari <strong class="text-gray-900">${originName}</strong> Anda.</span>
        </div>
        <div class="flex items-start gap-2">
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5"></i>
          <span>Jalan lurus sepanjang rute navigasi (${(distanceKm * 0.75).toFixed(2)} km).</span>
        </div>
        <div class="flex items-start gap-2">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
          <span>Tiba di <strong class="text-gray-900">${partnerName}</strong>. Makanan penyelamatan siap diambil!</span>
        </div>
      `;
      // Initialize Lucide icons inside steps container
      if (window.lucide) {
        lucide.createIcons();
      }
    }
  }, 100);
};

function getHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

window.completeTrackedOrder = function () {
  const order = window.activeTrackOrder;
  if (!order) return;

  const orderInState = state.orders.find((o) => o.id === order.id);
  if (orderInState) {
    orderInState.status = "completed";
  }

  // Refresh dynamic parts & save state
  renderOrders();
  saveUserState();

  // Award eco coins
  state.user.coins += 50;
  saveUserState();

  // Add success notification
  state.notifications.unshift({
    id: `n-${Date.now()}`,
    title: "Penyelamatan Selesai!",
    desc: `Hebat! Makanan Anda dari ${order.partnerName} telah diambil. Anda mendapat 50 koin Eco!`,
    time: "Baru saja",
    read: false,
    icon: "check-circle",
    color: "text-emerald-600 bg-emerald-50",
  });
  updateBellDot();

  showToast(
    `Pesanan #${order.id} selesai diambil! +50 Koin Eco`,
    "check-circle",
  );
  switchView("orders");
};

window.toggleFavoritePartner = function (partnerId) {
  if (!state.user.favoritePartners) {
    state.user.favoritePartners = [];
  }
  const index = state.user.favoritePartners.indexOf(partnerId);
  if (index === -1) {
    state.user.favoritePartners.push(partnerId);
    showToast("Mitra ditambahkan ke favorit", "heart");
  } else {
    state.user.favoritePartners.splice(index, 1);
    showToast("Mitra dihapus dari favorit", "heart");
  }
  
  saveUserState();
  
  // Re-render if on partner detail
  if (state.currentView === "partner-detail" && state.selectedPartner && state.selectedPartner.id === partnerId) {
    renderPartnerDetail();
  }
  
  // Re-render if on profile
  if (state.currentView === "profile") {
    renderProfile();
  }

  // Re-render if on explore catalog
  if (state.currentView === "explore") {
    renderExploreCatalog();
    updateMapMarkers();
  }
};

let pendingCartItem = null;
let pendingCartQty = 1;

window.closeCartConflictModal = function () {
  const modal = document.getElementById("cart-conflict-modal");
  if (modal) modal.classList.add("hidden");
  pendingCartItem = null;
  pendingCartQty = 1;
};

window.openCartConflictModal = function (currentPartnerName, newPartnerName, newItem, qty = 1) {
  pendingCartItem = newItem;
  pendingCartQty = qty;
  
  const msgElement = document.getElementById("cart-conflict-message");
  if (msgElement) {
    msgElement.innerHTML = `Anda sudah menambahkan item dari <strong>${currentPartnerName}</strong>. Keranjang hanya bisa diisi oleh item dari satu mitra yang sama.<br><br>Apakah Anda ingin mengosongkan keranjang dan mulai mengisi dengan item dari <strong>${newPartnerName}</strong>?`;
  }
  
  const confirmBtn = document.getElementById("cart-conflict-confirm-btn");
  if (confirmBtn) {
    confirmBtn.onclick = function () {
      state.cart = [];
      state.cart.push({
        id: pendingCartItem.id,
        name: pendingCartItem.name,
        partnerId: pendingCartItem.partnerId,
        partnerName: pendingCartItem.partnerName,
        price: pendingCartItem.price,
        originalPrice: pendingCartItem.originalPrice,
        image: pendingCartItem.image,
        quantity: pendingCartQty,
        pickupWindow: pendingCartItem.pickupWindow,
        co2Reduction: pendingCartItem.co2Reduction,
      });
      
      updateFloatingCart();
      if (state.currentView === "cart") {
        renderCart();
      }
      
      showToast("Keranjang diganti & item berhasil dimasukkan!");
      window.closeCartConflictModal();
    };
  }
  
  const modal = document.getElementById("cart-conflict-modal");
  if (modal) {
    modal.classList.remove("hidden");
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

