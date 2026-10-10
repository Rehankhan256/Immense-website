import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

import heroImage from "../../assets/hero5.jpeg";
import { badges, stats } from "./heroData";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center px-6 py-20 lg:flex-row lg:justify-between lg:px-8">
        {/* ================= LEFT ================= */}
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm"
          >
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-medium text-slate-700">
              Trusted by 25000+ Students
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl"
          >
            Shape Your Future
            <span className="block text-blue-600">
              With Expert Guidance
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Join our coaching institute and prepare for English speaking classes,Computer classes,
            Board Exams, and Foundation Courses with experienced
            faculty, smart learning methods, and proven results.
          </motion.p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
  to="contact"
  smooth={true}
  spy={true}
  offset={-80}
  duration={600}
  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Enroll Now
  <ArrowRight size={18} />
</Link>

            <Link
  to="courses"
  smooth={true}
  spy={true}
  offset={-80}
  duration={600}
  className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
>
  <Play size={18} />
  Explore Courses
</Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white p-5 text-center shadow-lg"
              >
                <h2 className="text-3xl font-bold text-blue-600">
                  {item.number}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-0"
        >
          <img
            src={heroImage}
            alt="Students learning"
            className="w-full max-w-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;