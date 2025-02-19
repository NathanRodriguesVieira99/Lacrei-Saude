import Image from "next/image";
import HelpIconMobile from "../../../../public/icons/help_mobile.svg";
import profileArrowDown from "../../../../public/icons/arrow_down.svg";
import profilePic from "../../../../public/icons/profile_pic.png";

import {
  HeaderItens,
  HeaderItensContainer,
  Icons,
  ProfileContainer,
  ProfileButton,
  ProfilePic,
  MobileButtonContainer,
  MobileButton,
  MobileButtonIcon,
  DesktopButtonContainer,
  DesktopButton,
  DesktopButtonIconText,
} from "./styles";

export const Buttons = () => {
  return (
    <HeaderItensContainer>
      <HeaderItens>
        <Icons>
          <MobileButtonContainer>
            <MobileButton>
              <MobileButtonIcon>
                <Image
                  src={HelpIconMobile}
                  alt="Ajuda"
                  width={24}
                  height={24}
                />
              </MobileButtonIcon>
            </MobileButton>
            <DesktopButtonContainer>
              <DesktopButton>
                <DesktopButtonIconText>Ajuda</DesktopButtonIconText>
              </DesktopButton>
            </DesktopButtonContainer>
          </MobileButtonContainer>

          <ProfileButton>
            <ProfileContainer>
              <ProfilePic>
                <Image
                  src={profilePic}
                  alt="Foto de perfil"
                  width={20}
                  height={21}
                  style={{ borderRadius: "50%" }}
                />
              </ProfilePic>
              <Image
                src={profileArrowDown}
                alt="Acessar Perfil"
                width={24}
                height={24}
              />
            </ProfileContainer>
          </ProfileButton>
        </Icons>
      </HeaderItens>
    </HeaderItensContainer>
  );
};
