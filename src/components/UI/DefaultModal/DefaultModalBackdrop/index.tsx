import { PropsWithChildren, useEffect } from 'react';

type Props = {
  justifyContent?: 'flex-end' | 'center';
  onPress?: () => void;
};

const DefaultModalBackdrop = ({
  children,
  justifyContent = 'center',
  onPress,
}: PropsWithChildren<Props>) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center bg-black/25"
      style={{ justifyContent }}
      onClick={onPress}
    >
      {children}
    </div>
  );
};

export default DefaultModalBackdrop;
