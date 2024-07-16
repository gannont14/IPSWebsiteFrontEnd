import React, { useEffect, useState } from "react";
import { ServicesCard } from "../components/ServicesCard";

const ServicesPage = () => {
  let [services, setServices] = useState([]);

  //   start with  6 blank cards to fill full screens worth of space
  let [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  };

  //   A list of the services that we claim to do
  // -snow & ice removal/management
  // -spring & fall clean up
  // -mulch & rock installation
  // -weekly mowing & grounds maintenance
  // -fertilizer & weed control packages
  // -annual/perennial/tree & shrub removal & installation
  // -leaf & debris removal
  // -seeding & sod installation
  // -turf aeration
  // -paver walkways
  // -outdoor lighting

  //   rendering for loading
  if (isLoading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pt-[10rem]">
      {/* renders the cards with information pulled from the API call  */}
      {/* daisyUI has some blank cards that could probably be rendered before cards have loaded so the page doesn't have some jarring size change */}
      {/* https://daisyui.com/components/skeleton/ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px]">
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
