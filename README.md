# Jacksclub

In this project I've created Two Factor Authentication component following this [design](https://dribbble.com/shots/10960055-Two-factor-authentication-2FA).

To see the live demo, please click [here](https://jacksclub.vercel.app/)

## Tech Stack

- Svelte 5
- SvelteKit
- TypeScript
- Tailwind CSS
- Lucide Icons

## How to Run on development

1. Go to the project directory:

   ```bash
   cd jacksclub/
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the app:

   ```bash
   pnpm dev --open
   ```

4. Use `123456` to test the correct code UI.

## Features

- 6-digit code inputs.
- Smooth focus transitions between input fields.
- Dynamic display of remaining digit count.
- Success: "Let's go" animation with lock unlock.
- Error: "Wrong code!" animation with red colors and borders.

## Extra Details

### Tailwind CSS Setup

- **Colors and Fonts**: Configured directly in the Tailwind CSS file for better organization.
- **Animations**: Defined in the Tailwind config to keep things simple and avoid extra CSS files.

### Using Svelte 5 Runes

- I used Svelte 5’s runes for more readable and efficient code. They help keep things clean and easy to maintain.

### File Collocation and Component Organization

- I’ve utilized file collocation by grouping Svelte files inside the `routes` folder. Instead of spreading subcomponents across separate `components` or `pages` folders, I kept them alongside their parent routes. This approach helps keep related files together, making the project easier to navigate and maintain. By leveraging this feature, I aimed to showcase Svelte’s native organization capabilities, reducing the need for deeply nested component structures and improving overall clarity.

### Writable Store

- I created a **writable store** to manage the code input and other related state information. While `$state` or simple reactive variables could have been used, I chose writable stores for their flexibility and robustness in handling shared state across multiple components. Stores provide a centralized way to manage data, ensuring consistent updates and reducing the chance of state-related bugs. This makes the codebase more scalable and maintainable, especially as the application grows.

## Folder Structure

Please follow this [link](https://github.com/aditya-v22/jacksclub/blob/main/FOLDER_STRUCTURE.md) to see the folder structure for the application.
