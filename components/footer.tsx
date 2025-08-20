'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/esubalew-gosaye/',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/esubalew-gosaye/',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:mesaye2010@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="py-16 section-padding border-t border-gray-800 bg-gray-900/80">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Esubalew Gosaye
            </h3>
            <p className="text-gray-400">Software Developer</p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-2.5 rounded-xl hover:bg-teal-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-teal-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-400">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:mesaye2010@gmail.com"
                  className="hover:text-teal-400"
                >
                  mesaye2010@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+251978041676" className="hover:text-teal-400">
                  +251 978 041 676
                </a>
              </li>
              <li className="hover:text-teal-400">Addis Ababa, Ethiopia</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Availability</h4>
            <p className="text-gray-400">
              Open to full-time roles and freelance projects.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-teal-400 hover:text-teal-300"
            >
              Let's work together →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Esubalew Gosaye. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
