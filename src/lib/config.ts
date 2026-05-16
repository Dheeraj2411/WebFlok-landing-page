export const siteConfig = {
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "dheerajjha834@gmail.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+918076377512",
    phoneFormatted: process.env.NEXT_PUBLIC_CONTACT_PHONE_FORMATTED || "+91 80763 77512",
  },
  social: {
    instagramId: process.env.NEXT_PUBLIC_INSTAGRAM_ID || "@WebFlok.Agency",
    instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/webflok.agency",
    facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/webflok",
    linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/webflok",
    whatsapp: `https://wa.me/${(process.env.NEXT_PUBLIC_CONTACT_PHONE || "+918076377512").replace(/[^\d]/g, "")}?text=Hi%20WebFlok!%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business.%20Can%20we%20discuss%3F`,
  },
  url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://webflok.agency",
};
