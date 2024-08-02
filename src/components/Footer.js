import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// services, continuous service, quotes
// about, |Privacy policy| |FAQs|, legal?
// address / area?
// contact

//socials, instagram, facebook , phone number

//logo

const services = ["Services", "About", "Photo Gallery"];
const servicesLinks = ["/services", "/about", "/photos"];

const personal = ["About", "Legal"];
const personalLinks = ["/about", "legalLink"];

const info = ["Contact"];
const infoLinks = ["/contactus"];

const socialsLogos = [
  "facebook.com",
  "twitter.com",
  "instragram.com",
  "tiktok.com",
];
const socialsLinks = [
  "facebook",
  "twitter",
  "https://www.instagram.com/interactivepropertysolutions/",
  "tiktok",
];

const content = [services, personal, info];
const contentLinks = [servicesLinks, personalLinks, infoLinks];

// this entire section could be reworked to just be a daisyUI footer, https://daisyui.com/components/footer/

const Footer = () => {
  return (
    <div className="flex bg-white shadow-inner ">
      {
        //dont worry about how this is way too complex
      }
      {content.map((content, outIndex) => (
        <div className=" w-full h-[14rem] pl-[60px] flex flex-col space-y-2  p-5">
          {content.map((header, index) => (
            <Link
              className="mx-8  w-[30%] p-auto flex items-center text-black"
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
      <div className=" w-full h-[14rem] pl-[10px] py-3 flex flex-col space-y-2 overflow-visible">
        {socialsLogos.map((social, index) => (
          <SocialIcon
            className="my-auto text-black"
            link={social}
            url={socialsLinks[index]}
            target="_blank"
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
