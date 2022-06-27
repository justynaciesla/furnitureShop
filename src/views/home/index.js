import React from "react";
import WelcomePart from "../../components/molecules/welcomePart ";
import SelectedForYou from "../../components/molecules/selectedForYou";
import ColorfulHomeBlock from "../../components/molecules/colorfulHomeBlock";

const Home = () => {
  return (
    <>
      <WelcomePart />

      <SelectedForYou />

      <ColorfulHomeBlock />
    </>
  );
};

export default Home;
