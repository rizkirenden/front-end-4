import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css"; // Import stylesheet global
import App from "./App"; // Komponen utama aplikasi
import store from "./store/redux/store"; // Import Redux store
import reportWebVitals from "./reportWebVitals"; // Untuk mengukur performa aplikasi

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* Membungkus aplikasi dengan Redux Provider */}
    <React.StrictMode>
      {" "}
      {/* Membungkus aplikasi dengan StrictMode untuk deteksi masalah */}
      <App />
    </React.StrictMode>
  </Provider>
);

// Untuk melaporkan web vitals (opsional, bisa dihilangkan jika tidak diperlukan)
reportWebVitals();
