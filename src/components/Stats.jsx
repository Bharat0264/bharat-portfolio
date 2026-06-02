export default function Stats() {

  const stats = [
    ["8.53", "CGPA"],
    ["15+", "Projects"],
    ["2", "Certifications"],
    ["2027", "Graduation"]
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="glass p-8 rounded-2xl text-center"
          >
            <h3 className="text-4xl font-bold gradient-text">
              {item[0]}
            </h3>

            <p className="mt-2">
              {item[1]}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}