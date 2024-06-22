import { useState } from "react";
import VerifyImage from "../assets/verify-image.svg";
import OtpInput from "react-otp-input";

const VerificationModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [otp, setOtp] = useState("");

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-[#021b07cc] z-40"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 color-border backdrop-blur-[6px] py-12 px-8 w-[440px] max-w-[90vw]">
        <div className="flex justify-center mb-12">
          <div className="w-[132px] h-[115px]">
            <img src={VerifyImage} alt="foodsply" className="w-full h-full" />
          </div>
        </div>
        <h2 className="text-white text-base font-bold text-center mb-6">
          Verify Your Email Address
        </h2>
        <p className="text-white text-sm text-center font-normal leading-[17px] mb-6">
          We emailed you a six-digit code at username@gmail.com. Enter the code below to verify your
          email address
        </p>
        <div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
            containerStyle={"flex justify-center gap-2 w-full"}
            inputStyle={
              "!w-[50px] h-[60px] bg-transparent border border-[#9B6D2B] rounded-xl text-lg md:text-2xl font-bold text-center p-1 !outline-none"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
