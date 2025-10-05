'use client';

import { DefaultImg, DoniImg, WillImg } from '@/../public/Images';
import PersonCard from '@/components/Pages/(main)/AboutUs/PersonCard';
import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header page="AboutUs" />

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-center py-8">
          <span className="text-neutral-80 flex text-center font-lexend text-4xl font-medium">
            Sobre a Equipe
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-1 items-start gap-10 px-[200px]">
            <PersonCard
              key="will"
              image={WillImg || DefaultImg}
              name="Willian Zhang Deng"
              RA="123456788900"
            />

            <PersonCard
              key="doni"
              image={DoniImg || DefaultImg}
              name="Donizeti Junior Nobrega Megiati"
              RA="123456788900"
            />

            <PersonCard
              key="maka"
              image={WillImg || DefaultImg}
              name="Guilherme Makiyama"
              RA="123456788900"
            />

            <PersonCard
              key="kenzo"
              image={DoniImg || DefaultImg}
              name="Guilherme Kenzo Sino Manzato"
              RA="123456788900"
            />

            <PersonCard
              key="vini"
              image={WillImg || DefaultImg}
              name="Vinicius José Alabarce Batistela"
              RA="123456788900"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
