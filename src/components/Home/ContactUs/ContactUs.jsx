import React, { useEffect } from "react";
import { contactImageSources } from "../../globalImageSources";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 950,
      delay: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
        <div className="space-y-6" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg italic mb-6">
            "We don't want to push our ideas on to customers, <br /> we simply
            want to make what they want."
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <img
                src={contactImageSources[0]}
                alt="Map Icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <p>บริษัท ทีเอ็นบี ซอร์ส จำกัด 20/1 (ห้องK19/2)</p>
                <p>
                  ถนนพัฒนาชนบท 3 แขวงคลองสองต้นนุ่น เขตลาดกระบัง
                  จังหวัดกรุงเทพมหานคร 10520 โทร.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src={contactImageSources[1]}
                alt="Phone Icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <p>Tel 02-138-9530</p>
                <p>Mobile 09-4857-4030</p>
                <p>เลขประจำตัวผู้เสียภาษี 0 1 0 5 5 5 9 0 8 9 8 1 7</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src={contactImageSources[4]}
                alt="Mail Icon"
                className="w-6 h-6 mt-1"
              />
              <p>tnbsource.th@gmail.com</p>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src={contactImageSources[1]}
                alt="Phone Icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <p>+66 (0) 948 574 030</p>
                <p>0 617 849 898</p>
                <p>02-138-9530</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Drop Us A Line</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <button
              type="submit"
              disabled
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 hover:cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
