import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'PHP', level: 85 },
  { name: 'PostgreSQL', level: 80 },
  {name: 'MySQL', level: 85},
  { name: 'Docker', level: 75 },
  { name: 'AWS', level: 70 },
  { name: 'GCP', level: 65 },
  { name: 'React', level: 85 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'TypeScript', level: 65 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Background
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm Emmanuel Otieno, a passionate Software and Web Developer with a strong foundation in HTML, CSS, JavaScript, React, Node.js, Headless CMS, Python, PHP, and SQL databases.
              With over 2 years of hands-on experience in building responsive, user-friendly websites and backend services, I've developed a deep understanding of how to create seamless user experiences while ensuring scalability, performance, and code maintainability.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I thrive in remote, collaborative environments, working across time zones and cultures to deliver solutions that align with business goals. My work includes developing scalable APIs, integrating third-party services, creating custom CMS setups, and ensuring cross-browser and mobile compatibility. I'm also well-versed in troubleshooting and bug fixing, helping teams resolve complex issues efficiently.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a recent Computer Science graduand from Chuka University (Kenya), complemented by a Software Engineering Certification from ALX Africa. I'm a quick learner, adaptable, and always ready to take on challenges that push my skills and contribute to meaningful projects.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My career goal is to join innovative teams, especially those working at the intersection of AI, web technologies, and API-driven services, where I can apply my skills to solve real-world problems, learn from experienced mentors, and grow as a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary-600 dark:text-primary-400">3+</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary-600 dark:text-primary-400">15+</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary-600 dark:text-primary-400">10+</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary-600 dark:text-primary-400">3+</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Awards Won</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;