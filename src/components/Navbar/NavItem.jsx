import { useState } from "react";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ------------------------
  // Normal Navigation
  // ------------------------
  if (!item.children) {
    return (
      <Link
        to={item.path}
        spy={true}
        smooth={true}
        offset={-80}
        duration={600}
        activeClass="active"
        className="nav-link font-medium text-slate-700 hover:text-blue-600"
      >
        {item.title}
      </Link>
    );
  }

  // ------------------------
  // Dropdown Navigation
  // ------------------------
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600">
        {item.title}

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-12 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
          >
            {item.children.map((course) => (
              <Link
                key={course.path}
                to={course.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className="block cursor-pointer px-5 py-4 transition hover:bg-blue-50"
              >
                <h4 className="font-semibold text-slate-800">
                  {course.title}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {course.description}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;