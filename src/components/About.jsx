import {motion} from "framer-motion";
function About () {
    // tech stack to display what technologies and languages i currently use, can easily add whatever to the array to display via the map func
    const techs = ["ReactJS", "NextJS", "TailwindCSS", "NodeJS", "ExpressJS", "MYSQL", "SQL", "MongoDB", "Vercel", "Docker", "Git", "GitHub", "Swift", "React Native", "HTML", "CSS", "Python", "Swift"]

    return (
        <>
            {/* section heading */}
            <h1 id="about"className="font-wix text-7xl font-bold text-white">ABOUT ME</h1>
            {/* container for the boxes */}
            <div className="font-wix text-left text-white grid grid-cols-3 gap-4 p-6">
                {/* box 1 */}
                <motion.div
                    className="border p-6 rounded-sm text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="font-bold">Software Development</h3>
                    <span className="text-white">Strong understanding of data structures & algorithms, as well as proficient with OOD and OOP.</span> <br/>
                    <span className="text-white">Java, JavaScript, Python</span>
                
                </motion.div>

                {/* box 2 */}
                <motion.div
                    className="border p-6 rounded-sm text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="font-bold">Frontend Development</h3>
                    <span className="text-white">Creative and love enjoy making eye candy for an intuitive user interface and experience.</span> <br/>
                    <span className="text-white">HTML, CSS, TailwindCSS, JavaScript, React</span>
                </motion.div>

                {/* box 3 */}
                <motion.div
                    className="border p-6 rounded-sm text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="font-bold">Backend Development</h3>
                    <span className="text-white">Proficient with back-end technologies and passionate about solving complex problems and maintaining systems.</span> <br/>
                    <span className="text-white">Java, Node.js, Python, Express.js, SQL, MongoDB</span>
                    
                </motion.div>

                {/* box 4 */}
                <motion.div
                    className="border p-6 rounded-sm text-center col-span-3 w-1/3 mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="font-bold">Mobile App Development</h3>
                    <span className="text-white">Capable of developing expansive mobile applications with React Native and Swift. (iOS focus)</span>
                </motion.div>

                
            </div>
            {/* paragraph about myself */}
                <span className="text-white">I am an aspiring fullstack engineer with a current focus in web development. My current expertise is</span> <br/>
                <span className="text-white"> front-end with a strong foundation in back-end development, as well as skills in mobile app</span> <br/>
                <span className="text-white">development, primarily targeting iOS. <br/> <br/> At the moment I am a senior enrolled at Towson University where I have gained</span> <br/>
                <span className="text-white"> experience with concepts like Data Structures and Algorithms and Object Oriented program & design, as well as</span> <br/>
                <span className="text-white"> gained technical skills. I am expecting graduation in May of 2026.</span>

                {/* func to display tech stack */}
                <h2 className="font-wix text-3xl font-bold text-white py-10">MY TECH STACK</h2>
                <div className="grid grid-cols-2 sm:rgid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5x1 mx-auto">
                    {techs.map(function(tech, i) {
                        return (
                            <div key={i} className="px-4 py-2 rounded-lg bg-gray-800/50 text-center text-white font-bold">{tech}</div>
                        );
                    })}
                </div>
                
        </>
    );
}

export default About;