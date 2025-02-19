import type { SocialMediasLinks } from "@/interfaces/socialMediasLinks";

export const footerLinks: string[] = [
  "Lacrei Saúde",
  "Lacrei Pessoas Profissionais",
  "Política de Privacidade",
  "Termos de Uso",
];

export const socialMediasLinks: SocialMediasLinks[] = [
  { src: "icons/facebook.svg", alt: "Link para o Facebook" },
  { src: "icons/instagram.svg", alt: "Link para o Instagram" },
  { src: "icons/linkedin.svg", alt: "Link para o LinkedIn " },
  { src: "icons/email.svg", alt: "Link para o E-mail" },
];

export const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
