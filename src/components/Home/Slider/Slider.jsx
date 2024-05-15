import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Slider() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, title, firstp, secondp } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="image-container">
                <img src={image} alt={id} className="person-img" />
              </div>
              <div className="description-container">
                <h4>{title}</h4>
                <p className="title">{firstp}</p>
                <p className="title">{secondp}</p>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
        <ChevronLeft strokeWidth={3} />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <ChevronRight strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}

export default Slider;
