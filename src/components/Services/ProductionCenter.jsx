import React from 'react';

const ProductionCenter = () => {
  const services = ['Mass Production', 'Fixture', 'Exhibition', 'Pop-up Stand', 'VMD Kit', 'Signage'];
  const centers = [
    { name: 'OneRX UAE', location: 'Dubai', time: '07:58 AM' },
    { name: 'OneRX Türkiye', location: 'Istanbul', time: '06:58 AM' },
    { name: 'OneRX Slovakia', location: 'Bratislava', time: '05:58 AM' },
    { name: 'OneRX Vietnam', location: 'Ho Chi Minh', time: '10:58 AM' },
    { name: 'OneRX Thailand', location: 'Bangkok', time: '10:58 AM' },
    { name: 'OneRX India', location: 'Delhi', time: '09:28 AM' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">PRODUCTION CENTER</h1>
      <p className="mb-6 text-lg">
        Our in-house production centers provide the products and services that brands
        expect and need with the optimal process.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {services.map((service, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            {service}
          </span>
        ))}
      </div>
      <div className="space-y-4">
        {centers.map((center, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              <span className="font-semibold">{center.name}</span>
            </div>
            <div className="text-gray-500 text-sm">
              <span className="mr-4">{center.location}</span>
              <span>{center.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionCenter;