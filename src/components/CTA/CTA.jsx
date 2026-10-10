import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 p-10 text-white shadow-2xl lg:p-16"
        >
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                Admissions Open
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Ready to Build
                <span className="block">
                  Your Future?
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Join our English Speaking and Computer Courses to develop
                practical skills, improve your confidence, and prepare for
                academic and career success.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
              >
                Enroll Now
                <ArrowRight size={20} />
              </a>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;