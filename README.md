# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Linedin-Assingment Frontend

## 🚀 Deploy Anywhere

You can deploy this frontend on any free hosting platform such as **Vercel**, **Netlify**, or **Render**.

---

## 📝 Submission Checklist

- **GitHub Repo Links:**
  - Frontend: [https://github.com/Ritikshroff/Linedin-Assingment.git](https://github.com/Ritikshroff/Linedin-Assingment.git)
  - Backend: [https://github.com/Ritikshroff/linkedinbackend.git](https://github.com/Ritikshroff/linkedinbackend.git)
- **Live Demo:**  
  [https://linedin-assingment.vercel.app/](https://linedin-assingment.vercel.app/)
- **README includes:**
  - Stack used
  - Setup instructions
  - Admin/demo user logins
  - Any extra features (optional)

---

## 🛠️ Stack Used

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose

---

## ⚡ Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Ritikshroff/Linedin-Assingment.git
   cd Linedin-Assingment
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables (if needed):**
   - Create a `.env` file and set your backend API URL:
     ```
     VITE_API_URL=http://localhost:3000/api
     ```
4. **Run the frontend locally:**
   ```bash
   npm run dev
   ```
5. **Access the app:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Demo/Admin Login

- **Email:** rr824566@gmail.com
- **Password:** hbhjbk

---

## 🌐 API Endpoints

- **Base URL:** `http://localhost:3000/api`
- `/api/auth` - Auth routes
- `/api/posts` - Post CRUD routes
- `/api/users` - User profile routes

---

## ✨ Extra Features

- JWT-based authentication
- Protected routes
- User profile and posts
- Responsive UI

---

## 📄 License

MIT
