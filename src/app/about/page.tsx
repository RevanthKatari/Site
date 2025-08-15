'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Target, Zap, Heart, CheckCircle, Star } from 'lucide-react'
import { businessData } from '@/lib/data'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every print meets our highest standards before leaving our facility.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Fast turnaround times without compromising on quality.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our top priority, every single time.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Accurate colors, sharp details, perfect registration.",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "5", label: "Pro Machines", icon: Award },
    { number: "99.9%", label: "Quality Rate", icon: Star },
  ]

  const timeline = [
    {
      year: "2014",
      title: "Founded SV Xerox",
      description: "Started with basic photocopying and document printing services in Ongole."
    },
    {
      year: "2017",
      title: "Equipment Upgrade",
      description: "Invested in professional Xerox production machines for better quality."
    },
    {
      year: "2019",
      title: "Large Format Addition",
      description: "Added Canon imagePROGRAF TX-8320 for A0 large format printing."
    },
    {
      year: "2021",
      title: "Specialty Services",
      description: "Introduced premium stickers, board printing, and finishing services."
    },
    {
      year: "2024",
      title: "Digital Presence",
      description: "Launched online presence to serve customers better."
    }
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            >
              About SV Xerox
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bringing your ideas to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}perfect prints
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {businessData.business.shortAbout} For over a decade, we've been Ongole's trusted partner for all printing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  SV Xerox began as a small print shop in Ongole with a simple mission: to provide 
                  high-quality printing services that exceed customer expectations. What started 
                  with basic photocopying has evolved into a comprehensive printing center equipped 
                  with state-of-the-art technology.
                </p>
                
                <p>
                  Today, we're proud to serve students, businesses, architects, and individuals 
                  throughout Ongole and surrounding areas. Our investment in professional-grade 
                  equipment from brands like Xerox, Canon, Konica Minolta, and Ricoh ensures 
                  that every project receives the attention to detail it deserves.
                </p>
                
                <p>
                  From large format posters for events to intricate CAD drawings for architects, 
                  from premium wedding invitations to bulk document printing for offices – 
                  we handle it all with the same commitment to excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl">🏪</div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-6 h-6 bg-purple-500 rounded-full"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 left-8 w-4 h-4 bg-green-500 rounded-full"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from the simplest photocopy to the most complex large format project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These numbers represent our commitment to excellence and the trust our customers place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Ongole's premier printing destination.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex items-start space-x-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Production Floor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment from leading manufacturers ensures consistent, professional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessData.capabilities.machines.map((machine, index) => (
              <motion.div
                key={machine.name}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">
                  🖨️
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {machine.name}
                </h3>
                
                <p className="text-blue-600 font-medium text-sm mb-3">
                  {machine.type}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {machine.notes}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to experience the SV Xerox difference?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their printing needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Your Quote</span>
                <CheckCircle className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={businessData.site.secondaryCTA.href}
                target="_blank"
                className="px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>WhatsApp Us</span>
                <Zap className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}