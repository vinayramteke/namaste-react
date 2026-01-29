import React from "react";

// Sub-component for Feature Cards to keep the main code clean
const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="about-page font-sans text-gray-800">
      {/* --- Section 1: Hero Banner --- */}
      <section className="bg-orange-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Driving the Future of{" "}
          <span className="text-orange-600">Food Delivery</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We bridge the gap between your favorite local eateries and your
          doorstep, ensuring every meal is an experience worth savoring.
        </p>
      </section>

      {/* --- Section 2: Our Mission (The Story) --- */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4 leading-7">
              Launched in 2024, our platform was born out of a simple need: to
              make high-quality food accessible to everyone, everywhere. We
              believe that good food shouldn't be a luxury, and technology
              should be the tool that makes it happen.
            </p>
            <p className="text-gray-600 leading-7">
              By empowering local restaurant owners with data-driven insights
              and a seamless logistics network, we're not just delivering
              food—we're growing communities.
            </p>
          </div>
          <div className="flex-1">
            {/* A placeholder for a professional team or food image */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center text-gray-400">
              [Image: High-quality Food or Team Photo]
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Feature Highlights (Grid) --- */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
          <p className="text-gray-500">
            The values that set our service apart.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="⚡"
            title="Lightning Fast"
            description="Our optimized routing algorithms ensure your food arrives hot and fresh, every single time."
          />
          <FeatureCard
            icon="📍"
            title="Live Tracking"
            description="Know exactly where your meal is with real-time GPS tracking from the kitchen to your door."
          />
          <FeatureCard
            icon="💎"
            title="Quality Assured"
            description="We partner only with top-rated restaurants that pass our rigorous hygiene and quality checks."
          />
        </div>
      </section>

      {/* --- Section 4: Call to Action (CTA) --- */}
      <section className="py-20 px-6 text-center">
        <div className="bg-gray-900 text-white p-12 rounded-[3rem] max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Hungry for more?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Join thousands of happy foodies and start your culinary journey
            today.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all">
            Explore Restaurants
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
