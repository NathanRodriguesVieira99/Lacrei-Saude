import Image from "next/image";
import ArrowUpIcon from "../../../../../public/icons/arrow_up.svg";
import { scrollUp } from "@/data/Footer";
import { ScrollUpButton, ScrollUpButtonContainer } from "./styles";
export const ScrollUpBtn = () => {
  return (
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
  );
};
