import colors from '@/global/colors';

import Icon from '../../Icon';

type CheckboxProps = {
  selected: boolean;
};

const Checkbox = ({ selected }: CheckboxProps) => {
  return (
    <div
      className="border-primary-100 inline-flex h-5 w-5 items-center justify-center rounded-[4px] border"
      style={{
        backgroundColor: selected ? colors.primary[100] : 'transparent',
      }}
    >
      {selected && (
        <Icon
          color={colors.neutral.white}
          fill={colors.neutral.white}
          name="CheckIcon"
          size={20}
          strokeWidth={1}
        />
      )}
    </div>
  );
};

export default Checkbox;
