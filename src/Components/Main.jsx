import React from 'react'
import "./Main.css"
function Main() {
  return (
    <main className="hero-section">

      <div className="content">
        <h1>Build Modern Websites With React</h1>

        <p>
          Learn React, Tailwind CSS, APIs, and build responsive
          real-world projects step by step.
        </p>

        <div className="buttons">
          <button className="start-btn">Get Started</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>

      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Coding"
        />
      </div>

    </main>
  );
}

export default Main;
