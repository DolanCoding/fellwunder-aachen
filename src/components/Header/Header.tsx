import "./Header.css";

interface HeaderProps {
  activeSection: string;
  navigateTo: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const NAV_ITEMS = [
  { id: "hero", label: "Start" },
  { id: "about", label: "Über mich" },
  { id: "leistungen", label: "Leistungen" },
  { id: "preise", label: "Preise" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Header({ activeSection, navigateTo, menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <span
            className="header__logo"
            onClick={() => navigateTo("hero")}
            style={{ cursor: "pointer" }}
          >
            Fellwunder & Co
          </span>

          {/* Desktop nav */}
          <nav className="header__nav">
            {NAV_ITEMS.map((item) => (
              <span
                key={item.id}
                className={`nav__link${activeSection === item.id ? " nav__link--active" : ""}`}
                onClick={() => navigateTo(item.id)}
              >
                {item.label}
              </span>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
            aria-label="Menü öffnen"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <nav className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <span
            key={item.id}
            className={`mobile-nav__link${activeSection === item.id ? " mobile-nav__link--active" : ""}`}
            onClick={() => {
              navigateTo(item.id);
              setMenuOpen(false);
            }}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </>
  );
}
