import { Suspense, lazy } from "react";

import { HomePageContainer } from "./styles";
import { HeroComponent } from "./components/Hero";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroComponent />
    </HomePageContainer>
  );
};
