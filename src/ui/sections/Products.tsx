'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image"
export default function Products(){
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const delay = 1000;
  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return(

      <section className="relative h-[300px] bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/PasteleriaA1.jpg"
            alt="Imagen de fondo"
            fill={true}
            quality={100}
            className="z-0"
            style={{ width: "100%", display: "block", maxHeight: "100vh", objectFit: "cover" }}
          />
        </div>

        <div ref={elementRef} className={`relative z-10 p-8 text-white  h-full flex flex-col justify-end ml-24 opacity-0 ${isVisible ? 'animate-slide-in-right' : ''}`}>
          <div className="">
            <h1 className="text-4xl font-bold mb-4">No te quedes sin el tuyo!</h1>
            <p className="text-lg">Este es un ejemplo de texto </p>
          </div>
          <div className="flex justify-end p-8">
            <button className="px-6 py-3 bg-primary hover:bg-button-hover text-white rounded-lg transition-transform duration-300 hover:scale-105">
              Mira nuestros PRODUCTOS
            </button>
          </div>
        </div>
      </section>
  )
}
