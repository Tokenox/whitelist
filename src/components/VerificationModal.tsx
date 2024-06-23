import { useEffect, useState } from "react";
import VerifyImage from "../assets/verify-image.svg";
import OtpInput from "react-otp-input";
import axios from "axios";
import Loading from "./Loading";
import { useAccount } from "wagmi";

type VerificationModalProps = {
  email: string;
  closeModal: () => void;
};

const VerificationModal = ({ email, closeModal }: VerificationModalProps) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { address } = useAccount();

  useEffect(() => {
    (async () => {
      if (otp.length === 6 && email && address) {
        setLoading(true);
        setError("");
        const data = new URLSearchParams();
        data.append("email", email);
        data.append("code", otp);
        data.append("address", address);
        data.append("action", "verify");
        const response = await axios.post(
          "https://script.google.com/macros/s/AKfycbxQQN8mf5TmPLPJJ3OCKvgGrrkA0XaSuIMI28BoEN8rbF3r6chGDPiKXq6GY2ar9lNP/exec",
          data,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.status === 200) {
          if (response.data.status === "failure") {
            setLoading(false);
            setError(response.data.message);
            return;
          }
          setLoading(false);
          closeModal();
          window.alert("You have successfully verified your email and joined");
        }
      }
    })();
  }, [otp, email, address]);

  return (
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
        We emailed you a six-digit code at username@gmail.com. Enter the code
        below to verify your email address
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
            "!w-9 md:!w-[50px] h-11 md:h-[60px] bg-transparent border border-[#9B6D2B] rounded-xl text-lg md:text-2xl font-bold text-center p-1 !outline-none"
          }
        />
        {error ? (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        ) : null}
        {loading ? (
          <div className="flex justify-center p-2 pt-6">
            <Loading />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VerificationModal;
