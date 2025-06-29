"use client"

import { useEffect, useRef } from "react"

const VantaBackground = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement("script")
    threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    document.head.appendChild(threeScript)

    threeScript.onload = () => {
      // Load Vanta.js NET effect
      const vantaScript = document.createElement("script")
      vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
      document.head.appendChild(vantaScript)

      vantaScript.onload = () => {
        if (vantaRef.current && window.VANTA) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3f51b5,
            backgroundColor: 0x0a0a0a,
            points: 10.0,
            maxDistance: 20.0,
            spacing: 15.0,
          })
        }
      }
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  return <div ref={vantaRef} className="fixed inset-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}

export default VantaBackground
