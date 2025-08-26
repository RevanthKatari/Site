'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Download, Share2, Filter, Grid3X3, Grid2X2 } from 'lucide-react'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')

  const categories = [
    { id: 'all', label: 'All Work', count: 24 },
    { id: 'large-format', label: 'Large Format', count: 8 },
    { id: 'stickers', label: 'Stickers & Labels', count: 6 },
    { id: 'boards', label: 'Premium Boards', count: 5 },
    { id: 'documents', label: 'Documents', count: 5 },
  ]

  // Sample gallery items with placeholders
  const galleryItems = [
    {
      id: 1,
      category: 'large-format',
      title: 'A0 Event Poster',
      description: 'Vibrant event poster printed on premium photo satin',
      size: 'A0 (841×1189mm)',
      material: 'Photo Satin',
      placeholder: '🎨',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      category: 'stickers',
      title: 'Non-tearable Brand Stickers',
      description: 'Durable vinyl stickers for outdoor applications',
      size: '13"×19"',
      material: 'Non-tearable Vinyl',
      placeholder: '🏷️',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      category: 'boards',
      title: 'Gold Foil Wedding Invitation',
      description: 'Luxury wedding invitation with gold foil finish',
      size: '12"×18"',
      material: 'Textured Board + Gold Foil',
      placeholder: '✨',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      category: 'large-format',
      title: 'CAD Architectural Drawing',
      description: 'Technical drawing printed on bond paper',
      size: 'A1 (594×841mm)',
      material: 'Bond Paper',
      placeholder: '📐',
      color: 'from-gray-500 to-slate-600'
    },
    {
      id: 5,
      category: 'documents',
      title: 'Corporate Presentation',
      description: 'High-quality color presentation materials',
      size: 'A4',
      material: '120 GSM Premium Paper',
      placeholder: '📊',
      color: 'from-pink-500 to-red-600'
    },
    {
      id: 6,
      category: 'stickers',
      title: 'Laptop Decal Collection',
      description: 'Custom laptop stickers with matte finish',
      size: 'Various Sizes',
      material: 'Matte Vinyl',
      placeholder: '💻',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 7,
      category: 'boards',
      title: 'Silver Foil Certificate',
      description: 'Award certificate with silver metallic finish',
      size: '13"×19"',
      material: 'Special Board + Silver Foil',
      placeholder: '🏆',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 8,
      category: 'large-format',
      title: 'Exhibition Banner',
      description: 'Large format banner for trade show display',
      size: 'A0 (841×1189mm)',
      material: 'Matte Paper',
      placeholder: '🎪',
      color: 'from-purple-500 to-pink-600'
    },
    // Add more items...
    {
      id: 9,
      category: 'documents',
      title: 'Thesis Binding',
      description: 'Academic thesis with spiral binding',
      size: 'A4',
      material: '80 GSM + Spiral Binding',
      placeholder: '📚',
      color: 'from-green-600 to-blue-600'
    },
    {
      id: 10,
      category: 'stickers',
      title: 'Product Labels',
      description: 'Waterproof product labels for packaging',
      size: '4"×6"',
      material: 'Waterproof Vinyl',
      placeholder: '📦',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 11,
      category: 'boards',
      title: 'Menu Cards',
      description: 'Restaurant menu cards with textured finish',
      size: '12"×18"',
      material: 'Textured Board',
      placeholder: '🍽️',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 12,
      category: 'large-format',
      title: 'Academic Poster',
      description: 'Research poster for conference presentation',
      size: 'A1 (594×841mm)',
      material: 'Photo Satin',
      placeholder: '🔬',
      color: 'from-teal-500 to-green-600'
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

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
              Our Work Gallery
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              See our work
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}in action
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of successful printing projects across various categories and formats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-24 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter:</span>
              </div>
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'masonry'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid2X2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Image Placeholder */}
                    <div className={`aspect-square bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-80">
                          {item.placeholder}
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-4">
                          <motion.button
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Share2 className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                          {item.size}
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full font-medium">
                          {item.material}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No items in this category yet
              </h3>
              <p className="text-gray-600 mb-8">
                We're constantly adding new work to our gallery. Check back soon!
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                View All Work
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find(i => i.id === selectedImage)
                if (!item) return null
                
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className={`aspect-square bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <div className="text-8xl opacity-80">
                        {item.placeholder}
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Size:</span>
                          <span className="font-medium">{item.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Material:</span>
                          <span className="font-medium">{item.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Category:</span>
                          <span className="font-medium capitalize">
                            {item.category.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <motion.button
                          className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Order Similar</span>
                        </motion.button>
                        <motion.button
                          className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to create something amazing?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our professional printing services.
            </p>
            
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}