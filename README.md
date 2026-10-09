# 🌶️ Scoville Hot Sauce E-Commerce Store

An interactive, high-performance web application built with **Angular 18+ (Standalone Components)**. Designed for hot sauce lovers, this application showcases a curated collection of artisanal hot sauces categorized by their Scoville Heat Units (SHU).

## ✨ Features

- **🔥 Dynamic Product Catalog:** Browse a wide variety of hot sauces with category badges, Scoville heat levels, and price tags.
- **🔍 Real-Time Search & Filtering:** Instantly search sauces by name or filter by spiciness categories (Mild, Medium, Hot, Extra Hot, Extreme).
- **📖 Product Detail Pages (`/product/:id`):** Deep-dive into technical specifications, including origin, flavor profile, Scoville Heat Units (SHU), recommended culinary uses, and warnings.
- **🛒 Dynamic Shopping Cart:** Add products, adjust quantities dynamically, and view total calculations reactively.
- **💳 Interactive Checkout & Auto-Formatting:** Includes auto-formatting for payment details:
  - **Credit Card Number:** Grouped automatically into 4-digit blocks (`1234 5678 9012 3456`).
  - **Expiry Date:** Auto-formatted to `MM/YY` pattern.
  - Simulated payment processing with order confirmation IDs.
- **🎨 Dark & Fiery UI:** Fully responsive dark-themed styling designed using custom CSS and modern Flexbox/Grid layouts.

## 🛠️ Tech Stack & Architecture

- **Framework:** Angular 18+ (Standalone Components API)
- **State Management & Async:** RxJS (`BehaviorSubject`, `Observable`, `switchMap`, `map`)
- **Routing:** Angular Router (Lazy-loaded standalone component routes)
- **Forms:** Angular FormsModule (`ngModel` with custom input formatting logic)
- **Styling:** Modular Component-based CSS