# Ruthvik’s Portfolio 🚀
Built with Angular, this portfolio is where I showcase my work, skills, and ideas in a clean, minimal, and responsive UI.

🔥 Not just for me — YOU can make this YOURS too! Edit a single JSON file and launch your personal brand in minutes.

### 📚 Table of Contents
✨ About Myself

🛠️ How to Run This App

🎨 Make It Yours (Custom Template Guide)

🌳 Branching Strategy

🤝 Contribute & Upgrade

🙌 Thanks Note

<details> <summary>### ✨ 1. About Myself</summary>
Hi, I’m Ruthvik Chennapragada 👋 — Full Stack Developer passionate about building fast, functional, and beautiful web apps.

💡 Live Portfolio: ruthvik-ch.vercel.app
💼 Tech Stack: Angular • .NET • Azure • SCSS

</details>
<details> <summary>### 🛠️ 2. How to Run This App</summary>
This is an Angular CLI app, so the usual drill:

bash
Copy
Edit
# Clone the repo
git clone <repo-url>
cd portfolio-website

# Install dependencies
npm install

# Start local server
ng serve
Now visit 👉 http://localhost:4200/

For Production:

bash
Copy
Edit
ng build --configuration=production
Build output will be in dist/portfolio-website.

✅ Pro tip: Use Vercel for instant deploy.

</details>
<details> <summary>### 🎨 3. Make It Yours</summary>
This project is fully JSON-driven. Your data lives in:

kotlin
Copy
Edit
src/assets/data/portfolio-data.json
Update these keys:

summary → Short intro about you

skills → Grouped into frontend, backend, database, toolsCloud, other

workExperience & education → Roles, bullets, logos

featuredProjects & projects → Add project cards with image, tags, and links

contact, links, icons → Social + resume + mail info

🔥 Edit, save, and BOOM — portfolio updates instantly.

Deploy on Vercel:
Build it:

bash
Copy
Edit
ng build --configuration=production
Upload dist/portfolio-website to Vercel → set as Output Directory

Push to main → Vercel auto-deploys latest changes 🚀

</details>
<details> <summary>### 🌳 4. Branching Strategy</summary>
Base branch: main

Stable releases: rel/<desc> → e.g., rel/first-launch

Features: feat/<feature> → e.g., feat/contact-form

✅ Merge to main after testing → triggers auto-deploy on Vercel
✅ Keep it clean, keep it agile

</details>
<details> <summary>### 🤝 5. Contribute & Upgrade</summary>
This template is in evolution mode 🔥
Got ideas? Fork it, hack it, push PRs.

✅ Add new features
✅ Improve UI
✅ Optimize performance

Let’s make something cool together 💡

</details>
<details> <summary>### 🙌 6. Thanks Note</summary>
Made with ❤️ & ☕ by Ruthvik Chennapragada
Hope this helps you launch your personal brand in style.
Drop a ⭐ on the repo if you like it!

</details>
🚀 Live Demo: ruthvik-ch.vercel.app
✅ Angular | ✅ JSON-driven | ✅ Vercel Auto-Deploy
