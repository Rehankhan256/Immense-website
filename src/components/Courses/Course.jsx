import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { courses } from "./CourseData";

const Courses = () => {
  return (
    <section id="courses" className="bg-slate-50 py-24">
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
            Our Popular Courses
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Learn Skills That Build
            <span className="block text-blue-600">
              Your Future
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're looking to improve your English communication
            or gain practical computer skills, our courses are designed
            to prepare you for academics, jobs, and everyday success.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;