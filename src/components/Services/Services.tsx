import { Button } from "../ui/button";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-4 gap-28">
      <div className="p-3">
        <h1 className="text-4xl font-[500] font-plus-jakarta text-center">Explore Our Services</h1>
      <p className="text-center my-2 font-[400]">Our works are a blend of innovative thinking and practical solutions
        <br/>
        ensuring they are both unique and effective.
      </p></div>
      
    
      <ServiceCard className="w-[986px] bg-[#F4F2EF] "
        // title="Quiz"
        // description="With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification."
        // points={[
        //   { text: "Awesome visual identities & logo(s)" },
        //   { text: "Intuitive user experience designs" },
        //   { text: "Responsive web interfaces" },
        // ]}
        // imageSrc="/path-to-your-image.jpg" // Replace with a valid image path or URL
        // buttonLabel="Next"
        // link="https://example.com" // Replace with a valid URL
      />
      <ServiceCard className="w-[1044px] bg-[#E5DBEB]"/>
      <ServiceCard className="w-[1102px] bg-[#D2E8C8]"/>
      <ServiceCard className="w-[1160px] bg-[#DCE4EA]"/>
      <Button className="rounded-full p-6 text-sm">View All Case Studies</Button>
    </div>
  );
}

export default Services;
