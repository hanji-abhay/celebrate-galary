
import { useEffect } from 'react'
import './Intro.css'

export default function Intro({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 9000)
    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <main className="intro-scene" aria-label="Welcome to still photography gallery">
      <div className="intro-landscape">
        <div className="intro-sun" />
        <div className="intro-haze intro-haze-one" />
        <div className="intro-haze intro-haze-two" />

        <svg
          className="intro-hills"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="autumnSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#333d36" />
              <stop offset="52%" stopColor="#a97855" />
              <stop offset="100%" stopColor="#e2b98a" />
            </linearGradient>
            <linearGradient id="autumnGround" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6d6042" />
              <stop offset="100%" stopColor="#252f29" />
            </linearGradient>
          </defs>

          <rect width="1440" height="700" fill="url(#autumnSky)" />
          <circle cx="1050" cy="215" r="95" fill="#f4d5a1" opacity=".58" />
          <path
            d="M0 385 Q180 260 370 375 T760 350 T1130 355 T1440 290 V700 H0Z"
            fill="#7b7960"
            opacity=".65"
          />
          <path
            d="M0 450 Q230 350 430 445 T870 420 T1200 400 T1440 435 V700 H0Z"
            fill="#4c5a46"
          />
          <path
            d="M0 520 Q260 420 520 510 T1020 470 T1440 500 V700 H0Z"
            fill="url(#autumnGround)"
          />

          <g className="intro-tree" fill="#28352d">
            <path d="M150 700 Q175 450 145 100 L180 100 Q165 430 215 700Z" />
            <path d="M165 270 Q100 200 60 130 Q140 170 168 230Z" />
            <path d="M170 340 Q230 240 300 210 Q235 310 174 370Z" />
            <path d="M170 205 Q220 100 270 65 Q245 160 170 235Z" />
            <path d="M180 165 Q130 100 105 45 Q165 80 190 150Z" />
            <path d="M135 175 Q65 150 25 90 Q100 105 150 150Z" />
          </g>

          <g fill="#b66e45" opacity=".9">
            <ellipse cx="83" cy="112" rx="40" ry="18" transform="rotate(35 83 112)" />
            <ellipse cx="245" cy="139" rx="49" ry="23" transform="rotate(-30 245 139)" />
            <ellipse cx="123" cy="57" rx="42" ry="20" transform="rotate(25 123 57)" />
            <ellipse cx="195" cy="87" rx="38" ry="17" transform="rotate(-25 195 87)" />
          </g>

          <g fill="#344036" opacity=".9">
            <path d="M1200 700 L1230 260 L1255 700Z" />
            <path d="M1227 390 Q1160 320 1140 255 Q1210 290 1235 350Z" />
            <path d="M1237 450 Q1310 350 1370 340 Q1300 425 1237 475Z" />
            <path d="M1230 320 Q1280 230 1330 205 Q1295 290 1230 340Z" />
          </g>
        </svg>

        <div className="intro-grain" />

        <div className="intro-leaf intro-leaf-one" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none">
            <path
              d="M12 63C9 34 31 10 69 8C69 43 46 67 12 63Z"
              fill="#bd7046"
              stroke="#e2a06c"
              strokeWidth="1.5"
            />
            <path d="M12 63 63 15M34 43 31 23M45 32 60 33M24 51 15 39" stroke="#e8b07c" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="intro-viewfinder" aria-hidden="true">
          <span className="finder-corner finder-tl" />
          <span className="finder-corner finder-tr" />
          <span className="finder-corner finder-bl" />
          <span className="finder-corner finder-br" />
          <span className="finder-crosshair" />
          <span className="finder-label">STILL · MOMENT 001</span>
        </div>

        <div className="intro-shutter" aria-hidden="true">
          <div className="shutter-blade shutter-blade-one" />
          <div className="shutter-blade shutter-blade-two" />
          <div className="shutter-blade shutter-blade-three" />
          <div className="shutter-blade shutter-blade-four" />
          <div className="shutter-blade shutter-blade-five" />
          <div className="shutter-blade shutter-blade-six" />
        </div>

        <div className="intro-flash" aria-hidden="true" />

        <div className="intro-signature">
          <svg className="intro-letter-s" viewBox="0 0 100 120" fill="none" aria-hidden="true">
            <path
              className="intro-s-stroke"
              d="M76 21C63 5 30 9 20 28C6 54 33 59 54 68C82 80 77 102 54 110C34 117 16 105 13 91"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              className="intro-s-leaf"
              d="M17 78C14 61 26 45 44 41C44 59 34 73 17 78Z"
              fill="#b76e4d"
              stroke="#d99b70"
              strokeWidth="1"
            />
            <path
              className="intro-s-vein"
              d="M17 78 41 44M28 62 26 52M34 54 41 56"
              stroke="#f0c19a"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          <span className="intro-word-rest">till<span>.</span></span>
        </div>

        <div className="intro-direction">
          <span>Follow the moment</span>
          <svg viewBox="0 0 64 16" fill="none" aria-hidden="true">
            <path d="M1 8H60M52 1L60 8L52 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="intro-caption">
          <span>THE BEAUTY OF A MOMENT</span>
          <span>GHZ · AUTUMN COLLECTION</span>
        </div>
      </div>

      <span className="intro-sr-only" role="status">
        Introducing still, a photography gallery
      </span>
    </main>
  )
}
