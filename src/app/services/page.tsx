'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Star, Clock, Award } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { businessData } from '@/lib/data'

export default function ServicesPage() {
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
              Our Services
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete printing solutions
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}for every need
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              From business cards to A0 posters, from everyday documents to premium invitations – we've got you covered with professional quality and fast turnaround.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {businessData.services.map((service, index) => (
              <motion.div
                key={service.slug}
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
                  <motion.div
                    className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Details Grid */}
                    <div className="space-y-4 mb-6">
                      {service.details.sizes && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Available Sizes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.details.sizes.map((size, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.details.materials && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            Materials
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.details.materials.slice(0, 3).map((material, i) => (
                              <span key={i} className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">
                                {material}
                              </span>
                            ))}
                            {service.details.materials.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                +{service.details.materials.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {service.details.idealFor && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Award className="w-4 h-4 text-purple-500 mr-2" />
                            Perfect For
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.details.idealFor.map((use, i) => (
                              <span key={i} className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    {service.highlights && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Special Features</h4>
                        <ul className="space-y-2">
                          {service.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Link href="/contact" className="flex items-center justify-center w-full">
                          Get Quote for {service.title.split(' ')[0]}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing Services */}
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
              Finishing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance and protect your prints with our professional finishing options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessData.capabilities.finishing.map((finish, index) => (
              <motion.div
                key={finish}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  ✨
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {finish}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  Professional {finish.toLowerCase()} services available
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparent, Fair Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <Clock className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Volume Discounts</h3>
                <p className="text-blue-100 text-sm">
                  Better rates for bulk orders and regular customers
                </p>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <Award className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Student Rates</h3>
                <p className="text-blue-100 text-sm">
                  Special pricing for students with valid ID
                </p>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <Star className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Express Service</h3>
                <p className="text-blue-100 text-sm">
                  Rush jobs available for urgent requirements
                </p>
              </div>
            </div>

            <div className="space-y-4 text-blue-100 mb-8">
              {businessData.pricingNotes.map((note, index) => (
                <p key={index} className="text-sm">
                  • {note}
                </p>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">
                  Get Custom Quote
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}