import Image from "next/image";
import MissionValuesImg from "../../../public/assets/mission-vision-values.png";
import PurposeImg from "../../../public/assets/purpose.png";
import AboutUsImg from "../../../public/assets/about-us.png";

export const QuemSomos = () => {
  return (
    <>
      <div>
        <h1>Atendimento qualificado, seguro e inclusivo</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae
          excepturi nisi!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid.
        </p>
        <div>
          <Image
            src={AboutUsImg}
            alt=""
          />
        </div>
      </div>
      <div>
        <h1>Missão, visão e valores da Lacrei Saúde</h1>
        <hr />
        <p>O que nos motiva</p>

        <Image
          src={MissionValuesImg}
          alt=""
        />
      </div>
      <div>
        <div>
          <h1> CARD 1</h1>
        </div>
        <div>
          <h1> CARD 2</h1>
        </div>
        <div>
          <h1> CARD 3</h1>
        </div>

        <div>
          <h1>Nosso propósito</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            magni?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            recusandae quia non.
          </p>
          <div>
            <Image
              src={PurposeImg}
              alt=""
            />
          </div>
          <h1>Estamos atentos a cada detalhe da sua experiência</h1>
          <hr />
          <div>
            <h1>Card 1</h1>
            <h1>Card 2</h1>
            <h1>Card 3</h1>
          </div>
        </div>
      </div>
    </>
  );
};
