import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import figma from "@/pages/assets/figma.svg";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              elementId: "repulse-div",
              enable: false,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "trail",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 2,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 2,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          lineLinked: {
            blink: false,
            color: "#000",
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 20,
            value: 15,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 1,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: "random",
            random: true,
            value: 0,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            image: [
              {
                src: "https://imgs.search.brave.com/5E_3ouC-8qAebTs4ZAz6VouIwo7Wxr9yVTxBkFpcoh0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0hUTUw1X2xv/Z29fYW5kX3dvcmRt/YXJrLnN2Zw.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/kdhAvDDas6D9BZffTojqoSUyJxxDJW7VgITEc8id15Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/cmVhY3Quc3Zn.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/wMNL1qckKg0rJ6pSKv-4co2Tz4R5QDswBJqKtFChAoQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9taWtl/dnBlZXJlbi5ubC9f/bmV4dC9zdGF0aWMv/bWVkaWEvbmV4dF9s/b2dvLjc5ZDdiNGJk/LnBuZw",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/lAxwlnkHcDxoP0r1gPCuufcYNwIjUEG9Inhli0EXaEQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b30vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvR2l0X0xv/Z28tNzAweDcwMC5w/bmc",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/5W_YFg1SEn8LSEtESVgpRT09XQS0VwzHqWCJt89PHOY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9ub2RlanMtMS5z/dmc.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/sDVAe0hPG2q4T9Tx8Fz-ZdmAPiZurH60VCplPnc2dXA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9jc3MtMy5zdmc.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/1KHVTFjU5z6qZSYdxOpcGW1Kc7KLTRMvMHrYcXN6NkA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/ZLV530QWi7Bxrq8DbHYRoup5hSVV7E2Z7uaflq2eYwo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dHlwZXNjcmlwdC5z/dmc.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/8W9cFBdW-AB7_gFGXTF0AO2NHPYtaRowLHc2NDcr18w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA2/L1NsYWNrLWxvZ28t/NTAweDI4MS5wbmc",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/wV0K-rLhjIdLVVNbhEX2Il4_iaHDRgM3uib_eXl2v8g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ZmI2ZDMzMzZlMmQ0/NjAwMDRhNWUzMWYu/cG5n",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/EWRyjEaAQ0Ke4ndToojVcyFuXiHLCJgwHv2EgeoAGo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuenVsaXBjaGF0/LmNvbS9zdGF0aWMv/aW1hZ2VzL2ludGVn/cmF0aW9ucy9sb2dv/cy9qaXJhLnN2Zw.svg",
                width: 300,
                height: 300,
              },
              {
                src: "https://imgs.search.brave.com/lOOqY5tKtwCGn27r-wQk7ZK_c62JJSV-FjRkqPLUGX0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC83cmJuMHJh/ejB0NzUvMnhoNTBz/NHZET0N6ZUNJSlJF/YUt5ei82MjZkNGUy/ZDM0YzE5MTRhNjEw/ZTU1MTNiNDk5NjZl/My9hc2FuYS1sb2dv/LWNvbG9yLnN2Zw.svg",
                width: 300,
                height: 300,
              },
            ],
            polygon: {
              sides: 5,
            },
            stroke: {
              color: "#000000",
              width: 0,
            },
            type: "image",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.6,
              speed: 40,
              sync: false,
            },
            random: false,
            value: 24,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: "#ffffff",
            lineWidth: 0.5,
          },
          move: {
            radius: 10,
          },
          scale: 1,
          url: "",
        },
        background: {
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default ParticlesContainer;
