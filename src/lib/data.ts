export const businessData = {
  site: {
    name: "SV Xerox",
    domain: "svxerox.in",
    brandTagline: "High-quality printing in Ongole — from documents to A0 large format",
    primaryCTA: {
      label: "Get a Quote",
      href: "/contact"
    },
    secondaryCTA: {
      label: "WhatsApp Us",
      href: "https://wa.me/919885982762"
    },
    location: {
      city: "Ongole",
      state: "Andhra Pradesh",
      country: "India"
    }
  },
  business: {
    legalName: "SV Xerox",
    shortAbout: "Professional print center in Ongole offering large format (up to A0), premium stickers, specialty boards, and fast document printing.",
    hours: {
      monday: "09:00–21:00",
      tuesday: "09:00–21:00",
      wednesday: "09:00–21:00",
      thursday: "09:00–21:00",
      friday: "09:00–21:00",
      saturday: "09:00–21:00",
      sunday: "Closed"
    },
    contacts: {
      phone: "+91-9885982762",
      email: "svxeroxogl@gmail.com",
      whatsapp: "+91-9885982762",
      addressLine: "Santhapet, Ongole, Andhra Pradesh 523001",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.7!2d80.049922!3d15.505723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMwJzIwLjYiTiA4MMKwMDInNTkuNyJF!5e0!3m2!1sen!2sin!4v1234567890123"
    },
    serviceAreas: ["Ongole", "Santhapet", "Nearby Colleges & Offices"],
    policies: {
      fileGuidelines: "Preferred formats: PDF, PNG, TIFF. 300 DPI for best results. Include 3mm bleed for borderless prints.",
      turnaround: "Fast turnaround available. Large format, specialty boards, and bulk jobs may require additional time.",
      proofing: "Color results may vary between devices. Hard proof available on request.",
      reprints: "Reprints offered for production defects reported within 24 hours of pickup."
    }
  },
  capabilities: {
    largeFormat: {
      maxSize: "A0",
      useCases: ["Posters", "Banners", "CAD drawings", "Event displays"]
    },
    machines: [
      { name: "Xerox Versant 180 Press", type: "Color Production", notes: "Premium color, accurate registration" },
      { name: "Xerox D95", type: "Monochrome Production", notes: "High-speed document runs" },
      { name: "Konica Minolta AccurioPress (B/W)", type: "Monochrome Production", notes: "High-volume, crisp text" },
      { name: "Ricoh Pro 8300s", type: "Monochrome Production", notes: "Reliable bulk printing" },
      { name: "Canon imagePROGRAF TX-8320", type: "Large Format Inkjet", notes: "Posters & CAD up to A0" }
    ],
    finishing: [
      "Lamination: Gloss / Matte",
      "Binding: Spiral / Thermal / Perfect",
      "Cutting & Trimming",
      "Mounting (on request)"
    ]
  },
  services: [
    {
      slug: "large-format-printing",
      title: "Large Format Printing (up to A0)",
      summary: "Vivid posters, banners, and technical drawings up to A0 on the Canon TX-8320.",
      details: {
        sizes: ["A2", "A1", "A0"],
        media: ["Photo satin", "Matte", "Bond paper (CAD)"],
        idealFor: ["Events", "Exhibitions", "Academic posters", "Architectural plans"]
      },
      icon: "📐",
      color: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      slug: "sticker-printing",
      title: "Sticker Printing (13\"×19\")",
      summary: "Custom, durable stickers including non-tearable options.",
      details: {
        sizes: ["Up to 13\"×19\""],
        materials: ["Non-tearable", "Vinyl (matte/gloss)", "Paper sticker"],
        finishes: ["Gloss", "Matte"],
        useCases: ["Brand labels", "Packaging", "Signage", "Laptop decals"]
      },
      highlights: ["Non-tearable durability", "Edge-to-edge options", "Custom die-cut (on request)"],
      icon: "🏷️",
      color: "bg-gradient-to-r from-green-500 to-teal-600"
    },
    {
      slug: "board-printing",
      title: "Board Printing (12\"×18\", 13\"×19\")",
      summary: "Premium boards for invitations, certificates, and presentation pieces.",
      details: {
        sizes: ["12\"×18\"", "13\"×19\""],
        materials: [
          "Textured boards",
          "Special boards",
          "Gold finish",
          "Silver finish",
          "Metallic & pearlescent (on request)"
        ],
        useCases: ["Wedding invites", "Event cards", "Certificates", "Luxury menus"]
      },
      icon: "✨",
      color: "bg-gradient-to-r from-yellow-500 to-orange-600"
    },
    {
      slug: "color-printing",
      title: "Color Document Printing",
      summary: "Sharp, color-accurate prints on the Versant 180 for reports and presentations.",
      details: {
        paper: ["80–300 GSM"],
        sizes: ["A4", "A3", "12\"×18\"", "13\"×19\""],
        finishing: ["Lamination", "Binding", "Creasing (on request)"]
      },
      icon: "🎨",
      color: "bg-gradient-to-r from-pink-500 to-red-600"
    },
    {
      slug: "bw-printing",
      title: "Black & White Printing",
      summary: "Fast, economical B/W on D95, AccurioPress, and Ricoh Pro 8300s.",
      details: {
        paper: ["70–120 GSM"],
        sizes: ["A4", "A3"],
        idealFor: ["Notes", "Books", "Bulk documents"]
      },
      icon: "📄",
      color: "bg-gradient-to-r from-gray-500 to-slate-600"
    },
    {
      slug: "photocopying",
      title: "Photocopying",
      summary: "Quick B/W and color copies with clean text and halftones.",
      details: {
        sizes: ["A4", "A3"],
        extras: ["Collation", "Stapling", "Folding"]
      },
      icon: "📋",
      color: "bg-gradient-to-r from-indigo-500 to-blue-600"
    },
    {
      slug: "finishing-services",
      title: "Finishing & Bindery",
      summary: "Protect, present, and elevate your prints.",
      details: {
        lamination: ["Gloss", "Matte"],
        binding: ["Spiral", "Thermal", "Perfect"],
        other: ["Trimming", "Mounting (on request)"]
      },
      icon: "🔗",
      color: "bg-gradient-to-r from-purple-500 to-pink-600"
    }
  ],
  faq: [
    {
      q: "What file formats do you accept?",
      a: "PDF (preferred), PNG, TIFF, JPG. For best results, export PDFs with embedded fonts."
    },
    {
      q: "How do I prepare files for borderless prints?",
      a: "Add 3mm bleed on all sides and keep text 5mm inside the trim area."
    },
    {
      q: "Do you print CAD drawings?",
      a: "Yes. We print accurate CAD drawings up to A0 on bond media using the Canon TX-8320."
    },
    {
      q: "Do you offer non-tearable stickers?",
      a: "Yes, up to 13\"×19\" with gloss or matte finish."
    },
    {
      q: "What are your operating hours?",
      a: "We're open Monday to Saturday from 9:00 AM to 9:00 PM. Closed on Sundays."
    },
    {
      q: "Do you offer bulk discounts?",
      a: "Yes, we offer bulk discounts and special student rates with valid ID."
    }
  ]
};