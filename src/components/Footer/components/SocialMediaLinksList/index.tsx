import { socialMediasLinks } from "@/data/Footer";
import {
  ListSocial,
  SocialItens,
  SocialMediaLinks,
  SocialMediaLinksList,
} from "./styles";
import Image from "next/image";

export const SocialMediaLinkslistComponent = () => {
  return (
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
                loading="eager"
              />
            </SocialItens>
          </ListSocial>
        ))}
      </SocialMediaLinksList>
    </SocialMediaLinks>
  );
};
