import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const mobileRef = useRef(null);
  const langRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
      if (
        langRef.current &&
        !langRef.current.contains(e.target)
      ) {
        setLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-black text-white px-6 py-3 relative">
      {/* MOBILE HEADER */}
      <div className="flex items-center justify-between md:hidden">
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="text-3xl cursor-pointer"
        >
          <FaLanguage />
        </button>

        <a href="/">
          <img
            src="/images/Team-Turco-Logo-Header.jpg"
            alt="Team Turco Logo"
            className="w-12 h-12 object-cover"
          />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-3xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden md:flex mx-4 md:mx-14 items-center justify-between">
        <a href="/">
          <img
            src="/images/Team-Turco-Logo-Header.jpg"
            alt="Team Turco Logo"
            className="w-12 h-12 object-cover"
          />
        </a>

        <nav>
          <ul className="flex gap-8">
            <li>
              <a href="/" className="hover:border-b-2">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:border-b-2">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:border-b-2">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className="bg-white text-black px-4 py-1 rounded">
          Sign Up
        </button>
      </div>

      {/* LANGUAGE NAV */}
      {langOpen && (
        <nav
          ref={langRef}
          className="absolute top-full left-4 bg-black text-white z-50 border border-gray-700 rounded flex flex-col"
        >
          <button className="p-2 hover:bg-white hover:text-black text-sm">
            EN
          </button>
          <button className="p-2 hover:bg-white hover:text-black text-sm">
            ES
          </button>
          <button className="p-2 hover:bg-white hover:text-black text-sm">
            PT
          </button>
        </nav>
      )}

      {/* MOBILE NAV */}
      {mobileOpen && (
        <nav
          ref={mobileRef}
          className="absolute top-full right-1 bg-black text-white z-50 border border-gray-700 rounded flex flex-col"
        >
          <a
            href="/"
            className="p-2 hover:bg-white hover:text-black text-sm"
          >
            Home
          </a>
          <a
            href="/about"
            className="p-2 hover:bg-white hover:text-black text-sm"
          >
            About
          </a>
          <a
            href="/contact"
            className="p-2 hover:bg-white hover:text-black text-sm"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
