import {
  FacebookIcon,
  InstagramICon,
  TelegramIcon,
  TwitterIcon,
} from "./Icons";

import logoSm from "../assets/logo-sm.svg";

const Footer = () => {

  return (
    <div>
      <div className="flex sm:justify-between sm:flex-row flex-col sm:gap-10 gap-5 px-[7.5%] pt-10">
        <div>
          <img src={logoSm} alt="Food sply" width={190} height={58} />
          <p className="lg:text-xl leading-[24px] opacity-[0.8] mt-[14px] mb-3 lg:mb-6 font-roboto-condensed text-[#667085] max-w-[500px]">
            We love food, and food goes perfect with community, together pulling
            in the same direction.
          </p>
        </div>
        <div className="flex gap-4 sm:items-start justify-center pt-5">
          <FacebookIcon />
          <TelegramIcon />
          <InstagramICon />
          <TwitterIcon />
        </div>
      </div>
      <div className="py-3">
        <p className="text-xs font-roboto text-[#667085] text-center">
          All rights reserved. FoodSply © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
