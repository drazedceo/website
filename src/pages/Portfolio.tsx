import React from 'react';
import { motion } from 'framer-motion';
type CaseStudy = {
  client: string;
  title: string;
  problem: string;
  solution: string;
  tags: [string, string, string];
  link: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    client: 'Bukhat Trading (Pvt) Ltd.',
    title: 'Global Trade Digital Hub',
    problem: 'A fragmented digital presence diluted credibility in a highly competitive international market.',
    solution: 'Engineered a high-speed corporate web infrastructure focused on authority, trust, and global discoverability.',
    tags: ['Corporate Web', 'Performance', 'SEO'],
    link: 'http://bukhattrading.com/',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    client: 'Climax Hosiery',
    title: 'Industrial Digital Transformation',
    problem: 'Traditional manufacturing expertise lacked a digital interface that matched production excellence.',
    solution: 'Built a streamlined digital experience that modernized outreach while preserving industrial brand heritage.',
    tags: ['Industrial Design', 'UI/UX', 'Scalability'],
    link: 'https://climaxknits.com/',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    client: 'Props The Gift Shop',
    title: 'E-Commerce & Growth Ecosystem',
    problem: 'The brand needed unified commerce and content operations to scale consistent online growth.',
    solution: 'Delivered end-to-end Shopify development and social management optimized for conversion and storytelling.',
    tags: ['Shopify', 'Social Management', 'Conversion Ops'],
    link: 'https://propsthegiftshop.pk/',
    image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

const Portfolio = () => {

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a]">
        {/* Complex geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
          <div className="geo-triangle absolute top-16 left-16 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-[#00FFF7]"></div>
          <div className="geo-hexagon absolute top-32 right-24 w-16 h-16 bg-[#3D9DFF]/30 transform rotate-45" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
          <div className="geo-circle absolute bottom-24 left-32 w-24 h-24 border-2 border-[#00FFF7] rounded-full"></div>
          <div className="geo-triangle absolute bottom-16 right-16 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[26px] border-l-transparent border-r-transparent border-t-[#3D9DFF]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Orbitron']">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
                Case Studies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#E5E5E5] mb-8 max-w-3xl mx-auto font-['Lato']">
              A results-driven showcase of how Drazed & Co turns complex business constraints
              into high-performance digital systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-[#00FFF7]/40 hover:shadow-[0_0_36px_rgba(0,255,247,0.18)]"
              >
                <div className="relative h-52 overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-transparent" />
                  <p className="absolute left-5 bottom-4 text-sm font-semibold tracking-[0.15em] text-[#00FFF7] uppercase">
                    {project.client}
                  </p>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white font-['Orbitron'] leading-tight mb-4">
                    {project.title}
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-[#E5E5E5]/90 font-['Lato']">
                    <p>
                      <span className="text-[#3D9DFF] font-semibold">Problem:</span> {project.problem}
                    </p>
                    <p>
                      <span className="text-[#00FFF7] font-semibold">Solution:</span> {project.solution}
                    </p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} skills`}>
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[#00FFF7]/25 bg-[#00FFF7]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#00FFF7]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-lg border border-[#3D9DFF]/45 bg-[#3D9DFF]/10 px-5 py-2.5 text-sm font-semibold text-[#E5E5E5] transition-all duration-300 hover:border-[#00FFF7]/70 hover:bg-[#00FFF7]/15 hover:text-white"
                  >
                    View Project
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#00FFF7] mb-2 font-['Orbitron']">
                50+
              </div>
              <p className="text-[#E5E5E5] text-lg">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#3D9DFF] mb-2 font-['Orbitron']">
                25+
              </div>
              <p className="text-[#E5E5E5] text-lg">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#00FFF7] mb-2 font-['Orbitron']">
                300%
              </div>
              <p className="text-[#E5E5E5] text-lg">Average ROI Increase</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#3D9DFF] mb-2 font-['Orbitron']">
                2
              </div>
              <p className="text-[#E5E5E5] text-lg">Days Average Delivery</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00FFF7] to-[#3D9DFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6 font-['Montserrat']">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-[#0A0A0A]/80 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Your project could be our next showcase.
            </p>
            <a
              href="/start-project"
              className="bg-[#0A0A0A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0A0A0A]/90 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;