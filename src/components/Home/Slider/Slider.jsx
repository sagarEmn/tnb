import React, { useState, useEffect, useCallback } from "react";
import "./Slider.css";
import data from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  }, [people.length]);

  const prevSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  }, [people.length]);

  useEffect(() => {
    const slider = setInterval(nextSlide, 300000);
    return () => clearInterval(slider);
  }, [nextSlide]);

  return (
    <section className="slider">
      <div className="slider__container">
        {people.map((item, personIndex) => {
          const { id, image, title } = item;
          let position =
            personIndex === index
              ? "active"
              : personIndex === (index - 1 + people.length) % people.length
              ? "prev"
              : "next";

          return (
            <article
              className={`slider__slide slider__slide--${position}`}
              key={id}
            >
              <div className="slider__image-container">
                <img src={image} alt={title} className="slider__image" />
              </div>
              <div className="slider__description">
                <h4>{title}</h4>
              </div>
            </article>
          );
        })}
        <button
          className="slider__button slider__button--prev"
          onClick={prevSlide}
        >
          <ChevronLeft strokeWidth={3} />
        </button>
        <button
          className="slider__button slider__button--next"
          onClick={nextSlide}
        >
          <ChevronRight strokeWidth={3} />
        </button>
      </div>
    </section>
  );
};

export default Slider;
