import Link from "next/link";
import {
  QuemSomosButton,
  QuemSomosButtonContainer,
  QuemSomosButtonDiv,
} from "./styles";

export const QuemSomosBtn = () => {
  return (
    <QuemSomosButtonContainer>
      <Link href={"/QuemSomos"}>
        <QuemSomosButtonDiv>
          <QuemSomosButton>Quem Somos</QuemSomosButton>
        </QuemSomosButtonDiv>
      </Link>
    </QuemSomosButtonContainer>
  );
};
