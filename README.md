# 🖼️ Creative Gallery

A responsive photo gallery built with **React** and **Vite**. It fetches photos from the [Lorem Picsum API](https://picsum.photos/) and shows them in a clean grid with hover effects and page-by-page navigation.

## ✨ Features

- Fetches 8 photos per page from the Picsum API using **Axios**
- Pagination with **Prev** and **Next** buttons
- Responsive grid layout that adapts to any screen size
- Hover effects: image zoom, card lift, and an overlay showing the photographer's name
- Click any photo to open the original on Picsum in a new tab
- Smooth fade-in animation when photos load

## 🛠️ Tech Stack

- **React 19** (hooks: `useState`, `useEffect`)
- **Vite** for fast development and builds
- **Axios** for API calls
- **CSS3** (Grid, Flexbox, transitions, keyframe animations)

## 🚀 Getting Started

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/gallery-project.git

# 2. Go to the project folder
cd gallery-project

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs the linter |

## 📁 Project Structure

```
app/
├── src/
│   ├── App.jsx      # Gallery logic and UI
│   ├── main.jsx     # App entry point
│   └── index.css    # All styling
├── index.html
├── package.json
└── vite.config.js
```

## 🔌 API Used

`GET https://picsum.photos/v2/list?page={page}&limit=8`

No API key is required.

## 📸 Screenshots

<!-- Add a screenshot here after you take one:
![Gallery Screenshot](./screenshots/gallery.png) -->

## 🔮 Future Improvements

- Loading spinner while photos are being fetched
- Error message when the API request fails
- Search and filter by photographer
- Favorites / like feature with localStorage
- Full-screen image preview (lightbox)

## 👨‍💻 Author

Made with ❤️ by **YOUR NAME**

- GitHub: [@Coder-prince26](https://github.com/Coder-prince26)