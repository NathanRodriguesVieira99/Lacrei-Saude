"use client";
import Image from "next/image";
import ArrowUpIcon from "../../../public/icons/arrow_up.svg";
import FooterLogo from "../../../public/logos/logo-lacrei-saude2.svg";
import Link from "next/link";
import { footerLinks, socialMediasLinks, scrollUp } from "../../data/Footer";
import {
  FooterContainer,
  FooterHr,
  FooterLinksList,
  LinksList,
  List,
  ListItens,
  SocialMediaLinks,
  SocialMediaLinksList,
  ListSocial,
  SocialItens,
  ScrollUpButtonContainer,
  ScrollUpButton,
  FooterLogoImage,
} from "./styles";

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
      <FooterLinksList>
        <LinksList>
          {footerLinks.map((link, index) => (
            <List key={index}>
              <ListItens href="#">{link}</ListItens>
            </List>
          ))}
        </LinksList>
      </FooterLinksList>
      <SocialMediaLinks>
        <SocialMediaLinksList>
          {socialMediasLinks.map((link, index) => (
            <ListSocial key={index}>
              <SocialItens href="#">
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={32}
                  height={32}
                />
              </SocialItens>
            </ListSocial>
          ))}
        </SocialMediaLinksList>
      </SocialMediaLinks>
      <ScrollUpButtonContainer>
        <ScrollUpButton onClick={scrollUp}>
          <Image
            src={ArrowUpIcon}
            alt="Voltar ao Topo"
            width={24}
            height={24}
          />
        </ScrollUpButton>
      </ScrollUpButtonContainer>
    </FooterContainer>
  );
};
