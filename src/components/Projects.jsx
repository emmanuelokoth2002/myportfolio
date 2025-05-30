import { motion } from 'framer-motion';

const projects = [
  // {
  //   title: 'Headless CMS Integration',
  //   description: 'Developed a modern content management solution using Sanity.io, enabling marketing teams to efficiently manage website content. Implemented custom schemas, content models, and fields for optimal content organization.',
  //   image: '/projects/cms.jpg',
  //   tech: ['React.js', 'Sanity.io', 'GROQ', 'Tailwind CSS'],
  //   features: [
  //     'Custom schema development',
  //     'Content modeling',
  //     'Real-time content updates',
  //     'Marketing team-friendly interface'
  //   ],
  //   github: 'https://github.com/yourusername/headless-cms',
  //   demo: 'https://cms-demo.yourdomain.com',
  //   featured: true
  // },
  {
    title: 'Real Estate Management System',
    description: 'I collaborated wih senior software developer to build a comprehensive property management platform for landlords to efficiently manage their real estate portfolio. The system streamlines property listings, tenant management, rent collection, and maintenance requests.',
    image: '/projects/real-estate.png',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    features: [
      'Property listing management',
      'Tenant portal with maintenance requests',
      'Automated rent reminders and tracking',
      'Financial reporting and analytics',
      'Document management for leases',
      'Maintenance staff scheduling'
    ],
    github: 'https://github.com/akellorich/amnel-rentwise.git',
    demo:'https://drive.google.com/file/d/135ifKGtGMj_q_d8xsIYal9NMzzUHRVZw/view?usp=sharing',
    featured: true
  },
  {
    title: 'Farm Management System',
    description: 'Developed a comprehensive multi-branch platform for agricultural businesses to track crops, livestock, warehouses, and workforce. Features include real-time monitoring, inventory management, and detailed reporting.',
    image: '/projects/farm-management.jpg',
    tech: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker'],
    features: [
      'Multi-branch management',
      'Real-time tracking',
      'Inventory control',
      'Workforce management',
      'Analytics dashboard'
    ],
    github: 'https://github.com/emmanuelokoth2002/famasy.git',
    demo: 'https://drive.google.com/file/d/1aDfV_geGz0_eyOvWc5XG_xrRVqqR9U5m/view?usp=sharing',
    featured: true
  },
  {
    title: 'Component Library',
    description: 'Built a comprehensive library of reusable, responsive UI components using React.js, Tailwind CSS, and TypeScript. Designed for scalability and accessibility, this library supports rapid development across multiple client projects, ensuring design consistency and maintainability.',
    image: '/projects/component-lib.jpg',
    tech: ['React.js', 'Tailwind CSS', 'Storybook', 'TypeScript'],
    features: [
      'Responsive design',
      'Theme customization',
      'Accessibility compliance',
      'Documentation'
    ],
    github: 'https://github.com/emmanuelokoth2002/myportfolio.git',
    demo: '',
    featured: true
  },
    {
    title: 'Discord Developer Collaboration App',
    description: 'This project aims to facilitate communication and collaboration among developers on Discord by providing a platform where they can connect with others who share similar interests, skills, or goals.',
    image: '/projects/discord-dev.jpg',
    tech: ['Django', 'HTML', 'CSS', 'Javascript', 'SQLite'],
    features: [
      'Real-time messaging',
      'Developer matching'
    ],
    github: 'https://github.com/emmanuelokoth2002/Discord-Application.git',
    demo: 'https://drive.google.com/file/d/1UT-foUNGNKkrMNHRMHlD8jCp8YxhRy-o/view?usp=sharing'
  },
  {
    title: 'Inventory & POS System',
    description: 'Created a robust point-of-sale system with real-time inventory tracking capabilities. The system helps businesses manage sales, track stock levels, and generate comprehensive reports.',
    image: '/projects/pos-system.jpg',
    tech: ['Python', 'MySQL', 'React', 'Socket.io', 'Rest-full APIs'],
    features: [
      'Real-time stock tracking',
      'Sales management',
      'Reporting tools',
      'Multi-user support'
    ],
    github: 'https://github.com/emmanuelokoth2002/inventory_management.git',
    demo: null
  },
  {
    title: 'Parent-Student Monitoring System',
    description: 'Developed a web-based platform for tracking academic progress with secure dashboards for parents, teachers, and administrators. Features include grade tracking, attendance monitoring, and communication tools.',
    image: '/projects/student-monitoring.jpg',
    tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
    features: [
      'Secure authentication',
      'Real-time progress tracking',
      'Communication portal',
      'Performance analytics'
    ],
    github: 'https://github.com/emmanuelokoth2002/Parent-Student-School-Progress-Tracking-System-MVP-specification.git',
    demo: null
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="relative h-48 sm:h-64">
          <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-400/10">
            <div className="absolute inset-0 backdrop-blur-3xl"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-primary-600 dark:text-primary-400">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
          
          {project.features && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Key Features:
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 pt-0 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;