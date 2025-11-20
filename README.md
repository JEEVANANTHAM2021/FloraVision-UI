# FloraVision – Modern Plant Store UI

FloraVision is a fully responsive and well-structured plant e-commerce user interface built with React and TailwindCSS v4.  
The project focuses on clean component architecture, modern design principles, and practical UI development suitable for real-world applications.

---

## Features

- Modern and visually consistent plant store UI  
- Fully responsive design for all screen sizes  
- Reusable and modular React components  
- Styled using TailwindCSS v4  
- Sections include Trending Plants, Best Selling Plants, and Featured Plants  
- Custom-shaped product cards, rating elements, and clean layout structure  
- Scalable and maintainable project architecture

---

## Tech Stack

- React.js  
- TailwindCSS v4  
- JavaScript (ES6+)  
- Vite

## Project Structure

  -src
  -assets/img && assest.js
  -component/mainComp-> Hero, Navbar, TrendyPlant,
          /reuseComp-> SectionTitle, GlassCard, Button,
          /reviewComp-> Testimonial,
          /sellingComp-> SellingPlant, PlantCard,
          BestPlant,Footer
  -pages/Home

-App.jsx
-main.jsx
--Packages & files

## Install Dependencies 
npm install 
react-dom, react, tailwindcss

## Server
npm run dev // localhost:5173

## Deployment
vercel

## Get Started
--Clone repo

git clone https://github.com/JEEVANANTHAM2021/FloraVision-UI.git

## Changes or Modify
Update or comment 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.