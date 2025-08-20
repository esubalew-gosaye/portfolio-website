'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'mesaye2010@gmail.com',
    href: 'mailto:mesaye2010@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+251978041676',
    href: 'tel:+251978041676',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: '#',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
      toast({
        title: 'Message sent!',
        description: 'Thanks for reaching out.',
      });
      form.reset();
    } catch (err) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 section-padding bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-700/30 border-gray-600 rounded-2xl card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-600/20 p-3 rounded-2xl">
                        <info.icon className="h-6 w-6 text-teal-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {info.title}
                        </h4>
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-700/30 border-gray-600 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        className="bg-gray-800 border-gray-600 text-white rounded-xl focus:border-teal-400"
                        placeholder="John"
                        name="firstName"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        className="bg-gray-800 border-gray-600 text-white rounded-xl focus:border-teal-400"
                        placeholder="Doe"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      className="bg-gray-800 border-gray-600 text-white rounded-xl focus:border-teal-400"
                      placeholder="john.doe@example.com"
                      name="email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      className="bg-gray-800 border-gray-600 text-white rounded-xl focus:border-teal-400 min-h-[120px]"
                      placeholder="Tell me about your project..."
                      name="message"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-60"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
