# Ruthvik’s Portfolio 🚀

This is my personal portfolio site — built to showcase my projects, experience, and skills in a clean, minimal, and responsive layout.

## 🌟 Use This as Your Portfolio Template!

This project is designed as a fully customizable **Angular + SCSS** based portfolio template.

### 🔧 How to Use

All the core content is driven from a single JSON file located at:


src/assets/data/portfolio-data.json



Update the following keys to personalize it:

- **`summary`** – A short summary about you.
- **`skills`** – Organize your tech stack into `frontend`, `backend`, `database`, `toolsCloud`, and `other`.
- **`workExperience` / `education`** – Add your job roles and academics here (each with bullets, logos, etc.).
- **`featuredProjects` / `projects`** – Add project details with description, tags, and images.
- **`contact`, `links`, `icons`** – Controls how your social/email/resume info appears.

✨ Just edit this file and your portfolio updates instantly!

---

## 🚀 Deployment on Vercel

This app uses **Angular CSR (Client-Side Rendering)** and is deployed on **[Vercel](https://vercel.com)**.

### How to deploy:
1. **Build the project** using Angular CLI:
ng build --configuration=production


2. **Deploy the `dist/portfolio-website` folder** on Vercel.

3. Once deployed, **every push to `main`** will **auto-deploy** the latest version!

### Recommended Git Strategy

- Your default branch: `main`
- For production snapshots:  
➤ Create release branches like: `rel/first-launch`, `rel/fix-dark-mode`, etc.
- For new features:  
➤ Work in feature branches like: `feat/contact-section`, `feat/theme-toggle`, etc.

> ✅ Push to `main` only after verifying features on a separate branch.  
> 🔄 Vercel will auto-deploy the latest `main`.

---

Enjoy building!  
Want to see it in action? [Check my deployed portfolio](https://ruthvik-ch.vercel.app)

---
Made with ❤️ by [Ruthvik Chennapragada](https://www.linkedin.com/in/ruthvik-ch/)


























# PortfolioWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


