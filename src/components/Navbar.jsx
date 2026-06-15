import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold gradient-text">
          Bharat Sai Pulipati
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
