import { Suspense } from "react";
import Image from "next/image";
import MobileCardImg from "../../../../../../public/ilustrations/InitialScreenMobileCard.svg";

import {
  ImageMobileCardContainer,
  MobileCard,
  MobileCardContainer,
  MobileCardText,
} from "./styles";

const MobileCardComponent = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MobileCardContainer>
        <MobileCard>
          <MobileCardText>
            Aqui você se conecta com pessoas profissionais que vão cuidar da sua
            saúde com empatia, inclusão e acolhimento.
          </MobileCardText>
        </MobileCard>
        <ImageMobileCardContainer>
          <Image
            src={MobileCardImg}
            alt="Imagem de um doutor"
            width={82}
            height={126}
          />
        </ImageMobileCardContainer>
      </MobileCardContainer>
    </Suspense>
  );
};

export default MobileCardComponent;
