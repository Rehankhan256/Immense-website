import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const GalleryCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute bottom-5 left-5 translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-center gap-2 text-white">
          <ImageIcon size={18} />

          <h3 className="text-lg font-semibold">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;