# Modules Folder

The `modules/` folder is organized by features of the application. Each module contains components, constants, stores, services, tests, utils and validations that are specific to that feature.

## Folder Structure

- `auth/`: Handles user authentication.
- `dashboard/`: Dashboard-related components and other stuffs.
- `user/`: User management-related components and other stuffs.

## How to Add a New Module

To add a new feature/module to the application:

1. **Create a New Folder**: Add a new folder inside `modules/` based on the new feature and create following sub folders inside new folder:

   - `components`
   - `services`
   - `utils`
   - `constants`
   - `stores`
   - `tests`
   - `validations`

2. **Organize Files**:
   - Place UI components inside `components/`.
   - Store APIs or related stuffs in `services/`.
   - Store reusable functions or logic in `utils/`.
   - Store global constants in `constants/`.
   - Use `stores/` for shared application state.
   - Write tests for the module inside `tests/`.
   - Add any necessary validation functions in `validations/`.

## Best Practices

- **Modularity**: Keep each module self-contained.
- **State Management**: Use Svelte stores for state shared within a module.
- **Services**: External API calls or business logic should be placed inside services.
- **Reusable Components**: Keep UI components flexible and reusable across different parts of the application.
- **Testing**: Always write tests for new functionality. Aim for a high level of test coverage, especially for critical application features.
- **Documentation**: Document the purpose and usage of key files and functions to make it easier for other developers to work with your code.

## Note

Items that do not belong to a specific module, such as `shared utilities`, `constants`, or global `components`, should be kept in relevant directories outside the `modules/` folder. This helps maintain a clean separation between feature-specific and generic code, ensuring better scalability and reusability.
