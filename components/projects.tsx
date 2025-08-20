'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'TeleHakim',
    description:
      'Tele Hakim is a project that connects patients and doctors remotely from the comfort of your home. It has video, audio, and text communication, and it will also include a system that recommends doctors based on the symptoms you provide for those who don’t know whom to pick.',
    image: '/images/telehakim.png',
    tags: ['Python', 'Django', 'React', 'WebSocket', 'Postgres', 'Agora', 'Github'],
    github: 'https://github.com/Nolawi-Tech/TeleHakim',
    live: '#',
  },
  {
    title: 'DX Valley',
    description:
      'DxValley is a physical space designed to nurture innovation in a particular field. It brings together researchers, creators, and innovators to nurture ideas into industry-changing products and services.',
    image: '/images/dx-valley.png',
    tags: ['Next', "CMS", 'PostgreSQL', 'STRAPI'],
    github: '#',
    live: 'https://dxvalley.com/',
  },
  {
    title: 'OKR tool',
    description:
      'OKR tool is a tool that helps you set and track your goals and objectives. It is a tool that helps you set and track your goals and objectives.',
    image: '/images/okr-tool.png',
    tags: ['SpringBoot', 'Angular', 'Postgres', 'Docker', 'Redis', "BurningOKR"],
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media API',
    description:
      'RESTful API for social media platform with user management, posts, comments, and real-time notifications. Built with Node.js and GraphQL.',
    image: '/images/social-api.png',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/esubalew-gosaye/social-media-backend',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-teal-600/20 text-teal-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
