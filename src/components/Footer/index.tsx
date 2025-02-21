"use client";
import Image from "next/image";
import FooterLogo from "../../../public/logos/logo-lacrei-saude2.svg";
import { FooterLinkListComponent } from "./components/FooterLinksList";
import { SocialMediaLinkslistComponent } from "./components/SocialMediaLinksList";
import { FooterContainer, FooterHr, FooterLogoImage } from "./styles";
import { ScrollUpBtn } from "./components/ScrollUpBtn";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterHr></FooterHr>
      <div>
        <FooterLogoImage>
          <Image
            src={FooterLogo}
            alt="Logo Lacrei Saúde"
            priority
            width={166}
            height={48}
          />
        </FooterLogoImage>
      </div>
      <FooterLinkListComponent />
      <SocialMediaLinkslistComponent />
      <ScrollUpBtn />
    </FooterContainer>
  );
};
