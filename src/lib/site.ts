// Update these in one place
export const SITE = {
  name: "Saptarishis Astrology",
  astrologer: "Soniya Sharma",
  tagline: "Vedic wisdom for the questions life keeps asking.",
  // TODO: replace with the real WhatsApp number in international format (no +, no spaces)
  whatsapp: "919990952711",
  phoneDisplay: "+91 99909 52711",
  address:
    "3241, 7th Ave, Greater Noida West, Gaur City 1, Sector 4, Ghaziabad, Uttar Pradesh 201318, India",
  hours: "Monday – Saturday · 12:00 PM – 6:00 PM",
  mapsUrl: "https://maps.app.goo.gl/zgVmSAK4KwAzSR7M6",
  mapsEmbed:
    "https://www.google.com/maps?q=Saptarishis+Astrology+Service+by+Soniya+Sharma+Gaur+City+1+Ghaziabad&output=embed",
  rating: "5.0",
  instagram: "https://www.instagram.com/saptarishis_astrology_service",
  pricing: {
    call: 3100,
    meeting: 5100,
    currency: "₹",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
