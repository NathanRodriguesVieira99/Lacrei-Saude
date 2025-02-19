"use client";
import { Buttons } from "../buttons";
import Image from "next/image";
import Logo from "../../../../public/logos/logo-lacrei-saude.svg";
import LogoLs from "../../../../public/logos/logo-ls.svg";
import {
  HeaderLogo,
  HeaderContainer,
  LogoContainer,
  LogoLsContainer,
} from "./styles";
import { GlobalStyle } from "@/styles/global";

export const Header = () => {
  return (
    <>
     <GlobalStyle />
    <HeaderContainer>
      <HeaderLogo>
        <LogoLsContainer>
          <Image
            src={LogoLs}
            fill
            alt="Logo Lacrei Saúde"
          />
        </LogoLsContainer>
        <LogoContainer>
          <Image
            src={Logo}
            fill
            alt="Logo Lacrei Saúde"
          />
        </LogoContainer>
      </HeaderLogo>
      <Buttons />
    </HeaderContainer>
    </>
   
  );
};
