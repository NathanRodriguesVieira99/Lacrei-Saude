import {
  HeroTitle,
  HeroTitleContainer,
  HorizontalLine,
  HeroParagraphContainer,
  HeroParagraph,
} from "./styles";

 const HeroTitleComponent = () => {
  return (
    <>
      <HeroTitleContainer>
        <HeroTitle>Boas-vindas à Lacrei Saúde!</HeroTitle>
      </HeroTitleContainer>
      <HorizontalLine />
      <HeroParagraphContainer>
        <HeroParagraph>
          Busque por profissão, especialidade, localidade e também por
          sexualidade ou identidade de gênero
        </HeroParagraph>
      </HeroParagraphContainer>
    </>
  );
};
export default HeroTitleComponent