import Loader from '@/components/UI/Loader';
import colors from '@/global/colors';
import { useDisableDelay } from '@/hooks/common';

type Props = {
  text: string;
  onClick?: () => void | Promise<void>;
  color: string;
  wired?: boolean;
};

const DefaultModalButton = ({ text, onClick, color, wired }: Props) => {
  const { executeWithDelay, isLoading } = useDisableDelay();

  const handleOnClick = () => {
    if (onClick) {
      executeWithDelay(onClick);
    }
  };

  return (
    <button
      className={`border-alert-warning-primary relative flex min-w-[100px] items-center justify-center rounded-lg border px-2 py-1.5 ${!isLoading && 'hover:bg-black/5'}`}
      disabled={isLoading}
      style={{
        cursor: isLoading ? 'default' : 'pointer',
        backgroundColor: wired ? 'transparent' : color,
      }}
      onClick={handleOnClick}
    >
      <span
        className="font-roboto text-base font-medium"
        style={{ color: wired ? color : colors.neutral.white }}
      >
        {text}
      </span>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Loader color={colors.primary[100]} />
        </div>
      )}
    </button>
  );
};

export default DefaultModalButton;
