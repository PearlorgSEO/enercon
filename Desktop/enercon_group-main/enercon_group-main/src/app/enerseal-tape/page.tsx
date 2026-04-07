'use client';

import Image from 'next/image';
import { useState } from 'react';
import ProductLiterature from '@/components/ProductLiterature';
import PageHeader from '@/components/PageHeader';
import ProductHero from '@/components/ProductHero';
import ProductContactSection from '@/components/ProductContactSection';
import { enersealTapeDocs } from '@/data/products';
import '../products.css';

const slides = [
  { src: '/images/products/tape/tape1.webp', caption: '' },
  { src: '/images/products/tape/tape2.webp', caption: 'METAL ROOF OVERLAPS' },
  { src: '/images/products/tape/tape3.webp', caption: 'METAL ROOF OVERLAPS' },
  { src: '/images/products/tape/tape4.webp', caption: 'METAL ROOF TERMINATIONS' },
  { src: '/images/products/tape/tape5.webp', caption: 'METAL WAREHOUSE' },
  { src: '/images/products/tape/tape6.webp', caption: 'CONCRETE ROOF & TILES' },
  { src: '/images/products/tape/tape7.webp', caption: 'POLYCARBONATE SHEETS' },
  { src: '/images/products/tape/tape8.webp', caption: 'POLYCARBONATE SHEETS' },
  { src: '/images/products/tape/tape9.webp', caption: 'PU FOAM & PARAPET WALL JOINT' },
  { src: '/images/products/tape/tape10.webp', caption: 'EXPANSION JOINTS' },
  { src: '/images/products/tape/tape11.webp', caption: 'BITUMEN MEMBRANE' },
];

export default function EnerSealTapePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="page-content">
      <PageHeader
        title="EnerSeal Tape"
        subtitle="Nano Seal Technology"
      />

      <div className="container page-container">
        {/* Hero Section */}
        <ProductHero
          imageSrc="/images/products/tape/hero.jpg"
          imageAlt="EnerSeal Tape"
          width={500}
          height={400}
        >
          <h2 className="section-title">PARADIGM SHIFT IN WATERPROOFING ADHESIVES</h2>
          <p className="section-copy section-copy-justify">
            EnerSeal Tape not only manufactured in the USA but it introduces a groundbreaking solution to water leakages – Nano Seal Technology. Crafted with precision, this tape represents the pinnacle of innovation and sustainability in the waterproofing industry. Our Nano Seal Technology incorporates active sealants at the nano particle level, resulting in a stable molecular structure without double bonds between carbon atoms. This cutting-edge technology ensures resilience against oxygen, water, and extreme temperature variations, showcasing our commitment to durability and reliability even in the most harsh climatic conditions. EnerSeal Tape is more than a sealing solution; it&apos;s a symbol of American manufacturing excellence, providing unparalleled performance.
          </p>
        </ProductHero>

        {/* Full-width Banner */}
        <div className="product-full-image">
          <Image src="/images/products/tape/banner1.jpeg" alt="EnerSeal Tape Banner" width={1200} height={400} className="image-full-rounded-20" />
        </div>

        {/* Feature Cards */}
        <section className="tape-standout-section">
          <div className="tape-standout-heading">
            <span className="tape-standout-heading-bar" aria-hidden="true"></span>
            <h4 className="tape-standout-title">
              WHAT MAKE ENERSEAL TAPE <span>STAND OUT</span>
            </h4>
          </div>

          <div className="tape-feature-cards">
            <article className="tape-feature-card">
              <div className="card-content">
                <h3>The Chemistry</h3>
                <ul>
                  <li>Polymers</li>
                  <li>Rubbers</li>
                  <li>Elastomers</li>
                  <li>Fleece</li>
                </ul>
              </div>
              <Image src="/images/products/tape/chemistry.png" alt="The Chemistry" width={350} height={200} className="tape-feature-image" />
            </article>

            <article className="tape-feature-card">
              <div className="card-content">
                <h3>Nano Scale Particles</h3>
                <ul>
                  <li>Waterproof</li>
                  <li>Adhesion</li>
                  <li>UV Blockers</li>
                </ul>
              </div>
              <Image src="/images/products/tape/performance.jpeg" alt="Nano Scale Particles" width={350} height={200} className="tape-feature-image" />
            </article>

            <article className="tape-feature-card">
              <div className="card-content">
                <h3>Eco Friendly</h3>
                <ul>
                  <li>100% Solids</li>
                  <li>No Solvents</li>
                  <li>Green Polymers</li>
                  <li>Long Life Expectancy</li>
                </ul>
              </div>
              <Image src="/images/products/tape/eco.jpeg" alt="Eco Friendly" width={350} height={200} className="tape-feature-image" />
            </article>
          </div>
        </section>

        {/* Additional Banners */}
        <div className="product-full-image block-top-30">
          <Image src="/images/products/tape/banner2.webp" alt="EnerSeal Tape Info" width={1200} height={500} className="image-full-rounded-20" />
        </div>
        <div className="product-full-image block-top-20">
          <Image src="/images/products/tape/banner3.jpeg" alt="EnerSeal Tape Application" width={1200} height={500} className="image-full-rounded-20" />
        </div>

        {/* Project Slideshow */}
        <h2 className="section-heading-24">Completed Projects</h2>
        <div className="slideshow-container tape-slideshow">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide-image-wrapper tape-slide-card">
                <div className="tape-slide-media">
                  <Image src={slide.src} alt={slide.caption || `Slide ${index + 1}`} width={1000} height={560} className="slide-project-image" />
                </div>
                <div className="slide-caption">{slide.caption || `Project ${index + 1}`}</div>
              </div>
            </div>
          ))}
          <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous project slide">❮</button>
          <button className="slide-nav next" onClick={nextSlide} aria-label="Next project slide">❯</button>
        </div>
        <div className="slide-counter">{currentSlide + 1} / {slides.length}</div>

        <ProductLiterature docs={enersealTapeDocs} />

        {/* Contact Section */}
        <ProductContactSection />
      </div>
    </div>
  );
}
