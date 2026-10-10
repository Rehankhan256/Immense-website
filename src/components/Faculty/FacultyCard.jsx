import { motion } from "framer-motion";
import { ArrowRight, Award, Briefcase } from "lucide-react";

const FacultyCard = ({ faculty, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Experience Badge */}
        <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {faculty.experience}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900">
          {faculty.name}
        </h3>

        <p className="mt-2 text-blue-600 font-medium">
          {faculty.role}
        </p>

        {/* Details */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Award size={18} className="text-blue-600" />

            <span className="text-slate-600">
              {faculty.specialization}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase size={18} className="text-blue-600" />

            <span className="text-slate-600">
              {faculty.experience} Experience
            </span>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default FacultyCard;