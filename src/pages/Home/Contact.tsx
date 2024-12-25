import { useState } from "react";
import { Facebook, Twitter, Linkedin, Youtube, MessageSquare, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      services: formData.getAll("services") as string[], 
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbx1FRkIYz54OoiTRaRKjolYsMvKBm8h6jgi-pf2WVuWGlj6AngY3RiUQ0MQdenT7zkl/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        e.currentTarget.reset();
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black p-6">
      <div className="w-full max-w-6xl mx-auto rounded-3xl border bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Zortus</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MessageSquare className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold mb-1">Chat to us</h3>
                  <p className="text-sm text-gray-600 mb-1">Our friendly team is here to help.</p>
                  <p className="text-sm">info@acadsynk.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold mb-1">Visit us</h3>
                  <p className="text-sm text-gray-600 mb-1">Come say hello at our office HQ.</p>
                  <p className="text-sm">OSCode Solutions</p>
                  <p className="text-sm">White Field, Banglore</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold mb-1">Call us</h3>
                  <p className="text-sm text-gray-600 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="https://wa.me/+918789701077" className="text-sm">+91 8789701077</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#d2b8ed] p-8 rounded-r-3xl">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-2">Got ideas? We've got the skills. Let's team up.</h2>
              <p className="text-gray-600 mb-8">Tell us more about yourself and what you've got in mind.</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    className="w-full px-4 py-2 rounded-lg bg-white/80 border-0 placeholder-gray-500 focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="you@company.com" 
                    className="w-full px-4 py-2 rounded-lg bg-white/80 border-0 placeholder-gray-500 focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Tell us a little about the project..." 
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/80 border-0 placeholder-gray-500 focus:ring-2 focus:ring-black resize-none"
                    required
                  />
                </div>

                <div>
                  <p className="font-medium mb-4">How can we help?</p>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="services" value="Website design" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                      <span>Website design</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="services" value="Content creation" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                      <span>Content creation</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="services" value="UX design" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                      <span>UX design</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="services" value="Strategy & consulting" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                      <span>Strategy & consulting</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="services" value="User research" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                      <span>User research</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="services" value="Other" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                      <span>Other</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Let's get started!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
