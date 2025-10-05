import { useState } from 'react';

import colors from '@/global/colors';

type HeaderItemProps = {
  label: string;
  onPress: () => void;
  selected: boolean;
};

const HeaderOption = ({ label, onPress, selected }: HeaderItemProps) => {
  const [hover, setHover] = useState(false);

  const bgColor = () => {
    if (selected || hover) {
      return colors.primary[20];
    }

    return 'transparent';
  };

  const textColor = () => {
    if (selected) {
      return colors.primary[100];
    }

    if (hover) {
      return colors.neutral[80];
    }

    return colors.neutral.white;
  };

  return (
    <div
      className="cursor-pointer items-center justify-center rounded-full px-6 py-4 transition-colors"
      style={{
        backgroundColor: bgColor(),
      }}
      onClick={onPress}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className="select-none font-lexend text-xl font-semibold"
        style={{
          color: textColor(),
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default HeaderOption;
