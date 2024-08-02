/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import CommonBtn from "../common/CommonBtn";

const IntroSection = ({ showMore, showMoreFn }) => {
  return (
    <div className="flex justify-center items-center text-center p-[5%]">
      <div className="w-[80%]">
        <h1 className="text-3xl md:text-4xl mb-4 text-gray-800 font-poppins tracking-wider font-[28px]">
          Gated Community Plots in Bangalore <br />
          {/* <span className="text-3xl md:text-4xl font-[500] mb-4 text-gray-800 font-poppins"> */}
          - Find Your Dream Plot Today
          {/* </span> */}
        </h1>
        <p className="text-lg md:text-xl text-[#575757] mb-6 font-poppins tracking-wider text-[16px]">
          Come to Bangalore, the “Silicon Valley of India,” and live in complete
          luxury amidst nature. In this lively city of hustle and bustle, gated
          community plots offer serene green spaces and exquisite living like no
          other. These plots provide residents and investors with unparalleled
          tranquillity and a touch of adventure amid nature. Discover a way of
          life in Bangalore where nature and luxury blend perfectly.
          {!showMore && (
            <>
              <p className="text-lg md:text-xl text-[#575757] mb-6 mt-6 font-poppins tracking-wider text-[16px]">
                The buzz around Bangalore's real estate market is all about
                secure, upscale living, with gated communities stealing the
                spotlight. Anticipate a surge of advancements in 2024 that
                combine opulence and ease with a focus on maintaining safety at
                the forefront. Picture this: guards at every gate,
                round-the-clock CCTV surveillance, and a secure environment
                where only the invited can enter. It's the epitome of safe
                living!
              </p>{" "}
              <p className="text-lg md:text-xl text-[#575757] mt-6 font-poppins tracking-wider text-[16px]">
                However, it doesn'tend there. In these secluded neighbourhoods,
                abundant green spaces and top-notch amenities combine urban
                living with peaceful refuge. These residential havens capture
                the true essence of urban living, offering tranquillity and
                unmatched protection. Imagine a Bangalore home that elevates
                your lifestyle, where sophistication and safety converge, making
                every moment extraordinary!
              </p>
            </>
          )}
        </p>
        <CommonBtn
          btnLabel={showMore ? "Show More" : "Show Less"}
          btnClick={showMoreFn}
        />
      </div>
    </div>
  );
};

export default IntroSection;
