
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Join Our Spring Gardening Workshop",
    description: "Learn essential tips for starting your garden this spring",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    buttonText: "Register Now",
    buttonLink: "/register",
  },
  {
    id: 2,
    title: "Discover Vertical Gardening",
    description: "Save space and grow more with innovative vertical techniques",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    buttonText: "Learn More",
    buttonLink: "/browse-tips",
  },
  {
    id: 3,
    title: "Seasonal Plant Care Tips",
    description: "Keep your garden thriving through every season",
    image: "https://images.unsplash.com/photo-1627548751111-c7a098453464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    buttonText: "Get Tips",
    buttonLink: "/browse-tips",
  },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 md:px-8 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-6 opacity-90 animate-slide-up">{slide.description}</p>
              <Button size="lg" asChild>
                <a href={slide.buttonLink}>{slide.buttonText}</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
