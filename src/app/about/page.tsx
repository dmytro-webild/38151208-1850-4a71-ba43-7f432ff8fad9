"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function AboutPage() {
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
        { name: "Home", id: "/" },
        { name: "Shop", id: "/shop" },
        { name: "About", id: "/about" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Nexus3D"
      button={{ text: "Get Started" }}
    />
  </div>

  <div id="about-body" data-section="about-body">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Mission"
      description="Innovating the e-commerce space with immersive 3D technology."
      bulletPoints={[
        {
          title: "Innovation",          description: "Always pushing boundaries."
        },
        {
          title: "Design",          description: "Beauty in every detail."
        },
        {
          title: "Performance",          description: "Speed is our priority."
        }
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png?_wi=9"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Careers"
      title="Join Us"
      description="We are hiring creators."
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