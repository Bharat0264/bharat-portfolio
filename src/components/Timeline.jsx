export default function Timeline() {
  const timeline = [
    {
      year: "2023",
      title: "Started B.Tech CSE",
      desc: "Began my Computer Science Engineering journey."
    },
    {
      year: "2024",
      title: "Web Development",
      desc: "Built multiple frontend and full-stack projects."
    },
    {
      year: "2025",
      title: "AI & Data Science",
      desc: "Started working on Machine Learning, NLP, and Data Science projects."
    },
    {
      year: "2026",
      title: "Advanced Projects",
      desc: "Working on AI, Data Science, and Full Stack Development projects."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          My Journey
        </h2>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl"
            >
              <p className="gradient-text font-bold text-lg">
                {item.year}
              </p>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}