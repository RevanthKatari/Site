'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Star, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { businessData } from '@/lib/data'

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            viewport={{ once: true }}
          >
            Our Premium Services
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}perfect prints
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From large format posters to premium stickers and specialty boards, 
            we deliver exceptional quality with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businessData.services.map((service, index) => (
            <motion.div
              key={service.slug}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full p-8 rounded-3xl border-2 transition-all duration-500 ${
                hoveredCard === index
                  ? 'border-blue-300 shadow-2xl transform -translate-y-2'
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              } bg-white relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full ${service.color} rounded-full transform translate-x-8 -translate-y-8`} />
                </div>

                {/* Service Icon */}
                <motion.div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {service.summary}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 relative z-10">
                  {service.details.sizes && (
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">
                        Sizes: {service.details.sizes.join(', ')}
                      </span>
                    </div>
                  )}
                  {service.details.materials && (
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">
                        Materials: {service.details.materials.slice(0, 2).join(', ')}
                        {service.details.materials.length > 2 && '...'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                {service.highlights && (
                  <div className="mb-6 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.slice(0, 2).map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="w-full group border-gray-300 hover:border-blue-500 hover:text-blue-600"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Service Detail */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                viewport={{ once: true }}
              >
                Featured Service
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Large Format Printing up to A0
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Create stunning posters, banners, and technical drawings with our Canon imagePROGRAF TX-8320. 
                Perfect for events, exhibitions, academic presentations, and architectural plans.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600">A0</div>
                  <div className="text-sm text-gray-600">Max Size</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-2xl">
                  <div className="text-2xl font-bold text-green-600">Same Day</div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Get Quote for Large Format</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="relative">
              {/* Placeholder for equipment image */}
              <motion.div
                className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl">🖨️</div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500 rounded-full"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 left-4 w-4 h-4 bg-green-500 rounded-full"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Contact us for a personalized quote and let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Get Your Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" asChild>
                <Link href={businessData.site.secondaryCTA.href} target="_blank" className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}