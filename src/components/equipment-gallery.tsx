'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Settings, Award, ArrowRight, Monitor, Printer } from 'lucide-react'
import { businessData } from '@/lib/data'

export default function EquipmentGallery() {
  const [activeEquipment, setActiveEquipment] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const equipmentWithDetails = businessData.capabilities.machines.map((machine, index) => ({
    ...machine,
    id: index,
    image: `🖨️`, // Placeholder emoji
    specs: [
      index === 0 ? 'Color Production Press' : 'High-Speed Production',
      index === 0 ? 'Up to 13" x 19"' : 'A3/A4 Capable',
      index === 0 ? '80-300 GSM' : '70-200 GSM',
      'Professional Grade'
    ],
    benefits: [
      'Consistent Quality',
      'Fast Turnaround',
      'Cost Effective',
      'Reliable Operation'
    ],
    gradient: [
      'from-blue-500 to-purple-600',
      'from-green-500 to-teal-600',
      'from-orange-500 to-red-600',
      'from-purple-500 to-pink-600',
      'from-indigo-500 to-blue-600'
    ][index % 5]
  }))

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
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
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            viewport={{ once: true }}
          >
            Professional Equipment
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            State-of-the-art
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}printing technology
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our arsenal of professional-grade machines ensures every print meets 
            the highest standards of quality and precision.
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {equipmentWithDetails.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveEquipment(index)}
            >
              <div className={`h-full p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden ${
                hoveredCard === index
                  ? 'border-blue-400/50 shadow-2xl transform -translate-y-2 bg-white/10'
                  : 'border-white/20 shadow-lg bg-white/5'
              } backdrop-blur-sm`}>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${equipment.gradient} opacity-5 rounded-3xl`} />

                {/* Equipment Visual */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${equipment.gradient} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {equipment.image}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  {equipment.name}
                </h3>
                
                <p className={`text-sm font-medium mb-4 relative z-10 bg-gradient-to-r ${equipment.gradient} bg-clip-text text-transparent`}>
                  {equipment.type}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  {equipment.notes}
                </p>

                {/* Quick Specs */}
                <div className="space-y-2 mb-6 relative z-10">
                  {equipment.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${equipment.gradient} rounded-full`} />
                      <span className="text-sm text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <motion.button
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 relative z-10 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Hover Particles */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${equipment.gradient} rounded-full`}
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Equipment Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEquipment}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${equipmentWithDetails[activeEquipment].gradient} rounded-full text-white text-sm font-medium mb-6`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                >
                  Featured Equipment
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {equipmentWithDetails[activeEquipment].name}
                </h3>
                
                <p className={`text-lg font-medium mb-6 bg-gradient-to-r ${equipmentWithDetails[activeEquipment].gradient} bg-clip-text text-transparent`}>
                  {equipmentWithDetails[activeEquipment].type}
                </p>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {equipmentWithDetails[activeEquipment].notes}
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {equipmentWithDetails[activeEquipment].specs.map((spec, i) => (
                    <motion.div
                      key={i}
                      className="p-4 bg-white/5 rounded-2xl border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">{spec}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-200">Key Benefits</h4>
                  {equipmentWithDetails[activeEquipment].benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Award className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Equipment Visualization */}
              <div className="relative">
                <motion.div
                  className={`aspect-square bg-gradient-to-br ${equipmentWithDetails[activeEquipment].gradient} opacity-20 rounded-3xl relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-8xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                    >
                      {equipmentWithDetails[activeEquipment].image}
                    </motion.div>
                  </div>

                  {/* Animated Elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-8 w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>

                {/* Equipment Selector */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {equipmentWithDetails.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveEquipment(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeEquipment
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Printer, label: "Professional Machines", value: "5+" },
            { icon: Zap, label: "Years Experience", value: "10+" },
            { icon: Monitor, label: "Print Quality", value: "99.9%" },
            { icon: Award, label: "Happy Customers", value: "1000+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}