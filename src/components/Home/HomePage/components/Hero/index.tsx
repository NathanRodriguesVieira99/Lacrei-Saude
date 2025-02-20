import { QuemSomosBtn } from "@/components/QuemSomos/components/QuemSomosBtn";
import { DesktopCardComponent } from "../DesktopCard";
import { MobileCardComponent } from "../MobileCard";
import { MobileInputComponent } from "../MobileInput";
import { HeroTitleComponent } from "./components/HeroTitle";
import { HeroContainer } from "./styles";



export const HeroComponent = () => {
  return (
    <HeroContainer>
      <HeroTitleComponent/>
      <QuemSomosBtn />
      <MobileInputComponent />
      <MobileCardComponent />
      <DesktopCardComponent />
    </HeroContainer>
  );
};
