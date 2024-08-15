import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const ServicesPageFull = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [serviceData, setServiceDate] = useState(null);
  // afterImage
  // beforeImage
  // body
  // cardImage
  // id
  // photoGalleryTag
  // serviceId
  // summaryBody
  // title

  const { serviceId } = useParams();
  // console.log(serviceId);

  let API_URL = `/api/services/${serviceId}/`;

  useEffect(() => {
    getServices();
  }, []);

  let getServices = async () => {
    let response = await fetch(API_URL, {
      method: 'GET',
    });
    console.log('sent request');

    let data = await response.json();
    console.log(data);
    setServiceDate(data);
    setIsLoading(false);
  };

  //   fetch information from backend from userId
  if (isLoading) {
    return (
      <div className="pt-[10rem]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="pt-[10rem] w-full flex-col justify-center align-middle">
      {serviceId}
      <div className="diff aspect-[16/9] w-[50%] mx-auto">
        <div className="diff-item-1">
          <img alt="daisy" src={serviceData.beforeImage} />
        </div>
        <div className="diff-item-2">
          <img alt="daisy" src={serviceData.afterImage} />
        </div>
        <div className="diff-resizer"></div>
      </div>

      <div className="flex">
        {/* left content */}
        <div className="p-5 w-[30%]">{serviceData.summaryBody}</div>
        {/* right content */}
        <div className="ml-auto"> test right</div>
      </div>
    </div>
  );
};

export default ServicesPageFull;
