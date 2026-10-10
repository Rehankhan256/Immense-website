import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";

import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navLinks";
import logo from "../../assets/logo.jpeg"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 bg-white/90 shadow-md backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            spy={true}
            offset={-80}
            duration={600}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              <img
  src="/logo.png"
  alt="Immense Education Hub Logo"
  className="h-12 w-12 rounded-xl object-contain"
/>
            </div>

            <div className="hidden sm:block">
              <h2 className="text-lg font-bold text-slate-800">
                Immense Education Hub
              </h2>

              <p className="text-xs text-slate-500">
                Learn • Grow • Succeed
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              to="contact"
              smooth={true}
              spy={true}
              offset={-80}
              duration={600}
              className="hidden cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 lg:inline-flex"
            >
              Admission Open
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Navbar Spacer */}
      <div className="h-20" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;