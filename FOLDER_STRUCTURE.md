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

### 3. **`assets/`**

- Static assets like images, icons, and fonts.
- Use subfolders for better organization.

### 4. **`lib/`**

- Stores global utilities, custom actions, and validation logic.

  ```bash
  lib/
    ├── actions/
    ├── validations/
    ├── index.ts
  ```

### 5. **`modules/`**

- Each feature or module (e.g., auth, profile) resides here. This promotes separation of concerns.
- Each module contains its own components, stores, and services.
- To deep dive in `modules` folder, please click [here](https://github.com/aditya-v22/jacksclub/tree/main/src/modules/README.md)

### 6. **`routes/`**

- Manages application routing.

### 7. **`stores/`**

- Contains Svelte stores for managing global, shareable state.

---

## Additional Considerations 🛠️

- **Code Consistency:** Follow a consistent coding style and use tools like Prettier or ESLint.
- **Error Handling:** Implement centralized error handling for improved maintainability.
- **Documentation:** Maintain up-to-date comments and documentation for each module and utility.
- **Testing:** Place unit and integration tests close to the corresponding files or in a tests/ folder.
