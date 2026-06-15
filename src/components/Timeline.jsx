export default function Timeline() {
  const timeline = [
    {
      year: "Class 10",
      title: "Narayana School",
      desc: "Scored 600/600 with 100%."
    },
    {
      year: "Class 12",
      title: "Resonance Junior College",
      desc: "Scored 902/1000 with 90.2%."
    },
    {
      year: "Currently Studying",
      title: "SRM University, Kattankulathur",
      desc: "Computer Science Engineering with specialization in Big Data Analytics. Current CGPA: 8.62."
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
