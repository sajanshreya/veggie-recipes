import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="site-logo">Veggie Recipes</NavLink>
          <nav className="site-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Browse
            </NavLink>
            <NavLink to="/bookmarks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Bookmarks
            </NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}
