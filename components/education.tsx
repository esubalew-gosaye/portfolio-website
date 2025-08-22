'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, ExternalLink } from 'lucide-react';

const educations = [
  {
    program: 'Data Structure and Algorithm',
    school: 'A2SV | Africa to Silicon Valley',
    location: 'Remote / Addis Ababa',
    period: 'Jan 2024 - Jan 2025',
    details: [
      'Attended daily lectures on DSA in Python, building strong foundations in core concepts',
      'Participated in weekly coding contests to enhance problem-solving skills',
      'Solved 300+ problems on LeetCode and Codeforces',
      'Engaged in experience-sharing sessions, communication training, and resume workshops',
    ],
    link: 'https://a2sv.org/',
  },
  {
    program: 'Computer Science and Engineering B.Sc.',
    school: 'Adama Science and Technology University',
    location: 'Adama, Ethiopia',
    period: 'Oct 2018 - Jul 2023',
    details: ['Graduated with 3.72 / 4.00 CGPA'],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="gradient-text">& Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-2xl p-6 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 flex items-center">
                    <GraduationCap className="h-5 w-5 text-teal-400 mr-2" />{' '}
                    {edu.program}
                  </h3>
                  <h4 className="text-lg text-teal-400 font-medium">
                    {edu.school}
                  </h4>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {edu.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start"
                  >
                    <span className="text-teal-400 mr-3 mt-2">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {edu.link && (
                <div className="mt-4">
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Learn more <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
