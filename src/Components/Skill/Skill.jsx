const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 80 },
        { name: "Material UI", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 80 },
            { name: "Postman", level: 90 }
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 80 },
        { name: "Github", level: 80 },
        { name: "NPM", level: 88 },
        { name: "VS Code", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-400">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-white text-xl font-semibold text-center mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
