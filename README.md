# GitHub Profile Tabs

A GitHub-style profile viewer built using React and Vite. This application allows users to search for GitHub profiles, view profile information, repositories, and followers through a tab-based interface.

## Features

- Search any GitHub user by username
- Display user profile information
  - Profile image
  - Name
  - Username
  - Bio
  - Followers count
  - Following count
  - Public repositories count

- Tab Navigation
  - Overview
  - Repositories
  - Followers

- Fetch repositories dynamically from GitHub API
- Fetch followers dynamically from GitHub API
- Loading and error handling
- Responsive layout
- Modern GitHub-inspired UI

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- GitHub REST API

## Project Structure

```text
src/
│
├── components/
│   ├── SearchBar.jsx
│   ├── ProfileCard.jsx
│   ├── Tabs.jsx
│   ├── Overview.jsx
│   ├── Repositories.jsx
│   └── Followers.jsx
│
├── utils/
│   └── mockData.ts
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/github-profile-tabs.git
```

Move into the project folder:

```bash
cd github-profile-tabs
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## API Endpoints Used

User Profile:

```text
https://api.github.com/users/{username}
```

Repositories:

```text
https://api.github.com/users/{username}/repos
```

Followers:

```text
https://api.github.com/users/{username}/followers
```

## Assignment Objectives Covered

- React Functional Components
- useState Hook
- useEffect Hook
- API Integration
- Component-Based Architecture
- Tab Navigation
- Error Handling
- Loading States
- Responsive UI Design
- Clean Folder Structure

## Author

Khadeer Sajid Mohammad
