// FoodRescue Consumer App State
const state = {
  currentView: 'explore', // 'explore', 'cart', 'checkout', 'impact', 'orders', 'profile', 'success', 'partner-detail', 'food-detail'
  searchQuery: '',
  budgetLimit: 15,
  selectedCategory: 'all',
  selectedPartner: null,
  selectedFoodItem: null,
  
  // User Profile
  user: {
    name: 'Alex',
    coins: 1250,
    co2Saved: 12.0, // kg
    mealsRescued: 24,
    moneySaved: 120.00, // USD
    address: '42 Verdant Avenue, Green Hills, NY 10012'
  },
  
  // Cart State
  cart: [
    {
      id: 'item-1',
      name: 'End of Day Pastry Box',
      partnerId: 'partner-1',
      partnerName: 'Sunrise Bakehouse',
      price: 4.50,
      originalPrice: 18.00,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
      quantity: 1,
      pickupWindow: 'Pickup by 6:00 PM',
      co2Reduction: 0.9 // kg
    },
    {
      id: 'item-2',
      name: 'Imperfect Veggie Bundle',
      partnerId: 'partner-2',
      partnerName: 'Green Valley Grocers',
      price: 8.00,
      originalPrice: 22.00,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
      quantity: 1,
      pickupWindow: 'Pickup by 7:30 PM',
      co2Reduction: 1.5 // kg
    }
  ],
  
  // Payment Options
  selectedPayment: 'ecopay', // 'ecopay', 'card', 'cod'
  ecopayBalance: 42.50,
  
  // Ongoing/Past Orders
  orders: [
    {
      id: 'FR-4829',
      partnerName: "Luigi's Artisanal Bakery",
      itemName: 'Surprise Pizza Box',
      itemCount: 2,
      price: 9.50,
      status: 'ongoing',
      expiresIn: '44m 58s',
      distance: '0.4 miles away',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'FR-8291',
      partnerName: 'The Green Kitchen',
      itemName: 'Organic Salad Mix',
      itemCount: 1,
      price: 6.50,
      status: 'ongoing',
      expiresIn: 'Ready for Pickup',
      distance: '1.2 miles away',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'FR-1279',
      partnerName: 'Urban Greens',
      itemName: 'Superfood Salad Bowl',
      price: 4.50,
      status: 'completed',
      date: 'Oct 24, 2023',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'FR-1102',
      partnerName: 'The Vegan Joint',
      itemName: 'Eco-Burger & Sweet Potato Fries',
      price: 6.25,
      status: 'completed',
      date: 'Oct 21, 2023',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600'
    }
  ],
  
  // Gamification Quests
  quests: [
    {
      id: 'q-1',
      title: 'Rescue 5 meals this week',
      description: 'Collect 5 rescue boxes to reduce food waste.',
      progress: 3,
      target: 5,
      reward: '200 Coins',
      completed: false
    },
    {
      id: 'q-2',
      title: 'Daily Green Login',
      description: 'Open the app daily to discover nearby partners.',
      progress: 1,
      target: 1,
      reward: '20 Coins',
      completed: true
    },
    {
      id: 'q-3',
      title: 'Save 15kg of CO2',
      description: 'Total ecological impact milestones.',
      progress: 12,
      target: 15,
      reward: '500 Coins + Eco-badge',
      completed: false
    }
  ],
  
  // Badges Grid
  badges: [
    { id: 'b-1', name: 'Zero Waste Hero', icon: '🍃', desc: 'Unlocked: Rescued over 10 surplus meals!', unlocked: true },
    { id: 'b-2', name: 'Pastry Rescuer', icon: '🥐', desc: 'Unlocked: Rescued pastries 5 times!', unlocked: true },
    { id: 'b-3', name: 'CO2 Champion', icon: '🌍', desc: 'Unlocked: Saved 10kg of CO2 emissions!', unlocked: true },
    { id: 'b-4', name: 'Morning Savior', icon: '🌅', desc: 'Rescued food before 9:00 AM', unlocked: false },
    { id: 'b-5', name: 'Eco Ambassador', icon: '🎖️', desc: 'Accumulated 2,000 Eco-Coins', unlocked: false },
    { id: 'b-6', name: 'Earth Guardian', icon: '🛡️', desc: 'Complete 10 quests', unlocked: false }
  ],
  
  // Blind Box Tap Interaction
  blindBox: {
    tapsRemaining: 3,
    state: 'closed', // 'closed', 'shaking', 'revealed'
    revealedItem: null
  }
};

// Partners Mock Data
const partners = [
  {
    id: 'partner-1',
    name: 'Sunrise Bakehouse',
    address: '122 Baker St, New York',
    lat: 40.7259,
    lng: -73.9930,
    rating: 4.8,
    distance: '0.3 miles',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    description: 'Artisanal neighborhood bakery committed to zero waste. Specializing in organic sourdough, pastries, and bread loaves.',
    tags: ['Bakery', 'Vegetarian']
  },
  {
    id: 'partner-2',
    name: 'Green Valley Grocers',
    address: '45 Orchard Dr, New York',
    lat: 40.7290,
    lng: -73.9970,
    rating: 4.6,
    distance: '0.8 miles',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    description: 'Fresh local grocery market rescuing imperfect produce bundles and pre-packaged organic greens.',
    tags: ['Veggies', 'Organic']
  },
  {
    id: 'partner-3',
    name: 'Green Bean Cafe',
    address: '88 Commerce St, New York',
    lat: 40.7230,
    lng: -74.0010,
    rating: 4.7,
    distance: '1.2 miles',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    description: 'Eco-conscious coffee shop and kitchen rescuing breakfast bowls, pastries, and lunch grain bowls daily.',
    tags: ['Meals', 'Coffee']
  },
  {
    id: 'partner-4',
    name: "Luigi's Artisanal Bakery",
    address: '12 Bleecker St, New York',
    lat: 40.7275,
    lng: -73.9902,
    rating: 4.9,
    distance: '0.4 miles',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
    description: 'Italian bakery and eatery offering freshly baked sandwich loaves, pizza sheets, and end-of-day sweet boxes.',
    tags: ['Bakery', 'Pizza']
  }
];

