import colors from '@/global/colors';

import DefaultModalButton from './DefaultModalButton';

type Props = {
  confirmText: string;
  cancelText?: string;
  handleConfirm?: () => Promise<void> | void;
  handleCancel?: () => Promise<void> | void;
  type: 'warning' | 'alert' | 'success' | 'custom';
};

const DefaultModalFooter = ({
  confirmText,
  cancelText,
  handleConfirm,
  handleCancel,
  type,
}: Props) => {
  let color: string;

  switch (type) {
    case 'warning':
      color = colors.alert.error.primary;
      break;
    case 'alert':
      color = colors.alert.warning.primary;
      break;
    case 'success':
      color = colors.alert.success.primary;
      break;
    case 'custom':
      color = colors.secondary[100];
      break;
    default:
      color = colors.alert.success.primary;
  }

  return (
    <div className="border-neutral-20 flex w-full items-center justify-end gap-2 border-t px-4 py-2">
      {cancelText && (
        <DefaultModalButton
          wired
          color={color}
          text={cancelText}
          onClick={handleCancel}
        />
      )}

      <DefaultModalButton
        color={color}
        text={confirmText}
        onClick={handleConfirm}
      />
    </div>
  );
};

export default DefaultModalFooter;
