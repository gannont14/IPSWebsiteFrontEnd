import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

// services, continuous service, quotes
// about, |Privacy policy| |FAQs|, legal?
// address / area?
// contact

//socials, instagram, facebook , phone number

//logo

const pages = ['Services', 'About', 'Photo Gallery', 'Jobs', 'Contact us!', 'Login'];
const pageLinks = ['/services', '/about', '/photos', '/jobLink', '/contactus','/admin'];

const socialsLogos = [
  'instagram.com',
  'nextdoor.com',
];
const socialsLinks = [
  'https://www.instagram.com/interactivepropertysolutions/',
  'https://nextdoor.com/pages/interactive-property-solutions-carmel-in/',
];

const content = [pages];
const contentLinks = [pageLinks];

// this entire section could be reworked to just be a daisyUI footer, https://daisyui.com/components/footer/

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary p-10">

      {content.map((content, outIndex) => (
        <nav className="grid grid-flow-col gap-4 h-1 -mt-4">
            {content.map((header, index) => (
              <Link
                className="link link-hover text-white"
                to={contentLinks[outIndex][index]}
              >
                {header}
              </Link>
            ))}
        </nav>
      ))}

      {
        //Icons are getting cut off on sides , don't want to scroll internet to find fix, also like 90% sure we will only need like
        // 1/2 of these socials
      }
      <div className="grid grid-flow-col gap-4 -mb-4">
        {socialsLogos.map((social, index) => (
          <SocialIcon
            link={social}
            url={socialsLinks[index]}
            target="_blank"
          />
        ))}
      </div>

      <aside>
        <p className="text-bgcustom h-1">Copyright © {new Date().getFullYear()} - All rights reserved by Interactive Property Solutions</p>
      </aside>
    </footer>
  );
};

export default Footer;
