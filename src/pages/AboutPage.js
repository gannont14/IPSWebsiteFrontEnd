import React, { useState } from "react";

const AboutPage = () => {
  //   current is pulling as a list, because of many=True on the backend stuff, should just be 1 item, and won't need to [0] it
  const [aboutContent, setAboutContent] = useState([]);
  // this can be circumvented when view is switched to only return one item
  const [mainContent, setMainContent] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "api/aboutMainContent";

  // make API call to retrive content from database
  useEffect(() => {
    getAboutContent();
  }, []);

  let getAboutContent = async () => {
    let response = await fetch(API_URL, {
      method: "GET",
    });

    console.log("sent request");

    let data = await response.json();
    setAboutContent(data);
    setIsLoading(false);
    setMainContent(aboutContent[0]);
  };

  if (isLoading) {
    return <div className="pt-[10rem]">LOADING...</div>;
  }

  // title, subHeading, mainBodyContent, image
  return (
    <div className="pt-[10rem]">
      <div className="w-full h-[45rem]">
        <h1 className="text-6xl font-bold">{mainContent.title}</h1>

        <h2 className="text-3xl font-thin">{mainContent.subHeading}</h2>

        <p>{mainContent.mainBodyContent}</p>

        <img src={mainContent.image}></img>
      </div>
    </div>
  );
};

export default AboutPage;
