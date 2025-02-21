import Image from "next/image";
import AboutUsImg from "../../../../../../../public/assets/about-us.png";
import {
  HeroParagraph,
  HeroParagraphII,
  HeroParagraphIII,
  HeroParagraphContainer,
  ImageCard,
  ImageCardContainer,
  AllContainer,
} from "./styles";

export const FirstContainerCard = () => {
  return (
    <AllContainer>
      <HeroParagraphContainer>
        <HeroParagraph>
          Acreditamos que, ao possibilitar a inclusão clínica da nossa
          comunidade, transformamos o mundo.
        </HeroParagraph>
        <HeroParagraphII>
          Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito
          de oferecer a melhor experiência no acesso à profissionais da saúde
          para as pessoas LGBTQIAPN+
        </HeroParagraphII>
        <HeroParagraphIII>
          Atuamos de forma ética e embasada nas regras e diretrizes
          estabelecidas pelos órgãos de classe e regulamentadores.
        </HeroParagraphIII>
      </HeroParagraphContainer>
      <ImageCardContainer>
        <ImageCard>
          <Image
            src={AboutUsImg}
            alt="Imagem de um Homem sorrindo"
            loading="eager"
          />
        </ImageCard>
      </ImageCardContainer>
    </AllContainer>
  );
};
