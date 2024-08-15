import React, { useEffect, useState } from 'react';
import LoadingSkeltons from '../components/LoadingSkeltons';
import { ServicesCard } from '../components/ServicesCard';

const ServicesPage = () => {
  let [services, setServices] = useState([]);

  //   start with  6 blank cards to fill full screens worth of space
  let [isLoading, setIsLoading] = useState(true);

  //fetch form services api, URL : 'api/services/

  // let API_URL = '/api/services';

  // https://ipswebsitebackend.onrender.com/
  let API_URL = 'api/services/';

  useEffect(() => {
    getServices();
  }, []);

  let getServices = async () => {
    let response = await fetch(API_URL, {
      method: 'GET',
    });

    console.log('sent request');

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
    return <LoadingSkeltons />;
  }

  return (
    <div className="container mx-auto p-4 pt-[15rem] bg-bgcustom">
      {/* renders the cards with information pulled from the API call  */}
      {/* daisyUI has some blank cards that could probably be rendered before cards have loaded so the page doesn't have some jarring size change */}
      {/* https://daisyui.com/components/skeleton/ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px] pb-10">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            title={service.title}
            body={service.body}
            cardImage={service.cardImage}
            serviceId={service.serviceId}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
