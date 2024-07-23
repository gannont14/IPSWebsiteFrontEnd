import React, { useEffect, useState } from "react";

const AboutPage = () => {
  //   current is pulling as a list, because of many=True on the backend stuff, should just be 1 item, and won't need to [0] it
  // this can be circumvented when view is switched to only return one item
  const [mainContent, setMainContent] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "api/aboutMainContent";

  // make API call to retrive content from database
  useEffect(() => {
    const getAboutContent = async () => {
      let response = await fetch(API_URL, {
        method: "GET",
      });
      console.log("sent request");

      //not properly settings About Content
      let data = await response.json();
      setMainContent(data[0]);
      setIsLoading(false);
    };

    getAboutContent();
  }, []);

  if (isLoading) {
    return <div className="pt-[10rem]">LOADING...</div>;
  }

  // title, subHeading, mainBodyContent, image
  return (
    <div className="pt-[10rem]">
      <div className="w-full h-[45rem]">
        <h1 className="text-6xl font-bold">{mainContent.title}</h1>

        <h2 className="text-3xl font-thin">{mainContent.subheading}</h2>

        <p>{mainContent.mainBodyContent}</p>

        <img src={mainContent.image}></img>
      </div>
    </div>
  );
};

export default AboutPage;
