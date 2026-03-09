import { useState } from "react";

export default function NavbarBurguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const next = !isOpen;

    if (next) {
      document.documentElement.classList.add("nav-open");
    } else {
      document.documentElement.classList.remove("nav-open");
    }

    setIsOpen(next);
  };

  return (
    <>
      <button
        className="cursor-pointer relative z-999"
        id="navbar-burguer-menu-button"
        onClick={handleClick}
      >
        <span
          className={`burguer-menu-button-text transition-colors duration-300`}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </span>
      </button>
      <div
        className={`burguer-menu-container fixed z-50 inset-0 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      ></div>
    </>
  );
}
