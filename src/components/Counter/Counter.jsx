import React, { useState, useEffect, useRef } from "react";
import { statsData } from "../../data/data.js";
import "./Counter.css";

const Counter = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="counter-parent-container">
        <div className="counter">
          <section className="counter__stats container" id="stats" ref={sectionRef}>
            <div className="counter__container">
              <div className="counter__grid">
                {statsData.map((stat, index) => (
                  <StatItem key={index} {...stat} startCount={startCount} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const StatItem = ({ icon: Icon, end, duration, label, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const increment = end / ((duration * 1000) / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration, startCount]);

  return (
    <div className="counter__stat">
      <div className="counter__stat-content">
        <span className="counter__stat-icon">
          <Icon />
        </span>
        <div className="counter__stat-numbers">
          <div className="counter__stat-count">{count}+</div>
          <div className="counter__stat-label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
