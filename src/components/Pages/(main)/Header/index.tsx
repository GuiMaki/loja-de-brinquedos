import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { HorizontalLogoImg } from '@/../public/Images';

import LoginModal from '../Admin/LoginModal';

import HeaderOption from './HeaderOption';

type HeaderProps = {
  page?: 'Home' | 'Categories' | 'Admin' | 'AboutUs';
  canGoBack?: boolean;
};

const Header = ({ page, canGoBack }: HeaderProps) => {
  const router = useRouter();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleClick = (targetPage: HeaderProps['page'], path: string) => {
    if (canGoBack) {
      return router.replace(path);
    }

    if (page === targetPage) {
      return window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return router.replace(path);
  };

  return (
    <>
      <div className="bg-primary-100 flex w-full items-center justify-between px-9 py-8">
        <Image
          alt="HorizontalLogo"
          src={HorizontalLogoImg}
          style={{ width: '10%', cursor: 'pointer' }}
          onClick={() => handleClick('Home', '/')}
        />

        <div className="flex gap-5">
          <HeaderOption
            label="Home"
            selected={page === 'Home'}
            onPress={() => handleClick('Home', '/')}
          />

          <HeaderOption
            label="Catálogo de Brinquedos"
            selected={page === 'Categories'}
            onPress={() => handleClick('Categories', '/categories')}
          />

          <HeaderOption
            label="Administração"
            selected={page === 'Admin'}
            // onPress={() => handleClick('Admin', '/admin')}
            onPress={() => setIsLoginModalOpen(true)}
          />

          <HeaderOption
            label="Sobre nós"
            selected={page === 'AboutUs'}
            onPress={() => handleClick('AboutUs', '/about-us')}
          />
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onCancel={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Header;
