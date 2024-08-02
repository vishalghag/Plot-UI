import { BANNER_IMG } from "../utils/constant";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={BANNER_IMG}
        alt="Banner"
        className="w-full h-[100vh] object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80%] max-w-4xl px-4 py-8 block">
          <p className="text-3xl md:text-5xl text-white font-bold text-center mt-[70%] tracking-wider hidden md:block">
            {`"The Best Investment on Earth is Earth" - Louis Glickman`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
