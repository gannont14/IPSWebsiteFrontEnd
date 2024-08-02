import React, { useEffect, useState } from "react";
import HomePagePictureDescription from "../components/HomePagePictureDescription";
import LoadingSpinner from "../components/LoadingSpinner";

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
    return <LoadingSpinner />;
  }

  // title, subheader, mainBodyContent, image
  return (
    <div className="pt-[10rem] h-[100vh] w-full flex">
      {/* Left body content */}
      <div className="m-5 p-5 w-[40%] items-center justify-center flex">
        <img className="w-full mx-auto rounded-md" src={mainContent.image} />
      </div>
      {/* Right body content */}
      <div className="flex-1 m-8 p-5">
        <h2 className="text-black text-3xl font-bold">{mainContent.title}</h2>
        <h3 className="text-black text-2xl font-thin py-3">
          {mainContent.subheader}
        </h3>
        <p className="text-black py-3 text-xl">{mainContent.mainBodyContent}</p>
      </div>
    </div>
  );
};

export default AboutPage;
