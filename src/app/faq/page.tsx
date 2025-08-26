'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Search, Clock, FileText, Printer } from 'lucide-react'
import { businessData } from '@/lib/data'

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFAQ = businessData.faq.filter(item =>
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [
    {
      title: "File Preparation",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      faqs: filteredFAQ.filter(faq => 
        faq.q.includes('file') || faq.q.includes('format') || faq.q.includes('prepare')
      )
    },
    {
      title: "Printing Services", 
      icon: Printer,
      color: "from-green-500 to-green-600",
      faqs: filteredFAQ.filter(faq => 
        faq.q.includes('print') || faq.q.includes('CAD') || faq.q.includes('sticker')
      )
    },
    {
      title: "Business Info",
      icon: Clock,
      color: "from-purple-500 to-purple-600", 
      faqs: filteredFAQ.filter(faq => 
        faq.q.includes('hours') || faq.q.includes('discount') || faq.q.includes('bulk')
      )
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
              Frequently Asked Questions
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Got questions?
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}We&apos;ve got answers
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Find quick answers to common questions about our printing services, file requirements, and policies.
            </p>

            {/* Search Bar */}
            <motion.div
              className="relative max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className={`p-6 bg-gradient-to-r ${category.color} rounded-2xl text-white mb-6`}>
                  <category.icon className="w-8 h-8 mb-3" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-white/80 text-sm">
                    {category.faqs.length} questions
                  </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.faqs.length > 0 ? (
                    category.faqs.map((faq, index) => {
                      const globalIndex = businessData.faq.indexOf(faq)
                      const isActive = activeIndex === globalIndex
                      
                      return (
                        <motion.div
                          key={globalIndex}
                          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <button
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveIndex(isActive ? null : globalIndex)}
                          >
                            <div className="flex items-start space-x-4">
                              <HelpCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                              <h3 className="font-semibold text-gray-900 leading-relaxed">
                                {faq.q}
                              </h3>
                            </div>
                            <motion.div
                              animate={{ rotate: isActive ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <div className="pl-9">
                                    <p className="text-gray-600 leading-relaxed">
                                      {faq.a}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No questions found in this category
                      {searchTerm && ` for "${searchTerm}"`}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {searchTerm && filteredFAQ.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No results found
              </h3>
              <p className="text-gray-600 mb-8">
                We couldn&apos;t find any questions matching &quot;{searchTerm}&quot;. 
                Try different keywords or contact us directly.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still have questions?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help with any specific questions about your printing needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.a
                href={`tel:${businessData.business.contacts.phone}`}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100 text-sm">{businessData.business.contacts.phone}</p>
              </motion.a>

              <motion.a
                href={businessData.site.secondaryCTA.href}
                target="_blank"
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-blue-100 text-sm">Quick responses</p>
              </motion.a>

              <motion.a
                href={`mailto:${businessData.business.contacts.email}`}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100 text-sm">{businessData.business.contacts.email}</p>
              </motion.a>
            </div>

            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for More Help
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}