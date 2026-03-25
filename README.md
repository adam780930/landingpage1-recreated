# Adam Tsai Personal Landing Page

Converted from CRA to **Vite + React + Bootstrap 5**.

## Setup

```bash
npm install
npm run dev
```

## Adding Your Images

1. Copy your image files into `src/assets/`:
   - `pfp3.jpg` — profile photo used on the Home page (Portrait component)
   - `pfp2.jpg` — photo used on the About page
   - `res.png`, `reci.png`, `fla.png`, `dec.png` — project screenshots

2. Uncomment the import lines in:
   - `src/components/Portrait.jsx` → import and use `pfp3.jpg`
   - `src/pages/AboutPage.jsx` → import and use `pfp2.jpg`
   - `src/components/ProjectExamples.jsx` → import and use screenshot images

## Key Changes from Original (CRA)

| Before (CRA) | After (Vite) |
|---|---|
| `react-router-dom` v5 `<Switch>` | v6 `<Routes>` + `<Route element={}>` |
| jQuery-dependent Bootstrap modals | Pure React state modal (Bootstrap 5) |
| `.js` extensions | `.jsx` extensions |
| Markdown fetched as files | Inlined as JS template literals |
| `class=` in JSX | `className=` throughout |
| Bootstrap 4 `form-group` | Bootstrap 5 `mb-3` |
| Bootstrap 4 `text-left` | Bootstrap 5 `text-start` |

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Router v6](https://reactrouter.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [EmailJS](https://www.emailjs.com/)
- [Font Awesome](https://fontawesome.com/)
