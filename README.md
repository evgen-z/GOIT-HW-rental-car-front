Sure! Here's the full README content as one uninterrupted plain text block you can save directly as `README.md`:

````
# 🚗 Car Rental Catalogue

A modern car rental catalogue app built with **React**, **Redux**, **MUI**, and **Flatpickr**. Browse, filter, and manage favorite rental cars with a responsive and sleek UI.

## ✨ Features

- Browse car listings with images, details, and pricing
- Advanced filtering (brand, mileage, price)
- Favorites system with persistent UI state
- Responsive design and clean layout
- Custom date picker with Flatpickr
- Global styling with CSS Modules and MUI customization

## 🧰 Tech Stack

- **React**
- **Redux Toolkit** (for state management)
- **React Router**
- **MUI (Joy UI)** for components and theming
- **Flatpickr** for custom date selection
- **CSS Modules** for scoped styles

## 📦 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/car-rental-catalogue.git
   cd car-rental-catalogue
    ````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
│
├── components/         # Reusable UI components (e.g. Filters, Cards, Buttons)
├── pages/              # Route-based pages (Catalogue, Home, etc.)
├── redux/              # Redux slices, selectors, and async operations
├── assets/             # Icons, images, etc.
├── styles/             # Global and module-based CSS
└── App.jsx             # App root and routing
```

## ⚙️ Customization

- **Global Fonts & Theme:** MUI theme is customized with `font-weight: 500`, `font-size: 16px`, and consistent `line-height`.
- **Date Picker:** Customized using Flatpickr to resemble the browser's native look.
- **Select & Inputs:** Styled with MUI `sx` prop and additional tweaks for placeholder control and focus states.

## 🚧 Known Issues / Notes

- Ensure your backend (if connected) returns the expected car data shape.
- Flatpickr replaces the native date input for better control and consistent styling.
- Some mobile styling adjustments may still be in progress.

## 📄 License

MIT

---

**Made with ❤️ by \Yevhen Zoidze-Mishchenko**

```