import Image from "next/image";
import Link from "next/link";

const projects = [
    { name: "My Portfolio Website", description: "My personal website showcasing skills, projects, and contact details.", image: "/img/portfolio.png", url: "https://github.com/madnan-github/portfolio-next-js" },
    { name: "ATM Program", description: "A Node.js simulation of basic ATM operations like balance inquiry, withdrawal, and deposit.", image: "/img/atm.png", url: "https://github.com/madnan-github/NP_ATM" },
    { name: "Currency Converter", description: "A tool that converts currencies based on real-time exchange rates.", image: "/img/currency.png", url: "https://github.com/madnan-github/NP_currencyconverter" },
    { name: "Number Guessing Game", description: "A fun game where users guess a randomly generated number within a given range.", image: "/img/num-game.png", url: "https://github.com/madnan-github/NP_NumberGuessingGame" },
    { name: "Simple Calculator", description: "Performing basic arithmetic operations like addition, subtraction, multiplication, and division.", image: "/img/calc.png", url: "https://github.com/madnan-github/NP_SimpleCalculator" },
    { name: "To Do App", description: "A task management app allowing users to add, track, and delete to-do items.", image: "/img/todoapp.png", url: "https://github.com/madnan-github/NP_todo" },
];

const Project = () => {
    return (
        <div className="min-h-screen bg-white p-20">
            <h1 className="text-4xl font-bold text-primary text-center">My Projects</h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-6 border-accent rounded-lg shadow-xl hover:shadow-slate-500 transition text-center"
                    >
                        <div className="flex items-center justify-center p-10 text-center">
                            <Image src={project.image} alt="project image" width={150} height={150} className="w-[150px] h-[150px] p-4 border-4 rounded-full max-auto"></Image>
                        </div>
                        <h2 className="text-xl font-semibold text-accent">{project.name}</h2>
                        <p className="my-8 text-whtie">{project.description}</p>
                        <Link href={project.url} target="blank" className="mt-4 text-primary border-4 rounded-3xl px-4 hover:text-accent hover:border-accent ">Click Here!</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project