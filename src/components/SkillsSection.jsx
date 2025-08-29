
const skills = [
    // Progamming Languages
    { name: "Python", level: 80, category: "Programming Languages" },
    { name: "HTML/CSS", level: 80, category: "Programming Languages" },
    { name: "SQL (SQLite3)", level: 80, category: "Programming Languages" },
    { name: "PHP", level: 70, category: "Programming Languages" },

    // Frameworks & Libraries
    { name: "ReactJS", level: 80, category: "Frameworks & Libraries" },
    { name: "Tailwind CSS", level: 80, category: "Frameworks & Libraries" },
    { name: "Node.js", level: 80, category: "Frameworks & Libraries" },
    { name: "Next.js", level: 80, category: "Frameworks & Libraries" },
    { name: "Flask", level: 80, category: "Frameworks & Libraries" },
    { name: "JUnit", level: 80, category: "Frameworks & Libraries" },
    { name: "Tensorflow", level: 80, category: "Frameworks & Libraries" },
    { name: "Keras", level: 80, category: "Frameworks & Libraries" },
    { name: "Numpy", level: 80, category: "Frameworks & Libraries" },

    // Developer Tools
    { name: "VS Code", level: 80, category: "Tools" },
    { name: "Git/Github", level: 80, category: "Tools" },
    { name: "Unix", level: 80, category: "Tools" },
    { name: "Google Colab", level: 80, category: "Tools" },
    { name: "Jupyter Notebook", level: 80, category: "Tools" },
    { name: "Azure Service Bus", level: 80, category: "Tools" },

];



export const SkillsSection = () => {

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground"> {skill.level}% </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
};