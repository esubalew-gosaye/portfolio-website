'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield } from 'lucide-react';

const certifications = [
  {
    name: 'CCNAv7: Enterprise Networking, Security, and Automation',
    issuer: 'CISCO',
    date: 'July 2023',
    highlights: [
      'Mitigated threats and enhanced security using ACLs and best practices',
      'Configured IPv4 ACLs and NAT for scalable address management',
    ],
    link: 'https://www.cisco.com/',
  },
];

const awards = [
  {
    name: 'Extreme Programmer',
    org: 'Africa and Arab Programming Championship (ACPC)',
    date: 'Dec 2020',
    link: 'https://acpc.global/',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 section-padding bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications <span className="gradient-text">& Awards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700/30 rounded-2xl p-6 card-hover"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 text-teal-400 mr-2" />
              Certifications
            </h3>
            {certifications.map((c) => (
              <div key={c.name} className="mb-6 last:mb-0">
                <div className="text-white font-medium">{c.name}</div>
                <div className="text-teal-400 text-sm">
                  {c.issuer} • {c.date}
                </div>
                <ul className="mt-2 space-y-1">
                  {c.highlights.map((h, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-teal-400 mr-3 mt-2">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300"
                  >
                    Verify <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700/30 rounded-2xl p-6 card-hover"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 text-teal-400 mr-2" />
              Awards
            </h3>
            {awards.map((a) => (
              <div key={a.name} className="mb-6 last:mb-0">
                <div className="text-white font-medium">{a.name}</div>
                <div className="text-teal-400 text-sm">
                  {a.org} • {a.date}
                </div>
                <div className="mt-2">
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300"
                  >
                    View <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
