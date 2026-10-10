import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import { gallery } from "./galleryData";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore Our Campus &
            <span className="block text-blue-600">
              Student Activities
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Take a look at our classrooms, computer labs, English speaking sessions,
            seminars, and memorable moments from institute events.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;