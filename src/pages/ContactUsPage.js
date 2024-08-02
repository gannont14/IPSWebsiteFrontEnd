import React from "react";

const ContactUsPage = () => {
  return (
    <div className="pt-[10rem] w-full  flex ">
      <div className="mx-auto p-5 w-full">
        <div
          className="w-[40%] h-[72vh]  mx-auto rounded-xl  shadow-2xl flex-col"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          <h1 className="text-center w-full font-bold text-3xl pt-5">
            Get In Touch
          </h1>

          <h2 className="text-center font-bold w-full text-xl pt-5">Email</h2>
          <h3 className="text-center w-full text-xl pb-5">
            grantmorris@interactivepropertysolutions.com
          </h3>
          <h2 className="text-center font-bold w-full text-xl pt-5">
            Phone Number
          </h2>
          <h3 className="text-center w-full text-xl pb-5">(xxx)-xxx-xxxx</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
