import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from './hooks/useFetchPhotos'
import { favoritesReducer } from './hooks/favoritesReducer'
import Intro from './components/Intro'

const STORAGE_KEY = 'celebrare-favorites'

function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem('still-intro-seen') !== 'true'
  })

  const completeIntro = useCallback(() => {
    sessionStorage.setItem('still-intro-seen', 'true')
    setShowIntro(false)
  }, [])

  const { photos, loading, error } = useFetchPhotos()
  const [search, setSearch] = useState('')
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    readFavorites,
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    const query = search.trim().toLowerCase()
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query),
    )
  }, [photos, search])

  function toggleFavorite(photo) {
    dispatch({ type: 'TOGGLE_FAVORITE', photo })
  }

  if (showIntro) {
    return <Intro onComplete={completeIntro} />
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f3] text-[#252820]">
      <header className="border-b border-[#e8e5dc]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          
          <a href="#" className="flex items-center gap-2.5" aria-label="still home">
            <svg
              viewBox="0 0 44 44"
              className="h-12 w-12 shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* The flowing lowercase s */}
              <path
                d="M31.5 11.5C28.5 6.8 19.7 6.8 15.8 11.4C11.1 16.9 17.2 20.1 23 22.1C29.7 24.4 31.7 28.1 28.1 33C24.8 37.5 16.1 37.2 11.9 32.3"
                stroke="#283b32"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Autumn leaf tucked into the curve */}
              <path
                d="M14.5 25.4C13.2 18.4 19.4 11.2 28.4 9.1C28.1 17.1 22.9 24.1 14.5 25.4Z"
                fill="#b76e4d"
                fillOpacity="0.18"
                stroke="#a45e45"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Leaf veins */}
              <path
                d="M14.5 25.4C18.4 19.8 22.7 14.7 28.1 9.7M19.1 19.5L18.5 15.7M22.5 15.7L22.2 12.8M18.1 20.1L14.9 19.1"
                stroke="#a45e45"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Small leaf stem */}
              <path
                d="M14.5 25.4L11.8 28.2"
                stroke="#a45e45"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>

            <span
              className="text-[2.15rem] leading-none tracking-[-0.06em] text-[#283b32]"
              style={{
                fontFamily: '"Brush Script MT", "Segoe Script", "Apple Chancery", cursive',
                fontStyle: 'italic',
              }}
            >
              still<span className="text-[#a45e45]">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#77796f] sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#91a88e]" />
            Your little corner of the internet
          </div>

          <div className="rounded-full border border-[#e5e1d7] px-4 py-2 text-sm">
            <span className="text-[#a45e45]">♡</span>
            <span className="ml-2 font-medium">{favorites.length}</span>
            <span className="ml-1 text-[#77796f]">saved</span>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-[#e8e6d7] opacity-70 blur-3xl sm:right-10 sm:h-72 sm:w-72" />

        <div className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a45e45]">
              <span className="h-px w-8 bg-[#a45e45]" />
              The art of noticing
            </p>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Some things are
              <br />
              worth a <span className="font-serif italic text-[#a45e45]">second look.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#77796f] sm:text-lg">
              A collection of little moments, unexpected places, and beautiful
              details. Find a frame that feels like yours.
            </p>
          </div>

          <div className="hidden min-w-44 border-l border-[#dcd8cc] pb-2 pl-6 md:block">
            <p className="font-serif text-4xl italic text-[#a45e45]">01—30</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#77796f]">
              Frames to explore
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          
          <label className="relative block w-full rounded-full border border-[#e4e1d8] bg-[#eeece5] p-[5px] shadow-[inset_2px_2px_5px_rgba(35,35,30,0.12),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] sm:max-w-md">
            <span className="sr-only">Search photos by author</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute left-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#85867b]"
                aria-hidden="true"
              >
                {/* Camera body */}
                <path d="M4 8.5h3l1.5-2h5l1.5 2h3A2 2 0 0 1 20 10.5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />

                {/* Lens outer ring */}
                <circle cx="12" cy="13.5" r="3.5" />

                {/* Lens glass */}
                <circle cx="12" cy="13.5" r="1.7" strokeWidth="1.2" />

                {/* Tiny camera indicator */}
                <path d="M17 11h.01" strokeWidth="2.5" />
              </svg>

            <input
              type="search"
              placeholder="Find a photographer..."
              value={search}
              onChange={handleSearch}
              className="w-full rounded-full border border-white/80 bg-white py-3.5 pl-12 pr-5 text-sm text-[#34382f] shadow-[inset_1px_1px_3px_rgba(30,30,30,0.04),inset_-1px_-1px_3px_rgba(255,255,255,0.9)] outline-none transition placeholder:text-[#a1a196] focus:border-[#c9a092] focus:ring-2 focus:ring-[#a45e45]/15"
            />
          </label>

          <p className="text-sm text-[#77796f]" aria-live="polite">
            Showing <span className="font-semibold text-[#252820]">{filteredPhotos.length}</span> of{' '}
            {photos.length || 30} frames
            <span className="mx-2 text-[#c4bfb3]">/</span>
            <span className="text-[#a45e45]">{favorites.length} saved for later</span>
          </p>
        </div>
      </section>

      <section
        aria-label="Photo gallery"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-x-5 gap-y-9 px-5 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-11 lg:px-10"
      >
        {loading && (
          <div className="col-span-full flex flex-col items-center py-24" role="status">
            <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-[#e7d7cc] border-t-[#a45e45]" />
            <p className="mt-5 font-serif text-lg italic text-[#77796f]">
              Gathering something beautiful...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="col-span-full rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-700" role="alert">
            <p className="font-medium">We couldn't bring the gallery in.</p>
            <p className="mt-2 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && filteredPhotos.map((photo, index) => {
          const isFavorite = favorites.some((item) => item.id === photo.id)

          return (
            <article key={photo.id} className="group min-w-0">
              <div className="relative overflow-hidden rounded-2xl bg-[#e9e6de]">
                <img
                  src={`https://picsum.photos/id/${photo.id}/600/750`}
                  alt={`Photo by ${photo.author}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 opacity-60 transition group-hover:opacity-100" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#4b5147] backdrop-blur-sm">
                  FRAME {String(index + 1).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={() => toggleFavorite(photo)}
                  aria-label={
                    isFavorite
                      ? `Remove ${photo.author} from favourites`
                      : `Add ${photo.author} to favourites`
                  }
                  aria-pressed={isFavorite}
                  className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-white ${
                    isFavorite
                      ? 'scale-105 bg-[#a45e45] text-white'
                      : 'bg-white/90 text-[#45483f] hover:scale-110 hover:bg-white'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={isFavorite ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-start justify-between gap-3 px-1 pt-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#34382f]" title={photo.author}>
                    {photo.author}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-[#929185]">
                    Photographer
                  </p>
                </div>
                <span className="pt-0.5 font-serif text-sm italic text-[#a45e45]">
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </article>
          )
        })}

        {!loading && !error && filteredPhotos.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="font-serif text-3xl italic text-[#a45e45]">Nothing in this frame just yet.</p>
            <p className="mt-3 text-sm text-[#77796f]">Try another photographer's name.</p>
          </div>
        )}
      </section>

      <footer className="border-t border-[#e8e5dc]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-10">
          <p className="text-sm font-semibold tracking-tight">still<span className="text-[#a45e45]">.</span></p>
          <p className="text-xs tracking-wide text-[#929185]">
            Made to pause, notice, and keep what you love.
          </p>
          <p className="text-xs text-[#929185]">React · Tailwind CSS · Picsum</p>
        </div>
      </footer>
    </main>
  )
}

export default App
