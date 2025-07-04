// firebase.config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Configuración directa (no recomendada para producción, pero útil en pruebas/local)
const firebaseConfig = {
  apiKey: "AIzaSyAFz2oCb9kiXlB-A6jV-RCQMAyyvk7whuA",
  authDomain: "ecommerce-platform-22154.firebaseapp.com",
  projectId: "ecommerce-platform-22154",
  storageBucket: "ecommerce-platform-22154.appspot.com", // ← corregido
  messagingSenderId: "571574323815",
  appId: "1:571574323815:web:f72fe3cffd347d5085a2c2",
  measurementId: "G-8PD5B85F3D"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Analytics solo si el entorno lo permite (evita crash en SSR o Node.js)
const analyticsPromise = isSupported()
  .then((supported) => (supported ? getAnalytics(app) : null))
  .catch(() => null);

export { app, analyticsPromise };
