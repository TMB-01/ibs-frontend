import { gsap } from "gsap/dist/gsap";

(function () {
    const safeToAnimate = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;
    if (!safeToAnimate) return;
  
    // Get the elements that we need
    const dom = {
      face: document.querySelector(".face"),
      eye: document.querySelectorAll(".eye"),
      innerFace: document.querySelector(".inner-face"),
      hairFront: document.querySelector(".hair-front"),
      hairBack: document.querySelector(".hair-back"),
      ear: document.querySelectorAll(".ear"),
      eyebrowLeft: document.querySelector(".eyebrow-left"),
      eyebrowRight: document.querySelector(".eyebrow-right"),
      screenlog: document.querySelector(".screen-log")
    };
  
    let xPosition;
    let yPosition;
  
    let storedXPosition;
    let storedYPosition;
    let innerWidth;
    let innerHeight
    // Set up our coordinate mapping with GSAP utils!
    let mapWidth;
    let mapHeight;
    function setMaps() {
      mapWidth = gsap.utils.mapRange(0, innerWidth, -50, 50);
      mapHeight = gsap.utils.mapRange(0, innerHeight, -50, 50);
    }
    window.addEventListener("resize", setMaps);
    setMaps();
  
    function moveSVG() {
      // only recalculating if the value changes
      if (storedXPosition === xPosition && storedYPosition === yPosition) return;
      var x = xPosition;
       var y = yPosition;
  
      if (xPosition && yPosition) {
        dom.screenlog.innerHTML = `
        <p> x: ${Math.round(x)}</p>
        <p> y: ${Math.round(y)} </p>`;
      }
  
      gsap.to(dom.face, {
        yPercent: y / 30,
        xPercent: x / 30
      });
      gsap.to(dom.eye, {
        yPercent: y / 3,
        xPercent: x / 2
      });
      gsap.to(dom.innerFace, {
        yPercent: y / 6,
        xPercent: x / 6
      });
      gsap.to(dom.hairFront, {
        yPercent: y / 15,
        xPercent: x / 22
      });
      gsap.to(dom.hairBack, {
        yPercent: (y / 20) * -1,
        xPercent: (x / 20) * -1
      });
      gsap.to(dom.ear, {
        yPercent: (y / 1.5) * -1,
        xPercent: (x / 10) * -1
      });
      gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
        yPercent: y * 2.5
      });
  
      // update the stored positions with the current positions
      storedXPosition = xPosition;
      storedYPosition = yPosition;
    }
    // gsap's RAF, falls back to set timeout
    gsap.ticker.add(moveSVG);
  
    // updating the mouse coordinates
    function updateMouseCoords(event) {
      xPosition = mapWidth(event.clientX);
      yPosition = mapHeight(event.clientY);
    }
    window.addEventListener("mousemove", updateMouseCoords);
  })();