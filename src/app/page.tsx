import HeroSection from '@/components/hero-section'
import ServicesShowcase from '@/components/services-showcase'
import EquipmentGallery from '@/components/equipment-gallery'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesShowcase />
      <EquipmentGallery />
      <ContactForm />
    </div>
  )
}