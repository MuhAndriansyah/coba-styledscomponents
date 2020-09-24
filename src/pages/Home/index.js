import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pulse from "react-reveal/Fade";
const Home = () => {
  return (
    <>
      <Pulse>
        <InfoSection {...homeObjOne} />
      </Pulse>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
