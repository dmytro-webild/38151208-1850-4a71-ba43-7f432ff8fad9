"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="medium"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Shop",
          id: "/shop",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Nexus3D"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Immersive 3D Shopping"
      description="Experience products in stunning detail with our advanced 3D interface, powered by cutting-edge technology."
      tag="Next-Gen E-commerce"
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "3D Gadget",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "3D Gadget Alt 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "3D Gadget Alt 3",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "3D Gadget Alt 4",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "3D Gadget Alt 5",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Top-rated 3D store"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Real-time 3D View",
          description: "Interactive models at your fingertips.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "Feature 1",
        },
        {
          id: 2,
          title: "AR Preview",
          description: "Visualize in your own space.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "Feature 2",
        },
        {
          id: 3,
          title: "Fast Performance",
          description: "Optimized for smooth browsing.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png",
          imageAlt: "Feature 3",
        },
      ]}
      title="Limitless Interactivity"
      description="Explore, rotate, and customize your favorite products."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Nexus",
        "CoreTech",
        "Orbit",
        "Vertex",
        "Pulse",
        "Zenith",
        "Flux",
      ]}
      logos={[
        "http://img.b2bpic.net/free-vector/gradient-advertising-agency-logo-design_23-2149995841.jpg",
        "http://img.b2bpic.net/free-vector/photo-logostype_1057-4485.jpg",
        "http://img.b2bpic.net/free-vector/plumber-services-logo-design-template_742173-26558.jpg",
        "http://img.b2bpic.net/free-vector/technology-logo-template_23-2150529469.jpg",
        "http://img.b2bpic.net/free-vector/modern-abstract-colorful-geometry_530521-1395.jpg",
        "http://img.b2bpic.net/free-vector/business-people-3-flat-banners-set_1284-7442.jpg",
        "http://img.b2bpic.net/free-vector/technical-logo-design_1424-40.jpg",
      ]}
      title="Trusted by Industry Leaders"
      description="We build for the most innovative companies."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Incredible Tech",
          quote: "The 3D models are so realistic.",
          name: "Sarah",
          role: "Designer",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/portrait-of-a-tech-focused-professional--1774636693329-65e6fa2c.png",
        },
        {
          id: "2",
          title: "Fast and Smooth",
          quote: "I never enjoyed shopping this much.",
          name: "John",
          role: "Engineer",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/portrait-of-a-creative-designer-minimali-1774636692346-19eea4fa.png",
        },
        {
          id: "3",
          title: "Future of Retail",
          quote: "Stunning interface and performance.",
          name: "Emma",
          role: "Manager",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/professional-portrait-soft-studio-light--1774636692244-eb26ae7f.png",
        },
        {
          id: "4",
          title: "Best Experience",
          quote: "Love the interactive features.",
          name: "David",
          role: "Consultant",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/confident-tech-entrepreneur-portrait-hig-1774636693395-e97776ef.png",
        },
        {
          id: "5",
          title: "Unmatched Quality",
          quote: "Changed how I buy electronics.",
          name: "Alex",
          role: "Developer",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/portrait-of-a-tech-focused-professional--1774636693329-65e6fa2c.png",
        },
      ]}
      title="What Our Users Say"
      description="The future of retail is here."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What file types are supported?",
          content: "We support GLB and GLTF.",
        },
        {
          id: "q2",
          title: "Is the site mobile friendly?",
          content: "Yes, fully optimized for all devices.",
        },
        {
          id: "q3",
          title: "How do payments work?",
          content: "Stripe/Razorpay integrated.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Get your questions answered."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Let's Connect"
      title="Ready to get started?"
      description="Join our newsletter for updates."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Nexus3D"
      copyrightText="© 2025 | Nexus3D Labs"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
