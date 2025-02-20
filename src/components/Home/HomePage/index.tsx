import { Suspense, lazy } from "react";

import { HomePageContainer } from "./styles";

const LazyHeroComponent = lazy(() => import("./components/Hero"));

const HomePage = () => {
  return (
    <HomePageContainer>
      <Suspense fallback={<div>Carregando...</div>}>
        <LazyHeroComponent />
      </Suspense>
    </HomePageContainer>
  );
};

export default HomePage;
