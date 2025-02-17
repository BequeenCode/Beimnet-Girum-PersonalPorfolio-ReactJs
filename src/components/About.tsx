import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
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
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Sarah Anderson"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-lg" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              Hi! I'm Sarah, a passionate software developer with 5+ years of experience building web applications
              that make a difference. I specialize in creating scalable, user-friendly solutions using modern technologies.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me contributing to open-source projects, writing technical articles,
              or mentoring aspiring developers.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-gray-600">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="text-gray-600">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}