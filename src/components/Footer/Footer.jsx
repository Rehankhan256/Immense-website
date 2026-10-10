import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  quickLinks,
  courseLinks,
  contactInfo,
  socialLinks,
} from "./footerLinks";

const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  LinkedIn: FaLinkedinIn,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Top Border */}
      <div className="h-1 w-full bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                <img
  src="/logo.png"
  alt="Immense Education Hub Logo"
  className="h-12 w-12 rounded-xl object-contain"
/>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Immense Education Hub
                </h2>

                <p className="text-sm text-slate-400">
                  Learn • Grow • Succeed
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              We help students achieve academic excellence through
              experienced faculty, modern teaching methods, and
              personalized guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Courses
            </h3>

            <ul className="space-y-3">
              {courseLinks.map((course) => (
                <li key={course.path}>
                  <Link
                    to={course.path}
                    className="transition hover:text-blue-400"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-blue-500"
                />

                <p>{contactInfo.address}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-blue-500"
                />

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-400"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-blue-500"
                />

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-400"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.name];

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Immense Education Hub. All
            rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;