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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Software Developer (Collaborator)
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">
                Project With Richard Onyango, Nairobi, Kenya • 06/2023 - Current
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Developed web applications using HTML, CSS, Bootstrap, PHP, JavaScript, and MySQL technologies.</li>
                <li>Participated in code reviews to maintain quality and consistency in development.</li>
                <li>Integrated third-party APIs to enhance application functionality and user experience.</li>
                <li>Applied object-oriented programming principles to enhance code maintainability and scalability.</li>
                <li>Managed version control through Git to ensure project integrity.</li>
                <li>Documented backend workflows in compliance with secure coding standards.</li>
                <li>Developed and maintained Django and Laravel applications to ensure optimal performance.</li>
                <li>Collaborated with cross-functional teams to gather requirements and design applications.</li>
                <li>Documented technical specifications and user manuals for software functionality.</li>
                <li>Conducted code reviews to ensure adherence to coding standards and best practices.</li>
                <li>Wrote efficient SQL queries, utilized ORM for models, and conducted unit tests on core components.</li>
                <li>Participated in Agile sprints to enhance project delivery and team collaboration.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-2 border-primary-600 dark:border-primary-400 pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Software Engineer (Part-Time)
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">
                Amnel Solution, Mombasa, Kenya • 11/2024 - 04/2025
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Developed and maintained Django and Laravel applications to ensure optimal performance.</li>
                <li>Collaborated with cross-functional teams to gather requirements and design applications.</li>
                <li>Documented technical specifications and user manuals for software functionality.</li>
                <li>Conducted code reviews to ensure adherence to coding standards and best practices.</li>
                <li>Wrote efficient SQL queries, utilized ORM for models, and conducted unit tests on core components.</li>
                <li>Participated in Agile sprints to enhance project delivery and team collaboration.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-l-2 border-primary-600 dark:border-primary-400 pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Software Developer (Contract)
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">
                Loosian Farm Company, Kajiado, Kenya • 01/2025 - 03/2025
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Designed and deployed full-stack Farm Management System to enhance operational efficiency.</li>
                <li>Integrated Django ORM with SQL queries for data-driven reporting capabilities.</li>
                <li>Maintained existing code to improve functionality and system performance.</li>
                <li>Troubleshot software issues ensuring seamless user experience for staff.</li>
                <li>Documented software specifications, processes, and system architecture for clarity.</li>
                <li>Fixed bugs and tested features to ensure system reliability.</li>
                <li>Utilized Docker and Git for efficient deployment processes.</li>
                <li>Trained staff on new software tools and features effectively.</li>
                <li>Developed inventory tracking system utilizing Python and SQL technologies.</li>
                <li>Contributed to quality assurance processes, ensuring product reliability.</li>
                <li>Configured firewalls to enhance network security measures.</li>
                <li>Executed basic cybersecurity tasks to mitigate potential threats.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l-2 border-primary-600 dark:border-primary-400 pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Software Engineering Intern
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">
                Kenya Pipeline Company, Nairobi, Kenya • 05/2024 - 08/2024
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Conducted peer code reviews to uphold code quality and best practices.</li>
                <li>Designed and deployed full-stack Farm Management System to enhance operational efficiency.</li>
                <li>Integrated Django ORM with SQL queries for data-driven reporting capabilities.</li>
                <li>Maintained existing code to improve functionality and system performance.</li>
                <li>Troubleshot software issues ensuring seamless user experience for staff.</li>
                <li>Documented software specifications, processes, and system architecture for clarity.</li>
                <li>Fixed bugs and tested features to ensure system reliability.</li>
                <li>Utilized Docker and Git for efficient deployment processes.</li>
                <li>Trained staff on new software tools and features effectively.</li>
                <li>Developed inventory tracking system utilizing Python and SQL technologies.</li>
                <li>Contributed to quality assurance processes, ensuring product reliability.</li>
                <li>Configured firewalls to enhance network security measures.</li>
                <li>Executed basic cybersecurity tasks to mitigate potential threats.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;