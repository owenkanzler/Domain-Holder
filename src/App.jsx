import React, { useRef, useLayoutEffect } from "react";
import "./App.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const owenKanzler = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const firstAnim = gsap.utils.toArray(".firstAnim");
      const secondAmin = gsap.utils.toArray(".secondAnim");
      const anim = gsap.utils.toArray(".anim");

      gsap.fromTo(
        anim,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.5 }
      );

      gsap.fromTo(
        firstAnim,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.25 }
      );

      gsap.fromTo(
        secondAmin,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.25, delay: 0.75 }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="owen-kanzler" ref={owenKanzler}>
      <span className="anim">44.9778° N, 93.2650° W</span>
      <div className="container">
        <div className="i-am">
          <h4 className="firstAnim">I</h4>
          <h4 className="firstAnim">Am</h4>
        </div>
        <h1 className="anim">Owen Kanzler</h1>
        <div className="text">
          <h4 className="secondAnim">A</h4>
          <h4 className="secondAnim">Developer</h4>
          <h4 className="secondAnim">&</h4>
          <h4 className="secondAnim">Designer</h4>
        </div>
      </div>
    </section>
  );
}

export default App;
