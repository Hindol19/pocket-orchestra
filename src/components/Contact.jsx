import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-4">
        <h2 className="text-4xl  mt-10">Let's work together</h2>
        <div className="mt-3 w-[120px] border-b-2 border-light"></div>
      </div>
      <div className="flex flex-row items-center justify-center my-[80px]">
        <div className="w-[500px] h-[400px] border-2 border-light mr-[-100px]">
          Contact
        </div>
        <div className="w-[800px] h-[500px] border-2 border-alt1">Fiverr</div>
      </div>
    </div>
  );
};

export default Contact;
