# Users & Posts Explorer (JSONPlaceholder)

A small multi-page web app built with **HTML**, **CSS**, and **JavaScript** that fetches data from the public API [JSONPlaceholder](https://jsonplaceholder.typicode.com).  
It displays a list of users, detailed information for each user, their posts, and post comments.

## ✨ Features
- Fetch and display all users from the API  
- Show detailed info for each user (including address, company, and geo)
- View all posts by the selected user
- View detailed information for a specific post and its comments
- Simple navigation between pages using query parameters (`userId`, `postId`)
- Responsive design with a clean layout

## 🗺️ Pages Overview
1. **index.html** – displays all users  
   - Fetches from `/users`  
   - Each user card shows `id` and `name`  
   - **More** button opens `user-details.html?userId={id}`

2. **user-details.html** – displays detailed info for one user  
   - Fetches `/users/{userId}`  
   - Shows all user fields, grouped into: *User info*, *Address*, *Company*  
   - Button **Post of current user** loads `/users/{userId}/posts`  
   - Each post has a **More** button → opens `post-details.html?postId={id}`

3. **post-details.html** – displays one post and its comments  
   - Fetches `/posts/{postId}` for post details  
   - Fetches `/posts/{postId}/comments` for related comments

## 🧠 How It Works
Data is fetched using the **Fetch API**, and all HTML elements are dynamically created with JavaScript.  
Information is displayed by looping through each object’s keys and printing their values.

## 🚀 How to Run
1. Clone or download this repository.  
2. Open `JS-test2/index.html` in your browser.  
   *(No server setup required — JSONPlaceholder supports CORS.)*

## 📂 Project Structure
JS-test2/
├─ index.html   # Users list
├─ main.js
├─ user-details.html   # User info + posts
├─ user-details.js
├─ post-details.html   # Post info + comments
├─ post-details.js
└─ README.md
