import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold">
            Bharath Sai
          </h1>

          <h2 className="gradient-text text-2xl mt-4">
            Computer Science Engineering Student
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Passionate about Web Development,
            Machine Learning, Data Science,
            and Data Analytics.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="glass px-6 py-3 rounded-xl"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Bharath Sai"
              className="w-full h-full object-cover"
              style={{
                objectPosition: "center top",
                transform: "scale(1.0)"
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}