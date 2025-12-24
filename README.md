# CampusVoice: An AI-Powered MERN Stack Blogging Platform

## Description

CampusVoice is an innovative blogging platform that leverages the power of Google's Gemini AI to automatically generate high-quality blog content. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform is designed for users who want to create engaging content with ease. Alongside its core AI features, CampusVoice provides a full suite of tools for managing a blog, including a rich text editor, image uploads, and comment moderation.

## Features

### Core AI Feature
- **AI-Powered Blog Generation:** Automatically generate blog content using Google's Gemini AI. Simply provide a topic or a prompt, and let the AI create a well-structured and engaging blog post for you.

### Client-Side
- **Responsive Design:** A clean and modern UI that looks great on all devices.
- **Blog Listing:** View all published blogs with a clean and organized layout.
- **Blog Categories:** Filter blogs by category to easily find content of interest.
- **Search Functionality:** Quickly search for blogs by title or content.
- **Detailed Blog View:** Read blogs with a clear and easy-to-read layout.
- **Rich Text Content:** Blogs are rendered with rich text formatting, including lists, headers, and more.
- **Comments Section:** Engage in discussions by leaving comments on blog posts.

### Admin-Side
- **Secure Admin Login:** A dedicated login for administrators to manage the platform.
- **Dashboard:** An overview of the blog's statistics, including the number of blogs and comments.
- **Add New Blogs:** Create new blog posts using a rich text editor.
- **Image Uploads:** Upload cover images for blogs.
- **Blog Management:** View, edit, and delete existing blog posts.
- **Publish/Unpublish Blogs:** Control the visibility of blogs on the client-side.
- **Comment Management:** View and delete comments left by users.

## Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Image Storage:** ImageKit
- **AI:** Google Gemini
- **Rich Text Editor:** A React-based rich text editor for a seamless writing experience.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.
- A MongoDB database (local or cloud).
- An ImageKit account for image storage.
- A Google Gemini API key.

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/The-KrishVerma/CampusVoice.git
   ```
2. **Install NPM packages for the client**
   ```sh
   cd client
   npm install
   ```
3. **Install NPM packages for the server**
   ```sh
   cd ../server
   npm install
   ```
4. **Fill the missing environment variables in a `.env` file in the `server` directory**
   ```env
   JWT_SECRET=super_long_random_secret_here
   ADMIN_EMAIL=your_email_id
   ADMIN_PASSWORD=very_strong_password
   MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.a7gpraw.mongodb.net/blog
   IMAGEKIT_PUBLIC_KEY=public_xxxxxxxxx
   IMAGEKIT_PRIVATE_KEY=private_xxxxxxxxx
   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/krishblog
   GEMINI_API_KEY=AIzaSyxxxxxxxxxxxx
   ```
5. **Start the client**
   ```sh
   cd ../client
   npm run dev
   ```
6. **Start the server**
   ```sh
   cd ../server
   npm start
   ```
## 🙌 Acknowledgements
Built with ❤️ by Krish Verma
