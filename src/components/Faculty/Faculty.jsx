import { motion } from "framer-motion";
import FacultyCard from "./FacultyCard";
import { faculty } from "./FacultyData";

const Faculty = () => {
  return (
    <section id="faculty" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Meet Our Faculty
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Learn From
            <span className="block text-blue-600">
              Experienced Trainers
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our dedicated trainers bring years of teaching experience
            and practical knowledge to help every student develop
            strong English communication and computer skills.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((teacher, index) => (
            <FacultyCard
              key={teacher.id}
              faculty={teacher}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;