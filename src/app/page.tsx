"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Experience",
          id: "#experience",
        },
        {
          name: "Signature",
          id: "#signature",
        },
        {
          name: "Private Dining",
          id: "#events",
        },
        {
          name: "About",
          id: "#about",
        },
      ]}
      brandName="Fusion Grill"
      button={{
        text: "Reserve Now",
        href: "#reserve",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "plain",
      }}
      title="A Culinary Experience Worth Remembering"
      description="Locally sourced ingredients. Chef-crafted excellence. A dining experience guests return to — again and again."
      buttons={[
        {
          text: "Reserve Your Table",
          href: "#reserve",
        },
        {
          text: "Private Dining & Events",
          href: "#events",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629584.jpg"
      imageAlt="luxury restaurant steak plating warm light"
    />
  </div>

  <div id="experience" data-section="experience">
      <MediaAbout
      useInvertedBackground={false}
      title="More Than a Meal — It’s an Experience"
      description="At Fusion Grill, every dish tells a story. From locally sourced ingredients to meticulously crafted plates, we create moments that feel personal, memorable, and timeless."
      imageSrc="http://img.b2bpic.net/free-photo/handsome-guy-hugging-young-cheerful-lady-table_23-2148016786.jpg"
      imageAlt="intimate luxury restaurant dining room"
    />
  </div>

  <div id="signature" data-section="signature">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Duck Confit",
          price: "$38",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-roast-duck-leg-with-avocado-sauce-mashed-potatoes-with-cherry-tomatoes-white-plate_140725-12482.jpg",
          imageAlt: "gourmet duck confit plating fine dining",
        },
        {
          id: "2",
          name: "Mussels in Wine",
          price: "$32",
          imageSrc: "http://img.b2bpic.net/free-photo/calamari-with-mango-sauce-with-nice-decoration-white-plate_1258-84913.jpg",
          imageAlt: "mussels in white wine sauce plating",
        },
        {
          id: "3",
          name: "Seasonal Bison",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-beef-fillet-medallion-with-sauce-vegetables-white-plate_140725-9210.jpg",
          imageAlt: "bison steak gourmet restaurant plate",
        },
        {
          id: "4",
          name: "Chef Tasting",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-containing-mixed-ingredients-blue-ceramic-plate_114579-1997.jpg",
          imageAlt: "chef tasting menu plate presentation",
        },
        {
          id: "5",
          name: "Artisan Dessert",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/belgian-waffle-with-vanilla-ice-cream-golden-chocolate_114579-1928.jpg",
          imageAlt: "gourmet artisan dessert plating",
        },
        {
          id: "6",
          name: "Garden Harvest",
          price: "$22",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-arrangement-with-vegetables_23-2148494042.jpg",
          imageAlt: "gourmet vegetable side plate fine dining",
        },
      ]}
      title="Signature Creations"
      description="Menu highlights crafted with passion and precision."
    />
  </div>

  <div id="events" data-section="events">
      <MediaAbout
      useInvertedBackground={false}
      title="Your Private Fine Dining Experience"
      description="Host unforgettable moments in a space that feels like your own. From anniversaries to rehearsal dinners, we customize every detail — so you can focus on enjoying the moment."
      buttons={[
        {
          text: "Plan Your Event",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-set-goblets-plates-cutlery_8353-9897.jpg"
      imageAlt="private dining room luxury restaurant setting"
    />
  </div>

  <div id="about" data-section="about">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          label: "Philosophy",
          title: "Craftsmanship",
          items: [
            "Chef-driven approach",
            "Persistent consistency",
            "Warm, personal touch",
          ],
        },
        {
          id: "f2",
          label: "Standards",
          title: "Quality First",
          items: [
            "Locally sourced",
            "Seasonal freshness",
            "Meticulous plating",
          ],
        },
        {
          id: "f3",
          label: "Atmosphere",
          title: "Intimate Dining",
          items: [
            "Private settings",
            "Elegant lighting",
            "Timeless memories",
          ],
        },
      ]}
      title="Passion. Precision. Consistency."
      description="Fusion Grill delivers consistently exceptional experiences built on passion, local partnerships, and relentless quality."
    />
  </div>

  <div id="philosophy" data-section="philosophy">
      <MediaAbout
      useInvertedBackground={false}
      title="Proudly Supporting Local"
      description="We work closely with local farmers, foragers, and producers to bring you ingredients that are fresh, sustainable, and full of character."
      imageSrc="http://img.b2bpic.net/free-photo/top-view-vegetables-arrangement_23-2148516771.jpg"
      imageAlt="fresh farm ingredients raw produce"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Fusion Grill is consistently amazing. The attention to detail and flavor combinations are unmatched in the city."
      rating={5}
      author="Sarah Johnson"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/he-is-satisfied-from-his-life_329181-2789.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-waitress-holding-tray-muffins-counter_107420-12317.jpg",
          alt: "David Miller",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
          alt: "Alex Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-business-owner_23-2149434511.jpg",
          alt: "Elena Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12313.jpg",
          alt: "Mark Thompson",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="reserve" data-section="reserve">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready for Your Next Memorable Evening?"
      buttons={[
        {
          text: "Reserve Now",
          href: "#",
        },
        {
          text: "Book Private Dining",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/side-view-man-sitting-bar-counter_23-2147861962.jpg"
      logoText="FUSION GRILL"
      columns={[
        {
          title: "Information",
          items: [
            {
              label: "Location",
              href: "#",
            },
            {
              label: "Hours",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact",
              href: "#",
            },
            {
              label: "Social Media",
              href: "#",
            },
          ],
        },
        {
          title: "Bookings",
          items: [
            {
              label: "Reservations",
              href: "#",
            },
            {
              label: "Private Events",
              href: "#",
            },
          ],
        },
      ]}
      imageAlt="cinematic restaurant bar evening ambiance"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
