import React from "react";

const Maintenance = () => {
  return (
    <div>
      <section
        id="maintenance"
        className="container mx-auto px-6 py-12 md:py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          🔧 Maintenance & Repair
        </h2>
        <p>
          We provide end-to-end maintenance and repair services for machines
          across government and private companies. Our trained team ensures
          minimum downtime and maximum efficiency for your equipment.
        </p>
      </section>
      <div><img src="Images/Maintenance.png" alt="Maintenance" className="object-cover rounded-xl" height={200} width={400}/></div>
    </div>
  );
};

export default Maintenance;
