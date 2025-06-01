import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';
import cvFile from '../assets/cv.pdf';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">
                Emmanuel Otieno
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-8">
              Software Engineer & AI Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              A passionate Software Engineer specializing in backend development, frontend development and AI technologies. 
              With expertise in Python, PHP, HTML, CSS, React, Headless CMS and cloud technologies, I build scalable systems that solve 
              real-world problems. Recent Computer Science graduand from Chuka University, combining strong 
              academic foundation with practical experience in developing innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Contact Me
              </motion.a>
              <motion.a
                href={cvFile}
                download="Emmanuel_Otieno_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] lg:h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 dark:from-primary-400/10 dark:to-primary-600/10 rounded-2xl">
                <div className="absolute inset-0 backdrop-blur-3xl rounded-2xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Emmanuel Otieno"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;