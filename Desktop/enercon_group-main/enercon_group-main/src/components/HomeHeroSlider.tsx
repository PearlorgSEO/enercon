'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  image: string;
  alt: string;
  link: string;
}

interface HomeHeroSliderProps {
  slides: Slide[];
}

export default function HomeHeroSlider({ slides }: HomeHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[currentSlide];

  return (
    <section className="hero-slider">
      <Link href={current.link} className="home-hero-slide active">
        <Image
          src={current.image}
          alt={current.alt}
          fill
          className="home-hero-image"
          priority={currentSlide === 0}
        />
      </Link>

      <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="hero-nav hero-nav-prev">
        ‹
      </button>
      <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="hero-nav hero-nav-next">
        ›
      </button>
    </section>
  );
}