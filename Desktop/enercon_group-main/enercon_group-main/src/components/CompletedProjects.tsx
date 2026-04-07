'use client';

import Image from 'next/image';
import { useState } from 'react';
import './CompletedProjects.css';

interface Slide {
  src: string;
  caption: string;
}

interface CompletedProjectsProps {
  slides: Slide[];
  heading?: string;
}

export default function CompletedProjects({ slides, heading = 'Completed Projects' }: CompletedProjectsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="cp-section">
      <div className="containerCP">
        <div className="cp-card">
          <h2 className="cp-heading">{heading}</h2>

          <div className="cp-slideshow-container">
            {slides.map((slide, index) => (
              <div key={index} className={`cp-slide ${index === currentSlide ? 'active' : ''}`}>
                <div className="cp-slide-image-wrapper">
                  <div className="cp-slide-media">
                    <Image
                      src={slide.src}
                      alt={slide.caption || 'Project'}
                      width={900}
                      height={520}
                      className="cp-slide-image"
                    />
                  </div>
                  {slide.caption && (
                    <div className="cp-slide-caption">
                      {slide.caption}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button className="cp-slide-nav prev" onClick={prevSlide} aria-label="Previous project slide">❮</button>
            <button className="cp-slide-nav next" onClick={nextSlide} aria-label="Next project slide">❯</button>
          </div>
          <div className="cp-slide-counter">{currentSlide + 1} / {slides.length}</div>
        </div>
      </div>
    </section>
  );
}
