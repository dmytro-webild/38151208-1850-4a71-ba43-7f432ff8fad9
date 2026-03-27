"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

export default function ShopPage() {
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

  <div id="shop-body" data-section="shop-body">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Smart Glasses",          price: "$299",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png?_wi=6"
        },
        {
          id: "p2",          name: "Sonic Headset",          price: "$199",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png?_wi=7"
        },
        {
          id: "p3",          name: "Mini Drone",          price: "$499",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXXuZmK7jhnimueMVZmKhqM6CC/futuristic-3d-tech-product-display-featu-1774636693730-91b6102e.png?_wi=8"
        }
      ]}
      title="Featured Products"
      description="Browse our 3D collection."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Support"
      title="Need Help?"
      description="Our team is here to assist."
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