// Food Items Catalog
const catalog = [
  {
    id: 'item-1',
    name: 'End of Day Pastry Box',
    partnerId: 'partner-1',
    partnerName: 'Sunrise Bakehouse',
    price: 4.50,
    originalPrice: 18.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    freshnessBadge: 'Freshly Baked Today',
    freshnessClass: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    stockLeft: 3,
    category: 'bakery',
    co2Reduction: 0.9,
    pickupWindow: 'Pickup by 6:00 PM'
  },
  {
    id: 'item-2',
    name: 'Imperfect Veggie Bundle',
    partnerId: 'partner-2',
    partnerName: 'Green Valley Grocers',
    price: 8.00,
    originalPrice: 22.00,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
    freshnessBadge: 'Fresh Organic Crops',
    freshnessClass: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    stockLeft: 1,
    category: 'veggies',
    co2Reduction: 1.5,
    pickupWindow: 'Pickup by 7:30 PM'
  },
  {
    id: 'item-3',
    name: 'Surplus Grain Bowls',
    partnerId: 'partner-3',
    partnerName: 'Green Bean Cafe',
    price: 5.00,
    originalPrice: 11.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
    freshnessBadge: 'Prepared 2h ago',
    freshnessClass: 'bg-amber-50 text-amber-800 border-amber-100',
    stockLeft: 4,
    category: 'meals',
    co2Reduction: 0.8,
    pickupWindow: 'Pickup by 4:00 PM'
  },
  {
    id: 'item-4',
    name: 'Artisan Bread Bundle',
    partnerId: 'partner-1',
    partnerName: 'Sunrise Bakehouse',
    price: 4.50,
    originalPrice: 18.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    freshnessBadge: 'Fresh Sourdough & Baguettes',
    freshnessClass: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    stockLeft: 2,
    category: 'bakery',
    co2Reduction: 1.1,
    pickupWindow: 'Pickup by 6:00 PM'
  },
  {
    id: 'item-5',
    name: 'Surplus Pizza Box',
    partnerId: 'partner-4',
    partnerName: "Luigi's Artisanal Bakery",
    price: 9.50,
    originalPrice: 28.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    freshnessBadge: 'Hot Pizza Slices',
    freshnessClass: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    stockLeft: 2,
    category: 'meals',
    co2Reduction: 1.4,
    pickupWindow: 'Pickup by 8:00 PM'
  }
];

// Leaflet Map instance
let map = null;
let markers = [];

// DOM References & Render Controllers
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  switchView('explore');
  setupNavEventListeners();
  setupSearchAndFilters();
  setupMap();
  renderAll();
  
  // Notification Bell
  document.getElementById('bell-btn').addEventListener('click', () => {
    alert('🔔 Notifications: Your order #FR-8291 is ready for self-pickup!');
  });
}

// Global Nav & Screen Controllers
function setupNavEventListeners() {
  const tabs = ['explore', 'orders', 'impact', 'profile'];
  
  tabs.forEach(tab => {
    const btn = document.getElementById(`nav-${tab}`);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        switchView(tab);
      });
    }
  });
  
  // Floating Cart Icon
  document.getElementById('floating-cart-btn').addEventListener('click', () => {
    switchView('cart');
  });
}

function switchView(viewName, params = {}) {
  state.currentView = viewName;
  
  // Hide all screens
  const screens = document.querySelectorAll('.app-screen');
  screens.forEach(s => s.classList.add('hidden'));
  
  // Show active screen
  const activeScreen = document.getElementById(`screen-${viewName}`);
  if (activeScreen) {
    activeScreen.classList.remove('hidden');
    // Scroll to top
    activeScreen.scrollTop = 0;
  }
  
  // Manage details parameters
  if (viewName === 'partner-detail') {
    state.selectedPartner = partners.find(p => p.id === params.partnerId);
    renderPartnerDetail();
  } else if (viewName === 'food-detail') {
    state.selectedFoodItem = catalog.find(i => i.id === params.itemId);
    renderFoodDetail();
  }
  
  // Update Bottom Nav active highlights
  const tabIds = ['explore', 'orders', 'impact', 'profile'];
  tabIds.forEach(tab => {
    const btn = document.getElementById(`nav-${tab}`);
    const icon = btn.querySelector('.nav-icon');
    const label = btn.querySelector('.nav-label');
    
    if (tab === viewName || (viewName === 'partner-detail' && tab === 'explore') || (viewName === 'food-detail' && tab === 'explore')) {
      icon.className = 'nav-icon text-emerald-600 transition-colors';
      label.className = 'nav-label text-[10px] font-semibold text-emerald-600 transition-colors';
    } else {
      icon.className = 'nav-icon text-gray-400 transition-colors';
      label.className = 'nav-label text-[10px] font-semibold text-gray-400 transition-colors';
    }
  });
  
  // Floating Cart Visibility
  const floatingCart = document.getElementById('floating-cart-btn');
  if (viewName === 'explore' && state.cart.length > 0) {
    floatingCart.classList.remove('hidden');
    // Update badge count
    document.getElementById('cart-badge-count').innerText = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  } else {
    floatingCart.classList.add('hidden');
  }
  
  // Trigger map resize if switching back to explore
  if (viewName === 'explore' && map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
  
  renderAll();
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById('search-bar');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderExploreCatalog();
    updateMapMarkers();
  });
  
  // Budget Slider
  const slider = document.getElementById('budget-slider');
  const sliderVal = document.getElementById('budget-value');
  slider.addEventListener('input', (e) => {
    state.budgetLimit = parseFloat(e.target.value);
    sliderVal.innerText = `$${state.budgetLimit.toFixed(2)}`;
    renderExploreCatalog();
    updateMapMarkers();
  });
  
  // Category Badges
  const badges = document.querySelectorAll('.category-badge');
  badges.forEach(badge => {
    badge.addEventListener('click', () => {
      badges.forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white');
        b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
      });
      badge.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
      badge.classList.add('bg-emerald-600', 'text-white');
      
      state.selectedCategory = badge.dataset.category;
      renderExploreCatalog();
      updateMapMarkers();
    });
  });
}

