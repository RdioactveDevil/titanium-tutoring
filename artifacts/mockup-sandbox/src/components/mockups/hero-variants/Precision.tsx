import React from "react";

export function Precision() {
  return (
    <div className="hero-container">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Source+Sans+3:wght@400;600&display=swap');
        
        .hero-container {
          width: 100%;
          min-height: 900px;
          height: 100vh;
          background-color: #081e6d;
          background-image: 
            radial-gradient(circle at 15% 50%, rgba(243, 190, 67, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(250, 246, 238, 0.05) 0%, transparent 50%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Source Sans 3', sans-serif;
          color: #faf6ee;
          position: relative;
          overflow: hidden;
        }

        /* Starfield background */
        .starfield {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(1px 1px at 10% 20%, rgba(250, 246, 238, 0.4) 100%, transparent),
            radial-gradient(1.5px 1.5px at 30% 60%, rgba(243, 190, 67, 0.3) 100%, transparent),
            radial-gradient(1px 1px at 50% 10%, rgba(250, 246, 238, 0.5) 100%, transparent),
            radial-gradient(2px 2px at 70% 80%, rgba(250, 246, 238, 0.2) 100%, transparent),
            radial-gradient(1px 1px at 90% 40%, rgba(243, 190, 67, 0.4) 100%, transparent);
          background-size: 200px 200px;
          opacity: 0.6;
          pointer-events: none;
        }

        .hero-content {
          display: flex;
          width: 100%;
          max-width: 1280px;
          padding: 0 4rem;
          box-sizing: border-box;
          position: relative;
          z-index: 10;
        }

        .hero-left {
          flex: 0 0 52%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 2rem;
        }

        .hero-right {
          flex: 0 0 48%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Eyebrow and Attribution */
        .eyebrow-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .eyebrow {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #f3be43;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 2px;
          background-color: #f3be43;
        }

        .attribution-badge {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1rem;
          color: #f3be43;
          background: rgba(243, 190, 67, 0.1);
          border: 1px solid rgba(243, 190, 67, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        /* Headline */
        .headline {
          margin: 0 0 2rem 0;
          line-height: 1.1;
        }

        .headline-line1 {
          font-family: 'Sifonn Pro', sans-serif;
          font-size: 92px;
          color: #faf6ee;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .headline-line2 {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 88px;
          color: #f3be43;
          margin: 0;
          letter-spacing: -0.01em;
          margin-top: -0.2em;
        }

        /* Lead Copy */
        .lead-copy {
          font-size: 1.375rem;
          line-height: 1.6;
          color: rgba(250, 246, 238, 0.8);
          max-width: 90%;
          margin: 0 0 3rem 0;
          font-weight: 400;
        }

        /* CTAs */
        .cta-container {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .btn-primary {
          background-color: #f3be43;
          color: #081e6d;
          font-family: 'Source Sans 3', sans-serif;
          font-weight: 600;
          font-size: 1.125rem;
          padding: 1.125rem 2.5rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(243, 190, 67, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(243, 190, 67, 0.4);
          background-color: #f5c75c;
        }

        .btn-ghost {
          background: transparent;
          color: #faf6ee;
          font-family: 'Source Sans 3', sans-serif;
          font-weight: 600;
          font-size: 1.125rem;
          padding: 1.125rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(250, 246, 238, 0.2);
          cursor: pointer;
        }

        .btn-ghost:hover {
          background: rgba(250, 246, 238, 0.05);
          border-color: rgba(250, 246, 238, 0.4);
        }

        /* Right Orbital Visual */
        .orbital-wrapper {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbital-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .orbit-path {
          fill: none;
          stroke: rgba(243, 190, 67, 0.15);
          stroke-width: 1;
        }

        .orbit-dot {
          fill: #f3be43;
        }

        .central-star {
          fill: #faf6ee;
          filter: drop-shadow(0 0 15px rgba(243, 190, 67, 0.6));
          animation: pulse 3s infinite ease-in-out;
        }

        .math-formula {
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: rgba(250, 246, 238, 0.6);
          font-size: 1.25rem;
          pointer-events: none;
          animation: float 6s infinite ease-in-out;
        }

        .formula-1 { top: 10%; left: 15%; animation-delay: 0s; }
        .formula-2 { top: 20%; right: 10%; animation-delay: -1s; }
        .formula-3 { bottom: 25%; right: 15%; animation-delay: -2s; }
        .formula-4 { bottom: 15%; left: 20%; animation-delay: -3s; }
        .formula-5 { top: 50%; left: 0%; animation-delay: -4s; }

        @keyframes pulse {
          0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 1; }
          50% { transform: scale(1.1) translate(-50%, -50%); opacity: 0.8; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit-group-1 {
          transform-origin: 210px 210px;
          animation: spin 20s linear infinite;
        }
        .orbit-group-2 {
          transform-origin: 210px 210px;
          animation: spin 35s linear infinite reverse;
        }
        .orbit-group-3 {
          transform-origin: 210px 210px;
          animation: spin 50s linear infinite;
        }
      `}} />
      
      <div className="starfield"></div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="eyebrow-container">
            <span className="eyebrow">VCE · SACE · NAPLAN · Selective Entry</span>
            <span className="attribution-badge">Built by Australia's top ATAR scorer.</span>
          </div>
          
          <h1 className="headline">
            <div className="headline-line1">THROUGH HARDSHIPS,</div>
            <div className="headline-line2">to the stars.</div>
          </h1>
          
          <p className="lead-copy">
            Personalised tutoring — strategy-first, results-driven — for students who refuse to settle.
          </p>
          
          <div className="cta-container">
            <button className="btn-primary">Book a Trial Session</button>
            <button className="btn-ghost">Explore Programs →</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="orbital-wrapper">
            <div className="math-formula formula-1">∫ f(x) dx</div>
            <div className="math-formula formula-2">a² + b² = c²</div>
            <div className="math-formula formula-3">∇²φ = 0</div>
            <div className="math-formula formula-4">lim&#x2093;&#x2192;&#x221E;</div>
            <div className="math-formula formula-5">e^iπ + 1 = 0</div>
            
            <svg className="orbital-svg" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Orbit */}
              <g className="orbit-group-1">
                <ellipse cx="210" cy="210" rx="190" ry="80" transform="rotate(30 210 210)" className="orbit-path" />
                <circle cx="210" cy="210" r="3" className="orbit-dot" style={{ transform: 'translate(190px, 0) rotate(-30deg)' }} />
              </g>

              {/* Middle Orbit */}
              <g className="orbit-group-2">
                <ellipse cx="210" cy="210" rx="142" ry="60" transform="rotate(-45 210 210)" className="orbit-path" />
                <circle cx="210" cy="210" r="4" className="orbit-dot" style={{ transform: 'translate(-142px, 0) rotate(45deg)' }} />
              </g>

              {/* Inner Orbit */}
              <g className="orbit-group-3">
                <ellipse cx="210" cy="210" rx="94" ry="40" transform="rotate(15 210 210)" className="orbit-path" />
                <circle cx="210" cy="210" r="2.5" className="orbit-dot" style={{ transform: 'translate(0, 40px) rotate(-15deg)' }} />
              </g>

              {/* Central Star */}
              <circle cx="210" cy="210" r="8" className="central-star" style={{ transformOrigin: '210px 210px' }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
