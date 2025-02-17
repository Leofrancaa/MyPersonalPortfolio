"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#1b1b1b" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { quantity: 4 },
          grab: { distance: 150, links: { opacity: 1 } },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 120,
        },
        opacity: { value: 0.7 },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // 🔥 Garante que fique atrás de tudo
      }}
    />
  ) : (
    <></>
  );
};

export default ParticlesBackground;
