'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Cooperative Bank of Oromia',
    location: 'Addis Ababa, Ethiopia',
    period: 'May 2024 - Present',
    responsibilities: [
      'Developed a highly transactional loaning application ensuring secure and efficient financial transactions',
      'Applied data science techniques for credit scoring to improve loan approval accuracy and risk assessment',
      'Implemented secure APIs to integrate with core banking systems and FinTech partners',
      'Conducted unit, integration, and performance testing to ensure reliability and scalability',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Ethiopian Artificial Intelligence Institute',
    location: 'Addis Ababa, Ethiopia',
    period: 'July 2023 - May 2024',
    responsibilities: [
      'Developed an LLM for translation between local languages, improving user interactivity by 60%',
      'Optimized model performance through fine-tuning and rigorous evaluation',
      'Implemented CI/CD pipelines to streamline collaboration and deployments',
      'Designed and built robust APIs for production endpoints using Node.js and Spring Boot',
    ],
  },
  {
    title: 'Data Structure and Algorithm',
    company: 'A2SV | Africa to Silicon Valley',
    location: 'Remote / Addis Ababa',
    period: 'Jan 2024 - Jan 2025',
    responsibilities: [
      'Attended daily lectures on DSA in Python, building strong foundations in core concepts',
      'Participated in weekly coding contests to enhance problem-solving skills',
      'Solved 300+ problems on LeetCode and Codeforces',
      'Engaged in experience-sharing sessions, communication training, and resume workshops',
    ],
    link: 'https://a2sv.org/',
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-20 section-padding bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-teal-400 to-blue-500"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-teal-400 rounded-full border-4 border-gray-900"></div>

              <div className="ml-16 bg-gray-700/30 rounded-2xl p-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-teal-400 font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-300 mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-teal-400 mr-3 mt-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
