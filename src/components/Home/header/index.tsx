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
import Link from "next/link";

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <Link href={"/Inicio"} aria-label="Logo Lacrei Saúde">
          <HeaderContainer>
            <HeaderLogo>
              <LogoLsContainer>
                <Image
                  src={LogoLs}
                  layout="fill"
                  alt="Logo Lacrei Saúde"
                  priority
                />
              </LogoLsContainer>
              <LogoContainer>
                <Image
                  src={Logo}
                  layout="fill"
                  alt="Logo Lacrei Saúde"
                  priority
                  />
              </LogoContainer>
            </HeaderLogo>
            <Buttons />
          </HeaderContainer>
      </Link>
    </>
  );
};

export default Header;
