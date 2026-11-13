// ============================================================================
// Firebase Configuration for Sri Lankan Oil Lamp (Pahana) Ceremony
// ============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyDz2tXS4DZfU1GQezp2NyUZJ4oU_QSh5yI",
  authDomain: "year-end-lighting-oil-lamp.firebaseapp.com",
  databaseURL: "https://year-end-lighting-oil-lamp-default-rtdb.firebaseio.com",
  projectId: "year-end-lighting-oil-lamp",
  storageBucket: "year-end-lighting-oil-lamp.firebasestorage.app",
  messagingSenderId: "1089802445328",
  appId: "1:1089802445328:web:0f02cdbb4962b1f0dfe095",
  measurementId: "G-KCV78Z03S5"
};

// Export for module systems or attach to window for standard scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseConfig;
} else {
  window.firebaseConfig = firebaseConfig;
}
