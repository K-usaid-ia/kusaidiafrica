import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/png/kusaida-logo.png";
import { useAuth } from "@/features/auth/AuthContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const { connectWallet } = useAuth();

  const handleGetStarted = () => {
    connectWallet();
  };

  const RotatingWords = () => {
    const words = ["Seamless", "Secure", "Fast"];
    const containerRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
      if (!containerRef.current) return;

      tl.current = gsap.timeline({ repeat: -1 });
      gsap.set(containerRef.current, { opacity: 0 });

      words.forEach((word, index) => {
        tl.current!
          .to(containerRef.current, { 
            opacity: 1, 
            duration: 0.8, 
            delay: index === 0 ? 0 : 3 
          })
          .to(containerRef.current, { 
            opacity: 0, 
            duration: 0.8, 
            onComplete: () => {
              if (containerRef.current) {
                containerRef.current.textContent = words[(index + 1) % words.length];
              }
            }
          });
      });
    }, []);

    return (
      <div
        ref={containerRef}
        className="text-4xl font-bold text-indigo-600 min-h-[48px]"
        dangerouslySetInnerHTML={{ __html: words[0] }}
      />
    );
  };

  const ParticleEffects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const particles = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        mousePos.current = { x: e.clientX, y: e.clientY };
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useGSAP(() => {
      if (!containerRef.current) return;

      const colors = ["#6366F1", "#4F46E5", "#A855F7"];
      const particleCount = 50;

      // Clear existing particles
      particles.current.forEach(p => p.remove());
      particles.current = [];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = particle.style.height = `${gsap.utils.random(6, 12)}px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = "50%";
        particle.style.opacity = gsap.utils.random(0.4, 0.8).toString();
        
        containerRef.current.appendChild(particle);
        particles.current.push(particle);

        // Set initial random position
        gsap.set(particle, {
          x: gsap.utils.random(-200, 200),
          y: gsap.utils.random(-200, 200)
        });

        // Animate with mouse interaction
        gsap.to(particle, {
          duration: gsap.utils.random(4, 8),
          x: () => gsap.utils.random(-300, 300) + (mousePos.current.x - window.innerWidth/2) * 0.1,
          y: () => gsap.utils.random(-300, 300) + (mousePos.current.y - window.innerHeight/2) * 0.1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          modifiers: {
            x: x => parseFloat(x) % (window.innerWidth + 400) - 200,
            y: y => parseFloat(y) % (window.innerHeight + 400) - 200
          }
        });
      }
    }, []);

    return (
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-visible opacity-75 mix-blend-multiply pointer-events-none"
      />
    );
  };

  return (
    <div className="flex flex-row h-[100vh]">
      {/* Left Section */}
      <div className="w-2/4 bg-[#F1F1F1]">
        <div className="p-5 flex flex-col justify-between gap-80">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={50} height={60} />
            <span className="text-2xl font-bold text-indigo-600 ml-2">USAIDIA</span>
          </div>
          <div>
            <h1 className="text-7xl font-bold">Aid with Ease?</h1>
            <div className="text-gray-600 mt-8 w-3/4">
              <p>Aid with Kusaidia.</p>
              <p className="leading-relaxed mt-2">
                Kusaidia connects donors directly with verified local vendors to
                ensure that aid reaches its intended beneficiaries efficiently
                and transparently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Gradient Section */}
      <div className="w-1/2 bg-gradient-to-r from-indigo-700 to-purple-600 mix-blend-multiply" />

      {/* Right Section */}
      <div className="w-1/4 bg-[#F1F1F1] h-full flex flex-col">
        <div className="h-1/2 flex justify-center items-start p-5">
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            Connect Wallet
          </button>
        </div>
        <div className="h-1/2 bg-white relative overflow-hidden">
          <ParticleEffects />
          <div className="absolute bottom-8 right-8 flex flex-col items-end z-10">
            <RotatingWords />
            <div className="mt-4 h-1 w-24 bg-indigo-600 animate-pulse" />
            <div className="mt-2 text-sm text-gray-500 text-right">
              Empowering Humanitarian Aid
              <div className="h-px w-16 bg-indigo-600 mt-1 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;