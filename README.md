# still. | A Photography Gallery

**A quiet space for photographs worth a second look.**

still. is a responsive photography gallery built with React, Vite, and Tailwind CSS. It brings together a curated-feeling photo grid, photographer search, and persistent favourites in a warm, editorial-inspired interface.

The experience opens with a cinematic autumn introduction before revealing the gallery, complete with custom branding and a matching favicon.

## ✨ Features

- **Photography gallery:** Fetches 30 photos from the [Picsum Photos API](https://picsum.photos/).
- **Responsive layout:** Adapts the gallery grid for mobile, tablet, and desktop screens.
- **Live photographer search:** Filters the loaded photos by author as you type.
- **Favourites:** Add or remove photos from your personal favourites collection.
- **Persistent preferences:** Saves favourites in `localStorage`, so they remain available after refreshing the page.
- **Loading and error states:** Provides feedback while photos load and when a request fails.
- **Cinematic introduction:** An animated autumn-inspired opening with a custom visual identity.
- **Thoughtful visual details:** Custom favicon, camera-inspired search, warm earthy colours, and subtle image interactions.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based user interface |
| Vite | Development server and production build |
| Tailwind CSS | Utility-first styling |
| JavaScript (ES Modules) | Application logic |
| Picsum Photos API | Photography data |
| React Hooks | State management and performance optimisation |
| Browser `localStorage` | Persistent favourites |

## 🧠 Technical Highlights

This project demonstrates practical React development patterns:

- **Custom hook (`useFetchPhotos`):** Encapsulates photo fetching, loading state, error handling, and request cleanup.
- **`useReducer`:** Manages favourite-photo actions through a dedicated reducer.
- **`useCallback`:** Keeps the search handler reference stable between renders when its dependencies remain unchanged.
- **`useMemo`:** Memoises the filtered photo list until its dependencies change.
- **`useEffect`:** Handles data fetching and synchronises favourites with browser storage.
- **Conditional rendering:** Displays the appropriate introduction, loading, error, and gallery states.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- npm, which is included with Node.js
- Git (optional, for cloning the repository)

### Installation

Clone the repository:

```bash
git clone https://github.com/hanji-abhay/celebrate-galary.git
```

Navigate to the project directory:

```bash
cd celebrate-galary
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Production Build

Create an optimised production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```text
celebrare-gallery/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Intro.jsx
│   │   └── Intro.css
│   ├── hooks/
│   │   ├── favoritesReducer.js
│   │   └── useFetchPhotos.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design Direction

The visual identity of still. is inspired by autumn landscapes and editorial photography:

- Forest green, ivory, and terracotta tones
- An animated, landscape-inspired introduction
- A custom typographic logo and leaf motif
- Camera-inspired search details
- Spacious layouts and responsive photography cards

The goal is to keep the interface visually expressive while making the core gallery interactions straightforward.

## 🔮 Future Improvements

- Individual photo detail views
- More sorting and filtering options
- A shareable favourites collection
- Additional accessibility and interaction refinements

## 👨‍💻 Author

**Abhay**

GitHub: [@hanji-abhay](https://github.com/hanji-abhay)

---

*still. — The beauty of a moment.*
