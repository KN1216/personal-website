import pof from '../assets/pof.png';
import {motion} from "framer-motion";
import portfolio from '../assets/portfolio.png';
function Experience () {
    return (
        <>
            <div>
                <h2 id="exp" className="font-wix text-7xl font-bold text-white">EXPERIENCE</h2>
                <div>
                    <h4 className="font-wix text-3xl font-bold text-white mt-10 mb-2">Relevant Courses:</h4>
                    <ul className="flex list-none gap-2 font-wix text-white flex-col">
                        <li>COSC 484: Web Programming</li>
                        <li>COSC 436: Object Oriented Design & Programming</li>
                        <li>COSC 336: Data Structure & Algorithms</li>
                        <li>COSC 435: Mobile App Development</li>
                        <li>COSC 412: Software Engineering</li>
                        <li>COSC 455: Programming Languages</li>
                    </ul>
                    <h4 className="font-wix text-5xl font-bold text-white mt-10 mb-15">PROJECTS</h4>
                </div>
                {/* container for gapping image cards and text */}
                <div className='flex flex-col gap-10'>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        {/* image card 1 */}
                        <motion.div 
                            className="relative w-full md:w-1/2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 10,
                                duration: 0.8
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            >
                            <div className='absolute -top-4 -left-4 w-full h-full bg-red-600 z-0'></div>
                            <img
                                src={pof}
                                alt="Plenty O' Friends"
                                className=" relative z-10"
                            />
                        </motion.div>
                        {/* text 1 */}
                        <div className='w-full md:w-1/2 flex flex-col justify-center'>
                            <h3 className='text-white font-wix font-bold text-3xl'>Plenty O' Friends</h3>
                            <p className='text-white mt-2'>A fullstack project that is a social platform where users can
                                connect with each other and explore new communities.
                            </p>
                            <ul className='text-white list-disc list-inside mt-3 flex gap-2 flex-col'>
                                <li>React & CSS for a simple yet intuitive design</li>
                                <li>Utilized MongoDB for the database with user info</li>
                                <li>Implemented external API's such as Mapbox with Express.js</li>
                                <li>Live chatroom feature for users to talk with each other</li>    
                            </ul>
                        </div>
                    </div>

                    {/* image card 2 */}
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <motion.div 
                            className="relative w-full md:w-1/2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 10,
                                duration: 0.8
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                        <div className="absolute -top-4 -left-4 w-full h-full bg-blue-600 z-0"></div>
                        <img
                            src={portfolio}
                            alt="Portfolio"
                            className="relative z-10"
                        />
                        </motion.div>
                        {/* text 2 */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-white font-wix font-bold text-3xl">Portfolio</h3>
                            <p className="text-white mt-2">
                                A personal portfolio for showcasing my web design skills as well as sleek user experience.  
                            </p>
                            <ul className="text-white list-disc list-inside mt-3 flex gap-2 flex-col">
                                <li>React and TailwindCSS to create beautiful site to showcase abilities</li>
                                <li>(WIP) Express.js backend for simple yet proper contact form</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
                
        </>
    );
}
export default Experience;