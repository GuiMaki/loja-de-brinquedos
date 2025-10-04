import React, { CSSProperties } from 'react';

import * as IconAssets from '@/assets/index'; // Import everything
import colors from '@/global/colors';

// Filter only the icon types (exclude image types)
type AllAssets = typeof IconAssets;
type IconKeys = {
  [K in keyof AllAssets]: K extends `${string}Icon` ? K : never;
}[keyof AllAssets];

export type IconT = IconKeys;

export type IconProps = {
  name: IconT;
  size?: number;
  color?: string;
  strokeWidth?: number;
  rotate?: number;
  style?: CSSProperties;
  fill?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  size,
  color = colors.neutral[100],
  strokeWidth = 2,
  rotate = 0,
  style,
  fill = 'none',
}) => {
  const SvgComponent = IconAssets[name];

  if (!SvgComponent) {
    return null;
  }

  return (
    <SvgComponent
      fill={fill}
      height={size}
      stroke={color}
      strokeWidth={strokeWidth}
      style={{
        transform: `rotate(${rotate}deg)`,
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
      width={size}
    />
  );
};

export default Icon;