// Leaflet Map Integration
function setupMap() {
  // Center map around New York coordinates where partners are
  map = L.map('map', {
    zoomControl: false,
    attributionControl: false
  }).setView([40.7265, -73.9950], 15);
  
  // Style with beautiful Stadia Alidade Smooth or OpenStreetMap tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 20
  }).addTo(map);
  
  // Add User Location Pin
  const userIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div class="marker-user"></div>',
    iconSize: [20, 20]
  });
  L.marker([40.7265, -73.9950], { icon: userIcon }).addTo(map);
  
  // Load Partner Markers
  updateMapMarkers();
}

function updateMapMarkers() {
  if (!map) return;
  
  // Clear old markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  
  // Filter partners based on search queries and categories
  const activeItems = getFilteredItems();
  const visiblePartnerIds = [...new Set(activeItems.map(item => item.partnerId))];
  
  partners.forEach(partner => {
    if (!visiblePartnerIds.includes(partner.id)) return;
    
    // Find lowest priced item for this partner
    const partnerItems = activeItems.filter(item => item.partnerId === partner.id);
    if (partnerItems.length === 0) return;
    const lowestPrice = Math.min(...partnerItems.map(i => i.price));
    
    const priceMarker = L.divIcon({
      className: 'custom-marker',
      html: `<div class="marker-label">$${lowestPrice.toFixed(2)}</div>`,
      iconSize: [50, 24]
    });
    
    const marker = L.marker([partner.lat, partner.lng], { icon: priceMarker }).addTo(map);
    
    // Clicking a marker filters search list to that partner or shows Partner Detail
    marker.on('click', () => {
      switchView('partner-detail', { partnerId: partner.id });
    });
    
    markers.push(marker);
  });
}

// Filter Function
function getFilteredItems() {
  return catalog.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(state.searchQuery) || 
                          item.partnerName.toLowerCase().includes(state.searchQuery);
    const matchesBudget = item.price <= state.budgetLimit;
    const matchesCategory = state.selectedCategory === 'all' || item.category === state.selectedCategory;
    
    return matchesSearch && matchesBudget && matchesCategory;
  });
}

// Render Controllers
function renderAll() {
  if (state.currentView === 'explore') {
    renderExploreCatalog();
  } else if (state.currentView === 'cart') {
    renderCart();
  } else if (state.currentView === 'checkout') {
    renderCheckout();
  } else if (state.currentView === 'impact') {
    renderImpact();
  } else if (state.currentView === 'orders') {
    renderOrders();
  } else if (state.currentView === 'profile') {
    renderProfile();
  }
}

// Explore / Catalog rendering
function renderExploreCatalog() {
  const container = document.getElementById('surplus-catalog');
  const items = getFilteredItems();
  
  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-8">
        <div class="text-4xl">🔍</div>
        <p class="text-gray-500 font-medium mt-2">No food items found matching your filters.</p>
        <button onclick="resetFilters()" class="text-emerald-600 font-semibold text-sm mt-1 underline">Reset Filters</button>
      </div>
    `;
    return;
  }
  
  container.innerHTML = items.map(item => `
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
          <span class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">${item.partnerName}</span>
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
            <span class="text-xs text-gray-400 line-through">$${item.originalPrice.toFixed(2)}</span>
            <span class="text-base font-bold text-emerald-600 ml-1">$${item.price.toFixed(2)}</span>
          </div>
          <button onclick="event.stopPropagation(); addItemToCart('${item.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-1.5 shadow-sm transition-transform active:scale-95 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function resetFilters() {
  document.getElementById('search-bar').value = '';
  document.getElementById('budget-slider').value = 25;
  document.getElementById('budget-value').innerText = '$25.00';
  state.searchQuery = '';
  state.budgetLimit = 25;
  state.selectedCategory = 'all';
  
  const badges = document.querySelectorAll('.category-badge');
  badges.forEach(b => {
    b.classList.remove('bg-emerald-600', 'text-white');
    b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
    if (b.dataset.category === 'all') {
      b.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
      b.classList.add('bg-emerald-600', 'text-white');
    }
  });
  
  renderExploreCatalog();
  updateMapMarkers();
}

