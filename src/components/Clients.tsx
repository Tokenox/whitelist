import coinGecko from "../assets/client-logos/coin-gecko.svg";
import marketCap from "../assets/client-logos/market-cap.svg";
import binance from "../assets/client-logos/binance.svg";
import aws from "../assets/client-logos/aws.svg";
import mongoDB from "../assets/client-logos/mongo-db.svg";


const Clients = () => {
  return (
    <div className="bg-[#25363D] relative bottom-[1px] lg:px-[7.5%] px-6">
      <div className="section-margin-x md:py-[40px] py-8 flex gap-6 2xl:gap-[75px] items-center justify-between overflow-x-auto">
        {ClientData?.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt="food sply clients"
            width={item.width || 200}
            height={100}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;

export const ClientData = [
  {
    id: 1,
    image: coinGecko,
    width: 158,
  },
  {
    id: 2,
    image: marketCap,
    width: 290,
  },
  {
    id: 3,
    image: binance,
    width: 160,
  },
  {
    id: 4,
    image: aws,
    width: 80,
  },
  {
    id: 5,
    image: mongoDB,
    width: 186,
  },
];
