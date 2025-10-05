/* eslint-disable react/jsx-newline */
import Image from 'next/image';

import { VerticalLogoImg } from '@/../public/Images';
import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';

const Footer = () => {
  const horarios = [
    { dia: 'Segunda-Feira', horario: '07:00–23:00' },
    { dia: 'Terça-Feira', horario: '07:00–23:00' },
    { dia: 'Quarta-Feira', horario: '07:00–23:00' },
    { dia: 'Quinta-Feira', horario: '07:00–23:00' },
    { dia: 'Sexta-Feira', horario: '07:00–23:00' },
  ];

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-primary-100 flex items-center justify-center px-[116px] py-8">
      <div className="flex w-full flex-col gap-3">
        <div className="flex cursor-default justify-center gap-10">
          <Image
            alt="VerticalLogoImg"
            src={VerticalLogoImg}
            style={{ width: '13%', objectFit: 'contain' }}
          />

          <div className="flex flex-col items-center justify-start gap-2 p-3">
            <span className="text-secondary-100 text-center font-lexend text-xl font-bold">
              Contatos
            </span>

            <span className="font-roboto text-base font-light text-black">
              +55 (11) 95968-3740
            </span>

            <span className="font-roboto text-base font-light text-black">
              contato@toybag.com.br
            </span>
          </div>

          <div className="flex flex-col items-center justify-start gap-2 p-3">
            <span className="text-secondary-100 text-center font-lexend text-xl font-bold">
              Políticas
            </span>

            <span className="text-center font-roboto text-base font-bold text-black underline">
              Termos de Uso
            </span>

            <span className="text-center font-roboto text-base font-bold text-black underline">
              Política de Privacidade
            </span>
          </div>

          <div className="flex flex-col items-center justify-start gap-2 p-3">
            <span className="text-secondary-100 text-center font-lexend text-xl font-bold">
              Redes Sociais
            </span>

            <div className="flex gap-2">
              <span className="font-roboto text-base font-light text-black">
                Meta
              </span>

              <Icon color={colors.neutral.black} name="MetaIcon" size={24} />
            </div>

            <div className="flex gap-2">
              <span
                className="cursor-pointer font-roboto text-base font-light text-black"
                onClick={() =>
                  openInNewTab(
                    'https://www.linkedin.com/in/guilherme-makiyama-7bb260273',
                  )
                }
              >
                Linkedin
              </span>

              <Icon
                color={colors.neutral.black}
                name="LinkedinIcon"
                size={24}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-2 p-3">
            <span className="text-secondary-100 font-lexend text-xl font-bold">
              Horário de Atendimento
            </span>

            <div className="flex flex-col self-center">
              {horarios.map(({ dia, horario }) => (
                <span
                  key={dia}
                  className="justify-center font-roboto text-base font-light text-black"
                >
                  {dia}: {horario}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-secondary-100 flex items-center justify-between border-t p-2">
          <span className="font-roboto text-base font-light text-black">
            @2025 ToyBag. Todos os direitos reservados.
          </span>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Icon
                color={colors.neutral.black}
                fill={colors.neutral.black}
                name="AddressIcon"
                size={24}
              />

              <span className="font-roboto text-base font-light text-black">
                Endereço:
              </span>
              <span
                className="cursor-pointer font-roboto text-base font-light text-black underline"
                onClick={() =>
                  openInNewTab(
                    'https://www.google.com/maps/place/Fatec+Guarulhos+-+Faculdade+de+Tecnologia+de+Guarulhos/@-23.4547808,-46.50147,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce8ba886c92b1f:0x9f912cd236f2d80!8m2!3d-23.4547808!4d-46.50147!16s%2Fg%2F11fsxqx6yh?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
                  )
                }
              >
                {' '}
                R. Cristóbal Cláudio Elilo, 88 - Parque Cecap, Guarulhos - SP,
                07190-065{' '}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                color={colors.neutral.black}
                fill={colors.neutral.black}
                name="CNPJIcon"
                size={24}
              />

              <span className="font-roboto text-base font-light text-black">
                CNPJ: 12.345.678/0009-10{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
