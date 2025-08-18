import MyMap from "./Map";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Communication from "./Communication";

const Contact = () => {
  return (
    <>
      <div className="contact px-[10%] py-15">
        <div className="communicat flex flex-col lg:flex-row justify-between items-center">
          <div className="detalies mb-4 flex justify-start flex-col w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">Need a direct line?</h2>
            <p className="text-[#555555] mb-2">
              Cras massa et odio donec faucibus in. Vitae pretium massa dolor
              ullamcorper lectus elit quam.
            </p>
            <div className="phone mb-2 flex justify-start items-center gap-4">
              <FaPhoneAlt className="bg-[#F5F5F5] p-2 text-[#FF782D] text-4xl rounded" />
              <div className="box">
                <p className="text-[#555555]">Phone</p>
                <h3>+201026288096</h3>
              </div>
            </div>
            <div className="email mb-2 flex justify-start items-center gap-4">
              <IoMail className="bg-[#F5F5F5] p-2 text-[#FF782D] text-4xl rounded" />
              <div className="box">
                <p className="text-[#555555]">Email</p>
                <h3>elbastawesy122@gmail.com</h3>
              </div>
            </div>
          </div>
          <div className="map w-full lg:w-3/4 h-full">
            <MyMap
              lat={30.0444}
              lng={31.2357}
              zoom={12}
              onSelect={(coords) => {
                console.log("Selected Location:", coords);
              }}
            />
          </div>
        </div>
        <Communication />
      </div>
    </>
  );
};

export default Contact;
