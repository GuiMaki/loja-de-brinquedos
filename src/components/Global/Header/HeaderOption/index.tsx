import colors from "@/global/colors";
import { useState } from "react";

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

    return "transparent";
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
      className="px-6 py-4 rounded-full transition-colors items-center justify-center"
      onClick={onPress}
      style={{
        backgroundColor: bgColor(),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className="text-xl cursor-default select-none"
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
