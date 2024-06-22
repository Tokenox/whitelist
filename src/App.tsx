import logoSm from "./assets/logo-sm.svg";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import { NumberCrad } from "./components/NumberCrad";
import plant from "./assets/plant.png";
import JoinModal from "./components/JoinModal";
import { useState } from "react";

function App() {
  const [showWhitelistModal, setShowWhitelistModal] = useState(false);
  return (
    <>
      <div className="min-[900px]:bg-hero-lg bg-hero-md w-screen h-screen bg-cover bg-no-repeat md:bg-center bg-bottom">
        <nav className="lg:px-[7.5%] pt-2.5 px-6 flex justify-between items-center">
          <img
            src={logoSm}
            alt="logo"
            className="w-[151px] h-[54px]"
            width={151}
            height={54}
          />
          <button className="button-border px-10 py-2.5 text-base font-medium h-10 flex items-center font-roboto-condensed">
            Whitepaper
          </button>
        </nav>
        <div className="flex flex-col items-center">
          <h3 className="text-white font-roboto-condensed md:text-[40px] text-[30px] text-stroke text-center leading-[48px] md:mt-7 mt-5">
            Secure Your Spot
          </h3>
          <h1 className="text-[#F7941D] font-aquire md:text-[52px] sm:text-[40px] text-[36px] text-center stroke-[1px] tracking-[2.6px] md:leading-[63px] sm:leading-[44px] leading-[40px] mt-4">
            FOODSPLY WHITLIST
          </h1>
          <div className="timer md:mt-7 mt-5 md:mb-12 mb-8 color-border py-4 md:px-6 px-4 flex flex-col gap-5 relative md:w-[411px] w-[320px]">
            <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-[6px] bg-[linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)] z-0" />
            <div className="relative z-10">
              <p className="text-base font-roboto font-medium text-white text-center">
                Time Left To Join
              </p>
            </div>

            <div className="relative z-10 flex justify-between">
              <div className="flex flex-col items-center">
                <NumberCrad number={9} />
                <p className="font-roboto font-medium text-[15px] mt-1.5">
                  Day
                </p>
              </div>
              <p className="font-poppins font-medium text-sm mt-3.5">:</p>
              <div className="flex flex-col items-center">
                <NumberCrad number={16} />
                <p className="font-roboto font-medium text-[15px] mt-1.5">
                  Hours
                </p>
              </div>
              <p className="font-poppins font-medium text-sm mt-3.5">:</p>
              <div className="flex flex-col items-center">
                <NumberCrad number={34} />
                <p className="font-roboto font-medium text-[15px] mt-1.5">
                  Min
                </p>
              </div>
              <p className="font-poppins font-medium text-sm mt-3.5">:</p>
              <div className="flex flex-col items-center">
                <NumberCrad number={33} />
                <p className="font-roboto font-medium text-[15px] mt-1.5">
                  Sec
                </p>
              </div>
            </div>
          </div>

          <button className="button-filled w-[220px] h-12 rounded-[38px] text-xl font-bold leading-6 font-roboto-condensed"
            onClick={() => setShowWhitelistModal(true)}
          >
            Join Whitlist
          </button>
        </div>
      </div>

      <section className="px-[7.5%] md:py-[74px] py-10 flex justify-between md:flex-row flex-col-reverse gap-8 lg:gap-[15.5%] md:gap-[9%] bg-[#F7941D0D]">
        <img
          src={plant}
          alt="plant"
          className="w-auto object-contain"
          width={275}
          height={435}
        />
        <div className="flex flex-col justify-center">
          <h3 className="font-roboto lg:text-[48px] text-[34px] font-bold">
            <span className="text-black">About</span>{" "}
            <span className="text-[#39B54A]">Food</span>
            <span className="text-[#F7941D]">Sply</span>
          </h3>
          <div className="md:mt-9 mt-3 font-roboto lg:text-[22px] md:text-lg text-base text-black">
            <p>
              We are feeding the future by connecting farmers, suppliers, and
              consumers through our FOODSPLY Platform, building a network that
              nourishes today and sustains tomorrow.
            </p>
            <p className="md:mt-5 mt-3">
              Our vision is to create a food supply chain marketplace that
              brings together all parties in the agri-food value chain.
            </p>
          </div>
        </div>
      </section>

      <Clients />
      <Footer />

      {showWhitelistModal && <JoinModal setShowModal={setShowWhitelistModal} />}
    </>
  );
}

export default App;
