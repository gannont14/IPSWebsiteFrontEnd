import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// services, continuous service, quotes
// about, |Privacy policy| |FAQs|, legal?
// address / area?
// contact

//socials, instagram, facebook , phone number

//logo

const services = ["Services", "Seasonal", "Mowing", "Snow Removal"];
const servicesLinks = [
  "servicesLink",
  "seasonalLink",
  "mowingLink",
  "snowRemovalLink",
];

const personal = ["About", "Legal"];
const personalLinks = ["aboutLink", "legalLink"];

const info = ["contact"];
const infoLinks = ["contactLink"];

const socialsLogos = [
  "facebook.com",
  "twitter.com",
  "instagram.com",
  "tiktok.com",
];
const socialsLinks = ["facebook", "twitter", "instagram", "tiktok"];

const content = [services, personal, info];
const contentLinks = [servicesLinks, personalLinks, infoLinks];

const Footer = () => {
  return (
    <div className="flex">
      {
        //dont worry about how this is way too complex
      }
      {content.map((content, outIndex) => (
        <div className="border border-red-500 w-full h-[14rem] pl-[60px] flex flex-col space-y-2  p-5">
          {content.map((header, index) => (
            <Link
              className="mx-8 border border-green-500 w-[20%] p-auto flex items-center"
              to={contentLinks[outIndex][index]}
            >
              {header}
            </Link>
          ))}
        </div>
      ))}

      {
        //Icons are getting cut off on sides , don't want to scroll internet to find fix, also like 90% sure we will only need like
        // 1/2 of these socials
      }
      <div className="border border-red-500 w-full h-[14rem] pl-[10px] py-3 flex flex-col space-y-2 overflow-visible">
        {socialsLogos.map((social, index) => (
          <SocialIcon
            className="my-auto"
            link={social}
            url={socialsLinks[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
