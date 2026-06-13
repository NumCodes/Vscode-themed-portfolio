# Num Codes | VSCode Portfolio

This project is a personal portfolio designed to look and feel just like Visual Studio Code. It's a fun and interactive way to explore my work, articles, and GitHub activity, all within an environment that's familiar to any developer. You can navigate through my projects, read my technical articles, check out my GitHub contributions, and even customize the theme, just like you would in a real IDE.

## Installation

Getting this project up and running on your local machine is pretty straightforward.

1.  **Clone the Repository**:
    Start by cloning the project to your local machine.

    ```bash
    git clone https://github.com/numcodes/vscode-themed-portfolio.git
    cd vscode-themed-portfolio
    ```

2.  **Install Dependencies**:
    Once you're in the project directory, install all the necessary dependencies using your preferred package manager.

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set Up Environment Variables**:
    This project relies on a few environment variables to fetch content from external APIs.
    Create a `.env.local` file in the root of your project and add the following, replacing the placeholder values with your actual keys and username:

    ```ini
    DEV_TO_API_KEY = your-dev-to-api-key
    GITHUB_API_KEY = your-github-api-key
    NEXT_PUBLIC_GITHUB_USERNAME = your-github-username-like-numcodes
    ```

    *   **`DEV_TO_API_KEY`**: Get this from your Dev.to settings to fetch your published articles.
    *   **`GITHUB_API_KEY`**: Generate a Personal Access Token from GitHub (Settings > Developer settings > Personal access tokens) if you encounter rate limits or need to fetch private data (though this project primarily uses public data). For public data, it might not be strictly necessary, but good practice.
    *   **`NEXT_PUBLIC_GITHUB_USERNAME`**: Your GitHub username (e.g., `numcodes`) to display your profile and repositories.

4.  **Run the Development Server**:
    After setting up the environment variables, you can start the development server.

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

5.  **Build for Production**:
    To create an optimized production build, run:

    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```

    Then, you can start the production server:

    ```bash
    npm start
    # or
    yarn start
    # or
    pnpm start
    ```

## Usage

This portfolio is designed to mimic the VS Code experience, so you'll navigate it similarly!

*   **Sidebar and Tabs**: On the left, you'll see a familiar sidebar with icons for different sections like Home, GitHub, Projects, Articles, Contact, About, and Settings. Clicking these or the file tabs at the top will take you to different pages, just like opening files in an IDE.
*   **Interactive Terminal**: At the bottom, there's an interactive terminal that you can toggle open or closed using `Ctrl + ` (backtick). Inside, you can type commands like `help` to see available options, `about` to learn more about me, `projects` to quickly list featured projects, or even `theme <name>` to switch color themes (try `dracula` or `nord`!).
*   **Command Palette**: For quick navigation and actions, you can open the Command Palette by pressing `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac). From there, you can search for pages, toggle the terminal, or even change the color theme quickly.

## Features

*   **VS Code-Inspired UI**: A meticulously crafted user interface that faithfully reproduces the look and feel of Visual Studio Code.
*   **Interactive Terminal**: A fully functional in-app terminal where you can run custom commands for a unique browsing experience.
*   **Command Palette for Quick Actions**: A keyboard-driven command palette for fast navigation and theme switching.
*   **Dynamic Content Integration**: Fetches latest articles from Dev.to and popular repositories from GitHub to keep content fresh.
*   **Customizable Themes**: Change the application's color scheme to your favorite VS Code theme (GitHub Dark, Dracula, Ayu Dark, Ayu Mirage, Nord, Night Owl).
*   **Responsive Design**: Looks great and functions well across various screen sizes.
*   **Client-Side Navigation**: Utilizes Next.js for smooth and fast page transitions.

## Technologies Used

| Technology         | Description                                     |
| :----------------- | :---------------------------------------------- |
| **TypeScript**     | Superset of JavaScript for type-safe code.      |
| **React**          | Frontend library for building UIs.              |
| **Next.js**        | React framework for production-grade applications, including routing and data fetching. |
| **CSS Modules**    | Scoped CSS for component-level styling.         |
| **React Icons**    | Collection of popular SVG icons.                |
| **`react-github-calendar`** | Displays GitHub contribution graphs.      |
| **Vercel**         | Platform for static sites and serverless functions (for deployment). |

## Contributing

I'm thrilled you're thinking about contributing! If you've found a bug, have an idea for a new feature, or want to improve existing code, here's how you can help:

1.  **Fork the repository**.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3.  **Make your changes**.
4.  **Commit your changes** with a clear and descriptive message: `git commit -m "feat: Add new feature X"`.
5.  **Push your branch** to your forked repository: `git push origin feature/your-feature-name`.
6.  **Open a Pull Request** against the `main` branch of this repository.

Please ensure your code adheres to the project's existing style and standards.

## Author Info

**Num Codes**
*   LinkedIn: [Ugochukwu Nweze](https://linkedin.com/in/ugochukwu-nweze-08812a2b8)
*   X (Twitter): [@CodesNum80638](https://x.com/CodesNum80638)
*   GitHub: [numcodes](https://github.com/numcodes)


[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
