import { PropsWithChildren } from 'react';

type Props = {
  justifyContent?: 'flex-end' | 'center';
  onPress?: () => void;
};

const DefaultModalBackdrop = ({
  children,
  justifyContent = 'center',
  onPress,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className="absolute inset-0 flex items-center bg-black/25"
      style={{ justifyContent }}
      onClick={onPress}
    >
      {children}
    </div>
  );
};

export default DefaultModalBackdrop;
