import React from "react";

export function Editorial() {
  return (
    <div className="editorial-hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        .editorial-hero {
          position: relative;
          width: 100%;
          min-height: 900px;
          background-color: #081e6d;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, rgba(250, 246, 238, 0.4), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, rgba(250, 246, 238, 0.2), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 160px, rgba(250, 246, 238, 0.3), rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 90px 40px, rgba(250, 246, 238, 0.5), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, rgba(250, 246, 238, 0.2), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, rgba(250, 246, 238, 0.4), rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          color: #faf6ee;
          font-family: 'Source Sans 3', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .editorial-container {
          display: grid;
          grid-template-columns: 45% 55%;
          width: 100%;
          max-width: 1280px;
          padding: 0 4rem;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* LEFT COLUMN */
        .editorial-text-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 4rem;
        }

        .eyebrow {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #f3be43;
          margin-bottom: 3rem;
          font-weight: 600;
        }

        .headline {
          font-family: 'Sifonn Pro', sans-serif;
          font-size: 5.5rem;
          line-height: 1.3;
          text-transform: uppercase;
          margin: 0 0 2rem 0;
          color: #faf6ee;
        }

        .headline span.serif {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 6rem;
          color: #f3be43;
          text-transform: none;
          display: block;
          margin-top: 1rem;
        }

        .attribution-block {
          display: flex;
          align-items: center;
          margin: 2.5rem 0 3rem 0;
          gap: 1.5rem;
        }

        .attribution-line {
          height: 1px;
          background-color: rgba(243, 190, 67, 0.3);
          flex-grow: 1;
          max-width: 60px;
        }

        .attribution-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.25rem;
          color: rgba(243, 190, 67, 0.8);
        }

        .lead-copy {
          font-size: 1.25rem;
          line-height: 1.6;
          color: rgba(250, 246, 238, 0.85);
          margin-bottom: 3rem;
          max-width: 85%;
          font-weight: 300;
        }

        .cta-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
        }

        .btn {
          font-family: 'Source Sans 3', sans-serif;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          min-width: 240px;
        }

        .btn-primary {
          background-color: #f3be43;
          color: #081e6d;
          border: 1px solid #f3be43;
        }
        
        .btn-primary:hover {
          background-color: #ffd269;
          border-color: #ffd269;
        }

        .btn-ghost {
          background-color: transparent;
          color: #faf6ee;
          border: 1px solid rgba(250, 246, 238, 0.3);
        }

        .btn-ghost:hover {
          background-color: rgba(250, 246, 238, 0.05);
          border-color: #faf6ee;
        }

        /* RIGHT COLUMN */
        .editorial-visual-col {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .orbital-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1;
        }

        .orbital-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .orbit {
          fill: none;
          stroke: rgba(243, 190, 67, 0.2);
          stroke-width: 1;
        }

        .planet {
          fill: #f3be43;
        }

        .center-star {
          fill: #faf6ee;
          animation: pulse 3s infinite alternate;
        }

        .glow {
          fill: rgba(243, 190, 67, 0.15);
          filter: blur(20px);
          animation: pulse 4s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .orbit-group-1 { transform-origin: 210px 210px; animation: spin 40s linear infinite; }
        .orbit-group-2 { transform-origin: 210px 210px; animation: spin-reverse 50s linear infinite; }
        .orbit-group-3 { transform-origin: 210px 210px; animation: spin 60s linear infinite; }

        .formula {
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: rgba(250, 246, 238, 0.6);
          font-size: 1.1rem;
          pointer-events: none;
        }

        .f1 { top: 15%; left: -5%; }
        .f2 { top: 25%; right: 0%; }
        .f3 { bottom: 20%; left: 5%; }
        .f4 { bottom: 30%; right: -10%; }
        .f5 { top: 70%; left: -15%; }
      `}</style>

      <div className="editorial-container">
        <div className="editorial-text-col">
          <div className="eyebrow">VCE · SACE · NAPLAN · Selective Entry</div>
          
          <h1 className="headline">
            THROUGH<br/>
            HARDSHIPS,<br/>
            <span className="serif">to the stars.</span>
          </h1>

          <div className="attribution-block">
            <div className="attribution-line"></div>
            <div className="attribution-text">Built by Australia's top ATAR scorer.</div>
          </div>

          <p className="lead-copy">
            Personalised tutoring — strategy-first, results-driven — for students who refuse to settle.
          </p>

          <div className="cta-group">
            <button className="btn btn-primary">Book a Trial Session</button>
            <button className="btn btn-ghost">Explore Programs →</button>
          </div>
        </div>

        <div className="editorial-visual-col">
          <div className="orbital-wrapper">
            <svg className="orbital-svg" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Center Star Glow */}
              <circle cx="210" cy="210" r="40" className="glow" />
              <circle cx="210" cy="210" r="6" className="center-star" filter="url(#glow-filter)" />

              {/* Orbits and Planets */}
              <g className="orbit-group-1">
                <ellipse cx="210" cy="210" rx="190" ry="80" className="orbit" transform="rotate(30 210 210)" />
                <circle cx="374" cy="115" r="4" className="planet" />
              </g>

              <g className="orbit-group-2">
                <ellipse cx="210" cy="210" rx="142" ry="60" className="orbit" transform="rotate(-45 210 210)" />
                <circle cx="109" cy="110" r="3" className="planet" />
                <circle cx="311" cy="310" r="2" className="planet" opacity="0.6" />
              </g>

              <g className="orbit-group-3">
                <ellipse cx="210" cy="210" rx="94" ry="40" className="orbit" transform="rotate(15 210 210)" />
                <circle cx="120" cy="186" r="2.5" className="planet" />
              </g>
            </svg>

            {/* Math Formulas */}
            <div className="formula f1">∫ f(x) dx</div>
            <div className="formula f2">a² + b² = c²</div>
            <div className="formula f3">∇²φ = 0</div>
            <div className="formula f4">lim&#x2093;&#x2192;&#x221E;</div>
            <div className="formula f5">e^iπ + 1 = 0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
