import { useState } from "react";
import { ArrowRight, Clock, BarChart3, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CourseCard = ({ course, index }) => {
  const Icon = course.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-blue-200 hover:shadow-2xl"
    >
      {/* Icon */}
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${course.color}`}>
        <Icon size={32} />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {course.title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">
        {course.description}
      </p>

      {/* Duration and Level */}
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
          <Clock size={16} />
          {course.duration}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
          <BarChart3 size={16} />
          {course.level}
        </span>
      </div>

      {/* Learn More Button */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
      >
        {isExpanded ? "Show Less" : "Learn More"}

        {isExpanded ? (
          <ChevronUp size={18} />
        ) : (
          <ArrowRight size={18} />
        )}
      </button>

      {/* Additional Options */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h4 className="mb-4 text-lg font-bold text-slate-900">
                Course Details
              </h4>

              <ul className="space-y-3">
                {(course.options || []).map((option, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CourseCard;