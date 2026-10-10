import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-50 flex h-screen w-80 max-w-[90%] flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-lg font-bold text-slate-800">
                Navigation
              </h2>

              <button
                onClick={onClose}
                className="rounded-lg p-2 transition hover:bg-slate-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {navLinks.map((item) => {
                // Normal Link
                if (!item.children) {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      smooth={true}
                      spy={true}
                      offset={-80}
                      duration={600}
                      onClick={onClose}
                      className="block cursor-pointer rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.title}
                    </Link>
                  );
                }

                // Dropdown
                return (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.id ? null : item.id
                        )
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {item.title}

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.children.map((course) => (
                            <Link
                              key={course.path}
                              to={course.path}
                              smooth={true}
                              spy={true}
                              offset={-80}
                              duration={600}
                              onClick={onClose}
                              className="block cursor-pointer rounded-lg px-4 py-3 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                            >
                              <p className="font-medium">
                                {course.title}
                              </p>

                              <p className="text-xs text-slate-500">
                                {course.description}
                              </p>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="border-t p-5">
              <Link
                to="contact"
                smooth={true}
                spy={true}
                offset={-80}
                duration={600}
                onClick={onClose}
                className="block cursor-pointer rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Admission Open
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;