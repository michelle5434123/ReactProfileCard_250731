# 👩🏻‍💼 ReactProfileCard_0731

This is a simple React-based profile card for **Michelle Huang**, showcasing her professional roles and linking to her portfolio, knowledge hub, and GitHub.

![image](https://github.com/user-attachments/assets/4ebbbf74-9956-4f96-bb42-aef7542b4067)


## Features
- Displays a profile card with name and roles
- Includes a sticky header with an avatar and **external links**
- External links open in new tabs using **target="_blank"**
- Responsive and visually clean layout using pure CSS
- **Modular React components (Header, MainContent, Footer)**


## How It Works
- On page load, React renders the main <Page /> component into the #root div in index.html
- <Page /> combines three components:
  - <Header /> — includes the avatar and navigation links
  - <MainContent /> — displays name and role list
  - <Footer /> — shows copyright
- vite handles module bundling and live reload during development
- All styling is handled in index.css, including layout, spacing, and colors
- Links in the header are wrapped in <a> tags with rel="noopener noreferrer" for security


## Notes
- The profile includes links to external pages: Michelle's Portfolio, Knowledge Hub, and GitHub.
- avatar.png must be in the project root or adjust the import path as needed.


## How to Run This Project Locally
These instructions assume you have **Node.js** and **npm** installed on your computer. If not, download them from [nodejs.org](https://nodejs.org/).

### 1. Clone or Download the Repo
Click on the green **Code** button and choose **Download ZIP** or use Git:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Install Dependencies:
Make sure react, react-dom, and vite are included in your package.json
```bash
npm install
```
### 3. Start the Development Server
If you’re using Vite (recommended for this setup):
```bash
npm run dev
```
This will start the server, usually at:
```bash
http://localhost:5173
```
Open that link in your browser.


