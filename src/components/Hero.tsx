import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
            <div className="from-purpl-600 to-pink-600">
                <h3 className='text-2xl'>👋 Hi there! I am</h3>
            </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-6">
            
          <Typewriter 
            options={{
                strings:[
                    'BEIMNET GIRUM',
                    'Web developer',
                    'Mobile App developer',
                    'Designer'
                ],autoStart:true,
                delay:50,
                deleteSpeed:50,
                loop:true,
            }} />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Building scalable solutions with code and creativity
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="#contact" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
              View My Work
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/BequeenCode" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="girumbeimnet74@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://t.me/beq_12" className="text-gray-600 hover:text-purple-600 transition-colors"><Send size={24}/></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}