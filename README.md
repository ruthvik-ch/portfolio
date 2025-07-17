# ShowcaseX 
⚡ Built with Angular, this portfolio is my playground to showcase projects, skills, and ideas — all in a sleek, responsive design.

🔥 The best part? It’s not just mine. Make it YOURS in minutes — just tweak one JSON file and boom, your personal brand is live! 🚀



### 📚 Table of Contents

🛠️ [How to Run This App](#howtorun)

🎨 [Make It Yours (Custom Template Guide)](#makeItYours)

🌳 [Branching Strategy](#branchingStrategy)

🤝 [Contribute & Upgrade](#contribute)

🙌 [Thanks Note](#thanks)


# Table of contents
1. [Introduction](#introduction)
2. [Some paragraph](#paragraph1)
    1. [Sub paragraph](#subparagraph1)
3. [Another paragraph](#paragraph2)

## This is the introduction <a name="introduction"></a>
Some introduction text, formatted in heading 2 style

## Some paragraph <a name="paragraph1"></a>
The first paragraph text

### Sub paragraph <a name="subparagraph1"></a>
This is a sub paragraph, formatted in heading 3 style

## Another paragraph <a name="paragraph2"></a>
The second paragraph text




## How to run <a name="howtorun"></a>

### Clone the repo 
git clone <repo-url>
cd portfolio-website

### Install dependencies
npm install

### Start local server
ng serve
Now visit 👉 http://localhost:4200/

For Production:

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
