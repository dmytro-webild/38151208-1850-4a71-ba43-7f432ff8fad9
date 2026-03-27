"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function ContactPage() {
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

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Direct"
      title="Contact Support"
      description="Fill out the form for urgent inquiries."
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