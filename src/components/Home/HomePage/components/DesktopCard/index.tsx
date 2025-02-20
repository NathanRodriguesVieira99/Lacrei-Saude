import Image from "next/image";
import DesktopCardImg from "../../../../../../public/ilustrations/InitialScreen.svg";
import {
  DesktopCard,
  DesktopCardContainer,
  ImageDesktopCardContainer,
} from "./styles";

export const DesktopCardComponent = () => {
  return (
    <DesktopCardContainer>
      <DesktopCard>
        <ImageDesktopCardContainer>
          <Image
            src={DesktopCardImg}
            alt=""
          />
        </ImageDesktopCardContainer>
      </DesktopCard>
    </DesktopCardContainer>
  );
};