// Partner Details Screen
function renderPartnerDetail() {
  const p = state.selectedPartner;
  if (!p) return;
  
  const header = document.getElementById('partner-header');
  const details = document.getElementById('partner-details-container');
  
  header.innerHTML = `
    <button onclick="switchView('explore')" class="text-gray-600 hover:text-gray-900 flex items-center gap-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <h2 class="font-bold text-gray-900 text-lg flex-1 text-center pr-5">${p.name}</h2>
  `;
  
  // Find partner's items
  const partnerItems = catalog.filter(item => item.partnerId === p.id);
  const itemsHtml = partnerItems.map(item => `
    <div class="bg-white rounded-xl p-3 border border-gray-100 flex gap-3 shadow-sm" onclick="switchView('food-detail', { itemId: '${item.id}' })">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-lg object-cover">
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-sm text-gray-900 leading-tight">${item.name}</h4>
          <span class="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block">${item.freshnessBadge}</span>
        </div>
        <div class="flex justify-between items-baseline mt-2">
          <div>
            <span class="text-xs text-gray-400 line-through">$${item.originalPrice.toFixed(2)}</span>
            <span class="text-sm font-bold text-emerald-600 ml-1">$${item.price.toFixed(2)}</span>
          </div>
          <button onclick="event.stopPropagation(); addItemToCart('${item.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-1 shadow-sm transition-transform active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
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
          <span class="block text-[10px] text-gray-400 font-semibold uppercase">Rating</span>
        </div>
        <div class="border-l border-gray-100 h-8"></div>
        <div>
          <span class="text-gray-900 text-lg font-bold">${p.distance}</span>
          <span class="block text-[10px] text-gray-400 font-semibold uppercase">Distance</span>
        </div>
        <div class="border-l border-gray-100 h-8"></div>
        <div>
          <span class="text-gray-900 text-lg font-bold">0.9kg</span>
          <span class="block text-[10px] text-gray-400 font-semibold uppercase">CO₂ Saved/Box</span>
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-sm mb-1">About the Partner</h4>
        <p class="text-xs text-gray-500 leading-relaxed">${p.description}</p>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-sm mb-3">Available Rescues</h4>
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
  
  const header = document.getElementById('food-header');
  const content = document.getElementById('food-detail-container');
  
  header.innerHTML = `
    <button onclick="switchView('explore')" class="text-gray-600 hover:text-gray-900 flex items-center gap-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <h2 class="font-bold text-gray-900 text-lg flex-1 text-center pr-5">Product Details</h2>
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
          <span class="text-xs text-gray-600 font-semibold">${item.rating} (5 reviews)</span>
        </div>
      </div>
      
      <div class="flex justify-between items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
        <div>
          <span class="text-xs text-emerald-800">Original Price: <span class="line-through font-semibold">$${item.originalPrice.toFixed(2)}</span></span>
          <div class="text-xl font-extrabold text-emerald-600 mt-0.5">$${item.price.toFixed(2)}</div>
        </div>
        <div class="bg-emerald-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-lg">
          Save 75% OFF
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-3">
        <span class="text-2xl">🌱</span>
        <div>
          <h4 class="font-bold text-xs text-gray-900">Eco-Savings Impact</h4>
          <p class="text-[11px] text-gray-500">Rescuing this bag prevents approx. <span class="font-bold text-emerald-600">${item.co2Reduction} kg of CO2</span> from entering the atmosphere!</p>
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">What's Inside</h4>
        <p class="text-xs text-gray-500 leading-relaxed">A surprise assortment of our daily-baked goods that didn't sell today. Usually includes bread loaves, croissants, bagels, and sweet pastries. Perfectly fresh, delicious, and ready to be rescued!</p>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Akreditasi Kesegaran (Freshness Accreditation)</h4>
        <div class="flex gap-2">
          <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-100 flex items-center gap-1">
            <span>🛡️</span> Safe to Consume
          </span>
          <span class="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-100 flex items-center gap-1">
            <span>❄️</span> Keep Refrigerated
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
          <span>Rescue Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </div>
  `;
  state.detailQty = 1;
}

window.adjustDetailsQty = function(delta) {
  state.detailQty = Math.max(1, state.detailQty + delta);
  document.getElementById('detail-qty-indicator').innerText = state.detailQty;
};

window.addDetailsToCart = function() {
  const item = state.selectedFoodItem;
  if (!item) return;
  
  const existing = state.cart.find(c => c.id === item.id);
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
      co2Reduction: item.co2Reduction
    });
  }
  
  alert(`Added ${state.detailQty}x ${item.name} to Cart!`);
  switchView('cart');
};

// Cart Rendering & Handlers
function renderCart() {
  const container = document.getElementById('cart-items-list');
  const subtotalLabel = document.getElementById('cart-subtotal');
  const platformFeeLabel = document.getElementById('cart-platform-fee');
  const taxLabel = document.getElementById('cart-tax');
  const totalLabel = document.getElementById('cart-total');
  const savingsBanner = document.getElementById('cart-eco-savings-banner');
  const checkoutContainer = document.getElementById('cart-checkout-container');
  
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 px-4">
        <div class="text-5xl mb-4">🛒</div>
        <h3 class="font-bold text-gray-900 text-lg">Your Cart is empty</h3>
        <p class="text-gray-500 text-xs mt-1">Rescuing meals will keep money in your wallet and prevent CO2 from polluting the atmosphere!</p>
        <button onclick="switchView('explore')" class="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm text-sm">Start Rescuing</button>
      </div>
    `;
    checkoutContainer.classList.add('hidden');
    savingsBanner.classList.add('hidden');
    return;
  }
  
  checkoutContainer.classList.remove('hidden');
  savingsBanner.classList.remove('hidden');
  
  // Subtotal calculations
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalOriginal = state.cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const totalSavings = totalOriginal - subtotal;
  const co2Prevented = state.cart.reduce((sum, item) => sum + (item.co2Reduction * item.quantity), 0);
  
  const platformFee = 0.99;
  const tax = subtotal * 0.05;
  const total = subtotal + platformFee + tax;
  
  // Render Cart Item List
  container.innerHTML = state.cart.map(item => `
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
            <span class="text-[10px] text-gray-400 line-through">$${item.originalPrice.toFixed(2)}</span>
            <span class="text-sm font-extrabold text-emerald-600 ml-1">$${item.price.toFixed(2)}</span>
          </div>
          
          <div class="flex items-center border border-gray-100 rounded-lg px-1.5 py-0.5 bg-gray-50">
            <button onclick="updateCartQuantity('${item.id}', -1)" class="w-5 h-5 flex items-center justify-center font-bold text-gray-400 hover:text-gray-900">-</button>
            <span class="w-6 text-center font-bold text-xs text-gray-900">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.id}', 1)" class="w-5 h-5 flex items-center justify-center font-bold text-gray-400 hover:text-gray-900">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Render Savings Box
  savingsBanner.innerHTML = `
    <div class="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex items-center gap-3">
      <div class="bg-emerald-600 text-white rounded-full p-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-sm text-emerald-900">Total Savings: $${totalSavings.toFixed(2)}!</h4>
        <p class="text-[11px] text-emerald-700">Plus, you're preventing <span class="font-bold">${co2Prevented.toFixed(1)}kg</span> of CO₂ emissions today.</p>
      </div>
    </div>
  `;
  
  subtotalLabel.innerText = `$${subtotal.toFixed(2)}`;
  platformFeeLabel.innerText = `$${platformFee.toFixed(2)}`;
  taxLabel.innerText = `$${tax.toFixed(2)}`;
  totalLabel.innerText = `$${total.toFixed(2)}`;
  
  // Bottom Sticky Total Card
  document.getElementById('checkout-bar-total').innerText = `$${total.toFixed(2)}`;
}

window.addItemToCart = function(itemId) {
  const item = catalog.find(i => i.id === itemId);
  if (!item) return;
  
  const existing = state.cart.find(c => c.id === itemId);
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
      co2Reduction: item.co2Reduction
    });
  }
  
  alert(`Added ${item.name} to Cart!`);
  
  // Update floating badge
  const floatingCart = document.getElementById('floating-cart-btn');
  floatingCart.classList.remove('hidden');
  document.getElementById('cart-badge-count').innerText = state.cart.reduce((sum, item) => sum + item.quantity, 0);
};

window.updateCartQuantity = function(itemId, delta) {
  const item = state.cart.find(c => c.id === itemId);
  if (!item) return;
  
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    renderCart();
  }
};

window.removeFromCart = function(itemId) {
  state.cart = state.cart.filter(c => c.id !== itemId);
  
  // Update floating badge
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (count > 0) {
    document.getElementById('cart-badge-count').innerText = count;
  } else {
    document.getElementById('floating-cart-btn').classList.add('hidden');
  }
  
  renderCart();
};

window.goToCheckout = function() {
  switchView('checkout');
};

// Checkout Page rendering
function renderCheckout() {
  const checkoutItems = document.getElementById('checkout-items-list');
  const subtotalLabel = document.getElementById('checkout-subtotal');
  const ecoDiscountLabel = document.getElementById('checkout-eco-discount');
  const deliveryLabel = document.getElementById('checkout-delivery-fee');
  const totalLabel = document.getElementById('checkout-total');
  const addressLabel = document.getElementById('checkout-address');
  
  addressLabel.innerText = state.user.address;
  
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalOriginal = state.cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const ecoDiscount = totalOriginal - subtotal;
  
  // Render checkout items (summary list)
  checkoutItems.innerHTML = state.cart.map(item => `
    <div class="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
      <img src="${item.image}" alt="${item.name}" class="w-10 h-10 rounded-lg object-cover">
      <div class="flex-1">
        <h4 class="font-bold text-xs text-gray-900 line-clamp-1">${item.name}</h4>
        <p class="text-[10px] text-gray-400 font-semibold">Qty: ${item.quantity}</p>
      </div>
      <span class="text-xs font-bold text-gray-900">$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');
  
  // We mock a fixed delivery fee or self-pickup
  const deliveryFee = 0.00; // Self-pickup is always $0
  const tax = subtotal * 0.05;
  const platformFee = 0.99;
  const total = subtotal + deliveryFee + tax + platformFee;
  
  subtotalLabel.innerText = `$${(subtotal + tax + platformFee).toFixed(2)}`;
  ecoDiscountLabel.innerText = `-$${ecoDiscount.toFixed(2)}`;
  deliveryLabel.innerText = deliveryFee === 0 ? 'FREE (Self-Pickup)' : `$${deliveryFee.toFixed(2)}`;
  totalLabel.innerText = `$${total.toFixed(2)}`;
  
  // Default wallet highlights
  selectPayment(state.selectedPayment);
}

window.selectPayment = function(method) {
  state.selectedPayment = method;
  
  // Reset border highlights
  const paymentIds = ['ecopay', 'card', 'cod'];
  paymentIds.forEach(id => {
    const el = document.getElementById(`pay-method-${id}`);
    const check = document.getElementById(`pay-check-${id}`);
    if (id === method) {
      el.classList.add('border-emerald-600', 'bg-emerald-50/40');
      check.classList.remove('hidden');
    } else {
      el.classList.remove('border-emerald-600', 'bg-emerald-50/40');
      check.classList.add('hidden');
    }
  });
};

window.placeOrder = function() {
  if (state.cart.length === 0) return;
  
  // Create ongoing order
  const orderId = `FR-${Math.floor(1000 + Math.random() * 9000)}`;
  const firstItem = state.cart[0];
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 1.62; // including tax/fees
  const co2SavedToday = state.cart.reduce((sum, item) => sum + (item.co2Reduction * item.quantity), 0);
  
  const newOrder = {
    id: orderId,
    partnerName: firstItem.partnerName,
    itemName: firstItem.name,
    itemCount: totalItems,
    price: totalPrice,
    status: 'ongoing',
    expiresIn: '1h 59m',
    distance: '0.8 miles away',
    image: firstItem.image
  };
  
  // Add to order list at the beginning
  state.orders.unshift(newOrder);
  
  // Update impact metrics
  state.user.co2Saved += co2SavedToday;
  state.user.mealsRescued += totalItems;
  
  // Show Success Screen with details
  renderSuccessScreen(orderId, firstItem.partnerName, co2SavedToday, totalItems);
  switchView('success');
  
  // Clear Cart
  state.cart = [];
  document.getElementById('floating-cart-btn').classList.add('hidden');
};

function renderSuccessScreen(orderId, partnerName, co2, meals) {
  const container = document.getElementById('success-summary-container');
  
  container.innerHTML = `
    <div class="bg-emerald-600/10 border border-emerald-500/20 rounded-2xl p-4 text-center">
      <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl mb-2">✓</div>
      <h3 class="font-bold text-gray-900 text-base">Order Placed Successfully!</h3>
      <p class="text-xs text-gray-500 mt-1">Thank you for rescuing delicious food and helping our planet thrive.</p>
    </div>
    
    <div class="grid grid-cols-2 gap-3 mt-4">
      <div class="bg-emerald-800 text-white rounded-2xl p-3 border border-emerald-700 shadow-sm flex flex-col justify-between">
        <span class="text-[10px] uppercase font-semibold tracking-wider text-emerald-200">CO₂ Prevented</span>
        <span class="text-lg font-black mt-2 font-heading">${co2.toFixed(1)}kg CO₂</span>
        <span class="text-[9px] text-emerald-200 mt-1">Environmental Gain</span>
      </div>
      
      <div class="bg-amber-500 text-white rounded-2xl p-3 border border-amber-400 shadow-sm flex flex-col justify-between">
        <span class="text-[10px] uppercase font-semibold tracking-wider text-amber-100">Meals Rescued</span>
        <span class="text-lg font-black mt-2 font-heading">${meals} ${meals === 1 ? 'Meal' : 'Meals'}</span>
        <span class="text-[9px] text-amber-100 mt-1">Social Contribution</span>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mt-4 space-y-3">
      <div class="flex justify-between items-center pb-2 border-b border-gray-50">
        <span class="text-xs text-gray-400 font-semibold uppercase">Order ID</span>
        <span class="text-xs font-bold text-gray-900">#${orderId}</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-gray-50">
        <span class="text-xs text-gray-400 font-semibold uppercase">Pickup Window</span>
        <span class="text-xs font-bold text-gray-900">Today, 4:00 PM - 6:00 PM</span>
      </div>
      <div class="flex justify-between items-start">
        <span class="text-xs text-gray-400 font-semibold uppercase mt-0.5">Location</span>
        <span class="text-xs font-bold text-gray-900 text-right max-w-[180px]">${partnerName} - ${state.user.address.split(',')[0]}</span>
      </div>
    </div>
    
    <!-- Eco Impact Quote -->
    <div class="relative rounded-2xl overflow-hidden mt-4 h-32 flex items-end">
      <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <p class="relative text-white font-medium text-[11px] p-3 leading-relaxed italic z-10">
        "Small actions, big change. Every rescue reduces methane from landfills and feeds our community."
      </p>
    </div>
  `;
}

// Eco-Impact Screen
function renderImpact() {
  // Update header coins balance
  document.getElementById('impact-coins-balance').innerText = state.user.coins.toLocaleString();
  document.getElementById('impact-co2-saved').innerText = `${state.user.co2Saved.toFixed(1)} kg`;
  document.getElementById('impact-meals-rescued').innerText = `${state.user.mealsRescued} Meals`;
  
  // Render Quests
  const questContainer = document.getElementById('quests-list-container');
  questContainer.innerHTML = state.quests.map(q => {
    const isCompleted = q.progress >= q.target;
    const progressPercent = Math.min(100, (q.progress / q.target) * 100);
    
    return `
      <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-2">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-bold text-sm text-gray-900 leading-snug">${q.title}</h4>
            <p class="text-xs text-gray-400 font-medium">${q.description}</p>
          </div>
          <span class="text-xs font-bold ${isCompleted ? 'text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full' : 'text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full'}">
            +${q.reward}
          </span>
        </div>
        
        <div class="space-y-1">
          <div class="w-full bg-gray-100 rounded-full h-2">
            <div class="bg-emerald-600 h-2 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
          </div>
          <div class="flex justify-between items-center text-[10px] text-gray-400 font-bold">
            <span>Progress</span>
            <span>${q.progress}/${q.target} completed</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Render Badges
  const badgeContainer = document.getElementById('badges-grid-container');
  badgeContainer.innerHTML = state.badges.map(b => `
    <div class="bg-white rounded-2xl p-3 border border-gray-100 shadow-xs text-center flex flex-col items-center justify-center relative group ${b.unlocked ? '' : 'opacity-50'}">
      <span class="text-3xl filter ${b.unlocked ? '' : 'grayscale'}">${b.icon}</span>
      <h5 class="font-bold text-xs text-gray-900 mt-2">${b.name}</h5>
      <p class="text-[9px] text-gray-400 leading-tight mt-0.5 line-clamp-2">${b.desc}</p>
    </div>
  `).join('');
  
  // Render Rewards Shop
  renderRewardShop();
}

function renderRewardShop() {
  const shopContainer = document.getElementById('reward-shop-container');
  
  const rewards = [
    { id: 'reward-1', title: 'Surprise Blind Box', desc: 'Contains food worth up to $30 from local bakeries.', coins: 500, popular: true, tag: 'Popular' },
    { id: 'reward-2', title: 'Mega Raffle Entry', desc: 'Chance to win a $500 Zero-Waste Kitchen Kit.', coins: 100, endsSoon: true, tag: 'Ends Soon' },
    { id: 'reward-3', title: 'Plant a Tree', desc: "We'll plant a native tree in your name in the Amazon.", coins: 500, tag: 'Eco Friendly' },
    { id: 'reward-4', title: '$10 Partner Voucher', desc: 'Direct discount at any of our Platinum partners.', coins: 1000, tag: 'Cash Value' }
  ];
  
  shopContainer.innerHTML = rewards.map(r => {
    const isAffordable = state.user.coins >= r.coins;
    
    // Check if it's the Blind Box to hook the game
    const clickAction = r.id === 'reward-1' ? 'openBlindBoxModal()' : `redeemReward('${r.id}', ${r.coins})`;
    
    return `
      <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="p-3.5">
          <div class="flex justify-between items-start">
            <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${r.popular ? 'bg-emerald-50 text-emerald-800' : r.endsSoon ? 'bg-amber-50 text-amber-800' : 'bg-gray-100 text-gray-500'}">
              ${r.tag}
            </span>
          </div>
          
          <h4 class="font-bold text-sm text-gray-900 mt-2">${r.title}</h4>
          <p class="text-[10px] text-gray-400 leading-tight mt-1">${r.desc}</p>
        </div>
        
        <div class="px-3.5 pb-3.5 pt-2 border-t border-gray-50 flex items-center justify-between gap-1">
          <div class="flex items-center gap-0.5 text-amber-500 font-extrabold text-xs">
            🪙 <span>${r.coins}</span>
          </div>
          <button onclick="${clickAction}" class="text-[10px] font-bold px-3 py-1.5 rounded-lg ${isAffordable ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}">
            Exchange
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.redeemReward = function(rewardId, cost) {
  if (state.user.coins < cost) {
    alert('Insufficient Eco-Coins balance.');
    return;
  }
  
  state.user.coins -= cost;
  alert('🎉 Reward Redeemed Successfully! Code sent to your email.');
  renderImpact();
};

// Interactive Blind Box Mystery Game (Gamification Page)
window.openBlindBoxModal = function() {
  if (state.user.coins < 500) {
    alert('Insufficient Eco-Coins balance.');
    return;
  }
  
  state.blindBox = {
    tapsRemaining: 3,
    state: 'closed',
    revealedItem: null
  };
  
  // Show blind box overlay
  const overlay = document.getElementById('blindbox-overlay');
  overlay.classList.remove('hidden');
  renderBlindBoxState();
};

window.closeBlindBoxModal = function() {
  const overlay = document.getElementById('blindbox-overlay');
  overlay.classList.add('hidden');
  renderImpact();
};

window.tapBlindBox = function() {
  if (state.blindBox.state === 'revealed') return;
  
  const box = document.getElementById('blindbox-card');
  box.classList.add('shake-box');
  
  // Remove shake after animation completes
  setTimeout(() => {
    box.classList.remove('shake-box');
  }, 500);
  
  state.blindBox.tapsRemaining--;
  
  if (state.blindBox.tapsRemaining <= 0) {
    state.blindBox.state = 'revealed';
    // Deduct coins
    state.user.coins -= 500;
    // Select random item from catalog as reward
    const rand = Math.floor(Math.random() * catalog.length);
    state.blindBox.revealedItem = catalog[rand];
  }
  
  renderBlindBoxState();
};

function renderBlindBoxState() {
  const container = document.getElementById('blindbox-inner-content');
  const bb = state.blindBox;
  
  if (bb.state === 'closed') {
    container.innerHTML = `
      <div id="blindbox-card" onclick="tapBlindBox()" class="w-40 h-40 bg-amber-50 rounded-3xl border border-amber-200 flex items-center justify-center text-6xl shadow-md cursor-pointer hover:scale-105 transition-transform mx-auto">
        🎁
      </div>
      <div class="text-center mt-6">
        <h3 class="font-bold text-gray-900 text-base">Surprise Blind Box</h3>
        <p class="text-xs text-gray-400 mt-1">Tap the gift box <span class="font-bold text-emerald-600">${bb.tapsRemaining} times</span> to reveal your rescue surprise!</p>
        <div class="text-amber-500 font-black text-sm mt-3">🪙 500 Coins</div>
      </div>
    `;
  } else if (bb.state === 'revealed') {
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
          <span class="text-[9px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-100">Mystery Meal Revealed!</span>
          <h3 class="font-bold text-gray-950 text-base mt-2 leading-snug">${item.name}</h3>
          <p class="text-[11px] text-gray-500 mt-1">Claim this fresh surplus meal. Highly rated and ready for self-pickup.</p>
        </div>
        
        <div class="bg-gray-50 rounded-xl p-3 border border-gray-100 text-center space-y-1.5">
          <div class="text-[10px] text-gray-400 font-semibold uppercase">Claiming Policy</div>
          <p class="text-[9px] text-gray-500 leading-normal">⚠️ You have <span class="font-bold text-amber-500">30 minutes</span> to pick up once claimed. Cancel penalty refunds only 25% of coins (125 coins).</p>
        </div>
        
        <div class="flex gap-2">
          <button onclick="closeBlindBoxModal()" class="flex-1 border border-gray-200 text-gray-600 font-bold py-2 rounded-xl text-xs hover:bg-gray-50">Cancel (25% Refund)</button>
          <button onclick="claimBlindMeal('${item.id}')" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-xs shadow-sm">Claim Meal!</button>
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
        <h3 class="font-bold text-gray-900 text-base">Surprise Blind Box</h3>
        <p class="text-xs text-gray-400 mt-1">Keep tapping! <span class="font-bold text-emerald-600">${bb.tapsRemaining} more</span> to open!</p>
        <div class="text-amber-500 font-black text-sm mt-3">🪙 500 Coins</div>
      </div>
    `;
  }
}

window.claimBlindMeal = function(itemId) {
  const item = catalog.find(i => i.id === itemId);
  if (!item) return;
  
  // Directly add to ongoing orders (free pickup)
  const orderId = `FR-${Math.floor(1000 + Math.random() * 9000)}`;
  const newOrder = {
    id: orderId,
    partnerName: item.partnerName,
    itemName: `${item.name} (Mystery Box)`,
    itemCount: 1,
    price: 0.00, // Claimed via coins
    status: 'ongoing',
    expiresIn: '30m 00s',
    distance: '1.2 miles away',
    image: item.image
  };
  
  state.orders.unshift(newOrder);
  state.user.mealsRescued += 1;
  state.user.co2Saved += item.co2Reduction;
  
  alert('🎉 Surprise box claimed! View it in your ongoing rescues list.');
  closeBlindBoxModal();
  switchView('orders');
};

// Orders / Rescues screen
function renderOrders() {
  const container = document.getElementById('orders-list-container');
  
  const ongoing = state.orders.filter(o => o.status === 'ongoing');
  const past = state.orders.filter(o => o.status === 'completed');
  
  const ongoingHtml = ongoing.length === 0 ? `
    <p class="text-xs text-gray-400 text-center py-4">No active ongoing rescues at the moment.</p>
  ` : ongoing.map(o => `
    <div class="bg-white rounded-2xl p-3.5 border border-gray-100 shadow-sm flex gap-3.5 relative">
      <img src="${o.image}" alt="${o.itemName}" class="w-16 h-16 rounded-xl object-cover">
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="font-bold text-sm text-gray-900 leading-snug">${o.partnerName}</h4>
            <span class="text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              ⏱️ ${o.expiresIn}
            </span>
          </div>
          <p class="text-[10px] text-gray-400 mt-0.5">${o.itemName} (${o.itemCount} ${o.itemCount === 1 ? 'item' : 'items'})</p>
        </div>
        
        <div class="flex items-center justify-between mt-3">
          <span class="text-[10px] text-gray-400 font-semibold">📍 ${o.distance}</span>
          <button onclick="alert('🧭 Opening Active Navigation Map to ${o.partnerName}...')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg shadow-xs transition-colors">
            Track Order
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  const pastHtml = past.length === 0 ? `
    <p class="text-xs text-gray-400 text-center py-4">No past rescue history yet.</p>
  ` : past.map(o => `
    <div class="bg-white rounded-xl p-3 border border-gray-50 shadow-xs flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="${o.image}" alt="${o.itemName}" class="w-12 h-12 rounded-lg object-cover">
        <div>
          <h4 class="font-bold text-xs text-gray-900 leading-tight">${o.partnerName}</h4>
          <p class="text-[9px] text-gray-400 mt-0.5">${o.itemName}</p>
          <span class="text-[9px] text-gray-400 block">${o.date}</span>
        </div>
      </div>
      
      <div class="text-right space-y-1.5">
        <div class="text-xs font-bold text-gray-900">$${o.price.toFixed(2)}</div>
        <button onclick="reorderItem('${o.partnerName}')" class="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 hover:bg-emerald-100 transition-colors">
          Reorder
        </button>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = `
    <div>
      <div class="flex justify-between items-center mb-3">
        <h3 class="font-bold text-gray-900 text-sm">Ongoing Rescues</h3>
        <span class="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full">${ongoing.length} Active</span>
      </div>
      <div class="space-y-3.5">
        ${ongoingHtml}
      </div>
    </div>
    
    <div class="pt-2">
      <h3 class="font-bold text-gray-900 text-sm mb-3">Past Rescues</h3>
      <div class="space-y-3">
        ${pastHtml}
      </div>
    </div>
  `;
}

window.reorderItem = function(partnerName) {
  // Find partner's items
  const partner = partners.find(p => p.name === partnerName);
  if (partner) {
    switchView('partner-detail', { partnerId: partner.id });
  } else {
    alert(`Redirecting to ${partnerName} surplus catalog...`);
  }
};

// Profile Screen rendering
function renderProfile() {
  document.getElementById('profile-name').innerText = state.user.name;
  document.getElementById('profile-address').innerText = state.user.address;
  document.getElementById('profile-co2').innerText = `${state.user.co2Saved.toFixed(1)} kg`;
  document.getElementById('profile-meals').innerText = state.user.mealsRescued;
  document.getElementById('profile-saved').innerText = `$${state.user.moneySaved.toFixed(2)}`;
  document.getElementById('profile-coins').innerText = state.user.coins.toLocaleString();
}
