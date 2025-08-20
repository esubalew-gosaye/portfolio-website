'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎸' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'PostgreSQL / MySQL', icon: '🗄️' },
];

export default function About() {
  return (
    <section id="about" className="py-20 section-padding bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/30 to-blue-500/30 blur-2xl"></div>
              <div className="absolute inset-0 rounded-full ring-2 ring-teal-500/40"></div>
              <Image
                src="/esu-image.jpg"
                alt="Esubalew Gosaye"
                width={320}
                height={320}
                className="relative z-10 w-full h-full object-cover rounded-full shadow-xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Software Developer based in Addis Ababa with experience
              building scalable backend systems and robust APIs. I specialize in
              Python (Django), FastAPI, Node.js, and Spring Boot, and I enjoy
              solving complex problems with clean, maintainable code.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I have hands-on experience with cloud infrastructure on AWS,
              containerization with Docker, relational databases like PostgreSQL
              and MySQL, and CI/CD practices. I’m also active in competitive
              programming and DSA, which sharpens my problem-solving skills.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Tech Stack
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/50 rounded-2xl p-4 text-center hover:bg-gray-700 transition-colors duration-300 card-hover"
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="text-sm font-medium">{tech.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
