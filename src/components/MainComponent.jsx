import { useState } from "react";
import Banner from "./Banner";
import Header from "./Header";
import IntroSection from "./IntroSection";

const MainComponent = () => {
  const [showMore, setShowMore] = useState(true);

  const showMoreFn = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="bg-[#f4f8fb]">
      <Header />
      <Banner />
      <IntroSection
        showMore={showMore}
        setShowMore={setShowMore}
        showMoreFn={showMoreFn}
      />
    </div>
  );
};

export default MainComponent;
