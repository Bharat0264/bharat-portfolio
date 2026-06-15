export default function Skills() {
  const skills = [
    "Web Development",
    "Machine Learning",
    "Data Science",
    "Data Analytics",
    "C Programming",
    "Python",
    "SQL"
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
