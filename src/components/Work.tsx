"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

import img1 from "../../src/assets/easyrecallhero.png";
import img2 from "../../src/assets/darhero.png";
import img3 from "../../src/assets/yunutyhero.png";
import img4 from "../../src/assets/hospitalhero.png";
import img5 from "../../src/assets/sayahero.png";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Easy Recall",
    category: "E-Learning Platform",
    tools: "Next.js, Tailwind CSS, Supabase",
    image: img1,
  },
  {
    title: "Dar",
    category: "Furniture Marketplace",
    tools: "React.js, Firebase, Styled Components",
    image: img2,
  },
  {
    title: "Yunuty",
    category: "Construction Management",
    tools: "Next.js 14, TypeScript, Prisma",
    image: img3,
  },
  {
    title: "HMS",
    category: "Hospital Management System",
    tools: "React, Node.js, MongoDB",
    image: img4,
  },
  {
    title: "Saya Welfare",
    category: "NGO & Donation Platform",
    tools: "Next.js, Stripe, Clerk Auth",
    image: img5,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Auto-play (pause on hover/focus)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 6500);
    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goToPrev, goToNext]);

  // Touch swipe support
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let isDragging = false;

    const onStart = (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    };

    const onMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const diff = startX - e.touches[0].clientX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) goToNext();
        else goToPrev();
        isDragging = false;
      }
    };

    const onEnd = () => (isDragging = false);

    track.addEventListener("touchstart", onStart, { passive: true });
    track.addEventListener("touchmove", onMove, { passive: true });
    track.addEventListener("touchend", onEnd);

    return () => {
      track.removeEventListener("touchstart", onStart);
      track.removeEventListener("touchmove", onMove);
      track.removeEventListener("touchend", onEnd);
    };
  }, [goToNext, goToPrev]);

  return (
    <section
      className="work-section"
      id="work"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            disabled={isAnimating}
          >
            <MdArrowBack />
          </button>

          {/* Right Arrow */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            disabled={isAnimating}
          >
            <MdArrowForward />
          </button>

          {/* Track */}
          <div className="carousel-track-container">
            <div
              ref={trackRef}
              className={`carousel-track ${isAnimating ? "transitioning" : ""}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots + Counter */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>

          <div className="slide-counter">
            {String(currentIndex + 1).padStart(2, "0")} / {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;