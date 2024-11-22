# Project Folder Structure 📂

---

## `src/` Overview

This is the main source folder, containing all the essential files and directories for the project.

### 1. **`components/`**

- Reusable components used across the project.
- Keep components small and focused on a single responsibility.
- Name components clearly based on their functionality (e.g., Button.svelte, Modal.svelte).

### 2. **`constants/`**

- Stores reusable constants across the project (e.g., apiEndpoints.ts, httpStatusCodes.ts).
- Organize by category for clarity.

### 3. **`lib/`**

- Stores global utilities, custom actions, and validation logic.

  ```bash
  lib/
    ├── actions/
    ├── validations/
    ├── index.ts
  ```

### 4. **`modules/`**

- Each feature or module (e.g., auth, profile) resides here. This promotes separation of concerns.
- Each module contains its own components, stores, and services.
- To deep dive in `modules` folder, please click [here](https://github.com/aditya-v22/jacksclub/tree/main/src/modules/README.md)

### 5. **`routes/`**

- Manages application routing.

### 6. **`stores/`**

- Contains Svelte stores for managing global, shareable state.

---

## **`static/`** Folder 📁  

The `static/` folder contains files that are served directly without processing or transformation by SvelteKit. Use this folder for:  

- **Public assets:** Images, icons, fonts, or other files accessed directly via a URL (e.g., `/static/logo.png`).  
- **Favicons:** Application icons or meta images.  
- **Robots.txt / Sitemap.xml:** SEO-related files.  
- **External files:** Any resources (PDFs, documents) to be downloaded directly by users.  

⚠️ **Note:** Avoid placing confidential files here since everything in `static/` is publicly accessible.

---

## Additional Considerations 🛠️

- **Code Consistency:** Follow a consistent coding style and use tools like Prettier or ESLint.
- **Error Handling:** Implement centralized error handling for improved maintainability.
- **Documentation:** Maintain up-to-date comments and documentation for each module and utility.
- **Testing:** Place unit and integration tests close to the corresponding files or in a tests/ folder.
