import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SociableUTA",
        description: "Social media dashboard to automate cross-platform management at UTA.",
        image: "/projects/SociableUTA.png",
        tags: ["JavaScript", "React", "Express.js", "Node.hs", "MongoDB"],
        demoUrl: "",
        githubUrl: "https://github.com/wendoleevillegas/sociable-UTA",
    },
    {
        id: 2,
        title: "Mav Grades",
        description: "An interactive academic analytics platform by students, for students.",
        image: "/projects/MavGrades.png",
        tags: ["HTML", "React", "Tailwind CSS", "Next.js", "JavaScript"],
        demoUrl: "https://mavgrades.com",
        githubUrl: "https://github.com/wendoleevillegas/uta-grades",
    },
    {
        id: 3,
        title: "Crop 'n' Drip (HACKUTA2024 3rd place)",
        description: "An IoT-based smart irrigation system that optimizes water usage for crops.",
        image: "/projects/CropNDrip.PNG",
        tags: ["IoT", "Python", "C", "Microsoft Azure", "Azure Service Bus"],
        demoUrl: "https://devpost.com/software/crop-n-drip",
        githubUrl: "https://github.com/wendoleevillegas/HackUTA6",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured
                    <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are my projects, showcasing my skills in web development and software engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > <ExternalLink size={20} /> </a>

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > <Github size={20} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="buttons w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/wendoleevillegas"
                    >
                        Check out My Github! <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};