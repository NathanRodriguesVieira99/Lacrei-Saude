import Link from "next/link";
import {
  QuemSomosButton,
  QuemSomosButtonContainer,
  QuemSomosButtonDiv,
} from "./styles";

export const QuemSomosBtn = () => {
  return (
    <QuemSomosButtonContainer>
      <Link href={"/QuemSomos"} aria-label="Botão Quem Somos ">
        <QuemSomosButtonDiv>
          <QuemSomosButton>Quem Somos</QuemSomosButton>
        </QuemSomosButtonDiv>
      </Link>
    </QuemSomosButtonContainer>
  );
};
