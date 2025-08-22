'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiSpringboot,
  SiAmazonwebservices,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiApachesuperset,
  SiRedis,
  SiApachekafka,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'FastAPI' },
      { name: 'Node.js' },
      { name: 'Spring Boot' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'Git' },
      { name: 'Kubernetes' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Superset' },
      { name: 'Redis' },
      { name: 'Kafka' },
    ],
  },
];

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  Django: SiDjango,
  FastAPI: SiFastapi,
  'Node.js': SiNodedotjs,
  'Spring Boot': SiSpringboot,
  AWS: SiAmazonwebservices,
  Docker: SiDocker,
  'CI/CD': SiGithubactions,
  Git: SiGit,
  Kubernetes: SiKubernetes,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Superset: SiApachesuperset,
  Redis: SiRedis,
  Kafka: SiApachekafka,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-muted/50 rounded-2xl p-6 card-hover"
            >
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.name as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="bg-gray-700/40 rounded-lg py-2 px-3 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
                    >
                      {Icon ? (
                        <Icon size={18} aria-hidden className="shrink-0" />
                      ) : (
                        <span className="text-lg leading-none" aria-hidden>
                          •
                        </span>
                      )}
                      <span className="text-sm font-medium text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
