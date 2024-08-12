import React from 'react';
import { SocialIcon } from 'react-social-icons';

const ContactUsPage = () => {
  return (
    <div className="pt-[10rem] w-full  flex ">
      <div className="mx-auto p-5 w-full">
        <div
          className="w-[40%] h-[72vh]  mx-auto rounded-xl  shadow-2xl flex-col"
          style={{ backgroundColor: '#f0f0f2' }}
        >
          <h1 className="text-center w-full font-bold text-3xl pt-5">
            Get In Touch!
          </h1>

          <h2 className="text-center font-bold w-full text-xl pt-5">Email</h2>
          <h3 className="text-center w-full text-xl pb-5">
            <SocialIcon className="mx-3" network="email" target="_blank" />
            grantmorris@interactivepropertysolutions.com
          </h3>
          <h2 className="text-center font-bold w-full text-xl pt-5">
            Phone Number
          </h2>
          <h3 className="text-center w-full text-xl pb-5">(xxx)-xxx-xxxx</h3>
          <h2 className="text-center font-bold w-full text-xl pt-5">
            {' '}
            Follow us on instagram!
          </h2>
          <h3 className="text-center w-full text-xl pb-5">
            <SocialIcon
              url="https://www.instagram.com/interactivepropertysolutions/"
              target="_blank"
            />
            <a
              href="https://www.instagram.com/interactivepropertysolutions/"
              target="_blank"
              className="mx-5"
            >
              interactivepropertysolutions
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
