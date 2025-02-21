import Image from "next/image";
import {
  MobileButton,
  MobileInput,
  MobileInputButton,
  MobileInputButtonContainer,
  MobileInputComponente,
  MobileInputContainer,
} from "./styles";
import SearchIcon from "../../../../../../public/icons/search.svg";

export const MobileInputComponent = () => {
  return (
    <MobileInputContainer>
      <MobileInput>
        <MobileInputComponente
          type="text"
          placeholder="Ex.: médica trans ou médico gay"
        />
      </MobileInput>
      <MobileInputButtonContainer>
        <MobileInputButton>
          <Image
            src={SearchIcon}
            alt="Pesquisar"
            loading="eager"
          />
        </MobileInputButton>
      </MobileInputButtonContainer>
    </MobileInputContainer>
  );
};
