import colors from '@/global/colors';

import Icon, { TIcon } from '../../Icon';

type Props = {
  title: string;
  type: 'warning' | 'alert' | 'success' | 'custom';
};

const DefaultModalHeader = ({ title, type }: Props) => {
  let iconName: TIcon;
  let color: string;

  switch (type) {
    case 'warning':
      iconName = 'WarningIcon';
      color = colors.alert.error.primary;
      break;
    case 'alert':
      iconName = 'AlertIcon';
      color = colors.alert.warning.primary;
      break;
    case 'success':
      iconName = 'SuccessIcon';
      color = colors.alert.success.primary;
      break;
    case 'custom':
      iconName = 'AlertIcon';
      color = colors.secondary[100];
      break;
    default:
      iconName = 'SuccessIcon';
      color = colors.alert.success.primary;
  }

  if (type) {
    return (
      <div className="border-neutral-20 flex w-full cursor-default items-center justify-center gap-2 border-b p-4">
        <Icon color={color} name={iconName} size={24} />

        <span className="font-lexend text-xl font-normal" style={{ color }}>
          {title}
        </span>
      </div>
    );
  }
};

export default DefaultModalHeader;
