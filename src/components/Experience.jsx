import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-primary-600 dark:border-primary-400 pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineer</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Amnel Solution • Nov 2024 - Present</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 italic">Part-Time, Remote</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Built and maintained backend services using Python, PHP, and SQL databases</li>
                <li>Wrote clean, maintainable code and participated in code reviews to ensure best practices</li>
                <li>Identified and resolved performance bottlenecks, improving application load times by 25%</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-2 border-primary-600 dark:border-primary-400 pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Developer</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Loosian Farm Company • Jan 2025 - Mar 2025</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 italic">Contract</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Designed and developed testable, scalable backend APIs using Python, reducing system errors by 30%</li>
                <li>Analyzed and enhanced existing software features, resolving bugs and improving stability</li>
                <li>Collaborated with cross-functional teams to deliver robust, user-focused solutions on schedule</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-l-2 border-primary-600 dark:border-primary-400 pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineering Attaché</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Kenya Pipeline Company • May 2024 - Aug 2024</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 italic">Internship</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Contributed to backend development, API design, and software debugging</li>
                <li>Participated in system performance analysis and identified areas for optimization</li>
                <li>Assisted with Linux system configuration and network troubleshooting</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l-2 border-primary-600 dark:border-primary-400 pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Junior Developer & Technical Support</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Freelance • Jun 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Developed small-scale web applications and backend scripts using SQL databases for data management</li>
                <li>Debugged and enhanced client websites, resolving technical issues and ensuring smooth functionality</li>
                <li>Provided clear technical guidance to non-technical stakeholders, improving client understanding and satisfaction</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 