# Jacksclub

In this project I've created Two Factor Authentication component following this [design](https://dribbble.com/shots/10960055-Two-factor-authentication-2FA).

## Tech Stack
- Svelte 5
- SvelteKit
- TypeScript
- Tailwind CSS
- Lucide Icons

## How to Run
1. Go to the project directory:
   ```bash
   cd /jacksclub
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the app:
   ```bash
   pnpm dev --open
   ```
4. Use `123456` to test the correct code.

## Features
- 6-digit code inputs.
- Smooth focus transitions between input fields.
- Dynamic display of remaining digit count.
- Success: "Let's go" animation with lock unlock.
- Error: "Wrong code!" animation with red borders.
