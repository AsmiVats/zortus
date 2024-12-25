import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Starting state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // When the card is 80% in the viewport
            end: "top 60%",
            toggleActions: "play none none reverse", // Play animation on scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mx-auto my-4 gap-28">
      <div className="p-3">
        <h1 className="text-4xl font-[500] font-plus-jakarta text-center">
          Explore Our Services
        </h1>
        <p className="text-center my-2 font-[400]">
          Our works are a blend of innovative thinking and practical solutions
          <br />
          ensuring they are both unique and effective.
        </p>
      </div>

      {/* Add service cards with the animation */}
      <ServiceCard className="service-card bg-[#F4F2EF]" />
      <ServiceCard className="service-card bg-[#E5DBEB]" />
      <ServiceCard className="service-card bg-[#D2E8C8]" />
      <ServiceCard className="service-card bg-[#DCE4EA]" />

      <Button className="rounded-full p-6 text-sm">View All Case Studies</Button>
    </div>
  );
}

export default Services;
