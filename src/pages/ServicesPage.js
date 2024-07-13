import React, { useEffect, useState } from "react";
import { ServicesCard } from "../components/ServicesCard";

const ServicesPage = () => {
  let [services, setServices] = useState([]);

  //fetch form services api, URL : 'api/services/

  let API_URL = "/api/services";

  useEffect(() => {
    getServices();
  }, []);

  let getServices = async () => {
    let response = await fetch(API_URL, {
      method: "GET",
    });

    console.log("sent request");

    let data = await response.json();
    setServices(data);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            title={service.title}
            body={service.body}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
