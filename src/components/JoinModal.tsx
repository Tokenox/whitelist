import { useState } from "react";
import personIcon from "../assets/person.svg";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import countryIcon from "../assets/globe.svg";
import { countries } from "../assets/constants";
import axios from "axios";
import Loading from "./Loading";

const JoinModal = ({
  setShowModal,
}: //   showModal,
//   setShowModal,
{
  //   showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(false);

  const [err, setErr] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errObj = { fullName: "", email: "", phone: "", country: "" };
    if (!fullName) {
      errObj.fullName = "Full Name is required";
    }
    if (!email) {
      errObj.email = "Email is required";
    }
    if (!phone) {
      errObj.phone = "Phone is required";
    }
    if (!country) {
      errObj.country = "Country is required";
    }
    if (Object.values(errObj).some((val) => val)) {
      setErr(errObj);
      return;
    }
    // validate name ,email and phone
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
      errObj.fullName = "Full Name is invalid";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errObj.email = "Email is invalid";
    }
    // allow +and space in phone number
    if (!/^[0-9\s+]+$/.test(phone)) {
      errObj.phone = "Phone is invalid";
    }
    setErr(errObj);

    // call api
    setLoading(true);
    const data = new URLSearchParams();
    data.append("fullname", fullName);
    data.append("email", email);
    data.append("country", countryName);
    data.append("phone", phone);
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbydFa0afvLEfALhA4cXVJpmqWHhQpR5QsrsxnD21NiEHFVOkIcq6SBODAcf2OvfZeC3/exec",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.status === 200) {
      if (response.data.status === "error") {
        if (response.data.errors.email) {
          window.alert(response.data.errors.email);
          setLoading(false);
          return;
        }
        window.alert("Something went wrong, please try again");
        setLoading(false);
        return;
      }
      setShowModal(false);
      setLoading(false);
      window.alert("You have successfully joined the whitelist");
    }
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-[#021b07cc] z-40"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 color-border backdrop-blur-[6px] py-12 px-11 w-[440px] max-w-[90vw]">
        <h5 className="text-white text-stroke text-center font-poppins text-[32px] mb-9">
          JOIN THE WHITELIST
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[22px]">
            <div>
              <div className="backdrop-blur-[15px] w-full border border-white bg-[#ffffff1a] py-1 px-4 h-11 rounded-[54px] flex gap-2">
                <img src={personIcon} alt="person" width={24} height={24} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => {
                    // number and special characters are not allowed, space is allowed, return
                    if (/[^a-zA-Z ]/.test(e.target.value)) return;
                    setFullName(e.target.value);
                  }}
                  className="bg-transparent w-full outline-none"
                />
              </div>
              {err.fullName && <p className="text-red-500 text-xs mt-1 ml-2">{err.fullName}</p>}
            </div>
            <div>
              <div className="backdrop-blur-[15px] w-full border border-white bg-[#ffffff1a] py-1 px-4 h-11 rounded-[54px] flex gap-2">
                <img src={emailIcon} alt="email" width={24} height={24} />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full outline-none"
                />
              </div>
              {err.email && <p className="text-red-500 text-xs mt-1 ml-2">{err.email}</p>}
            </div>
            <div>
              <div className="backdrop-blur-[15px] w-full border border-white bg-[#ffffff1a] py-1 px-4 h-11 rounded-[54px] flex gap-2">
                <img src={countryIcon} alt="country" width={24} height={24} />
                <select
                  className="bg-transparent w-full outline-none"
                  value={country}
                  onChange={(e) => {
                    const { code, name } = JSON.parse(e.target.value);
                    setCountry(e.target.value);
                    setCountryName(name);
                    setPhone(code);
                  }}
                >
                  <option value="">Country</option>

                  {countries.map(({ code, name }) => (
                    <option key={name} value={JSON.stringify({ code, name })}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              {err.country && <p className="text-red-500 text-xs mt-1 ml-2">{err.country}</p>}
            </div>
            <div>
              <div className="backdrop-blur-[15px] w-full border border-white bg-[#ffffff1a] py-1 px-4 h-11 rounded-[54px] flex gap-2">
                <img src={phoneIcon} alt="phone" width={24} height={24} />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-transparent w-full outline-none"
                />
              </div>
              {err.phone && <p className="text-red-500 text-xs mt-1 ml-2">{err.phone}</p>}
            </div>

            <button
              type="submit"
              className="button-filled w-full h-12 rounded-[62px] text-base font-bold leading-6 font-roboto mt-[18px] flex items-center justify-center"
            >
              {loading ? <Loading /> : "Join Whitelist"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinModal;
