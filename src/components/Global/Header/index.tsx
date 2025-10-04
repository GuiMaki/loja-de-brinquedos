'use client';

import Image from 'next/image';
import { useState } from 'react';

import { HorizontalLogoImg } from '@/assets';

import HeaderOption from './HeaderOption';

const Header = () => {
  const [selectedOption, setSelectedOption] = useState('Home');

  const changeOption = (option: string) => {
    if (option === selectedOption) {
      return alert(`Scroll${option}`);
    }

    return setSelectedOption(option);
  };

  return (
    <div className="bg-primary-100 flex w-full items-center justify-between px-9 py-8">
      <Image
        alt="HorizontalLogo"
        src={HorizontalLogoImg}
        style={{ width: '10%', cursor: 'pointer' }}
        onClick={() => changeOption('Home')}
      />

      <div className="flex gap-5">
        <HeaderOption
          label="Home"
          selected={selectedOption === 'Home'}
          onPress={() => changeOption('Home')}
        />

        <HeaderOption
          label="Catálogo de Brinquedos"
          selected={selectedOption === 'ToysList'}
          onPress={() => changeOption('ToysList')}
        />

        <HeaderOption
          label="Administração"
          selected={selectedOption === 'Admin'}
          onPress={() => changeOption('Admin')}
        />

        <HeaderOption
          label="Sobre nós"
          selected={selectedOption === 'AboutUs'}
          onPress={() => changeOption('AboutUs')}
        />
      </div>
    </div>
  );
};

export default Header;
