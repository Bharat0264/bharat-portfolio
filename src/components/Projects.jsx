export default function Projects() {

  const projects = [
    {
      title: "Water Quality Monitoring and Prediction",
      desc: "IoT and Machine Learning based water quality monitoring system using ESP32 sensors and Decision Tree classifier."
    },
    {
      title: "Bankruptcy Prediction System",
      desc: "Machine Learning model using Logistic Regression, Decision Tree, SVM and Random Forest."
    },
    {
      title: "E-Commerce Website",
      desc: "Web-based E-Commerce platform developed using HTML, MySQL and DBMS concepts."
    }
  ];

  return (
    <section id="projects" className="py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}