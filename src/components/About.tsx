import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myPic from '../assets/aboutMe.jpg'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white lg:px-40">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src={myPic}
              alt="Beimnet Girum"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-[-20px] bg-gradient-to-tr from-purple-600/20 to-transparent rounded-lg lg:w-[500px]" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
            👋 Hi there!
            I’m currently pursuing Computer Science and Engineering (CSE) at Adama Science and Technology University
             I’m passionate about software engineering, development, and design, and I’m always eager to collaborate on exciting open-source projects or any creative tech-related work.
            </p>
            <p className="text-gray-600 mb-8">
            I love learning new technologies and strongly believe in growing together with the community.
             I’m always open to seeking help, sharing knowledge, and improving my skills along the way.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-gray-600">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="text-gray-600">
                  <li>Node.js</li>
                  <li>Python</li>
        
                
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}