import { lazy, Suspense } from "react";
import { QuemSomosBtn } from "@/components/QuemSomos/components/QuemSomosBtn";
import { MobileInputComponent } from "../MobileInput";
import HeroTitleComponent from "./components/HeroTitle";
import { HeroContainer } from "./styles";

const LazyDesktopCardComponent = lazy(() => import("../DesktopCard"));
const LazyMobileCardComponent = lazy(() => import("../MobileCard"));

const HeroComponent = () => {
  return (
    <>
      <HeroContainer>
        <HeroTitleComponent />
        <QuemSomosBtn />
        <MobileInputComponent />
        <Suspense fallback={<div>Carregando...</div>}>
          <LazyDesktopCardComponent />
        </Suspense>
      </HeroContainer>
      <Suspense fallback={<div>Carregando...</div>}>
        <LazyMobileCardComponent />
      </Suspense>
    </>
  );
};

export default HeroComponent;
