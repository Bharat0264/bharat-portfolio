export default function Projects() {

  const projects = [
    {
      title: "Earnova",
      desc: "Founder-led earning and commerce platform with a practical full-stack product experience.",
      link: "https://www.earnova.in"
    },
    {
      title: "Business Intelligence with AI",
      desc: "AI-powered business intelligence project focused on turning data into useful insights and analytics.",
      link: "https://ai-bi-platform-gud0.onrender.com/"
    },
    {
      title: "Generative AI Project",
      desc: "Generative AI application built around prompt engineering, intelligent content generation, and practical LLM-powered workflows.",
      link: "https://generative-ai-research-assistant.vercel.app"
    },
    {
      title: "ATS Resume Maker",
      desc: "Resume builder focused on ATS-friendly formatting, professional resume creation, and quick export-ready workflows.",
      link: "https://resume-maker-ats.vercel.app/"
    },
    {
      title: "Water Quality Monitoring and Prediction",
      desc: "IoT and Machine Learning based water quality monitoring system using ESP32 sensors and Decision Tree classifier.",
      link: "https://github.com/Bharat0264/smart-water-quality-monitoring"
    },
    {
      title: "Bankruptcy Prediction System",
      desc: "Machine Learning model using Logistic Regression, Decision Tree, SVM and Random Forest.",
      link: "https://github.com/Bharat0264/Bankruptcy-Prediction-using-Machine-learning-Techniques"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, index) => {
            const Card = project.link ? "a" : "div";

            return (
              <Card
                key={index}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noreferrer" : undefined}
                className="glass p-6 rounded-2xl hover:-translate-y-2 transition duration-300 block"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.desc}
                </p>
              </Card>
            );
          })}

        </div>

      </div>

    </section>
  );
}
