import { motion } from 'framer-motion';
import { useState } from 'react';

const certifications = [
  {
    title: 'Software Engineering',
    issuer: 'ALX Africa',
    date: '2024',
    credentialId: 'ALX-SE-2024',
    skills: [
      // Core Programming
      'C Programming',
      'Python',
      'JavaScript/TypeScript',
      'Node.js',
      
      // Web Development
      'HTML/CSS',
      'Flask',
      'APIs',
      'Front-end Development',
      'Back-end Development',
      
      // DevOps & System Engineering
      'Linux Administration',
      'Shell Scripting',
      'Git/GitHub',
      'Nginx',
      'SSL/TLS',
      'Load Balancing',
      
      // Databases
      'MySQL',
      'Redis',
      'NoSQL',
      'SQLAlchemy ORM',
      
      // Software Architecture
      'Data Structures',
      'Algorithms',
      'System Design',
      'API Design',
      'Caching Systems',
      
      // Development Practices
      'Test-Driven Development',
      'Unit Testing',
      'Technical Writing',
      'Code Review',
      'Debugging'
    ],
    pdfUrl: '/myportfolio/certificates/alx-certificate.pdf', // Updated path with base URL
    imageUrl: '/myportfolio/certificates/alx-preview.png', // Updated path with base URL
    verifyLink: 'https://savanna.alxafrica.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeFhRSUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9f786616f541edcc6794ea1605d342b24d5b5a14/17-short-specializations-certificate-emmanuel-okoth.png'
  },
  // {
  //   title: 'React Development',
  //   issuer: 'Meta',
  //   date: '2023',
  //   credentialId: 'META-REACT-2023',
  //   skills: ['React.js', 'JavaScript', 'Frontend Development', 'Web Development'],
  //   pdfUrl: '/certificates/meta-certificate.pdf',
  //   imageUrl: '/certificates/meta-preview.jpg',
  //   verifyLink: '#'
  // },
];

const Modal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({ certification, index, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div 
          className="mb-4 cursor-pointer"
          onClick={() => onImageClick(certification)}
        >
          <img
            src={certification.imageUrl}
            alt={certification.title}
            className="w-full h-48 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {certification.title}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 mb-2">
          {certification.issuer} • {certification.date}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Credential ID: {certification.credentialId}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={certification.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View PDF
          </a>
          {certification.verifyLink && (
            <a
              href={certification.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Verify
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.credentialId}
              certification={certification}
              index={index}
              onImageClick={(cert) => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        imageUrl={selectedCert?.imageUrl}
        title={selectedCert?.title}
      />
    </section>
  );
};

export default Certifications; 